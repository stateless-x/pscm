// One-off: inject the researched aliases into machines.ts.
// Run once with `node scripts/inject-aliases.mjs`, then commit.
// Idempotent: re-running with the file already injected is a no-op
// (matches "seoKeywords closing → images:[]" with no aliases between).

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const FILE = join(process.cwd(), "src/data/machines.ts");

const ALIASES = {
  "ball-mill": {
    th: ["บอลมิล", "หม้อบดบอลมิล", "เครื่องบดบอลมิล", "พอตมิล", "พ็อตมิล", "หม้อบดละเอียด", "หม้อบดเซรามิก", "หม้อบดไฮอลูมิน่า", "เครื่องบดบอล", "บอลมิลเซรามิก"],
    en: ["ball mill", "ceramic ball mill", "pot mill", "rapid mill", "ball mill machine", "alumina ball mill", "glaze ball mill", "lab ball mill", "wet ball mill"],
  },
  "filter-press": {
    th: ["ฟิลเตอร์เพรส", "ฟิลเตอร์ เพรส", "เครื่องอัดตะกอน", "เครื่องรีดตะกอน", "เครื่องบีบอัดตะกอน", "เครื่องรีดน้ำตะกอน", "เครื่องอัดกากตะกอน", "ฟิลเตอร์เพรสน้ำเสีย", "เครื่องอัดตะกอนแบบแผ่น"],
    en: ["filter press", "plate filter press", "filter press machine", "sludge dewatering filter press", "chamber filter press", "membrane filter press", "industrial filter press", "ceramic filter press"],
  },
  grinder: {
    th: ["เครื่องบด", "เครื่องบดวัตถุดิบ", "เครื่องบดละเอียด", "เครื่องบดเซรามิก", "เครื่องโม่", "เครื่องบดผง", "เครื่องบดแร่", "เครื่องบดวัตถุดิบเซรามิก", "เครื่องตีป่น"],
    en: ["grinder", "grinding machine", "raw material grinder", "ceramic grinder", "industrial grinder", "fine grinder", "pulverizer", "material grinder"],
  },
  "magnetic-sieve": {
    th: ["ตะแกรงแม่เหล็ก", "ตะแกรงกรองน้ำดิน", "ตะแกรงกรองน้ำเคลือบ", "แม่เหล็กดักเหล็ก", "แม่เหล็กแยกเหล็ก", "เครื่องคัดแยกเหล็ก", "ตะแกรงแม่เหล็กกรองน้ำดิน", "ตัวกรองแม่เหล็ก"],
    en: ["magnetic sieve", "magnetic separator", "magnetic filter", "magnetic trap", "ceramic slip magnetic separator", "glaze magnetic filter", "iron trap", "magnet separator"],
  },
  "hydraulic-press": {
    th: ["เครื่องอัดไฮดรอลิก", "เครื่องอัดไฮดรอลิค", "เครื่องอัดไฮโดรลิค", "แท่นอัดไฮดรอลิก", "ไฮดรอลิคเพรส", "เครื่องเพรสไฮดรอลิก", "เครื่องอัดน้ำมัน", "เครื่องอัดแรงดันสูง", "เครื่องกดไฮดรอลิก"],
    en: ["hydraulic press", "hydraulic press machine", "tile hydraulic press", "shop press", "h-frame press", "industrial hydraulic press", "refractory hydraulic press", "ceramic hydraulic press"],
  },
  "pug-mill": {
    th: ["เครื่องรีดดิน", "เครื่องรีดดินสุญญากาศ", "พักมิล", "เครื่องนวดดิน", "เครื่องอัดคลุกผสม", "เครื่องรีดดินเหนียว", "เครื่องผสมดิน", "เครื่องอัดดิน", "vacuum pug mill"],
    en: ["pug mill", "de-airing pug mill", "vacuum pug mill", "clay extruder", "clay pug mill", "pugmill", "clay mixer extruder", "brick pug mill"],
  },
  blunger: {
    th: ["เครื่องกวนน้ำดิน", "เครื่องกวนสลิป", "เครื่องผสมน้ำดิน", "ถังกวนน้ำดิน", "เครื่องกวนเคลือบ", "บลังเจอร์", "เครื่องปั่นน้ำดิน", "เครื่องกวนน้ำเคลือบ"],
    en: ["blunger", "slip mixer", "slurry mixer", "slip blunger", "ceramic slurry agitator", "slip agitator", "propeller mixer", "slip stirrer"],
  },
  "jigger-roller": {
    th: ["เครื่องจิกเกอร์", "เครื่องโรลเลอร์", "จิกเกอร์", "เครื่องขึ้นรูปจาน", "เครื่องขึ้นรูปชาม", "เครื่องขึ้นรูปด้วยใบมีด", "เครื่องโรลเลอร์เฮด", "เครื่องขึ้นรูปจิกเกอร์", "เครื่องขึ้นรูปถ้วยชาม"],
    en: ["jigger machine", "roller head machine", "jiggering machine", "roller machine ceramic", "jigger roller", "plate forming machine", "bowl forming machine", "ceramic forming machine"],
  },
  "ram-press": {
    th: ["แร็มเพรส", "เครื่องแร็มเพรส", "ram press", "เครื่องอัดแร็มเพรส", "เครื่องกดขึ้นรูปดิน", "เครื่องกดดินขึ้นรูป", "เครื่องอัดขึ้นรูปดิน", "เครื่องกดดินระบบไฮดรอลิก"],
    en: ["ram press", "ram press machine", "ceramic ram press", "hydraulic ram press", "refractory ram press", "clay ram press"],
  },
  "vibrating-screen": {
    th: ["ตะแกรงสั่น", "ตะแกรงสั่นคัดแยก", "เครื่องร่อนสั่น", "ตะแกรงสั่นวงกลม", "เครื่องคัดขนาดผง", "ตะแกรงร่อน", "เครื่องร่อนแยกขนาด", "ไวเบรติ้งสกรีน", "ตะแกรงสั่นเซรามิก", "เครื่องแยกผงสั่น"],
    en: ["vibrating screen", "vibrating sieve", "vibration screen", "vibratory separator", "circular vibrating screen", "rotary vibrating sieve", "powder vibrating screen", "industrial vibrating screen"],
  },
  mixer: {
    th: ["เครื่องผสม", "เครื่องผสมวัตถุดิบ", "เครื่องผสมแห้ง", "เครื่องผสมเปียก", "เครื่องผสมอุตสาหกรรม", "มิกเซอร์", "เครื่องผสมความเร็วสูง", "เครื่องคลุกผสม", "เครื่องผสมผง"],
    en: ["mixer", "mixing machine", "industrial mixer", "high speed mixer", "powder mixer", "dry mixer", "wet mixer", "ribbon blender", "intensive mixer"],
  },
  "jaw-crusher": {
    th: ["เครื่องบดกราม", "เครื่องบดขากรรไกร", "เครื่องโม่หิน", "เครื่องบดหิน", "เครื่องบดหินกราม", "เครื่องบดแร่", "เครื่องบดปฐมภูมิ", "เครื่องบดวัตถุดิบกราม", "ครัชเชอร์กราม"],
    en: ["jaw crusher", "primary jaw crusher", "stone jaw crusher", "rock crusher", "laboratory jaw crusher", "mini jaw crusher", "jaw crusher machine", "stone crusher"],
  },
  "hammer-mill": {
    th: ["เครื่องบดค้อน", "แฮมเมอร์มิล", "เครื่องบดแบบค้อนเหวี่ยง", "เครื่องบดค้อนเหวี่ยง", "เครื่องตีป่น", "เครื่องบดผงค้อน", "เครื่องโม่ค้อน", "hammer crusher"],
    en: ["hammer mill", "hammer crusher", "hammer mill machine", "impact hammer mill", "hammer mill grinder", "fine hammer mill", "industrial hammer mill"],
  },
  "glaze-spray-booth": {
    th: ["ตู้พ่นเคลือบ", "ตู้พ่นน้ำเคลือบ", "เครื่องพ่นน้ำเคลือบ", "ตู้พ่นเคลือบเซรามิก", "ตู้พ่นเคลือบม่านน้ำ", "ห้องพ่นเคลือบ", "บูธพ่นเคลือบ", "ตู้พ่นเคลือบระบบม่านน้ำ"],
    en: ["glaze spray booth", "glaze spraying booth", "water curtain glaze booth", "ceramic glaze booth", "glaze application booth", "water curtain spray booth", "glaze spraying cabinet"],
  },
  conveyor: {
    th: ["สายพานลำเลียง", "ระบบสายพานลำเลียง", "คอนเวเยอร์", "เบลท์คอนเวเยอร์", "สายพานคอนเวเยอร์", "ระบบลำเลียง", "ลูกกลิ้งลำเลียง", "สกรูลำเลียง", "สายพานลำเลียงโรงงาน"],
    en: ["conveyor", "conveyor system", "belt conveyor", "belt conveyor system", "industrial conveyor", "roller conveyor", "material handling conveyor", "screw conveyor", "chain conveyor"],
  },
  "spray-dryer": {
    th: ["สเปรย์ดรายเออร์", "เครื่องอบแห้งแบบพ่นฝอย", "เครื่องทำผงแห้งแบบพ่นฝอย", "เครื่องทำแห้งแบบพ่นฝอย", "เครื่องอบผง", "สเปรย์ดราย", "เครื่องอบสเปรย์", "เครื่องผลิตผงแห้งจากน้ำดิน"],
    en: ["spray dryer", "spray drying machine", "spray drier", "industrial spray dryer", "ceramic spray dryer", "atomizer dryer", "slip spray dryer", "powder spray dryer"],
  },
  "dryer-chamber": {
    th: ["ตู้อบ", "ห้องอบแห้ง", "ตู้อบแห้ง", "ตู้อบลมร้อน", "ตู้อบอุตสาหกรรม", "เตาอบแห้ง", "ห้องอบดิน", "ตู้อบเซรามิก", "ตู้อบไฟฟ้า"],
    en: ["drying chamber", "drying oven", "drying cabinet", "hot air oven", "industrial drying oven", "ceramic dryer", "tray dryer", "batch dryer", "drying room"],
  },
  "dust-press": {
    th: ["เครื่องอัดผงแห้ง", "เครื่องอัดผง", "ดัสท์เพรส", "เครื่องอัดกระเบื้อง", "เครื่องอัดแห้ง", "เครื่องอัดผงเซรามิก", "เครื่องอัดผงทนไฟ", "เครื่องอัดอิฐทนไฟ"],
    en: ["dust press", "dry press", "dust pressing machine", "tile press", "ceramic dust press", "powder press", "refractory dust press", "dry powder press", "hydraulic tile press"],
  },
  kiln: {
    th: ["เตาเผา", "เตาเผาเซรามิก", "เตาเผาไฟฟ้า", "เตาเผาแก๊ส", "เตาเผาเครื่องปั้นดินเผา", "เตาเผาไฟสูง", "เตาเผาอุตสาหกรรม", "เตาอบเซรามิก", "เตาเผาเคลือบ", "เตาเผาชัทเทิล"],
    en: ["kiln", "ceramic kiln", "electric kiln", "gas kiln", "pottery kiln", "shuttle kiln", "tunnel kiln", "industrial kiln", "high temperature kiln", "firing kiln"],
  },
  "potters-wheel": {
    th: ["แป้นหมุน", "แป้นหมุนปั้นดิน", "แป้นหมุนไฟฟ้า", "แป้นปั้นไฟฟ้า", "แป้นหมุนเซรามิก", "แป้นปั้น", "แป้นหมุนปั้นเซรามิก", "แป้นหมุนเครื่องปั้นดินเผา", "พ็อตเตอร์วีล"],
    en: ["potter's wheel", "potters wheel", "pottery wheel", "electric pottery wheel", "ceramic wheel", "throwing wheel", "studio pottery wheel"],
  },
};

function indent(level) {
  return " ".repeat(level);
}

function serialiseAliases(aliases) {
  // Match the existing 2-space indent / field formatting used in machines.ts
  const th = aliases.th.map((s) => JSON.stringify(s)).join(", ");
  const en = aliases.en.map((s) => JSON.stringify(s)).join(", ");
  return `${indent(4)}aliases: {\n${indent(6)}th: [${th}],\n${indent(6)}en: [${en}],\n${indent(4)}},\n`;
}

let src = await readFile(FILE, "utf8");

let injected = 0;
let skipped = 0;

for (const [slug, aliases] of Object.entries(ALIASES)) {
  // Anchor: find this machine's `slug: "<slug>",` line, then walk
  // forward to the `seoKeywords: { ... },` block, then to the next
  // `    images: [],` after it (= this machine's own images line).
  const slugRe = new RegExp(`(\\s*slug:\\s*"${slug}",)`);
  const slugMatch = src.match(slugRe);
  if (!slugMatch) {
    console.error(`✗ couldn't find machine: ${slug}`);
    continue;
  }
  const start = slugMatch.index;

  // Find the next `    images: [],` after this slug
  const tail = src.slice(start);
  const imagesIdx = tail.indexOf("    images: [],");
  if (imagesIdx === -1) {
    console.error(`✗ couldn't find images: [], for ${slug}`);
    continue;
  }

  // Look behind to detect if `aliases:` is already there (idempotency)
  const between = tail.slice(0, imagesIdx);
  if (between.includes("aliases:")) {
    skipped++;
    continue;
  }

  const insertAt = start + imagesIdx;
  src = src.slice(0, insertAt) + serialiseAliases(aliases) + src.slice(insertAt);
  injected++;
}

await writeFile(FILE, src);
console.log(`✓ injected aliases into ${injected} machines (${skipped} already had aliases, skipped)`);
