# Machine photos

Drop machine photos here when you have them.

## Filenames

Use the machine **slug** as the filename, e.g.:

- `ball-mill.jpg` for the Ball Mill
- `filter-press.jpg` for the Filter Press
- `magnetic-sieve.jpg` for the Magnetic Sieve

(Slugs are defined in `src/data/machines.ts` — see the `slug` field.)

## Format

- JPG or WebP. Keep under ~400 KB for fast load.
- **Landscape, 4:3 aspect** (e.g. 1600×1200, 1200×900, 800×600).
  The component locks 4:3, so other ratios will be cropped.
- Photographed on a plain or shop-floor background. Avoid logos that
  aren't yours.

## Wiring a photo to its machine

Open `src/data/machines.ts`, find the machine, change its `images: []`
field:

```ts
images: ["/machines/ball-mill.jpg"],
```

That's all. `MachineImage` swaps the gradient placeholder for the real
photo automatically, on every card and the product detail hero.

## Multiple photos per machine

Append more paths to the array:

```ts
images: [
  "/machines/ball-mill.jpg",
  "/machines/ball-mill-detail.jpg",
],
```

Only `images[0]` is rendered today; the rest are stored for future
gallery use.

## Disclaimer

A small `*` mark with a "reference image, your build may differ" line
already appears below the photo on each product page. No code change
needed when you add real photos.
