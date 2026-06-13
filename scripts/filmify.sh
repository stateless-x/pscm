#!/usr/bin/env bash
# filmify.sh — turn too-clean AI images into believable real-camera captures.
#
# Why this exists: image generators produce pristine, over-sharp, perfectly
# lit images. That "AI sheen" survives any prompt instruction to be soft/noisy,
# because the model degrades a fundamentally perfect render — which reads as a
# filter, not a real photo. This applies ACTUAL signal degradation (the same
# things a real camera + JPEG pipeline do) so the sheen breaks for real.
#
# Pipeline (order matters — mimics a real capture/processing chain):
#   1. slight downscale then upscale   -> kills AI micro-detail / over-sharpness
#   2. chromatic aberration (R/B shift)-> real lens fringing at edges
#   3. luma + subtle chroma grain      -> film/sensor grain (Fuji-ish texture)
#   4. very mild gaussian blur         -> defeats the razor-sharp everywhere look
#   5. gentle vignette                 -> real lens light falloff
#   6. muted "Classic Chrome"-ish curve-> desaturate + lift shadows a touch
#   7. double JPEG recompression       -> real compression artifacts
#
# Every stage is dialed LOW so it stays a good photo, just not an AI one.
# Tune with env vars (see DEFAULTS). Re-run freely; it never edits originals.
#
# Usage:
#   ./scripts/filmify.sh input.jpg                 # -> input.film.jpg
#   ./scripts/filmify.sh in.jpg out.jpg            # explicit output
#   ./scripts/filmify.sh raw/*.png                 # batch -> *.film.jpg next to each
#   GRAIN=12 BLUR=0.6 ./scripts/filmify.sh in.jpg  # override strength
#
# Requires: ffmpeg (already on this machine). No installs.

set -euo pipefail

# ---- DEFAULTS (override via env) ----
GRAIN="${GRAIN:-8}"        # film/sensor grain strength. 4=subtle 8=clear 16=heavy
BLUR="${BLUR:-0.4}"        # softening sigma. 0.3=barely 0.4=natural 0.8=soft
CHROMA="${CHROMA:-1.6}"    # chromatic aberration px shift. 0=off 1.6=natural 3=strong
SAT="${SAT:-0.88}"         # saturation. <1 mutes (Fuji Classic Chrome ~0.85-0.92)
VIGNETTE="${VIGNETTE:-1}"  # 1=on 0=off
SOFTSCALE="${SOFTSCALE:-0.85}" # downscale factor before upscale. lower=more detail-kill
JPEGQ="${JPEGQ:-6}"        # ffmpeg mjpeg q (2=best..31=worst). 5-8 = real-camera artifacts
# -------------------------------------

filmify_one() {
  local in="$1" out="$2"

  # Probe dimensions so the down/up scale lands on the original size.
  local dims w h
  dims=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height \
           -of csv=s=x:p=0 "$in")
  w="${dims%x*}"; h="${dims#*x}"
  local dw dh
  dw=$(awk "BEGIN{printf \"%d\", $w*$SOFTSCALE}")
  dh=$(awk "BEGIN{printf \"%d\", $h*$SOFTSCALE}")

  # Build the chromatic-aberration shift via rgbashift, grain via noise,
  # vignette via the vignette filter, color via eq/curves.
  local vignette_f=""
  [ "$VIGNETTE" = "1" ] && vignette_f="vignette=PI/5,"

  # Filter chain.
  #  - scale down then up (SOFTSCALE) softens AI micro-detail
  #  - rgbashift = chromatic aberration
  #  - noise adds grain (alls=strength, allf=t+u temporal/uniform-ish)
  #  - gblur = mild overall softness
  #  - eq desaturates + tiny contrast for Classic-Chrome muting
  #  - vignette = lens falloff
  local vf="scale=${dw}:${dh}:flags=area,scale=${w}:${h}:flags=bicubic,\
rgbashift=rh=-${CHROMA}:bh=${CHROMA},\
noise=alls=${GRAIN}:allf=t+u,\
gblur=sigma=${BLUR},\
eq=saturation=${SAT}:contrast=1.04:brightness=0.01:gamma=1.02,\
${vignette_f}format=yuvj420p"

  # First JPEG pass (the "in-camera" encode).
  local tmp; tmp="$(mktemp -t filmify).jpg"
  ffmpeg -y -loglevel error -i "$in" -vf "$vf" -q:v "$JPEGQ" "$tmp"

  # Second JPEG pass (the "saved/re-shared" recompress) at slightly better q,
  # so we stack two generations of artifacts like a real reused file.
  ffmpeg -y -loglevel error -i "$tmp" -q:v "$((JPEGQ>3 ? JPEGQ-2 : JPEGQ))" "$out"
  rm -f "$tmp"

  local sz; sz=$(du -h "$out" | cut -f1)
  echo "  ✓ $out  (${w}x${h}, ${sz})"
}

if [ "$#" -lt 1 ]; then
  grep '^#' "$0" | sed 's/^# \{0,1\}//' | head -40
  exit 1
fi

# Single explicit out: filmify.sh IN OUT  (two args, second not an image glob)
if [ "$#" -eq 2 ] && [[ "$2" != *.png && "$2" != *.jpg && "$2" != *.jpeg && "$2" != *.webp || ! -e "$2" ]] && [ ! -e "$2" ]; then
  echo "Filmifying 1 image (GRAIN=$GRAIN BLUR=$BLUR CHROMA=$CHROMA SAT=$SAT):"
  filmify_one "$1" "$2"
  exit 0
fi

echo "Filmifying $# image(s)  (GRAIN=$GRAIN BLUR=$BLUR CHROMA=$CHROMA SAT=$SAT JPEGQ=$JPEGQ):"
for in in "$@"; do
  [ -e "$in" ] || { echo "  ! skip (not found): $in"; continue; }
  base="${in%.*}"
  out="${base}.film.jpg"
  filmify_one "$in" "$out"
done
