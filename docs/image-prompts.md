# Machine image prompts

Use these to generate consistent product photos for all 20 machines.
Drop the generated file at `public/machines/<slug>.jpg` and the site
picks it up automatically (see `public/machines/README.md`).

These prompts work across **Midjourney, DALL-E 3, Imagen 3, Flux, and
Stable Diffusion**. No tool-specific syntax — just copy the full block
into the chat or prompt field.

---

## House style (every prompt inherits this)

The opening paragraph of every prompt below is identical. It's the
**style spine** — keep it word-for-word so the 20 final images feel like
they belong to one catalog. Only change it if you want to re-shoot the
whole catalog in a new style.

> **STYLE BLOCK** (copy this verbatim into every prompt):
>
> Industrial product photography of a single piece of ceramic-factory
> machinery, photographed in a working Thai workshop. Real machine, not
> a render. Medium-format photograph, soft natural directional light
> from upper left, shallow depth of field, sharp on the machine, slight
> background blur. Cool steel and graphite color palette with subtle
> warm amber highlights from overhead workshop lamps. Concrete shop
> floor, slight oil staining, mild dust. Background is a real factory
> wall with painted steel plates, electrical conduit, faint shadows of
> other equipment, no signage. Three-quarter front angle, machine
> centered, framed slightly above eye level. 4:3 aspect ratio. Subtle
> film grain. Photo-realistic, sturdy and confident, no logos, no text
> overlays, no people, no rendered CGI look, no glossy marketing
> finish, no rainbow palette.

---

## Negative prompt (every machine)

For tools that accept negatives separately (Stable Diffusion, Flux):

> logos, brand names, watermarks, text, captions, people, hands,
> rendered 3D look, CGI, cartoon, illustration, painted, plastic toy,
> rainbow colors, neon, pink, purple, glossy SaaS aesthetic, white
> studio backdrop, isolated product shot, infographic arrows,
> measurement annotations, blueprint overlay

For DALL-E / Midjourney / Imagen, paste the negatives at the end of the
prompt as: `Do not include: logos, text, people, rendered CGI look,
white studio backdrop, infographic arrows.`

---

## Per-machine prompts

Each section below is one machine. The full prompt is the STYLE BLOCK
(above) + the machine paragraph. To keep things copy-paste friendly,
the complete combined prompt is repeated under each machine in a code
block — that's the only thing you need to grab.

Order matches `src/data/machines.ts` so you can work through them in
sequence.

---

### 01. Ball Mill — `ball-mill.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a horizontal rotating ceramic ball mill. Steel cylindrical drum approximately 1.5 meters in diameter and 2 meters long, mounted on two heavy welded steel support frames bolted to the concrete floor. Drum surface is brushed dark grey steel with vertical reinforcement ribs and bolted end flanges. End caps are circular with central bearing housings, each bearing visible as a thick black hub. A loading hatch with a small handle sits at the top center of the drum. Drive motor at the right side connects to the drum via a thick rubber V-belt and a smaller pulley. No visible grinding balls. Industrial yellow safety paint on the support frame edges. Power conduit running along the floor.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 02. Filter Press — `filter-press.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a horizontal plate-and-frame filter press. A long row of approximately twenty thick square filter plates, each about 800mm x 800mm, stacked vertically face-to-face like a closed accordion, mounted between two heavy steel end-plates on a long horizontal steel frame. The plates are dark grey cast iron with raised drainage grooves visible on the visible edge. A hydraulic ram on the right side compresses the stack, with a large hydraulic cylinder painted industrial blue and a pressure gauge mounted on a small panel. Drip tray below catches water. Pipework runs along the back of the frame in galvanized steel. A small operating wheel on the right end of the ram. Solid steel floor mounts. The whole machine has the dense, heavy presence of high-pressure equipment.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 03. Grinder — `grinder.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: an industrial raw-material grinder, vertical-feed style. A tall steel hopper at the top funnels material into a central grinding chamber. The grinding chamber is a heavy cylindrical housing approximately 600mm wide, with a side-mounted electric motor connected via a flange and coupling. A discharge chute angles down to the right toward the floor. The frame is heavy welded steel painted dark grey, with a yellow-painted control panel on the left side showing a single large red emergency stop button and a black start switch. Output is a small pile of fine ground material on the floor beside the chute. The machine stands roughly 1.8 meters tall, bolted to the concrete.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 04. Magnetic Sieve — `magnetic-sieve.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a magnetic separator sieve for ceramic slip. A cylindrical stainless steel housing about 400mm in diameter mounted at slip-flow height on a tubular stainless support frame. The housing has a removable top lid with quick-release clamps. Inlet pipe on the left feeds slip in, outlet pipe on the right drains it out, both stainless steel sanitary fittings. Inside (slightly visible through an open inspection port) a grid of magnetic rods. A small drip tray below. The frame stands about 1.2 meters tall on adjustable feet. Everything is brushed stainless steel — cleaner and shinier than the heavier black-iron machines in this catalog — placed against the same dark workshop wall background to keep visual cohesion.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 05. Hydraulic Press — `hydraulic-press.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a vertical hydraulic press, H-frame style. Two massive vertical steel columns rise from a flat steel bed, joined at the top by a thick horizontal crown. A large hydraulic cylinder hangs from the crown, with a polished chrome ram extending downward toward a removable die platen on the bed. The frame is painted industrial dark grey with yellow safety stripes at the corners. A hydraulic power pack with motor and fluid reservoir sits to the right, connected via braided high-pressure hoses. Pressure gauge and control valves mounted on the right column at operator height. The machine stands about 2.5 meters tall, dense and heavy.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 06. De-airing Pug Mill — `pug-mill.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a horizontal de-airing pug mill for clay extrusion. A long horizontal stainless steel barrel about 1.5 meters long and 300mm in diameter sits on a heavy welded steel frame. The barrel has a top-loading hopper at the rear-left, and a circular extrusion die at the front-right where a smooth column of grey clay would emerge. Between the two chambers, a vacuum housing with a small vacuum pump visible underneath. A motor at the back drives the auger via belt and pulley with a guard. Cleanliness is important — the stainless barrel is wiped clean, with only the extrusion die showing fresh clay residue. Control panel on the side has a vacuum gauge, motor switch, and emergency stop.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 07. Blunger / Slip Mixer — `blunger.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a slip blunger — a tall cylindrical mixing tank for ceramic slurry. A vertical stainless steel tank approximately 1.5 meters tall and 1.2 meters in diameter sits on three stout legs. A central drive shaft runs down from a top-mounted gearbox and motor, with a large multi-blade impeller submerged in the tank (slightly visible through the partially open top). The tank exterior is brushed stainless steel with welded reinforcement bands. A bottom drain valve at the front. A small ladder welded to the side. Light blue-grey slurry residue visible at the top edge of the tank, suggesting recent use. The motor on top is dark grey cast iron with a yellow safety guard over the coupling.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 08. Jigger / Roller-Head Machine — `jigger-roller.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a jigger / roller-head forming machine for ceramic tableware. A vertical workstation about 1.5 meters tall on a heavy painted steel base. The center features a horizontal rotating spindle (currently still) where a plaster mould would mount, with a small white plaster bowl mould visible on the spindle. Above the spindle, a counterweighted swing arm holds a polished metal roller-head profile tool that swings down to shape clay against the mould. Foot pedal visible at the base for spindle activation. Drip pan around the base. A small bench surface to the right at hip height. The whole assembly is painted industrial dark grey with the moving parts in polished steel. Calm, ready-to-use feel.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 09. Ram Press — `ram-press.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a ceramic ram press. Visually similar to a small H-frame hydraulic press but oriented for clay forming: two heavy vertical columns rise from a steel bed, joined at the top by a horizontal crown. A hydraulic cylinder hangs from the crown, with a polished ram extending down to a square plaster die mounted on the bed. The die surface shows a square-plate negative impression. Below the die, a small clay slab sits on the platen ready to be pressed. The frame is painted dark grey with yellow corner stripes. A control panel on the right shows a pressure gauge, two large valve handles, and a green start button. Slightly smaller and more compact than the general hydraulic press, with the die area as the visual focus.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 10. Vibrating Screen — `vibrating-screen.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a circular vibrating screen separator. A round stainless steel housing about 900mm in diameter sits on three sloped springs mounted to a heavy painted steel base. The top section has a circular feed cover with a central inlet. Two side discharge spouts angle outward at different heights — top spout for oversize, lower spout for fines. A vibrating motor with eccentric weights mounted underneath the screen deck, with the motor housing painted yellow. Stainless steel mesh visible just inside the housing edge. Power cable in conduit running to a small switch box mounted on a nearby column. Compact footprint, about 1.2 meters tall, vibration-isolated by the springs.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 11. Mixer — `mixer.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a horizontal ribbon-blender industrial mixer. A long horizontal trough roughly 1.8 meters long and 700mm wide, painted dark grey, mounted on a heavy steel frame at waist height. The top of the trough has two hinged inspection covers; one is partially open showing a stainless steel ribbon-shaped agitator inside. A large electric motor with a gearbox sits at the left end, coupled to the agitator shaft via a guarded flexible coupling. A pneumatic-actuated slide-gate discharge at the bottom center. Control panel on the right end with a green start button, red stop, and a small digital timer display. Industrial, stout, clearly meant for batch mixing.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 12. Jaw Crusher — `jaw-crusher.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a heavy-duty jaw crusher. A massive welded steel body, about 1.5 meters tall and 1 meter wide, with a wide rectangular feed opening at the top showing the two jaw plates inside — one fixed vertical, one swinging at an angle. The jaw surfaces are textured with toothed manganese steel liners. A large flywheel on the right side, painted industrial dark grey with yellow safety markings, driven by a thick V-belt from a side-mounted electric motor. Heavy spring-loaded toggle mechanism at the bottom. The whole machine bolted to the concrete floor on a thick steel sub-base. A small pile of crushed rock fragments at the discharge below. Looks unmistakably heavy and powerful.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 13. Hammer Mill — `hammer-mill.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a hammer mill for impact crushing. A horizontal cylindrical housing about 700mm in diameter and 900mm wide, mounted on a heavy steel base, painted dark grey. A feed hopper at the top funnels material in. Inside (visible through the open inspection door on the front) a horizontal rotor with multiple swinging hammers, and a curved bottom screen. A large electric motor on the right side connects via direct coupling to the rotor shaft, with a yellow guard over the coupling. Discharge chute angles down to the front-right showing fine ground material. The inspection door has heavy hinges and a clamp latch. Robust, blunt, no-nonsense visual.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 14. Glaze Spray Booth — `glaze-spray-booth.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a glaze spraying booth with a water-curtain back wall. A large open-fronted stainless steel cabinet about 1.8 meters wide, 1.5 meters tall, and 900mm deep. The back wall has a continuous thin sheet of water flowing down to capture glaze overspray, collected in a stainless trough at the bottom. A circular turntable on a pedestal in the center of the booth where ceramic ware would sit for spraying. An overhead extraction hood above with ductwork rising to the ceiling. Side LED work-light. Stainless steel everywhere, slightly wet, with a very faint hint of glaze residue at the bottom corners. Booth opening is generously wide for arm access. Quiet, ready-to-use industrial spray station.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 15. Conveyor System — `conveyor.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a horizontal belt conveyor section for a ceramic production line. A straight conveyor about 3 meters long and 600mm wide, painted dark grey, with a black rubber belt running over end rollers and a steel deck. Side guides along the length. Two pairs of adjustable-height legs on the floor. A geared motor at one end drives the head roller with a small chain guard. A pneumatic stopper near the discharge end. The belt is empty, clean. Side-mounted small control box with start/stop. The framing emphasizes the length and the simple, repeatable mechanical clarity. A second section of conveyor barely visible in the soft background to suggest a real production line.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 16. Spray Dryer — `spray-dryer.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a vertical industrial spray dryer. A tall cylindrical stainless steel drying chamber roughly 2.5 meters in diameter and 3.5 meters tall with a conical bottom, mounted on a heavy painted steel support structure. Top of the chamber has a feed nozzle/atomizer assembly accessible by a steel ladder and small platform with handrails. Hot-air inlet ducting enters horizontally near the top, insulated and wrapped in stainless cladding. Cyclone separator visible to the right, connected by ducting, with a powder collection container at its base. The conical bottom of the main chamber discharges into another collection container. Pipework, valves, and a control cabinet on the floor at the right. Industrial scale, dominating presence in the frame.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 17. Drying Chamber — `dryer-chamber.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a walk-in industrial drying chamber / drying oven. A large insulated cabinet roughly 2 meters wide, 2 meters tall, and 1.5 meters deep with a single heavy hinged door on the front-left side, partially open. The exterior is dark grey painted steel; interior visible through the open door is bright stainless steel with multiple horizontal shelf rails. Insulation thickness visible in the door cross-section. A digital temperature controller mounted on the front-right with a clear LCD display showing a temperature reading and set point. A small viewing window in the door. Air-circulation ductwork on the top. Sturdy adjustable feet. Heat shimmer slightly visible above the unit suggesting it's running warm.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 18. Dry / Dust Press — `dust-press.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a hydraulic dust press for compacting dry powder into tiles or refractory blocks. Visually similar to the hydraulic press but with a wider, lower posture: two short vertical columns rise from a thick flat bed, joined by a heavy crown carrying a hydraulic cylinder. The ram pushes down into a powder-filled die cavity on the bed. A small powder hopper on a sliding arm above the die feeds dry powder into the cavity between cycles. A few pressed square tiles stacked neatly on a side tray showing finished output. Painted dark grey with yellow corner stripes. Control panel on the side with pressure gauge and cycle controls. Slight dust haze at the base of the machine.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 19. Kiln — `kiln.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a medium-sized shuttle kiln for ceramic firing. A cube-shaped insulated structure about 2 meters on each side, with a heavy hinged front door currently closed. The exterior is dark grey painted steel with visible insulation panels and structural ribbing. A digital temperature control panel mounted on the front-right with a large LCD display showing temperature. A small viewing port (peephole) in the door, currently glowing a very faint warm amber as if the kiln is heating up. A few stacks of bisque ware on a steel cart beside the kiln ready to be loaded next cycle. Burner assembly or heating element conduit visible at the back. The whole machine feels substantial, with a slight warmth/glow giving away its purpose.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

### 20. Potter's Wheel — `potters-wheel.jpg`

```
Industrial product photography of a single piece of ceramic-factory machinery, photographed in a working Thai workshop. Real machine, not a render. Medium-format photograph, soft natural directional light from upper left, shallow depth of field, sharp on the machine, slight background blur. Cool steel and graphite color palette with subtle warm amber highlights from overhead workshop lamps. Concrete shop floor, slight oil staining, mild dust. Background is a real factory wall with painted steel plates, electrical conduit, faint shadows of other equipment, no signage. Three-quarter front angle, machine centered, framed slightly above eye level. 4:3 aspect ratio. Subtle film grain. Photo-realistic, sturdy and confident, no logos, no text overlays, no people, no rendered CGI look, no glossy marketing finish, no rainbow palette.

Subject: a heavy-duty electric potter's wheel. A sturdy single-pedestal wheel with a circular cast-aluminum wheelhead approximately 35cm in diameter sitting at hip height. The wheelhead is wet with clay slip; a small mound of grey wedged clay sits ready at the center. A splash pan around the wheelhead. The base is heavy painted dark grey steel, with a variable-speed foot pedal on the floor. Side-mounted control panel with a speed dial and on/off switch. A small wooden tool rack to the right holds throwing tools — wooden ribs, a wire cutter, calipers. Despite the workshop setting, this is the cleanest piece of equipment in the catalog: studio-ready, not a factory beast.

Do not include: logos, text, people, rendered CGI look, white studio backdrop, infographic arrows.
```

---

## Tips for keeping the catalog consistent

1. **Generate one machine first, evaluate before doing all 20.** Pick a
   complex one (Filter Press or Spray Dryer). If the style block isn't
   landing the look you want, tune the STYLE block at the top of this
   file before running the other 19.

2. **Use the same seed across all 20 if your tool supports it.** In
   Midjourney `--seed 12345`, in Stable Diffusion the seed field. This
   locks lighting and background tone variability.

3. **If results feel too "render-y" or "stock":** add `shot on Hasselblad
   H6D, 80mm lens, f/4` to the style block. Real-camera vocabulary
   pulls models toward photo realism.

4. **If colors creep into rainbow / SaaS territory:** strengthen the
   negative prompt — add `colorful, vibrant, saturated, marketing
   poster, infographic`.

5. **If machines come out floating or context-less:** the prompts above
   all specify "concrete shop floor" and "real factory wall" — if the
   model ignores this, prepend `wide shot showing floor and back wall`
   to the subject paragraph.

6. **Final check before saving:** the image must work as a 4:3 thumbnail
   at ~400px wide. If the machine is too small in the frame, regenerate
   with `centered, fills 70% of frame` added.

7. **Save as JPG, ~1200×900px, under 400 KB.** Bigger files don't
   help — the site sizes them down anyway.

8. **File naming:** must match the machine's slug exactly. See
   `public/machines/README.md` for the full list.
