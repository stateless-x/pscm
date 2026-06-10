// All machine data lives here. Add a machine = add one object.
// Spec §7. Bilingual fields rendered per active locale; never both stacked.

import type { MachineStatus } from "./machine-status";
export type { MachineStatus } from "./machine-status";

export type Locale = "th" | "en";
export type Bi = Record<Locale, string>;
export type BiList = Record<Locale, string[]>;

export type Stage =
  | "crushing"
  | "grinding"
  | "mixing"
  | "filtering"
  | "purification"
  | "forming"
  | "pressing"
  | "glazing"
  | "drying"
  | "firing"
  | "material-handling";

export interface Machine {
  slug: string;
  model?: string;
  name: Bi;
  category: Bi;
  stage: Stage;
  status: MachineStatus;
  order: number;
  featured?: boolean;
  tags: string[];
  industries: BiList;
  short: Bi;
  process: Bi;
  description?: Bi;
  features: BiList;
  seoKeywords: BiList;
  // Industry aliases / synonyms: both Thai transliterations (ทับศัพท์)
  // and descriptive Thai, plus English variants. Rendered visibly on the
  // product page so search engines index real on-page text, not just meta.
  aliases?: BiList;
  images: string[];
}

export const machines: Machine[] = [
  // === CORE ===
  {
    slug: "ball-mill",
    model: "PSCM-BM",
    stage: "grinding",
    status: "available",
    order: 1,
    featured: true,
    name: { th: "หม้อบด", en: "Ball Mill" },
    category: { th: "การบดวัตถุดิบ", en: "Raw Material Grinding" },
    tags: [
      "ceramic-machinery",
      "ball-mill",
      "grinding",
      "mining",
      "pigment",
      "chemical",
      "battery-materials",
    ],
    industries: {
      th: ["เซรามิก", "สี/เม็ดสี", "เคมีภัณฑ์", "เหมืองแร่", "วัสดุแบตเตอรี่"],
      en: [
        "Ceramics",
        "Paint & Pigment",
        "Chemical",
        "Mining",
        "Battery materials",
      ],
    },
    short: {
      th: "บดและผสมวัตถุดิบ น้ำดิน น้ำเคลือบ ให้ละเอียดสม่ำเสมอ",
      en: "Grinds and blends raw materials, slip, and glaze to a uniform fineness.",
    },
    process: {
      th: "เป็นหัวใจของขั้นเตรียมวัตถุดิบ ความละเอียดที่ได้จากหม้อบดเป็นตัวกำหนดคุณภาพชิ้นงานและของเสียในไลน์ตรงๆ",
      en: "The heart of material prep. The fineness you get out of the mill decides final-piece quality and line scrap, directly.",
    },
    features: {
      th: [
        "สั่งทำได้หลายขนาด ให้พอดีกับกำลังผลิตจริงของโรงงาน",
        "โครงสร้างแน่น รันต่อเนื่องงานหนักได้",
        "ความละเอียดนิ่งทุกแบทช์ ลดของเสียในไลน์",
        "ดูแลรักษาง่าย อะไหล่และงานซ่อมเราทำเองในโรงงาน",
      ],
      en: [
        "Sized to match your real throughput, not a fixed catalogue spec",
        "Heavy build for continuous, hard-running operation",
        "Uniform fineness batch after batch, which cuts scrap on the line",
        "Easy to maintain. Parts and repair handled in-house by us",
      ],
    },
    seoKeywords: {
      th: ["หม้อบด", "หม้อบดบอลมิล", "เครื่องบดน้ำเคลือบ", "ball mill เซรามิก"],
      en: [
        "ball mill",
        "ceramic ball mill",
        "glaze ball mill",
        "grinding mill Thailand",
      ],
    },
    aliases: {
      th: ["บอลมิล", "หม้อบดบอลมิล", "เครื่องบดบอลมิล", "พอตมิล", "พ็อตมิล", "หม้อบดละเอียด", "หม้อบดเซรามิก", "หม้อบดไฮอลูมิน่า", "เครื่องบดบอล", "บอลมิลเซรามิก"],
      en: ["ball mill", "ceramic ball mill", "pot mill", "rapid mill", "ball mill machine", "alumina ball mill", "glaze ball mill", "lab ball mill", "wet ball mill"],
    },
    images: [],
  },
  {
    slug: "filter-press",
    model: "PSCM-FP",
    stage: "filtering",
    status: "available",
    order: 2,
    featured: true,
    name: { th: "เครื่องอัดกรอง", en: "Filter Press" },
    category: { th: "การรีดน้ำ/กรอง", en: "Dewatering & Filtration" },
    tags: [
      "ceramic-machinery",
      "filter-press",
      "filtering",
      "wastewater",
      "mining",
      "chemical",
      "food",
    ],
    industries: {
      th: ["เซรามิก", "บำบัดน้ำเสีย", "เหมืองแร่", "เคมีภัณฑ์", "อาหาร"],
      en: ["Ceramics", "Wastewater", "Mining", "Chemical", "Food"],
    },
    short: {
      th: "รีดน้ำออกจากน้ำดิน ได้แผ่นเนื้อดินพร้อมขึ้นรูป",
      en: "Presses water out of slip to produce ready-to-form clay cake.",
    },
    process: {
      th: "เปลี่ยนน้ำดินเหลวให้เป็นเนื้อดินที่ความชื้นนิ่ง ไลน์ขึ้นรูปเดินต่อได้ลื่น คุณภาพคงที่",
      en: "Turns liquid slip into consistent-moisture cake. The forming line keeps moving and quality stays stable.",
    },
    features: {
      th: [
        "รีดน้ำได้จริง ความชื้นเท่ากันทุกแผ่น",
        "โครงสร้างทนแรงดันสูง ใช้งานได้ยาว",
        "เลือกจำนวนแผ่นและขนาดได้ตามที่โรงงานต้องการ",
        "อะไหล่หาง่าย ซ่อมได้ตลอดอายุเครื่อง",
      ],
      en: [
        "Real dewatering, with even moisture across every cake",
        "High-pressure build for a long service life",
        "Plate count and size made to your spec",
        "Serviceable for life. Parts always on hand",
      ],
    },
    seoKeywords: {
      th: ["เครื่องอัดกรอง", "ฟิลเตอร์เพรส", "เครื่องรีดน้ำดิน", "filter press เซรามิก"],
      en: [
        "filter press",
        "ceramic filter press",
        "slip dewatering",
        "filter press Thailand",
      ],
    },
    aliases: {
      th: ["ฟิลเตอร์เพรส", "ฟิลเตอร์ เพรส", "เครื่องอัดตะกอน", "เครื่องรีดตะกอน", "เครื่องบีบอัดตะกอน", "เครื่องรีดน้ำตะกอน", "เครื่องอัดกากตะกอน", "ฟิลเตอร์เพรสน้ำเสีย", "เครื่องอัดตะกอนแบบแผ่น"],
      en: ["filter press", "plate filter press", "filter press machine", "sludge dewatering filter press", "chamber filter press", "membrane filter press", "industrial filter press", "ceramic filter press"],
    },
    images: [],
  },
  {
    slug: "grinder",
    model: "PSCM-GR",
    stage: "grinding",
    status: "available",
    order: 3,
    featured: true,
    name: { th: "เครื่องบด", en: "Grinder" },
    category: { th: "การบดย่อยวัตถุดิบ", en: "Material Size Reduction" },
    tags: ["ceramic-machinery", "grinding", "crusher", "mining", "chemical"],
    industries: {
      th: ["เซรามิก", "เคมีภัณฑ์", "เหมืองแร่"],
      en: ["Ceramics", "Chemical", "Mining"],
    },
    short: {
      th: "บดย่อยวัตถุดิบเซรามิกให้ได้ขนาดที่ต้องการ",
      en: "Reduces ceramic raw materials to the size you need.",
    },
    process: {
      th: "เตรียมขนาดวัตถุดิบให้พอดีก่อนเข้าขั้นถัดไป สร้างมาให้รับงานหนักในโรงงานจริง",
      en: "Sizes raw material right before the next stage. Built for real hard factory use.",
    },
    features: {
      th: [
        "บดต่อเนื่อง รับงานหนักได้",
        "ปรับขนาดและกำลังตามชนิดวัตถุดิบที่ใช้จริง",
        "โครงสร้างแน่น ดูแลรักษาง่าย",
      ],
      en: [
        "Continuous, heavy-duty grinding",
        "Sized and powered to the material you actually run",
        "Robust build, easy to maintain",
      ],
    },
    seoKeywords: {
      th: ["เครื่องบดเซรามิก", "เครื่องบดวัตถุดิบ", "grinder เซรามิก"],
      en: ["ceramic grinder", "material grinder", "grinding machine Thailand"],
    },
    aliases: {
      th: ["เครื่องบด", "เครื่องบดวัตถุดิบ", "เครื่องบดละเอียด", "เครื่องบดเซรามิก", "เครื่องโม่", "เครื่องบดผง", "เครื่องบดแร่", "เครื่องบดวัตถุดิบเซรามิก", "เครื่องตีป่น"],
      en: ["grinder", "grinding machine", "raw material grinder", "ceramic grinder", "industrial grinder", "fine grinder", "pulverizer", "material grinder"],
    },
    images: [],
  },
  {
    slug: "magnetic-sieve",
    model: "PSCM-MS",
    stage: "purification",
    status: "available",
    order: 4,
    featured: true,
    name: { th: "ตะแกรงแม่เหล็ก", en: "Magnetic Sieve" },
    category: { th: "การคัดแยกสิ่งปนเปื้อน", en: "Contaminant Separation" },
    tags: [
      "ceramic-machinery",
      "magnetic-separator",
      "purification",
      "food",
      "recycling",
      "mining",
    ],
    industries: {
      th: ["เซรามิก", "อาหาร", "รีไซเคิล", "เหมืองแร่"],
      en: ["Ceramics", "Food", "Recycling", "Mining"],
    },
    short: {
      th: "แยกเศษเหล็กและสิ่งปนเปื้อนออกจากน้ำดินกับน้ำเคลือบ",
      en: "Removes iron particles and contaminants from slip and glaze.",
    },
    process: {
      th: "เศษเหล็กคือต้นเหตุของจุดด่างและของเสีย ตะแกรงแม่เหล็กดักไว้ก่อน ทำให้เนื้อดินและเคลือบสะอาด คุณภาพนิ่ง",
      en: "Iron specks are what cause blemishes and scrap. This catches them upstream and keeps slip and glaze clean, with stable quality.",
    },
    features: {
      th: [
        "ดักเศษเหล็กได้จริง ของเสียลด",
        "คุมคุณภาพชิ้นงานให้สม่ำเสมอ",
        "ออกแบบให้ล้างและบำรุงรักษาง่าย",
      ],
      en: [
        "Real iron removal that cuts scrap",
        "Keeps finished-piece quality consistent",
        "Designed for easy cleaning and upkeep",
      ],
    },
    seoKeywords: {
      th: ["ตะแกรงแม่เหล็ก", "เครื่องแยกเหล็กน้ำดิน", "magnetic sieve"],
      en: [
        "magnetic sieve",
        "magnetic separator ceramic",
        "iron separator slip",
      ],
    },
    aliases: {
      th: ["ตะแกรงแม่เหล็ก", "ตะแกรงกรองน้ำดิน", "ตะแกรงกรองน้ำเคลือบ", "แม่เหล็กดักเหล็ก", "แม่เหล็กแยกเหล็ก", "เครื่องคัดแยกเหล็ก", "ตะแกรงแม่เหล็กกรองน้ำดิน", "ตัวกรองแม่เหล็ก"],
      en: ["magnetic sieve", "magnetic separator", "magnetic filter", "magnetic trap", "ceramic slip magnetic separator", "glaze magnetic filter", "iron trap", "magnet separator"],
    },
    images: [],
  },

  // === CROSS-INDUSTRY HERO ===
  {
    slug: "hydraulic-press",
    model: "PSCM-HP",
    stage: "pressing",
    status: "made_to_order",
    order: 5,
    featured: true,
    name: { th: "เครื่องอัดไฮดรอลิก", en: "Hydraulic Press" },
    category: { th: "การอัดขึ้นรูป", en: "Pressing & Forming" },
    tags: [
      "hydraulic-press",
      "pressing",
      "ceramic-machinery",
      "refractory",
      "brick",
      "abrasive",
      "metalworking",
      "automotive",
    ],
    industries: {
      th: [
        "เซรามิก",
        "วัสดุทนไฟ",
        "อิฐ/บล็อก",
        "วัสดุขัด",
        "งานโลหะ",
        "ยานยนต์",
      ],
      en: [
        "Ceramics",
        "Refractory",
        "Brick & block",
        "Abrasives",
        "Metalworking",
        "Automotive",
      ],
    },
    short: {
      th: "อัดขึ้นรูปชิ้นงานหนาแน่น แรงกดนิ่ง ใช้ได้หลายอุตสาหกรรม ไม่จำกัดแค่เซรามิก",
      en: "Forms dense parts with steady force. Useful well beyond ceramics.",
    },
    process: {
      th: "ให้แรงกดสูงและคงที่สำหรับการอัดขึ้นรูป ใช้ได้ทั้งเซรามิก วัสดุทนไฟ อิฐ วัสดุขัด ไปจนถึงงานโลหะ",
      en: "Delivers high, steady force for forming. Ceramics, refractory, brick, abrasives, even metal work.",
    },
    features: {
      th: [
        "แรงกดสูง คงที่ทุกจังหวะ ชิ้นงานแน่นเท่ากันทุกใบ",
        "สั่งกำลังอัดและขนาดโต๊ะได้ตามงานจริง",
        "ใช้ข้ามอุตสาหกรรมได้ ไม่จำกัดแค่เซรามิก",
        "ระบบไฮดรอลิกเราดูแลและซ่อมเองได้ทั้งหมด",
      ],
      en: [
        "High, consistent pressing force for dense parts",
        "Tonnage and bed size engineered to the job",
        "Cross-industry, not ceramic-only",
        "Hydraulic system we service and repair ourselves",
      ],
    },
    seoKeywords: {
      th: ["เครื่องอัดไฮดรอลิก", "ไฮดรอลิคเพรส", "เครื่องอัดขึ้นรูป"],
      en: ["hydraulic press", "hydraulic press Thailand", "forming press"],
    },
    aliases: {
      th: ["เครื่องอัดไฮดรอลิก", "เครื่องอัดไฮดรอลิค", "เครื่องอัดไฮโดรลิค", "แท่นอัดไฮดรอลิก", "ไฮดรอลิคเพรส", "เครื่องเพรสไฮดรอลิก", "เครื่องอัดน้ำมัน", "เครื่องอัดแรงดันสูง", "เครื่องกดไฮดรอลิก"],
      en: ["hydraulic press", "hydraulic press machine", "tile hydraulic press", "shop press", "h-frame press", "industrial hydraulic press", "refractory hydraulic press", "ceramic hydraulic press"],
    },
    images: [],
  },

  // === MADE-TO-ORDER & ON-REQUEST (expanded per spec build note) ===
  {
    slug: "pug-mill",
    model: "PSCM-PM",
    stage: "forming",
    status: "made_to_order",
    order: 6,
    featured: true,
    name: { th: "เครื่องรีดดิน (สุญญากาศ)", en: "De-airing Pug Mill" },
    category: { th: "การนวด/รีดดิน", en: "Clay Extrusion & De-airing" },
    tags: ["pug-mill", "extruder", "forming", "ceramic-machinery", "brick"],
    industries: {
      th: ["เซรามิก", "อิฐ/ดินเผา", "งานปั้นสตูดิโอ"],
      en: ["Ceramics", "Brick & terracotta", "Studio pottery"],
    },
    short: {
      th: "นวดและรีดเนื้อดินให้เนียน ไล่ฟองอากาศ ส่งเข้าขึ้นรูปได้เลย",
      en: "Kneads and extrudes clay, removing air for ready-to-form bodies.",
    },
    process: {
      th: "ไล่ฟองอากาศและทำให้เนื้อดินสม่ำเสมอ ช่วยลดของเสียจากการแตกร้าวตอนเผา",
      en: "De-airs and homogenises clay, which cuts firing cracks.",
    },
    features: {
      th: [
        "ระบบสุญญากาศไล่อากาศได้เกลี้ยง ของเสียที่หน้าเตาน้อยลงมาก",
        "เนื้อดินสม่ำเสมอตลอดแท่ง ป้อนเข้าขึ้นรูปได้ทันที",
        "สั่งขนาดและกำลังได้ตามไลน์ของคุณ",
      ],
      en: [
        "Vacuum system de-airs the body cleanly. Far fewer kiln cracks",
        "Even consistency along the whole pug, ready to feed forming",
        "Sized and powered to your line",
      ],
    },
    seoKeywords: {
      th: ["เครื่องรีดดิน", "เครื่องนวดดิน", "pug mill"],
      en: ["pug mill", "de-airing pug mill", "clay extruder"],
    },
    aliases: {
      th: ["เครื่องรีดดิน", "เครื่องรีดดินสุญญากาศ", "พักมิล", "เครื่องนวดดิน", "เครื่องอัดคลุกผสม", "เครื่องรีดดินเหนียว", "เครื่องผสมดิน", "เครื่องอัดดิน", "vacuum pug mill"],
      en: ["pug mill", "de-airing pug mill", "vacuum pug mill", "clay extruder", "clay pug mill", "pugmill", "clay mixer extruder", "brick pug mill"],
    },
    images: [],
  },
  {
    slug: "blunger",
    model: "PSCM-BL",
    stage: "mixing",
    status: "made_to_order",
    order: 7,
    name: { th: "เครื่องกวนน้ำดิน", en: "Blunger / Slip Mixer" },
    category: { th: "การผสมน้ำดิน", en: "Slip Mixing" },
    tags: ["blunger", "mixer", "mixing", "ceramic-machinery"],
    industries: {
      th: ["เซรามิก", "เคมีภัณฑ์"],
      en: ["Ceramics", "Chemical"],
    },
    short: {
      th: "กวนผสมน้ำดินให้เป็นเนื้อเดียวกัน ส่งต่อขั้นถัดไปได้เลย",
      en: "Agitates slip into a uniform mix for the next stage.",
    },
    process: {
      th: "ผสมวัตถุดิบกับน้ำให้เนียนทั่วถัง ก่อนเข้ากรองหรือบด",
      en: "Blends material and water evenly before filtering or milling.",
    },
    features: {
      th: [
        "ใบกวนออกแบบให้หมุนทั่วถึงทั้งถัง ไม่มีจุดอับ",
        "เลือกความจุและกำลังมอเตอร์ได้ตามแบทช์",
        "วัสดุทนการกัดกร่อนจากน้ำดิน อยู่ได้ยาว",
      ],
      en: [
        "Impeller designed to reach the whole tank. No dead zones",
        "Capacity and motor sized to your batch",
        "Corrosion-resistant build for long life with slip",
      ],
    },
    seoKeywords: {
      th: ["เครื่องกวนน้ำดิน", "เครื่องผสมน้ำดิน", "blunger"],
      en: ["blunger", "slip mixer", "slip agitator"],
    },
    aliases: {
      th: ["เครื่องกวนน้ำดิน", "เครื่องกวนสลิป", "เครื่องผสมน้ำดิน", "ถังกวนน้ำดิน", "เครื่องกวนเคลือบ", "บลังเจอร์", "เครื่องปั่นน้ำดิน", "เครื่องกวนน้ำเคลือบ"],
      en: ["blunger", "slip mixer", "slurry mixer", "slip blunger", "ceramic slurry agitator", "slip agitator", "propeller mixer", "slip stirrer"],
    },
    images: [],
  },
  {
    slug: "jigger-roller",
    model: "PSCM-JR",
    stage: "forming",
    status: "made_to_order",
    order: 8,
    name: {
      th: "เครื่องขึ้นรูปจิกเกอร์/โรลเลอร์",
      en: "Jigger / Roller-Head Machine",
    },
    category: { th: "การขึ้นรูป", en: "Shaping & Forming" },
    tags: ["jigger", "roller-head", "forming", "ceramic-machinery"],
    industries: {
      th: ["เซรามิก (ถ้วยชาม จาน)"],
      en: ["Ceramics (tableware)"],
    },
    short: {
      th: "ขึ้นรูปจาน ชาม และภาชนะกลม ได้เร็วและคุณภาพเท่ากันทุกใบ",
      en: "Forms plates, bowls, and round ware quickly and consistently.",
    },
    process: {
      th: "เพิ่มกำลังผลิตงานทรงกลม ได้มาตรฐานเท่ากันทุกใบ ทุกแบทช์",
      en: "Scales up round-ware forming, with piece-to-piece consistency.",
    },
    features: {
      th: [
        "รอบเร็ว เหมาะกับการผลิตจำนวนมาก",
        "ตั้งหัวโรลเลอร์ได้แม่นยำ ความหนาผนังเท่ากันทุกใบ",
        "ใช้กับแม่พิมพ์เดิมที่โรงงานมีอยู่ได้",
      ],
      en: [
        "Fast cycle time, suited to volume production",
        "Precise roller setup. Uniform wall thickness piece to piece",
        "Works with the moulds your factory already uses",
      ],
    },
    seoKeywords: {
      th: ["เครื่องขึ้นรูปจิกเกอร์", "เครื่องขึ้นรูปจาน", "jigger machine"],
      en: ["jigger machine", "roller head machine", "plate forming machine"],
    },
    aliases: {
      th: ["เครื่องจิกเกอร์", "เครื่องโรลเลอร์", "จิกเกอร์", "เครื่องขึ้นรูปจาน", "เครื่องขึ้นรูปชาม", "เครื่องขึ้นรูปด้วยใบมีด", "เครื่องโรลเลอร์เฮด", "เครื่องขึ้นรูปจิกเกอร์", "เครื่องขึ้นรูปถ้วยชาม"],
      en: ["jigger machine", "roller head machine", "jiggering machine", "roller machine ceramic", "jigger roller", "plate forming machine", "bowl forming machine", "ceramic forming machine"],
    },
    images: [],
  },
  {
    slug: "ram-press",
    model: "PSCM-RP",
    stage: "pressing",
    status: "made_to_order",
    order: 9,
    name: { th: "เครื่องอัดขึ้นรูปแรมเพรส", en: "Ram Press" },
    category: { th: "การอัดขึ้นรูป", en: "Pressing & Forming" },
    tags: [
      "ram-press",
      "pressing",
      "hydraulic-press",
      "forming",
      "ceramic-machinery",
      "refractory",
    ],
    industries: {
      th: ["เซรามิก", "วัสดุทนไฟ"],
      en: ["Ceramics", "Refractory"],
    },
    short: {
      th: "อัดขึ้นรูปงานทรงไม่กลม เช่น จานเหลี่ยมและงานหนา",
      en: "Presses non-round and thicker shapes from clay.",
    },
    process: {
      th: "ขึ้นรูปงานที่จิกเกอร์ทำไม่ได้ ใช้แม่พิมพ์กับแรงอัดแทน",
      en: "Forms shapes a jigger can't, using a die and press force.",
    },
    features: {
      th: [
        "เหมาะกับงานเหลี่ยมหรือทรงพิเศษที่จิกเกอร์ทำไม่ได้",
        "แรงอัดนิ่ง เนื้อแน่นเท่ากันทุกชิ้น",
        "สั่งกำลังอัดและขนาดโต๊ะได้ตามแบบที่ใช้จริง",
      ],
      en: [
        "Right for square or special shapes a jigger can't form",
        "Steady press force. Even body density on every piece",
        "Tonnage and bed sized to your die",
      ],
    },
    seoKeywords: {
      th: ["แรมเพรส", "เครื่องอัดขึ้นรูปเซรามิก", "ram press"],
      en: ["ram press", "ceramic ram press", "clay press"],
    },
    aliases: {
      th: ["แร็มเพรส", "เครื่องแร็มเพรส", "ram press", "เครื่องอัดแร็มเพรส", "เครื่องกดขึ้นรูปดิน", "เครื่องกดดินขึ้นรูป", "เครื่องอัดขึ้นรูปดิน", "เครื่องกดดินระบบไฮดรอลิก"],
      en: ["ram press", "ram press machine", "ceramic ram press", "hydraulic ram press", "refractory ram press", "clay ram press"],
    },
    images: [],
  },
  {
    slug: "vibrating-screen",
    model: "PSCM-VS",
    stage: "purification",
    status: "made_to_order",
    order: 10,
    name: { th: "ตะแกรงสั่นคัดแยก", en: "Vibrating Screen" },
    category: { th: "การร่อน/คัดขนาด", en: "Screening & Sizing" },
    tags: [
      "vibrating-screen",
      "purification",
      "ceramic-machinery",
      "food",
      "mining",
    ],
    industries: {
      th: ["เซรามิก", "อาหาร", "เหมืองแร่"],
      en: ["Ceramics", "Food", "Mining"],
    },
    short: {
      th: "ร่อนและคัดแยกขนาดน้ำดินหรือผงวัตถุดิบ",
      en: "Sieves and grades slip or powder by particle size.",
    },
    process: {
      th: "กรองสิ่งตกค้างและคุมขนาดอนุภาคก่อนเข้าขั้นถัดไป",
      en: "Filters residue and controls particle size before the next step.",
    },
    features: {
      th: [
        "จังหวะการสั่นจูนให้ร่อนต่อเนื่อง ไม่อุดตันง่าย",
        "เปลี่ยนเมชตามขนาดที่ต้องการได้ในไม่กี่นาที",
        "ใช้ได้ทั้งน้ำดินและผงแห้ง",
      ],
      en: [
        "Vibration tuned for continuous sieving without easy clogging",
        "Swap to a different mesh size in minutes",
        "Works for both slip and dry powder",
      ],
    },
    seoKeywords: {
      th: ["ตะแกรงสั่น", "เครื่องร่อนน้ำดิน", "vibrating screen"],
      en: ["vibrating screen", "vibrating sieve", "particle screening"],
    },
    aliases: {
      th: ["ตะแกรงสั่น", "ตะแกรงสั่นคัดแยก", "เครื่องร่อนสั่น", "ตะแกรงสั่นวงกลม", "เครื่องคัดขนาดผง", "ตะแกรงร่อน", "เครื่องร่อนแยกขนาด", "ไวเบรติ้งสกรีน", "ตะแกรงสั่นเซรามิก", "เครื่องแยกผงสั่น"],
      en: ["vibrating screen", "vibrating sieve", "vibration screen", "vibratory separator", "circular vibrating screen", "rotary vibrating sieve", "powder vibrating screen", "industrial vibrating screen"],
    },
    images: [],
  },
  {
    slug: "mixer",
    model: "PSCM-MX",
    stage: "mixing",
    status: "made_to_order",
    order: 11,
    name: { th: "เครื่องผสม", en: "Mixing Machine" },
    category: { th: "การผสมวัตถุดิบ", en: "Material Mixing" },
    tags: ["mixer", "mixing", "ceramic-machinery", "food", "chemical"],
    industries: {
      th: ["เซรามิก", "อาหาร", "เคมีภัณฑ์", "ก่อสร้าง"],
      en: ["Ceramics", "Food", "Chemical", "Construction"],
    },
    short: {
      th: "ผสมวัตถุดิบแห้งหรือเปียกให้เข้ากันเป็นเนื้อเดียว",
      en: "Blends dry or wet materials to an even mix.",
    },
    process: {
      th: "คุมสัดส่วนและความสม่ำเสมอตามสูตรของโรงงาน แบทช์ต่อแบทช์",
      en: "Holds your recipe's ratio and consistency batch after batch.",
    },
    features: {
      th: [
        "เข้ากันสนิททุกแบทช์ ตรงตามสูตรของคุณ",
        "ออกแบบใบกวนและขนาดถังให้พอดีกับวัตถุดิบที่ใช้จริง",
        "วัสดุภายในเลือกได้ตามชนิดงาน (เซรามิก อาหาร เคมี)",
      ],
      en: [
        "Even mix batch after batch, true to your recipe",
        "Impeller and tank sized to the material you actually run",
        "Contact materials selectable by industry (ceramic, food, chemical)",
      ],
    },
    seoKeywords: {
      th: ["เครื่องผสมวัตถุดิบ", "เครื่องผสมเซรามิก", "industrial mixer"],
      en: ["industrial mixer", "material mixer", "ceramic mixer"],
    },
    aliases: {
      th: ["เครื่องผสม", "เครื่องผสมวัตถุดิบ", "เครื่องผสมแห้ง", "เครื่องผสมเปียก", "เครื่องผสมอุตสาหกรรม", "มิกเซอร์", "เครื่องผสมความเร็วสูง", "เครื่องคลุกผสม", "เครื่องผสมผง"],
      en: ["mixer", "mixing machine", "industrial mixer", "high speed mixer", "powder mixer", "dry mixer", "wet mixer", "ribbon blender", "intensive mixer"],
    },
    images: [],
  },
  {
    slug: "jaw-crusher",
    model: "PSCM-JC",
    stage: "crushing",
    status: "made_to_order",
    order: 12,
    name: { th: "เครื่องบดกราม", en: "Jaw Crusher" },
    category: { th: "การบดหยาบ", en: "Primary Crushing" },
    tags: ["crusher", "crushing", "ceramic-machinery", "mining", "recycling"],
    industries: {
      th: ["เซรามิก", "เหมืองแร่", "รีไซเคิล"],
      en: ["Ceramics", "Mining", "Recycling"],
    },
    short: {
      th: "บดหยาบก้อนวัตถุดิบแข็งให้เล็กลง ก่อนส่งเข้าบดละเอียด",
      en: "Coarse-crushes hard lumps before fine milling.",
    },
    process: {
      th: "ขั้นแรกของการลดขนาด รับวัตถุดิบแข็งและงานหนักได้",
      en: "First size-reduction stage. Built for hard material and heavy loads.",
    },
    features: {
      th: [
        "กรามและช่องป้อนออกแบบตามขนาดก้อนที่ใช้จริงในโรงงาน",
        "โครงหนัก รับงานต่อเนื่องได้",
        "ปรับช่องระบายเพื่อคุมขนาดผลผลิตได้",
      ],
      en: [
        "Jaw and feed opening sized to the lumps you actually run",
        "Heavy-duty frame for continuous factory operation",
        "Adjustable discharge gap for output-size control",
      ],
    },
    seoKeywords: {
      th: ["เครื่องบดกราม", "เครื่องบดหิน", "jaw crusher"],
      en: ["jaw crusher", "primary crusher", "rock crusher"],
    },
    aliases: {
      th: ["เครื่องบดกราม", "เครื่องบดขากรรไกร", "เครื่องโม่หิน", "เครื่องบดหิน", "เครื่องบดหินกราม", "เครื่องบดแร่", "เครื่องบดปฐมภูมิ", "เครื่องบดวัตถุดิบกราม", "ครัชเชอร์กราม"],
      en: ["jaw crusher", "primary jaw crusher", "stone jaw crusher", "rock crusher", "laboratory jaw crusher", "mini jaw crusher", "jaw crusher machine", "stone crusher"],
    },
    images: [],
  },
  {
    slug: "hammer-mill",
    model: "PSCM-HM",
    stage: "crushing",
    status: "made_to_order",
    order: 13,
    name: { th: "เครื่องบดแบบค้อน", en: "Hammer Mill" },
    category: { th: "การบดย่อย", en: "Impact Milling" },
    tags: [
      "crusher",
      "crushing",
      "grinding",
      "ceramic-machinery",
      "chemical",
      "food",
    ],
    industries: {
      th: ["เซรามิก", "เคมีภัณฑ์", "อาหาร"],
      en: ["Ceramics", "Chemical", "Food"],
    },
    short: {
      th: "บดย่อยวัตถุดิบเปราะด้วยแรงกระแทกของค้อน",
      en: "Reduces brittle material by hammer impact.",
    },
    process: {
      th: "ลดขนาดวัตถุดิบเปราะได้รวดเร็ว ก่อนส่งเข้าขั้นถัดไป",
      en: "Fast size reduction of friable material before the next step.",
    },
    features: {
      th: [
        "บดได้ละเอียดและเร็ว เหมาะกับวัตถุดิบเปราะ",
        "ค้อนถอดเปลี่ยนได้ ดูแลรักษาง่าย",
        "เลือกขนาดตะแกรงล่างได้ตามผลผลิตที่ต้องการ",
      ],
      en: [
        "Fine, fast reduction. Right for brittle material",
        "Replaceable hammers for simple upkeep",
        "Bottom screen sized to your target output",
      ],
    },
    seoKeywords: {
      th: ["เครื่องบดค้อน", "เครื่องบดย่อย", "hammer mill"],
      en: ["hammer mill", "impact mill", "crushing mill"],
    },
    aliases: {
      th: ["เครื่องบดค้อน", "แฮมเมอร์มิล", "เครื่องบดแบบค้อนเหวี่ยง", "เครื่องบดค้อนเหวี่ยง", "เครื่องตีป่น", "เครื่องบดผงค้อน", "เครื่องโม่ค้อน", "hammer crusher"],
      en: ["hammer mill", "hammer crusher", "hammer mill machine", "impact hammer mill", "hammer mill grinder", "fine hammer mill", "industrial hammer mill"],
    },
    images: [],
  },
  {
    slug: "glaze-spray-booth",
    model: "PSCM-GB",
    stage: "glazing",
    status: "made_to_order",
    order: 14,
    name: { th: "ตู้พ่นเคลือบ", en: "Glaze Spraying Booth" },
    category: { th: "การเคลือบ", en: "Glazing" },
    tags: ["glaze-line", "glazing", "ceramic-machinery"],
    industries: { th: ["เซรามิก"], en: ["Ceramics"] },
    short: {
      th: "พ่นเคลือบชิ้นงานพร้อมระบบดักละอองและระบายอากาศ",
      en: "Sprays glaze with overspray capture and extraction.",
    },
    process: {
      th: "เคลือบเรียบเสมอกัน คนพ่นทำงานในพื้นที่สะอาดและปลอดภัยกว่า",
      en: "Even glazing in a cleaner, safer work area.",
    },
    features: {
      th: [
        "ระบบดักละอองและกรองอากาศ ฝุ่นเคลือบในโรงงานลดลง",
        "พื้นที่พ่นออกแบบให้ทำงานสะดวก เคลือบเรียบ",
        "เลือกขนาดบูธและกำลังดูดได้ตามชิ้นงาน",
      ],
      en: [
        "Overspray capture and air filtration cut workshop dust",
        "Spray area laid out for comfortable use and even coverage",
        "Booth size and extraction power sized to your ware",
      ],
    },
    seoKeywords: {
      th: ["ตู้พ่นเคลือบ", "ตู้พ่นสีเซรามิก", "glaze booth"],
      en: ["glaze spray booth", "glazing booth", "spray booth ceramic"],
    },
    aliases: {
      th: ["ตู้พ่นเคลือบ", "ตู้พ่นน้ำเคลือบ", "เครื่องพ่นน้ำเคลือบ", "ตู้พ่นเคลือบเซรามิก", "ตู้พ่นเคลือบม่านน้ำ", "ห้องพ่นเคลือบ", "บูธพ่นเคลือบ", "ตู้พ่นเคลือบระบบม่านน้ำ"],
      en: ["glaze spray booth", "glaze spraying booth", "water curtain glaze booth", "ceramic glaze booth", "glaze application booth", "water curtain spray booth", "glaze spraying cabinet"],
    },
    images: [],
  },
  {
    slug: "conveyor",
    model: "PSCM-CV",
    stage: "material-handling",
    status: "made_to_order",
    order: 15,
    name: { th: "ระบบสายพานลำเลียง", en: "Conveyor System" },
    category: { th: "การลำเลียง", en: "Material Handling" },
    tags: ["conveyor", "material-handling", "ceramic-machinery", "food"],
    industries: {
      th: ["เซรามิก", "อาหาร", "คลังสินค้า"],
      en: ["Ceramics", "Food", "Warehousing"],
    },
    short: {
      th: "ลำเลียงชิ้นงานและวัตถุดิบเชื่อมระหว่างสถานีในไลน์ผลิต",
      en: "Moves parts and material between production stations.",
    },
    process: {
      th: "ออกแบบเส้นทางและความเร็วให้ไลน์ผลิตเดินต่อเนื่อง ไม่สะดุด",
      en: "Layout and speed engineered to keep the line flowing.",
    },
    features: {
      th: [
        "ออกแบบเส้นทางและความยาวให้พอดีกับผังโรงงาน",
        "ปรับความเร็วและกำลังโหลดได้ตามไลน์",
        "เลือกวัสดุสายพานได้ตามลักษณะชิ้นงาน",
      ],
      en: [
        "Path and length engineered to your floor",
        "Adjustable speed and load capacity for your line",
        "Belt material selected to suit the product",
      ],
    },
    seoKeywords: {
      th: ["สายพานลำเลียง", "ระบบลำเลียง", "conveyor"],
      en: ["conveyor system", "belt conveyor", "material handling conveyor"],
    },
    aliases: {
      th: ["สายพานลำเลียง", "ระบบสายพานลำเลียง", "คอนเวเยอร์", "เบลท์คอนเวเยอร์", "สายพานคอนเวเยอร์", "ระบบลำเลียง", "ลูกกลิ้งลำเลียง", "สกรูลำเลียง", "สายพานลำเลียงโรงงาน"],
      en: ["conveyor", "conveyor system", "belt conveyor", "belt conveyor system", "industrial conveyor", "roller conveyor", "material handling conveyor", "screw conveyor", "chain conveyor"],
    },
    images: [],
  },
  {
    slug: "spray-dryer",
    model: "PSCM-SD",
    stage: "drying",
    status: "on_request",
    order: 16,
    name: { th: "เครื่องอบพ่นฝอย", en: "Spray Dryer" },
    category: { th: "การอบแห้ง", en: "Drying" },
    tags: [
      "spray-dryer",
      "dryer",
      "drying",
      "ceramic-machinery",
      "food",
      "chemical",
    ],
    industries: {
      th: ["เซรามิก", "อาหาร", "เคมีภัณฑ์"],
      en: ["Ceramics", "Food", "Chemical"],
    },
    short: {
      th: "เปลี่ยนน้ำดินเป็นผงพร้อมอัดขึ้นรูป (granulate)",
      en: "Turns slip into press-ready granulated powder.",
    },
    process: {
      th: "ทำผงที่ไหลตัวดี ความชื้นคงที่ พร้อมเข้าเครื่องอัดแห้ง",
      en: "Produces free-flowing, stable-moisture powder for dry pressing.",
    },
    features: {
      th: [
        "เม็ดผงไหลตัวดี ป้อนเข้าเครื่องอัดแห้งได้สม่ำเสมอ",
        "คุมความชื้นปลายทางได้แม่น",
        "งานเฉพาะทาง ปรึกษาความเป็นไปได้กับเราก่อนสั่งทำ",
      ],
      en: [
        "Free-flowing granules that feed dry-press lines evenly",
        "Tight control of final moisture",
        "Specialised work. Please ask about feasibility before ordering",
      ],
    },
    seoKeywords: {
      th: ["เครื่องอบพ่นฝอย", "สเปรย์ดรายเออร์", "spray dryer"],
      en: ["spray dryer", "spray drying ceramic", "granulation dryer"],
    },
    aliases: {
      th: ["สเปรย์ดรายเออร์", "เครื่องอบแห้งแบบพ่นฝอย", "เครื่องทำผงแห้งแบบพ่นฝอย", "เครื่องทำแห้งแบบพ่นฝอย", "เครื่องอบผง", "สเปรย์ดราย", "เครื่องอบสเปรย์", "เครื่องผลิตผงแห้งจากน้ำดิน"],
      en: ["spray dryer", "spray drying machine", "spray drier", "industrial spray dryer", "ceramic spray dryer", "atomizer dryer", "slip spray dryer", "powder spray dryer"],
    },
    images: [],
  },
  {
    slug: "dryer-chamber",
    model: "PSCM-DC",
    stage: "drying",
    status: "on_request",
    order: 17,
    name: { th: "ตู้อบ/ห้องอบแห้ง", en: "Drying Chamber" },
    category: { th: "การอบแห้ง", en: "Drying" },
    tags: ["dryer", "drying", "ceramic-machinery"],
    industries: { th: ["เซรามิก"], en: ["Ceramics"] },
    short: {
      th: "อบไล่ความชื้นในชิ้นงานก่อนเข้าเตาเผา",
      en: "Dries pieces to the right moisture before firing.",
    },
    process: {
      th: "คุมอุณหภูมิและความชื้นให้ชิ้นงานแห้งทั่วถึง ลดการแตกร้าว",
      en: "Controls heat and humidity for even drying and fewer cracks.",
    },
    features: {
      th: [
        "คุมอุณหภูมิและความชื้น ของเสียจากการแตกร้าวลดลง",
        "ออกแบบขนาดและกำลังตามจำนวนชิ้นงานต่อรอบ",
        "ปรึกษาความเป็นไปได้และรายละเอียดกับเราก่อนสั่งทำ",
      ],
      en: [
        "Temperature and humidity control to cut crack losses",
        "Size and power engineered to your pieces-per-cycle",
        "Discuss requirements and feasibility before ordering",
      ],
    },
    seoKeywords: {
      th: ["ตู้อบเซรามิก", "ห้องอบแห้ง", "ceramic dryer"],
      en: ["drying chamber", "ceramic dryer", "industrial dryer"],
    },
    aliases: {
      th: ["ตู้อบ", "ห้องอบแห้ง", "ตู้อบแห้ง", "ตู้อบลมร้อน", "ตู้อบอุตสาหกรรม", "เตาอบแห้ง", "ห้องอบดิน", "ตู้อบเซรามิก", "ตู้อบไฟฟ้า"],
      en: ["drying chamber", "drying oven", "drying cabinet", "hot air oven", "industrial drying oven", "ceramic dryer", "tray dryer", "batch dryer", "drying room"],
    },
    images: [],
  },
  {
    slug: "dust-press",
    model: "PSCM-DP",
    stage: "pressing",
    status: "on_request",
    order: 18,
    name: { th: "เครื่องอัดผงแห้ง", en: "Dry / Dust Press" },
    category: { th: "การอัดแห้ง", en: "Dry Pressing" },
    tags: [
      "pressing",
      "hydraulic-press",
      "ceramic-machinery",
      "refractory",
      "abrasive",
    ],
    industries: {
      th: ["เซรามิก (กระเบื้อง)", "วัสดุทนไฟ", "วัสดุขัด"],
      en: ["Ceramics (tile)", "Refractory", "Abrasives"],
    },
    short: {
      th: "อัดผงแห้งให้เป็นชิ้นงานหนาแน่น เช่น กระเบื้องและวัสดุทนไฟ",
      en: "Compacts dry powder into dense parts like tile and refractory.",
    },
    process: {
      th: "ขึ้นรูปจากผงด้วยแรงอัดสูง ได้ความหนาแน่นและขนาดคงที่ทุกชิ้น",
      en: "Forms parts from powder under high force, with consistent density and size.",
    },
    features: {
      th: [
        "แรงอัดสูง เนื้อแน่นและขนาดเท่ากันทุกชิ้น",
        "ออกแบบแม่พิมพ์และโต๊ะรับตามผลิตภัณฑ์ของคุณ",
        "งานเฉพาะทาง ปรึกษาความเป็นไปได้กับเราก่อน",
      ],
      en: [
        "High force. Consistent density and dimension on every piece",
        "Die and bed engineered to your product",
        "Specialised work. Please discuss feasibility first",
      ],
    },
    seoKeywords: {
      th: ["เครื่องอัดผง", "เครื่องอัดกระเบื้อง", "dust press"],
      en: ["dust press", "dry press", "tile press"],
    },
    aliases: {
      th: ["เครื่องอัดผงแห้ง", "เครื่องอัดผง", "ดัสท์เพรส", "เครื่องอัดกระเบื้อง", "เครื่องอัดแห้ง", "เครื่องอัดผงเซรามิก", "เครื่องอัดผงทนไฟ", "เครื่องอัดอิฐทนไฟ"],
      en: ["dust press", "dry press", "dust pressing machine", "tile press", "ceramic dust press", "powder press", "refractory dust press", "dry powder press", "hydraulic tile press"],
    },
    images: [],
  },
  {
    slug: "kiln",
    model: "PSCM-KN",
    stage: "firing",
    status: "on_request",
    order: 19,
    name: { th: "เตาเผา", en: "Kiln" },
    category: { th: "การเผา", en: "Firing" },
    tags: ["kiln", "firing", "ceramic-machinery"],
    industries: { th: ["เซรามิก"], en: ["Ceramics"] },
    short: {
      th: "เผาชิ้นงานเซรามิกตามรอบอุณหภูมิที่ต้องการ",
      en: "Fires ceramic ware to the required temperature cycle.",
    },
    process: {
      th: "ขั้นชี้ขาดความแข็งแรงและคุณภาพผิวของชิ้นงานสุดท้าย",
      en: "The decisive stage for final strength and surface quality.",
    },
    features: {
      th: [
        "ออกแบบรอบอุณหภูมิและขนาดห้องเผาตามชิ้นงานของคุณ",
        "งานเฉพาะทาง ต้องวางแผนร่วมกัน",
        "ปรึกษาเราเพื่อประเมินความเป็นไปได้",
      ],
      en: [
        "Firing cycle and chamber size designed around your ware",
        "Specialised work. Needs joint planning",
        "Talk to us to assess feasibility",
      ],
    },
    seoKeywords: {
      th: ["เตาเผาเซรามิก", "เตาเผา", "ceramic kiln"],
      en: ["ceramic kiln", "industrial kiln", "shuttle kiln"],
    },
    aliases: {
      th: ["เตาเผา", "เตาเผาเซรามิก", "เตาเผาไฟฟ้า", "เตาเผาแก๊ส", "เตาเผาเครื่องปั้นดินเผา", "เตาเผาไฟสูง", "เตาเผาอุตสาหกรรม", "เตาอบเซรามิก", "เตาเผาเคลือบ", "เตาเผาชัทเทิล"],
      en: ["kiln", "ceramic kiln", "electric kiln", "gas kiln", "pottery kiln", "shuttle kiln", "tunnel kiln", "industrial kiln", "high temperature kiln", "firing kiln"],
    },
    images: [],
  },
  {
    slug: "potters-wheel",
    model: "PSCM-PW",
    stage: "forming",
    status: "on_request",
    order: 20,
    name: { th: "แป้นหมุนปั้น", en: "Potter's Wheel" },
    category: { th: "การขึ้นรูปด้วยมือ", en: "Hand Forming" },
    tags: ["potters-wheel", "forming", "ceramic-machinery"],
    industries: {
      th: ["งานปั้นสตูดิโอ", "การศึกษา/เซรามิก"],
      en: ["Studio pottery", "Education / ceramics"],
    },
    short: {
      th: "แป้นหมุนสำหรับงานปั้นมือ ทั้งสตูดิโอและสถานศึกษา",
      en: "A throwing wheel for studios, schools, and hand work.",
    },
    process: {
      th: "รองรับงานปั้นปริมาณน้อยถึงปานกลาง และงานสอน",
      en: "Suits small-to-medium throwing and teaching.",
    },
    features: {
      th: [
        "ปรับความเร็วและทิศทางหมุนได้ตามผู้ใช้",
        "โครงมั่นคง เสียงเงียบ เหมาะกับห้องเรียนและสตูดิโอ",
        "สอบถามรุ่นที่กำลังผลิตอยู่ตอนนั้นได้เลย",
      ],
      en: [
        "Adjustable speed and direction to suit the potter",
        "Stable and quiet. Right for classrooms and studios",
        "Ask us which models we have running",
      ],
    },
    seoKeywords: {
      th: ["แป้นหมุนปั้น", "แป้นหมุนเซรามิก", "potters wheel"],
      en: ["potters wheel", "pottery wheel", "throwing wheel"],
    },
    aliases: {
      th: ["แป้นหมุน", "แป้นหมุนปั้นดิน", "แป้นหมุนไฟฟ้า", "แป้นปั้นไฟฟ้า", "แป้นหมุนเซรามิก", "แป้นปั้น", "แป้นหมุนปั้นเซรามิก", "แป้นหมุนเครื่องปั้นดินเผา", "พ็อตเตอร์วีล"],
      en: ["potter's wheel", "potters wheel", "pottery wheel", "electric pottery wheel", "ceramic wheel", "throwing wheel", "studio pottery wheel"],
    },
    images: [],
  },
];

export const featuredMachines = machines
  .filter((m) => m.featured)
  .sort((a, b) => a.order - b.order);

export const machinesByStage = (stage: Stage) =>
  machines.filter((m) => m.stage === stage).sort((a, b) => a.order - b.order);

export const machineBySlug = (slug: string) =>
  machines.find((m) => m.slug === slug);

/**
 * Returns the most-searched name for a machine — aliases[locale][0]
 * if aliases exist, otherwise the formal `name`. Use for surfaces
 * that should match what real buyers type into search (card titles,
 * search results). Keep formal `name` for SEO title tags, JSON-LD,
 * breadcrumb, H1, anywhere the canonical name matters.
 */
export const machinePopularName = (m: Machine, locale: Locale) =>
  m.aliases?.[locale]?.[0] ?? m.name[locale];

export const allStages: Stage[] = [
  "crushing",
  "grinding",
  "mixing",
  "filtering",
  "purification",
  "forming",
  "pressing",
  "glazing",
  "drying",
  "firing",
  "material-handling",
];
