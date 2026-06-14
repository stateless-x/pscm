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
  // Spec rows shown as a "typical industry range" table. These are NOT
  // fixed PSCM specs (the company builds to-order). The page renders a
  // visible note saying so. Values that genuinely can't be one number
  // (rpm vs diameter, throughput vs fineness) say "ตามการใช้งาน /
  // per application" instead of a misleading single figure.
  specs?: { label: Bi; value: Bi }[];
  // 3 honest Q&A per machine. No price / delivery / warranty /
  // certification (we don't have those). Rendered on-page AND as
  // FAQPage JSON-LD for rich-result eligibility.
  faq?: { q: Bi; a: Bi }[];
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
    description: {
      th: "บอลมิล (Ball Mill) หรือหม้อบด คือเครื่องบดที่ใช้ลูกบด (grinding media) กลิ้งและกระแทกวัตถุดิบในถังหมุน จนได้ความละเอียดระดับไมครอนอย่างสม่ำเสมอ ในงานเซรามิกใช้บดและผสมน้ำดิน น้ำเคลือบ และวัตถุดิบแห้ง ความละเอียดที่นิ่งทุกแบทช์ช่วยให้ชิ้นงานคุณภาพคงที่และลดของเสียในสายการผลิต เพชรเกษมจักรกลซีรามิครับสร้างหม้อบดหลายขนาดให้พอดีกับกำลังผลิตจริงของโรงงาน พร้อมดูแลและทำอะไหล่เองในโรงงาน",
      en: "A ball mill is a grinding machine that tumbles grinding media inside a rotating drum to reduce raw material to a uniform, micron-level fineness. In ceramics it grinds and blends slip, glaze, and dry materials, where consistent batch-to-batch fineness keeps finished-piece quality stable and cuts scrap on the production line. Phetkasem Ceramic Machinery builds ball mills sized to your real throughput, with parts and servicing handled in-house.",
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
    specs: [
      {
        label: { th: "ความจุถัง", en: "Jar capacity" },
        value: {
          th: "1–10 ลิตร (แล็บ/สตูดิโอ), 50–500 ลิตร (โรงงานเล็ก), 1,000–5,000 ลิตร (โรงงานกลาง)",
          en: "1–10 L (lab/studio), 50–500 L (small factory), 1,000–5,000 L (mid factory)",
        },
      },
      {
        label: { th: "ขนาดป้อน", en: "Feed size" },
        value: { th: "≤ 10–25 มม.", en: "≤ 10–25 mm" },
      },
      {
        label: { th: "ความละเอียด", en: "Output fineness" },
        value: {
          th: "200–325 เมช (≈ 45–74 ไมครอน)",
          en: "200–325 mesh (≈ 45–74 micron)",
        },
      },
      {
        label: { th: "รอบหมุนถัง", en: "Drum speed" },
        value: {
          th: "ตามขนาดถัง: 20–45 รอบ/นาที (ถังใหญ่), 60–80 รอบ/นาที (ถังเล็ก)",
          en: "Per drum size: 20–45 rpm (large), 60–80 rpm (small)",
        },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: {
          th: "0.5–3 kW (เล็ก), 5.5–37 kW (กลาง)",
          en: "0.5–3 kW (small), 5.5–37 kW (mid)",
        },
      },
      {
        label: { th: "ลูกบด", en: "Grinding media" },
        value: {
          th: "ลูกอลูมินา หรือหินซิลิกา/ฟลินต์, 30–60 มม.",
          en: "Alumina balls or silica/flint pebbles, 30–60 mm",
        },
      },
    ],
    faq: [
      {
        q: { th: "หม้อบด/บอลมิล มีขนาดให้เลือกเท่าไหร่บ้าง?", en: "What sizes of ball mill do you build?" },
        a: {
          th: "เรารับสร้างหลายขนาด ตั้งแต่ถังเล็กระดับสตูดิโอไปจนถึงถังโรงงานหลายพันลิตร ขนาดที่เหมาะสมขึ้นกับกำลังผลิตและพื้นที่ติดตั้งของคุณ บอกความต้องการมา เราออกแบบให้พอดี",
          en: "We build a wide range, from small studio jars to factory drums of several thousand litres. The right size depends on your throughput and floor space. Tell us your needs and we size it to fit.",
        },
      },
      {
        q: { th: "ใช้ลูกบดแบบไหน และเปลี่ยนเองได้ไหม?", en: "What grinding media does it use, and can we replace it ourselves?" },
        a: {
          th: "ส่วนใหญ่ใช้ลูกบดอลูมินาหรือหินซิลิกา/ฟลินต์ เลือกตามวัตถุดิบและความละเอียดที่ต้องการ ลูกบดเป็นวัสดุสิ้นเปลืองที่เติมหรือเปลี่ยนได้เอง เราช่วยแนะนำชนิดและขนาดที่เหมาะกับงานของคุณ",
          en: "Most use alumina balls or silica/flint pebbles, chosen for your material and target fineness. Media is a consumable you can top up or swap yourself, and we advise on the type and size that suits your work.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply spare parts and repair service?" },
        a: {
          th: "มี อะไหล่หม้อบดเราผลิตเองในโรงงาน และทีมช่างชุดเดียวกับที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. We make ball mill parts in-house, and the same team that builds the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
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
    images: ["/machines/ball-mill.webp"],
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
    description: {
      th: "ฟิลเตอร์เพรส (Filter Press) หรือเครื่องอัดกรอง คือเครื่องรีดน้ำที่อัดน้ำดินผ่านผ้ากรองระหว่างแผ่นเพลท แรงดันจะดันน้ำออกและเหลือเนื้อดินเป็นแผ่น (cake) ที่ความชื้นสม่ำเสมอ พร้อมส่งเข้าขั้นขึ้นรูปทันที ในงานเซรามิกช่วยให้สายการผลิตเดินต่อเนื่องและคุมคุณภาพได้คงที่ นอกจากเซรามิกยังใช้รีดตะกอนในงานบำบัดน้ำเสีย เหมืองแร่ และเคมีภัณฑ์ เพชรเกษมจักรกลซีรามิครับสร้างตามจำนวนแผ่นและขนาดที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A filter press is a dewatering machine that forces slip through filter cloths between plates, squeezing water out and leaving an even-moisture clay cake ready for forming. In ceramics it keeps the production line moving with stable, repeatable quality, and it is equally used for sludge dewatering in wastewater, mining, and chemical work. Phetkasem Ceramic Machinery builds filter presses to your required plate count and size, with parts and repair handled in-house.",
    },
    features: {
      th: [
        "รีดน้ำได้จริง ความชื้นเท่ากันทุกแผ่น",
        "โครงสร้างทนแรงดันสูง ใช้งานได้ยาว",
        "เลือกจำนวนแผ่นและขนาดได้ตามที่โรงงานต้องการ",
        "อะไหล่ผลิตเองในโรงงาน ทีมที่สร้างคือทีมที่ซ่อมให้",
      ],
      en: [
        "Real dewatering, with even moisture across every cake",
        "High-pressure build for a long service life",
        "Plate count and size made to your spec",
        "Parts made in-house. The team that built it also repairs it.",
      ],
    },
    specs: [
      {
        label: { th: "ขนาดแผ่นกรอง", en: "Plate size" },
        value: {
          th: "470×470, 630×630, 800×800 มม. (เล็ก-กลาง); สตูดิโอ 320×320, สูงสุด ~1000×1000",
          en: "470×470, 630×630, 800×800 mm (small-mid); studio 320×320, up to ~1000×1000",
        },
      },
      {
        label: { th: "จำนวนแผ่น", en: "Number of plates" },
        value: { th: "10–60 แผ่น (แล็บ 6–8 แผ่น)", en: "10–60 plates (lab 6–8)" },
      },
      {
        label: { th: "พื้นที่กรอง", en: "Filtration area" },
        value: {
          th: "ตามขนาดแผ่น × จำนวนแผ่น (≈ 2–80 ตร.ม.)",
          en: "Per plate size × count (≈ 2–80 m²)",
        },
      },
      {
        label: { th: "แรงดันกรอง", en: "Filtration pressure" },
        value: {
          th: "6–16 bar (น้ำดินเซรามิกทั่วไป 8–12 bar)",
          en: "6–16 bar (ceramic slip typically 8–12 bar)",
        },
      },
      {
        label: { th: "กำลังปั๊ม/มอเตอร์", en: "Pump / motor power" },
        value: { th: "2.2–11 kW", en: "2.2–11 kW" },
      },
    ],
    faq: [
      {
        q: { th: "เครื่องอัดกรองเลือกขนาดและจำนวนแผ่นได้ไหม?", en: "Can we choose the plate size and number of plates?" },
        a: {
          th: "ได้ เรารับสร้างตามจำนวนแผ่นและขนาดที่โรงงานต้องการ ขึ้นกับปริมาณน้ำดินที่ต้องรีดต่อรอบและพื้นที่ติดตั้ง บอกความต้องการมา เราคำนวณและออกแบบให้พอดี",
          en: "Yes. We build to your required plate count and size, based on how much slip you need to dewater per cycle and your floor space. Tell us your needs and we size it for you.",
        },
      },
      {
        q: { th: "ใช้รีดตะกอนงานอื่นนอกจากเซรามิกได้ไหม?", en: "Can it dewater sludge beyond ceramics?" },
        a: {
          th: "ได้ หลักการเดียวกันใช้รีดตะกอนในงานบำบัดน้ำเสีย เหมืองแร่ และเคมีภัณฑ์ เพียงเลือกผ้ากรองและวัสดุให้เหมาะกับงาน ปรึกษาเราเพื่อประเมินความเหมาะสม",
          en: "Yes. The same principle dewaters sludge in wastewater, mining, and chemical work; you just match the filter cloth and materials to the duty. Talk to us to assess fit.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
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
    images: ["/machines/filter-press.webp"],
  },
  {
    slug: "grinder",
    model: "PSCM-GR",
    stage: "grinding",
    status: "available",
    order: 5,
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
    description: {
      th: "เครื่องบด (Grinder) คือเครื่องลดขนาดวัตถุดิบเซรามิกให้ได้ขนาดที่ต้องการก่อนเข้าขั้นบดละเอียดหรือผสม รับงานต่อเนื่องและงานหนักในโรงงานจริงได้ ปรับขนาดและกำลังให้เหมาะกับชนิดวัตถุดิบที่ใช้ การคุมขนาดอนุภาคตั้งแต่ต้นทางช่วยให้ขั้นตอนถัดไปทำงานนิ่งและของเสียน้อยลง เพชรเกษมจักรกลซีรามิครับสร้างตามกำลังผลิตจริงของโรงงาน พร้อมดูแลและทำอะไหล่เองในโรงงาน",
      en: "A grinder is a machine that reduces ceramic raw materials to the size you need before fine milling or mixing. Built for continuous, heavy factory use, it is sized and powered to the material you actually run. Controlling particle size early keeps downstream stages stable and cuts scrap. Phetkasem Ceramic Machinery builds grinders to your real throughput, with parts and servicing handled in-house.",
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
    specs: [
      {
        label: { th: "กำลังการผลิต", en: "Throughput" },
        value: {
          th: "50–500 กก./ชม. (เล็ก), 0.5–5 ตัน/ชม. (โรงงาน)",
          en: "50–500 kg/h (small), 0.5–5 t/h (factory)",
        },
      },
      {
        label: { th: "ขนาดป้อน", en: "Feed size" },
        value: { th: "≤ 20–50 มม.", en: "≤ 20–50 mm" },
      },
      {
        label: { th: "ขนาดผลผลิต", en: "Output size" },
        value: {
          th: "0.1–3 มม. (หยาบ-กลาง); รุ่นละเอียดถึง 100–200 เมช",
          en: "0.1–3 mm (coarse-mid); fine units to 100–200 mesh",
        },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "1.5–4 kW (เล็ก), 7.5–30 kW (โรงงาน)", en: "1.5–4 kW (small), 7.5–30 kW (factory)" },
      },
    ],
    faq: [
      {
        q: { th: "เครื่องบดรับวัตถุดิบขนาดเท่าไหร่ และบดได้ละเอียดแค่ไหน?", en: "What feed size does it take, and how fine does it grind?" },
        a: {
          th: "รับป้อนได้ถึงราว 20–50 มม. และบดได้ตั้งแต่หยาบจนถึงละเอียด ขึ้นกับชนิดเครื่องบดและตะแกรงที่ใช้ บอกวัตถุดิบและขนาดผลผลิตที่ต้องการ เราเลือกแบบที่เหมาะให้",
          en: "It accepts feed up to roughly 20–50 mm and grinds from coarse to fine depending on the grinder type and screen. Tell us your material and target output size and we match the right setup.",
        },
      },
      {
        q: { th: "บดต่อเนื่องงานหนักได้ไหม?", en: "Can it run continuously under heavy load?" },
        a: {
          th: "ได้ เราสร้างโครงสร้างให้แน่นและเลือกกำลังมอเตอร์ให้เหมาะกับวัตถุดิบที่ใช้จริง รับงานต่อเนื่องในโรงงานได้ และดูแลรักษาง่าย",
          en: "Yes. We build a solid frame and size the motor to the material you actually run, so it handles continuous factory operation and stays easy to maintain.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องบดเซรามิก", "เครื่องบดวัตถุดิบ", "grinder เซรามิก"],
      en: ["ceramic grinder", "material grinder", "grinding machine Thailand"],
    },
    aliases: {
      th: ["เครื่องบด", "เครื่องบดวัตถุดิบ", "เครื่องบดละเอียด", "เครื่องบดเซรามิก", "เครื่องโม่", "เครื่องบดผง", "เครื่องบดแร่", "เครื่องบดวัตถุดิบเซรามิก", "เครื่องตีป่น"],
      en: ["grinder", "grinding machine", "raw material grinder", "ceramic grinder", "industrial grinder", "fine grinder", "pulverizer", "material grinder"],
    },
    images: ["/machines/grinder.webp"],
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
    description: {
      th: "ตะแกรงแม่เหล็ก (Magnetic Sieve) คือเครื่องคัดแยกที่ใช้สนามแม่เหล็กดักเศษเหล็กและสิ่งปนเปื้อนออกจากน้ำดินและน้ำเคลือบ เศษเหล็กแม้เล็กน้อยคือต้นเหตุของจุดด่างและรอยตำหนิหลังเผา การดักไว้ตั้งแต่ต้นทางจึงทำให้เนื้อดินและเคลือบสะอาด คุณภาพชิ้นงานนิ่ง และของเสียลดลง ออกแบบให้ถอดล้างและบำรุงรักษาง่าย เพชรเกษมจักรกลซีรามิครับสร้างตามขนาดที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A magnetic sieve is a separator that uses a magnetic field to pull iron particles and contaminants out of slip and glaze. Even tiny iron specks cause blemishes and defects after firing, so catching them upstream keeps slip and glaze clean, holds piece quality steady, and cuts scrap. It is designed for easy removal, cleaning, and upkeep. Phetkasem Ceramic Machinery builds magnetic sieves to your required size, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ความแรงสนามแม่เหล็ก", en: "Magnetic field strength" },
        value: {
          th: "3,000–12,000 เกาส์ (แม่เหล็กถาวร); รุ่นแรงสูงถึง 1.5–2 เทสลา",
          en: "3,000–12,000 Gauss (permanent); high-intensity to 1.5–2 T",
        },
      },
      {
        label: { th: "อัตราการไหล", en: "Flow rate" },
        value: {
          th: "ตามความข้นของน้ำดิน (≈ 0.5–10 ลบ.ม./ชม.)",
          en: "Per slip viscosity (≈ 0.5–10 m³/h)",
        },
      },
      {
        label: { th: "ขนาดท่อเข้า", en: "Inlet diameter" },
        value: { th: '1–4 นิ้ว (ทั่วไป 2"–3")', en: '1–4 inch (commonly 2"–3")' },
      },
      {
        label: { th: "ชนิดแม่เหล็ก", en: "Magnet type" },
        value: {
          th: "แม่เหล็กถาวร (NdFeB) หรือไฟฟ้า (ปรับความแรงได้)",
          en: "Permanent (NdFeB) or electromagnetic (adjustable)",
        },
      },
    ],
    faq: [
      {
        q: { th: "ดักเศษเหล็กได้ดีแค่ไหน?", en: "How well does it catch iron specks?" },
        a: {
          th: "ดักเศษเหล็กและสิ่งปนเปื้อนที่เป็นแม่เหล็กได้ตั้งแต่ต้นทาง ความแรงของสนามแม่เหล็กเลือกได้ตามความละเอียดที่ต้องการ ยิ่งน้ำดินสะอาด ของเสียจากจุดด่างหลังเผายิ่งลด",
          en: "It catches magnetic iron and contaminants upstream, and the field strength is chosen to your required level. The cleaner the slip, the fewer blemish defects after firing.",
        },
      },
      {
        q: { th: "ล้างทำความสะอาดยากไหม?", en: "Is it hard to clean?" },
        a: {
          th: "ไม่ยาก เราออกแบบให้ถอดล้างและบำรุงรักษาง่าย เพราะต้องล้างเศษเหล็กที่ดักไว้เป็นรอบๆ ตามปริมาณการใช้งาน",
          en: "No. We design it for easy removal and cleaning, since the trapped iron needs clearing on a regular cycle based on your usage.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
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
    images: ["/machines/magnetic-sieve.webp"],
  },

  // === CROSS-INDUSTRY HERO ===
  {
    slug: "hydraulic-press",
    model: "PSCM-HP",
    stage: "pressing",
    status: "made_to_order",
    order: 3,
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
    description: {
      th: "เครื่องอัดไฮดรอลิก (Hydraulic Press) หรือไฮดรอลิคเพรส คือเครื่องอัดขึ้นรูปที่ใช้แรงดันน้ำมันสร้างแรงกดสูงและคงที่ ทำให้ชิ้นงานแน่นและขนาดเท่ากันทุกใบ ใช้ได้หลายอุตสาหกรรม ไม่จำกัดแค่เซรามิก ตั้งแต่วัสดุทนไฟ อิฐ/บล็อก วัสดุขัด ไปจนถึงงานโลหะ สั่งกำลังอัด (ตัน) และขนาดโต๊ะได้ตามงานจริง เพชรเกษมจักรกลซีรามิครับสร้างและดูแลระบบไฮดรอลิกเองทั้งหมด พร้อมทำอะไหล่และซ่อมในโรงงาน",
      en: "A hydraulic press is a forming machine that uses fluid pressure to deliver high, steady force, producing dense parts with consistent dimensions piece after piece. It works well beyond ceramics: refractory, brick and block, abrasives, and even metalworking. Tonnage and bed size are engineered to the job. Phetkasem Ceramic Machinery builds and services the entire hydraulic system in-house, including parts and repair.",
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
    specs: [
      {
        label: { th: "แรงอัด", en: "Pressing force" },
        value: { th: "20–630 ตัน", en: "20–630 tonnes" },
      },
      {
        label: { th: "ขนาดโต๊ะ", en: "Table / bed size" },
        value: {
          th: "ตามชิ้นงาน (≈ 300×300 ถึง 1000×1000 มม.)",
          en: "Per part (≈ 300×300 to 1000×1000 mm)",
        },
      },
      {
        label: { th: "ระยะกด (สโตรก)", en: "Stroke" },
        value: { th: "100–500 มม.", en: "100–500 mm" },
      },
      {
        label: { th: "แรงดันระบบ", en: "System pressure" },
        value: { th: "200–315 bar (ทั่วไป 250 bar)", en: "200–315 bar (typically 250)" },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "4–30 kW (ตามแรงอัด)", en: "4–30 kW (per tonnage)" },
      },
    ],
    faq: [
      {
        q: { th: "เลือกแรงอัด (ตัน) และขนาดโต๊ะได้ไหม?", en: "Can we choose the tonnage and table size?" },
        a: {
          th: "ได้ เราออกแบบกำลังอัดและขนาดโต๊ะให้ตามชิ้นงานและแม่พิมพ์ที่ใช้จริง บอกชนิดงานและขนาดชิ้นงานมา เราคำนวณแรงอัดที่เหมาะให้",
          en: "Yes. We engineer the tonnage and bed size to your part and die. Tell us the job and part size and we calculate the right pressing force.",
        },
      },
      {
        q: { th: "ใช้กับงานอื่นนอกจากเซรามิกได้ไหม?", en: "Can it be used beyond ceramics?" },
        a: {
          th: "ได้ เครื่องอัดไฮดรอลิกใช้ข้ามอุตสาหกรรมได้ ทั้งวัสดุทนไฟ อิฐ/บล็อก วัสดุขัด ไปจนถึงงานโลหะ แค่ออกแบบแม่พิมพ์และแรงอัดให้เหมาะกับงาน",
          en: "Yes. A hydraulic press is cross-industry: refractory, brick and block, abrasives, and metalwork, as long as the die and force are engineered to the job.",
        },
      },
      {
        q: { th: "ระบบไฮดรอลิกซ่อมยากไหม มีอะไหล่ไหม?", en: "Is the hydraulic system hard to service, and are parts available?" },
        a: {
          th: "เราสร้างและดูแลระบบไฮดรอลิกเองทั้งหมด อะไหล่ผลิตและจัดหาเองในโรงงาน ทีมที่สร้างคือทีมที่ซ่อมให้ ติดต่อเราได้โดยตรง",
          en: "We build and service the entire hydraulic system ourselves, with parts made and sourced in-house. The team that builds it repairs it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องอัดไฮดรอลิก", "ไฮดรอลิคเพรส", "เครื่องอัดขึ้นรูป"],
      en: ["hydraulic press", "hydraulic press Thailand", "forming press"],
    },
    aliases: {
      th: ["เครื่องอัดไฮดรอลิก", "เครื่องอัดไฮดรอลิค", "เครื่องอัดไฮโดรลิค", "แท่นอัดไฮดรอลิก", "ไฮดรอลิคเพรส", "เครื่องเพรสไฮดรอลิก", "เครื่องอัดน้ำมัน", "เครื่องอัดแรงดันสูง", "เครื่องกดไฮดรอลิก"],
      en: ["hydraulic press", "hydraulic press machine", "tile hydraulic press", "shop press", "h-frame press", "industrial hydraulic press", "refractory hydraulic press", "ceramic hydraulic press"],
    },
    images: ["/machines/hydraulic-press.webp"],
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
    description: {
      th: "เครื่องรีดดิน (Pug Mill) หรือพักมิล คือเครื่องนวดและรีดเนื้อดินให้เนียนเป็นเนื้อเดียว พร้อมระบบสุญญากาศไล่ฟองอากาศออกจากเนื้อดิน ฟองอากาศที่ค้างอยู่คือต้นเหตุของการแตกร้าวตอนเผา การไล่ออกตั้งแต่ก่อนขึ้นรูปจึงช่วยลดของเสียที่หน้าเตาได้มาก เนื้อดินที่ออกมาสม่ำเสมอตลอดแท่ง ป้อนเข้าขั้นขึ้นรูปได้ทันที เพชรเกษมจักรกลซีรามิครับสร้างตามขนาดและกำลังของสายการผลิตคุณ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A de-airing pug mill kneads and extrudes clay into a smooth, uniform body while a vacuum system pulls trapped air out. Air pockets are a main cause of cracking during firing, so removing them before forming sharply cuts kiln losses. The pug comes out even along its whole length, ready to feed the forming stage. Phetkasem Ceramic Machinery builds pug mills sized and powered to your line, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "กำลังการผลิต", en: "Output capacity" },
        value: {
          th: "100–800 กก./ชม. (สตูดิโอ 100–250, โรงงาน 300–800)",
          en: "100–800 kg/h (studio 100–250, factory 300–800)",
        },
      },
      {
        label: { th: "ระดับสุญญากาศ", en: "Vacuum level" },
        value: { th: "−85 ถึง −95 kPa (≈ −0.85 ถึง −0.95 bar)", en: "−85 to −95 kPa (≈ −0.85 to −0.95 bar)" },
      },
      {
        label: { th: "เส้นผ่านศูนย์กลางเกลียว", en: "Auger diameter" },
        value: { th: "50–120 มม. (ทั่วไป 75–100)", en: "50–120 mm (commonly 75–100)" },
      },
      {
        label: { th: "หัวรีด (นอซเซิล)", en: "Extrusion nozzle" },
        value: {
          th: "ตามแม่พิมพ์/ดาย (เปลี่ยนได้)",
          en: "Per die set (interchangeable)",
        },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: {
          th: "0.75–7.5 kW (มอเตอร์ปั๊มสุญญากาศ 0.18–0.75 kW)",
          en: "0.75–7.5 kW (vacuum-pump motor 0.18–0.75 kW)",
        },
      },
    ],
    faq: [
      {
        q: { th: "ระบบสุญญากาศช่วยเรื่องอะไร?", en: "What does the vacuum system do?" },
        a: {
          th: "ไล่ฟองอากาศออกจากเนื้อดินก่อนขึ้นรูป ฟองอากาศที่ค้างคือต้นเหตุของการแตกร้าวตอนเผา การไล่ออกตั้งแต่ต้นจึงช่วยลดของเสียที่หน้าเตาได้มาก",
          en: "It removes trapped air from the clay before forming. Air pockets are a main cause of cracking during firing, so de-airing early sharply cuts kiln losses.",
        },
      },
      {
        q: { th: "เลือกกำลังผลิตและขนาดได้ไหม?", en: "Can we choose the output and size?" },
        a: {
          th: "ได้ เรารับสร้างตามขนาดและกำลังของสายการผลิตคุณ ตั้งแต่เครื่องเล็กระดับสตูดิโอไปจนถึงกำลังผลิตโรงงาน บอกปริมาณงานต่อชั่วโมงที่ต้องการมา",
          en: "Yes. We build sized and powered to your line, from small studio units to factory output. Tell us the kilograms-per-hour you need.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องรีดดิน", "เครื่องนวดดิน", "pug mill"],
      en: ["pug mill", "de-airing pug mill", "clay extruder"],
    },
    aliases: {
      th: ["เครื่องรีดดิน", "เครื่องรีดดินสุญญากาศ", "พักมิล", "เครื่องนวดดิน", "เครื่องอัดคลุกผสม", "เครื่องรีดดินเหนียว", "เครื่องผสมดิน", "เครื่องอัดดิน", "vacuum pug mill"],
      en: ["pug mill", "de-airing pug mill", "vacuum pug mill", "clay extruder", "clay pug mill", "pugmill", "clay mixer extruder", "brick pug mill"],
    },
    images: ["/machines/pug-mill.webp"],
  },
  {
    slug: "blunger",
    model: "PSCM-BL",
    stage: "mixing",
    status: "made_to_order",
    order: 11,
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
    description: {
      th: "เครื่องกวนน้ำดิน (Blunger) หรือบลังเจอร์ คือเครื่องกวนผสมที่ตีวัตถุดิบกับน้ำให้เป็นน้ำดิน (slip) เนื้อเดียวกันทั่วทั้งถัง ใบกวนออกแบบให้หมุนทั่วถึง ไม่มีจุดอับ น้ำดินที่ผสมสม่ำเสมอช่วยให้ขั้นกรองหรือบดต่อไปทำงานนิ่งและคุณภาพคงที่ วัสดุภายในทนการกัดกร่อนจากน้ำดิน อยู่ได้ยาว เลือกความจุและกำลังมอเตอร์ได้ตามแบทช์ เพชรเกษมจักรกลซีรามิครับสร้างตามที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A blunger, or slip mixer, agitates raw material and water into a uniform slip throughout the whole tank. Its impeller is designed to reach every part of the vessel with no dead zones, and the even mix keeps the next filtering or milling stage stable and consistent. Wetted parts resist slip corrosion for long life, and capacity and motor power are sized to your batch. Phetkasem Ceramic Machinery builds blungers to spec, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ความจุถัง", en: "Tank capacity" },
        value: {
          th: "100 ลิตร – 5 ลบ.ม. (สตูดิโอ 100–500 ล., โรงงาน 1–5 ลบ.ม.)",
          en: "100 L – 5 m³ (studio 100–500 L, factory 1–5 m³)",
        },
      },
      {
        label: { th: "ความเร็วใบกวน", en: "Impeller speed" },
        value: {
          th: "ตามชนิดใบกวน (ใบกระจาย 200–700 รอบ/นาที)",
          en: "Per impeller type (dispersion blade 200–700 rpm)",
        },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: {
          th: "1.5–5.5 kW (<1 ลบ.ม.), 7.5–22 kW (หลาย ลบ.ม.)",
          en: "1.5–5.5 kW (<1 m³), 7.5–22 kW (multi-m³)",
        },
      },
    ],
    faq: [
      {
        q: { th: "กวนน้ำดินให้เข้ากันทั่วถังจริงไหม?", en: "Does it really mix the slip evenly throughout the tank?" },
        a: {
          th: "ใบกวนเราออกแบบให้หมุนทั่วถึงทั้งถัง ไม่มีจุดอับ น้ำดินที่ผสมสม่ำเสมอช่วยให้ขั้นกรองหรือบดต่อไปทำงานนิ่งและคุณภาพคงที่",
          en: "Our impeller is designed to reach the whole tank with no dead zones. An even slip keeps the next filtering or milling stage stable and consistent.",
        },
      },
      {
        q: { th: "เลือกขนาดถังและกำลังได้ไหม?", en: "Can we choose the tank size and power?" },
        a: {
          th: "ได้ เลือกความจุและกำลังมอเตอร์ได้ตามแบทช์ของคุณ ตั้งแต่ถังเล็กระดับสตูดิโอไปจนถึงหลายลูกบาศก์เมตร วัสดุภายในเลือกให้ทนการกัดกร่อนจากน้ำดิน",
          en: "Yes. Capacity and motor power are sized to your batch, from small studio tanks to several cubic metres, with wetted parts chosen to resist slip corrosion.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องกวนน้ำดิน", "เครื่องผสมน้ำดิน", "blunger"],
      en: ["blunger", "slip mixer", "slip agitator"],
    },
    aliases: {
      th: ["เครื่องกวนน้ำดิน", "เครื่องกวนสลิป", "เครื่องผสมน้ำดิน", "ถังกวนน้ำดิน", "เครื่องกวนเคลือบ", "บลังเจอร์", "เครื่องปั่นน้ำดิน", "เครื่องกวนน้ำเคลือบ"],
      en: ["blunger", "slip mixer", "slurry mixer", "slip blunger", "ceramic slurry agitator", "slip agitator", "propeller mixer", "slip stirrer"],
    },
    images: ["/machines/blunger.webp"],
  },
  {
    slug: "jigger-roller",
    model: "PSCM-JR",
    stage: "forming",
    status: "made_to_order",
    order: 14,
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
    description: {
      th: "เครื่องจิกเกอร์ (Jigger) หรือเครื่องโรลเลอร์เฮด (Roller-Head) คือเครื่องขึ้นรูปงานทรงกลม เช่น จาน ชาม และภาชนะ โดยกดเนื้อดินกับแม่พิมพ์ที่หมุนอยู่ ให้ได้ความหนาผนังเท่ากันทุกใบ รอบการทำงานเร็ว เหมาะกับการผลิตจำนวนมาก และใช้กับแม่พิมพ์เดิมที่โรงงานมีอยู่ได้ ช่วยเพิ่มกำลังผลิตงานทรงกลมโดยคุณภาพเท่ากันทุกใบทุกแบทช์ เพชรเกษมจักรกลซีรามิครับสร้างตามงานจริงของคุณ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A jigger or roller-head machine forms round ware (plates, bowls, and dishes) by pressing clay against a rotating mould to produce uniform wall thickness every time. Its fast cycle suits volume production, and it works with the moulds your factory already uses. It scales up round-ware output while keeping piece-to-piece and batch-to-batch quality consistent. Phetkasem Ceramic Machinery builds jigger machines to your needs, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ขนาดชิ้นงานสูงสุด", en: "Max ware diameter" },
        value: { th: "100–400 มม.", en: "100–400 mm" },
      },
      {
        label: { th: "กำลังผลิต", en: "Output" },
        value: {
          th: "ตามชิ้นงาน: 200–800 ชิ้น/ชม. (มือ 120–300, กึ่งอัตโนมัติ 400–800+)",
          en: "Per ware: 200–800 pcs/h (manual 120–300, semi-auto 400–800+)",
        },
      },
      {
        label: { th: "ความเร็วแกนหมุน", en: "Spindle speed" },
        value: { th: "0–400 รอบ/นาที (ปรับได้)", en: "0–400 rpm (variable)" },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "0.37–2.2 kW", en: "0.37–2.2 kW" },
      },
    ],
    faq: [
      {
        q: { th: "ขึ้นรูปงานอะไรได้บ้าง?", en: "What ware can it form?" },
        a: {
          th: "เหมาะกับงานทรงกลม เช่น จาน ชาม และภาชนะ ได้ความหนาผนังเท่ากันทุกใบ รอบเร็ว เหมาะกับการผลิตจำนวนมาก งานทรงไม่กลมแนะนำใช้แรมเพรสแทน",
          en: "It suits round ware such as plates, bowls, and dishes, with uniform wall thickness and a fast cycle for volume work. For non-round shapes a ram press is the better fit.",
        },
      },
      {
        q: { th: "ใช้กับแม่พิมพ์เดิมที่มีอยู่ได้ไหม?", en: "Can it use the moulds we already have?" },
        a: {
          th: "ได้ในหลายกรณี เราออกแบบให้ใช้กับแม่พิมพ์ที่โรงงานมีอยู่ได้ ส่งรายละเอียดแม่พิมพ์มาให้เราตรวจสอบความเข้ากันได้ก่อน",
          en: "Often yes. We design it to work with moulds your factory already uses; send us your mould details so we can check compatibility first.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องขึ้นรูปจิกเกอร์", "เครื่องขึ้นรูปจาน", "jigger machine"],
      en: ["jigger machine", "roller head machine", "plate forming machine"],
    },
    aliases: {
      th: ["เครื่องจิกเกอร์", "เครื่องโรลเลอร์", "จิกเกอร์", "เครื่องขึ้นรูปจาน", "เครื่องขึ้นรูปชาม", "เครื่องขึ้นรูปด้วยใบมีด", "เครื่องโรลเลอร์เฮด", "เครื่องขึ้นรูปจิกเกอร์", "เครื่องขึ้นรูปถ้วยชาม"],
      en: ["jigger machine", "roller head machine", "jiggering machine", "roller machine ceramic", "jigger roller", "plate forming machine", "bowl forming machine", "ceramic forming machine"],
    },
    images: ["/machines/jigger-roller.webp"],
  },
  {
    slug: "ram-press",
    model: "PSCM-RP",
    stage: "pressing",
    status: "made_to_order",
    order: 13,
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
    description: {
      th: "แรมเพรส (Ram Press) คือเครื่องอัดขึ้นรูปที่ใช้แม่พิมพ์คู่บน-ล่างกับแรงอัดสูง ขึ้นรูปงานที่จิกเกอร์ทำไม่ได้ เช่น จานเหลี่ยม ถาด และงานทรงพิเศษหรือชิ้นหนา แรงอัดที่นิ่งทำให้เนื้อแน่นและขนาดเท่ากันทุกชิ้น สั่งกำลังอัดและขนาดโต๊ะได้ตามแม่พิมพ์ที่ใช้จริง ใช้ได้ทั้งงานเซรามิกและวัสดุทนไฟ เพชรเกษมจักรกลซีรามิครับสร้างตามแบบของคุณ พร้อมดูแลระบบไฮดรอลิกและทำอะไหล่เองในโรงงาน",
      en: "A ram press forms parts using upper and lower dies under high force, making shapes a jigger can't, such as square plates, trays, and special or thicker pieces. Its steady press force gives even body density and consistent size on every piece. Tonnage and bed size are matched to your die, and it suits both ceramics and refractory work. Phetkasem Ceramic Machinery builds ram presses to your design, servicing the hydraulics and making parts in-house.",
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
    specs: [
      {
        label: { th: "แรงอัด", en: "Pressing force" },
        value: {
          th: "30–200 ตัน (สตูดิโอ 30–60, ผลิต 100–200)",
          en: "30–200 tonnes (studio 30–60, production 100–200)",
        },
      },
      {
        label: { th: "ขนาดโต๊ะ", en: "Platen / table size" },
        value: { th: "400×400 ถึง 900×900 มม.", en: "400×400 to 900×900 mm" },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "3–15 kW", en: "3–15 kW" },
      },
      {
        label: { th: "แม่พิมพ์", en: "Die" },
        value: {
          th: "ตามชิ้นงาน (แรงอัดขึ้นกับขนาดและพื้นที่หน้าตัด)",
          en: "Per part (force scales with part size and plan area)",
        },
      },
    ],
    faq: [
      {
        q: { th: "แรมเพรสต่างจากจิกเกอร์ยังไง?", en: "How is a ram press different from a jigger?" },
        a: {
          th: "แรมเพรสใช้แม่พิมพ์กับแรงอัดสูง ขึ้นรูปงานที่จิกเกอร์ทำไม่ได้ เช่น จานเหลี่ยม ถาด และงานทรงพิเศษหรือชิ้นหนา ส่วนจิกเกอร์เหมาะกับงานทรงกลม",
          en: "A ram press uses a die and high force to form shapes a jigger can't, such as square plates, trays, and special or thicker pieces, while a jigger suits round ware.",
        },
      },
      {
        q: { th: "เลือกแรงอัดและขนาดโต๊ะได้ไหม?", en: "Can we choose the force and table size?" },
        a: {
          th: "ได้ เราออกแบบกำลังอัดและขนาดโต๊ะตามแม่พิมพ์และชิ้นงานที่ใช้จริง แรงอัดขึ้นกับขนาดและพื้นที่หน้าตัดของงาน บอกรายละเอียดงานมา เราคำนวณให้",
          en: "Yes. We engineer the force and bed to your die and part; force scales with the part size and plan area. Send the part details and we calculate it.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["แรมเพรส", "เครื่องอัดขึ้นรูปเซรามิก", "ram press"],
      en: ["ram press", "ceramic ram press", "clay press"],
    },
    aliases: {
      th: ["แร็มเพรส", "เครื่องแร็มเพรส", "ram press", "เครื่องอัดแร็มเพรส", "เครื่องกดขึ้นรูปดิน", "เครื่องกดดินขึ้นรูป", "เครื่องอัดขึ้นรูปดิน", "เครื่องกดดินระบบไฮดรอลิก"],
      en: ["ram press", "ram press machine", "ceramic ram press", "hydraulic ram press", "refractory ram press", "clay ram press"],
    },
    images: ["/machines/ram-press.webp"],
  },
  {
    slug: "vibrating-screen",
    model: "PSCM-VS",
    stage: "purification",
    status: "made_to_order",
    order: 9,
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
    description: {
      th: "ตะแกรงสั่น (Vibrating Screen) หรือไวเบรติ้งสกรีน คือเครื่องร่อนและคัดแยกขนาดที่ใช้การสั่นสะเทือนแยกน้ำดินหรือผงวัตถุดิบตามขนาดอนุภาค กรองสิ่งตกค้างและคุมขนาดก่อนเข้าขั้นถัดไป จังหวะการสั่นจูนให้ร่อนต่อเนื่อง ไม่อุดตันง่าย เปลี่ยนเมชตามขนาดที่ต้องการได้ในไม่กี่นาที ใช้ได้ทั้งน้ำดินและผงแห้ง นอกจากเซรามิกยังใช้ในงานอาหารและเหมืองแร่ เพชรเกษมจักรกลซีรามิครับสร้างตามที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A vibrating screen sieves and grades slip or powder by particle size using controlled vibration, filtering residue and setting particle size before the next step. The vibration is tuned for continuous sieving without easy clogging, and the mesh can be swapped to a different size in minutes. It works for both slip and dry powder, and beyond ceramics it serves food and mining work. Phetkasem Ceramic Machinery builds vibrating screens to spec, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ขนาดตะแกรง", en: "Screen diameter" },
        value: { th: "600 / 800 / 1000 / 1200 มม.", en: "600 / 800 / 1000 / 1200 mm" },
      },
      {
        label: { th: "จำนวนชั้น", en: "Number of decks" },
        value: { th: "1–3 ชั้น (ชั้นเดียวพบบ่อยสุด)", en: "1–3 (single-deck most common)" },
      },
      {
        label: { th: "ช่วงเมช", en: "Mesh range" },
        value: {
          th: "20–500 เมช (น้ำดินเซรามิกทั่วไป 60–200 เมช)",
          en: "20–500 mesh (ceramic slip typically 60–200)",
        },
      },
      {
        label: { th: "ความถี่การสั่น", en: "Vibration frequency" },
        value: { th: "960–1500 รอบ/นาที (ทั่วไป 1440)", en: "960–1500 rpm (commonly 1440)" },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "0.18–3 kW (ตามขนาด)", en: "0.18–3 kW (per size)" },
      },
    ],
    faq: [
      {
        q: { th: "เปลี่ยนความละเอียดเมชได้ไหม?", en: "Can we change the mesh fineness?" },
        a: {
          th: "ได้ เปลี่ยนเมชตามขนาดที่ต้องการได้ในไม่กี่นาที งานน้ำดินเซรามิกส่วนใหญ่อยู่ที่ 60–200 เมช ถ้าต้องการละเอียดมากกว่านี้กำลังการร่อนจะลดลง",
          en: "Yes, you can swap the mesh to a different size in minutes. Most ceramic slip work runs 60–200 mesh; going much finer reduces throughput.",
        },
      },
      {
        q: { th: "ใช้กับผงแห้งได้ไหม หรือเฉพาะน้ำดิน?", en: "Does it work with dry powder, or only slip?" },
        a: {
          th: "ใช้ได้ทั้งน้ำดินและผงแห้ง จังหวะการสั่นจูนให้ร่อนต่อเนื่อง ไม่อุดตันง่าย นอกจากเซรามิกยังใช้ในงานอาหารและเหมืองแร่",
          en: "Both slip and dry powder. The vibration is tuned for continuous sieving without easy clogging, and beyond ceramics it serves food and mining work.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["ตะแกรงสั่น", "เครื่องร่อนน้ำดิน", "vibrating screen"],
      en: ["vibrating screen", "vibrating sieve", "particle screening"],
    },
    aliases: {
      th: ["ตะแกรงสั่น", "ตะแกรงสั่นคัดแยก", "เครื่องร่อนสั่น", "ตะแกรงสั่นวงกลม", "เครื่องคัดขนาดผง", "ตะแกรงร่อน", "เครื่องร่อนแยกขนาด", "ไวเบรติ้งสกรีน", "ตะแกรงสั่นเซรามิก", "เครื่องแยกผงสั่น"],
      en: ["vibrating screen", "vibrating sieve", "vibration screen", "vibratory separator", "circular vibrating screen", "rotary vibrating sieve", "powder vibrating screen", "industrial vibrating screen"],
    },
    images: ["/machines/vibrating-screen.webp"],
  },
  {
    slug: "mixer",
    model: "PSCM-MX",
    stage: "mixing",
    status: "made_to_order",
    order: 7,
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
    description: {
      th: "เครื่องผสม (Mixer) หรือมิกเซอร์ คือเครื่องผสมวัตถุดิบแห้งหรือเปียกให้เข้ากันเป็นเนื้อเดียวตามสูตรของโรงงาน คุมสัดส่วนและความสม่ำเสมอได้แบทช์ต่อแบทช์ ออกแบบใบกวนและขนาดถังให้พอดีกับวัตถุดิบที่ใช้จริง และเลือกวัสดุภายในได้ตามชนิดงาน ทั้งเซรามิก อาหาร เคมี หรือก่อสร้าง การผสมที่นิ่งทุกแบทช์คือพื้นฐานของคุณภาพที่คงที่ เพชรเกษมจักรกลซีรามิครับสร้างตามที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A mixing machine blends dry or wet materials into an even mix true to your recipe, holding ratio and consistency batch after batch. The impeller and tank are sized to the material you actually run, and contact materials are selectable by industry: ceramics, food, chemical, or construction. A consistent mix every batch is the foundation of stable quality. Phetkasem Ceramic Machinery builds mixers to spec, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ความจุแบทช์", en: "Batch capacity" },
        value: { th: "50–2,000 ลิตร", en: "50–2,000 L" },
      },
      {
        label: { th: "ความเร็วผสม", en: "Mixing speed" },
        value: {
          th: "ตามชนิดเครื่องผสม (ใบกวนช้า 20–100, ใบกระจายเร็ว 500–1,500 รอบ/นาที)",
          en: "Per mixer type (slow paddle 20–100, high-shear 500–1,500 rpm)",
        },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "1.5–30 kW", en: "1.5–30 kW" },
      },
      {
        label: { th: "ชนิดเครื่องผสม", en: "Mixer type" },
        value: {
          th: "ริบบอน / ใบพาย / ใบกระจาย / แพนมิกเซอร์",
          en: "Ribbon / paddle / disperser / pan mixer",
        },
      },
    ],
    faq: [
      {
        q: { th: "ผสมงานแห้งหรือเปียก?", en: "Does it mix dry or wet?" },
        a: {
          th: "ได้ทั้งแห้งและเปียก เลือกชนิดใบกวนและเครื่องผสมให้เหมาะกับวัตถุดิบ บอกสูตรและลักษณะงานมา เราเลือกแบบที่เข้ากันให้",
          en: "Both dry and wet. We pick the impeller and mixer type to suit your material. Tell us your recipe and the job and we match the right design.",
        },
      },
      {
        q: { th: "ใช้กับงานอาหารหรือเคมีได้ไหม?", en: "Can it be used for food or chemical work?" },
        a: {
          th: "ได้ วัสดุภายในที่สัมผัสงานเลือกได้ตามชนิดงาน ทั้งเซรามิก อาหาร เคมี และก่อสร้าง ปรึกษาเราเพื่อเลือกวัสดุที่เหมาะ",
          en: "Yes. The contact materials are selectable by industry: ceramics, food, chemical, and construction. Talk to us to choose the right materials.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องผสมวัตถุดิบ", "เครื่องผสมเซรามิก", "industrial mixer"],
      en: ["industrial mixer", "material mixer", "ceramic mixer"],
    },
    aliases: {
      th: ["เครื่องผสม", "เครื่องผสมวัตถุดิบ", "เครื่องผสมแห้ง", "เครื่องผสมเปียก", "เครื่องผสมอุตสาหกรรม", "มิกเซอร์", "เครื่องผสมความเร็วสูง", "เครื่องคลุกผสม", "เครื่องผสมผง"],
      en: ["mixer", "mixing machine", "industrial mixer", "high speed mixer", "powder mixer", "dry mixer", "wet mixer", "ribbon blender", "intensive mixer"],
    },
    images: ["/machines/mixer.webp"],
  },
  {
    slug: "jaw-crusher",
    model: "PSCM-JC",
    stage: "crushing",
    status: "made_to_order",
    order: 8,
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
    description: {
      th: "เครื่องบดกราม (Jaw Crusher) หรือครัชเชอร์กราม คือเครื่องบดหยาบขั้นแรกที่บดก้อนวัตถุดิบแข็งให้เล็กลงก่อนส่งเข้าบดละเอียด ใช้กรามคู่บีบอัดวัตถุดิบ รับงานแข็งและงานหนักต่อเนื่องได้ ปรับช่องระบายเพื่อคุมขนาดผลผลิตได้ ออกแบบกรามและช่องป้อนตามขนาดก้อนที่ใช้จริงในโรงงาน นอกจากเซรามิกยังใช้ในงานเหมืองแร่และรีไซเคิล เพชรเกษมจักรกลซีรามิครับสร้างตามที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A jaw crusher is the first-stage coarse crusher that breaks hard lumps down before fine milling, squeezing material between two jaws. Built for hard material and continuous heavy loads, it has an adjustable discharge gap for output-size control, with jaw and feed opening sized to the lumps you actually run. Beyond ceramics it serves mining and recycling. Phetkasem Ceramic Machinery builds jaw crushers to spec, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ช่องป้อน (กว้าง×ยาว)", en: "Feed opening (W×L)" },
        value: { th: "100×60 ถึง 400×600 มม.", en: "100×60 to 400×600 mm" },
      },
      {
        label: { th: "ขนาดป้อนสูงสุด", en: "Max feed size" },
        value: {
          th: "≈ 80–85% ของความกว้างช่องป้อน (80–340 มม.)",
          en: "≈ 80–85% of opening width (80–340 mm)",
        },
      },
      {
        label: { th: "ขนาดผลผลิต", en: "Output size" },
        value: { th: "10–60 มม. (ปรับช่องระบายได้)", en: "10–60 mm (adjustable gap)" },
      },
      {
        label: { th: "กำลังการผลิต", en: "Throughput" },
        value: {
          th: "ตามวัตถุดิบและช่องระบาย (1–5 ตัน/ชม. เล็ก, 5–40 ตัน/ชม. กลาง)",
          en: "Per material and gap (1–5 t/h small, 5–40 t/h mid)",
        },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "4–5.5 kW (เล็ก), 15–37 kW (กลาง)", en: "4–5.5 kW (small), 15–37 kW (mid)" },
      },
    ],
    faq: [
      {
        q: { th: "รับก้อนวัตถุดิบใหญ่แค่ไหน?", en: "How large a lump can it take?" },
        a: {
          th: "รับก้อนได้ราว 80–85% ของความกว้างช่องป้อน เราออกแบบกรามและช่องป้อนตามขนาดก้อนที่ใช้จริงในโรงงาน บอกขนาดก้อนวัตถุดิบมา เราเลือกขนาดให้",
          en: "It takes lumps up to roughly 80–85% of the feed opening width. We size the jaw and opening to the lumps you actually run; tell us your lump size and we match it.",
        },
      },
      {
        q: { th: "ปรับขนาดผลผลิตได้ไหม?", en: "Can the output size be adjusted?" },
        a: {
          th: "ได้ ปรับช่องระบายเพื่อคุมขนาดผลผลิตได้ กำลังการผลิตขึ้นกับความแข็งของวัตถุดิบและช่องระบายที่ตั้งไว้",
          en: "Yes. The discharge gap adjusts to control output size; throughput depends on material hardness and the gap setting.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องบดกราม", "เครื่องบดหิน", "jaw crusher"],
      en: ["jaw crusher", "primary crusher", "rock crusher"],
    },
    aliases: {
      th: ["เครื่องบดกราม", "เครื่องบดขากรรไกร", "เครื่องโม่หิน", "เครื่องบดหิน", "เครื่องบดหินกราม", "เครื่องบดแร่", "เครื่องบดปฐมภูมิ", "เครื่องบดวัตถุดิบกราม", "ครัชเชอร์กราม"],
      en: ["jaw crusher", "primary jaw crusher", "stone jaw crusher", "rock crusher", "laboratory jaw crusher", "mini jaw crusher", "jaw crusher machine", "stone crusher"],
    },
    images: ["/machines/jaw-crusher.webp"],
  },
  {
    slug: "hammer-mill",
    model: "PSCM-HM",
    stage: "crushing",
    status: "made_to_order",
    order: 10,
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
    description: {
      th: "เครื่องบดค้อน (Hammer Mill) หรือแฮมเมอร์มิล คือเครื่องบดย่อยที่ใช้ค้อนเหวี่ยงกระแทกวัตถุดิบเปราะให้แตกละเอียดอย่างรวดเร็ว ก่อนส่งเข้าขั้นถัดไป ค้อนถอดเปลี่ยนได้ ดูแลรักษาง่าย และเลือกขนาดตะแกรงล่างได้ตามผลผลิตที่ต้องการ เหมาะกับวัตถุดิบเปราะทั้งในงานเซรามิก เคมีภัณฑ์ และอาหาร เพชรเกษมจักรกลซีรามิครับสร้างตามที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A hammer mill reduces brittle material fast by striking it with swinging hammers before the next step. Its hammers are replaceable for simple upkeep, and the bottom screen is sized to your target output. It suits friable materials across ceramics, chemical, and food work. Phetkasem Ceramic Machinery builds hammer mills to spec, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "กำลังการผลิต", en: "Throughput" },
        value: {
          th: "100–1,000 กก./ชม. (เล็ก), 1–10 ตัน/ชม. (โรงงาน)",
          en: "100–1,000 kg/h (small), 1–10 t/h (factory)",
        },
      },
      {
        label: { th: "ขนาดป้อน", en: "Feed size" },
        value: { th: "≤ 20–50 มม.", en: "≤ 20–50 mm" },
      },
      {
        label: { th: "ความละเอียด", en: "Output fineness" },
        value: {
          th: "20–120 เมช (ตามตะแกรง; ละเอียดถึง ~200 เมช)",
          en: "20–120 mesh (per screen; to ~200 mesh fine)",
        },
      },
      {
        label: { th: "ขนาดรูตะแกรง", en: "Screen hole size" },
        value: { th: "0.5–12 มม. (กำหนดความละเอียด)", en: "0.5–12 mm (sets fineness)" },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "4–7.5 kW (เล็ก), 11–55 kW (โรงงาน)", en: "4–7.5 kW (small), 11–55 kW (factory)" },
      },
    ],
    faq: [
      {
        q: { th: "เครื่องบดค้อนต่างจากเครื่องบดกรามยังไง?", en: "How is a hammer mill different from a jaw crusher?" },
        a: {
          th: "เครื่องบดค้อนใช้แรงกระแทกของค้อนเหวี่ยง เหมาะกับวัตถุดิบเปราะและบดได้ละเอียดกว่า ส่วนเครื่องบดกรามเป็นการบดหยาบขั้นแรกสำหรับก้อนแข็งขนาดใหญ่",
          en: "A hammer mill uses swinging-hammer impact, suiting brittle material and giving finer output, while a jaw crusher is first-stage coarse crushing for large hard lumps.",
        },
      },
      {
        q: { th: "คุมความละเอียดได้ยังไง?", en: "How is the fineness controlled?" },
        a: {
          th: "ความละเอียดกำหนดด้วยขนาดตะแกรงล่าง เลือกได้ตามผลผลิตที่ต้องการ ยิ่งตะแกรงละเอียด กำลังการผลิตยิ่งลดลง ค้อนถอดเปลี่ยนได้ ดูแลรักษาง่าย",
          en: "Fineness is set by the bottom screen size, chosen to your target output; a finer screen lowers throughput. The hammers are replaceable for simple upkeep.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องบดค้อน", "เครื่องบดย่อย", "hammer mill"],
      en: ["hammer mill", "impact mill", "crushing mill"],
    },
    aliases: {
      th: ["เครื่องบดค้อน", "แฮมเมอร์มิล", "เครื่องบดแบบค้อนเหวี่ยง", "เครื่องบดค้อนเหวี่ยง", "เครื่องตีป่น", "เครื่องบดผงค้อน", "เครื่องโม่ค้อน", "hammer crusher"],
      en: ["hammer mill", "hammer crusher", "hammer mill machine", "impact hammer mill", "hammer mill grinder", "fine hammer mill", "industrial hammer mill"],
    },
    images: ["/machines/hammer-mill.webp"],
  },
  {
    slug: "glaze-spray-booth",
    model: "PSCM-GB",
    stage: "glazing",
    status: "made_to_order",
    order: 15,
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
    description: {
      th: "ตู้พ่นเคลือบ (Glaze Spray Booth) หรือบูธพ่นเคลือบ คือตู้สำหรับพ่นน้ำเคลือบชิ้นงาน พร้อมระบบดักละอองและระบายอากาศ ช่วยให้เคลือบเรียบเสมอกัน ขณะที่ลดฝุ่นเคลือบในโรงงานและให้คนพ่นทำงานในพื้นที่สะอาดและปลอดภัยกว่า พื้นที่พ่นออกแบบให้ทำงานสะดวก เลือกขนาดบูธและกำลังดูดได้ตามชิ้นงาน หลายรุ่นใช้ระบบม่านน้ำดักละอองเคลือบ เพชรเกษมจักรกลซีรามิครับสร้างตามที่โรงงานต้องการ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A glaze spray booth is an enclosure for spraying glaze onto ware, with overspray capture and air extraction. It gives even coverage while cutting glaze dust in the workshop and keeping the operator in a cleaner, safer space. The spray area is laid out for comfortable use, with booth size and extraction power sized to your ware; many builds use a water-curtain to capture overspray. Phetkasem Ceramic Machinery builds spray booths to spec, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "ขนาดบูธ", en: "Booth size" },
        value: { th: "ตามชิ้นงานและพื้นที่ติดตั้ง", en: "Per ware and floor space" },
      },
      {
        label: { th: "ระบบดักละออง", en: "Overspray capture" },
        value: { th: "ม่านน้ำ หรือแผ่นกรองแห้ง", en: "Water curtain or dry filter" },
      },
      {
        label: { th: "ระบบระบายอากาศ", en: "Extraction" },
        value: { th: "พัดลมดูด + กรองอากาศ (กำลังตามขนาดบูธ)", en: "Extraction fan + air filter (sized to booth)" },
      },
    ],
    faq: [
      {
        q: { th: "ตู้พ่นเคลือบช่วยลดฝุ่นในโรงงานจริงไหม?", en: "Does the booth really cut workshop dust?" },
        a: {
          th: "ช่วย ระบบดักละอองและกรองอากาศลดฝุ่นเคลือบที่ฟุ้งในโรงงาน คนพ่นทำงานในพื้นที่สะอาดและปลอดภัยกว่า หลายรุ่นใช้ระบบม่านน้ำดักละออง",
          en: "Yes. The overspray capture and air filtration cut airborne glaze dust, so the operator works in a cleaner, safer area. Many builds use a water-curtain to capture overspray.",
        },
      },
      {
        q: { th: "เลือกขนาดบูธและกำลังดูดได้ไหม?", en: "Can we choose the booth size and extraction power?" },
        a: {
          th: "ได้ เราออกแบบขนาดบูธและกำลังดูดให้เหมาะกับชิ้นงานและพื้นที่ติดตั้งของคุณ บอกขนาดงานและผังพื้นที่มา เราออกแบบให้พอดี",
          en: "Yes. We design the booth size and extraction power to your ware and floor space. Tell us your part size and layout and we fit it.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["ตู้พ่นเคลือบ", "ตู้พ่นสีเซรามิก", "glaze booth"],
      en: ["glaze spray booth", "glazing booth", "spray booth ceramic"],
    },
    aliases: {
      th: ["ตู้พ่นเคลือบ", "ตู้พ่นน้ำเคลือบ", "เครื่องพ่นน้ำเคลือบ", "ตู้พ่นเคลือบเซรามิก", "ตู้พ่นเคลือบม่านน้ำ", "ห้องพ่นเคลือบ", "บูธพ่นเคลือบ", "ตู้พ่นเคลือบระบบม่านน้ำ"],
      en: ["glaze spray booth", "glaze spraying booth", "water curtain glaze booth", "ceramic glaze booth", "glaze application booth", "water curtain spray booth", "glaze spraying cabinet"],
    },
    images: ["/machines/glaze-spray-booth.webp"],
  },
  {
    slug: "conveyor",
    model: "PSCM-CV",
    stage: "material-handling",
    status: "made_to_order",
    order: 12,
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
    description: {
      th: "ระบบสายพานลำเลียง (Conveyor System) หรือคอนเวเยอร์ คือระบบลำเลียงชิ้นงานและวัตถุดิบเชื่อมระหว่างสถานีต่างๆ ในสายการผลิต ออกแบบเส้นทาง ความยาว และความเร็วให้พอดีกับผังโรงงาน ช่วยให้สายการผลิตเดินต่อเนื่อง ไม่สะดุด ลดการขนย้ายด้วยมือ ปรับกำลังโหลดและเลือกวัสดุสายพานได้ตามลักษณะชิ้นงาน นอกจากเซรามิกยังใช้ในงานอาหารและคลังสินค้า เพชรเกษมจักรกลซีรามิครับสร้างตามผังของคุณ พร้อมทำอะไหล่และซ่อมเองในโรงงาน",
      en: "A conveyor system moves parts and material between stations along the production line. Its path, length, and speed are engineered to your floor plan to keep the line flowing without interruption and reduce manual handling. Load capacity is adjustable and belt material is chosen to suit the product. Beyond ceramics it serves food and warehousing. Phetkasem Ceramic Machinery builds conveyor systems to your layout, with parts and repair handled in-house.",
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
    specs: [
      {
        label: { th: "หน้ากว้างสายพาน", en: "Belt width" },
        value: { th: "300–1,200 มม.", en: "300–1,200 mm" },
      },
      {
        label: { th: "ความยาว", en: "Length" },
        value: {
          th: "ตามผังโรงงาน (ทั่วไป 2–30 ม. ต่อช่วง)",
          en: "Per floor plan (typically 2–30 m per section)",
        },
      },
      {
        label: { th: "ความเร็วสายพาน", en: "Belt speed" },
        value: { th: "2–30 ม./นาที (ปรับได้)", en: "2–30 m/min (adjustable)" },
      },
      {
        label: { th: "กำลังโหลด", en: "Load capacity" },
        value: { th: "20–150 กก./ม.", en: "20–150 kg/m" },
      },
      {
        label: { th: "วัสดุสายพาน", en: "Belt material" },
        value: {
          th: "PVC / PU / ยาง / โมดูลาร์ / ตะแกรงเหล็ก (ทนร้อน)",
          en: "PVC / PU / rubber / modular / steel mesh (heat-resistant)",
        },
      },
    ],
    faq: [
      {
        q: { th: "ออกแบบเส้นทางตามผังโรงงานได้ไหม?", en: "Can the layout be designed to our floor plan?" },
        a: {
          th: "ได้ เราออกแบบเส้นทาง ความยาว และความเร็วให้พอดีกับผังโรงงานของคุณ เชื่อมระหว่างสถานีในสายการผลิตให้เดินต่อเนื่อง ส่งผังพื้นที่มาให้เราออกแบบ",
          en: "Yes. We engineer the path, length, and speed to your floor plan, linking stations so the line keeps flowing. Send us your layout and we design it.",
        },
      },
      {
        q: { th: "เลือกวัสดุสายพานตามชิ้นงานได้ไหม?", en: "Can the belt material suit our product?" },
        a: {
          th: "ได้ เลือกวัสดุสายพานตามลักษณะชิ้นงาน รวมถึงตะแกรงเหล็กทนร้อนสำหรับโซนใกล้เตา นอกจากเซรามิกยังใช้ในงานอาหารและคลังสินค้า",
          en: "Yes. Belt material is chosen to suit the product, including heat-resistant steel mesh for kiln-adjacent zones. Beyond ceramics it serves food and warehousing.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["สายพานลำเลียง", "ระบบลำเลียง", "conveyor"],
      en: ["conveyor system", "belt conveyor", "material handling conveyor"],
    },
    aliases: {
      th: ["สายพานลำเลียง", "ระบบสายพานลำเลียง", "คอนเวเยอร์", "เบลท์คอนเวเยอร์", "สายพานคอนเวเยอร์", "ระบบลำเลียง", "ลูกกลิ้งลำเลียง", "สกรูลำเลียง", "สายพานลำเลียงโรงงาน"],
      en: ["conveyor", "conveyor system", "belt conveyor", "belt conveyor system", "industrial conveyor", "roller conveyor", "material handling conveyor", "screw conveyor", "chain conveyor"],
    },
    images: ["/machines/conveyor.webp"],
  },
  {
    slug: "spray-dryer",
    model: "PSCM-SD",
    stage: "drying",
    status: "on_request",
    order: 17,
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
    description: {
      th: "เครื่องอบพ่นฝอย (Spray Dryer) หรือสเปรย์ดรายเออร์ คือเครื่องที่เปลี่ยนน้ำดินให้เป็นผงแห้งแบบเม็ด (granulate) โดยพ่นน้ำดินเป็นละอองเข้าสู่ลมร้อน น้ำระเหยออกทันทีเหลือเม็ดผงที่ไหลตัวดีและความชื้นคงที่ พร้อมป้อนเข้าเครื่องอัดแห้งได้สม่ำเสมอ เป็นงานเฉพาะทางที่ต้องวางแผนร่วมกัน เพชรเกษมจักรกลซีรามิครับปรึกษาความเป็นไปได้และออกแบบตามกำลังผลิตของคุณก่อนสั่งทำ พร้อมดูแลและทำอะไหล่เองในโรงงาน",
      en: "A spray dryer turns slip into granulated powder by atomising it into a stream of hot air, where the water flashes off and leaves free-flowing granules at stable moisture, ready to feed dry-press lines evenly. It is specialised equipment that needs joint planning. Phetkasem Ceramic Machinery will assess feasibility and design to your throughput before building, and services and makes parts in-house.",
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
    specs: [
      {
        label: { th: "กำลังระเหยน้ำ", en: "Water evaporation" },
        value: {
          th: "แล็บ/นำร่อง 3–25 กก./ชม.; ผลิตเล็ก 50–500 กก./ชม.",
          en: "Lab/pilot 3–25 kg/h; small-production 50–500 kg/h",
        },
      },
      {
        label: { th: "อุณหภูมิลมเข้า", en: "Inlet air temp" },
        value: { th: "250–600 °C (น้ำดินเซรามิก 450–600)", en: "250–600 °C (ceramic slip 450–600)" },
      },
      {
        label: { th: "อุณหภูมิลมออก", en: "Outlet air temp" },
        value: { th: "90–130 °C (คุมความชื้นปลายทาง 4–7%)", en: "90–130 °C (final moisture 4–7%)" },
      },
      {
        label: { th: "ระบบพ่นฝอย", en: "Atomizer" },
        value: { th: "จานหมุน หรือหัวฉีดแรงดัน", en: "Rotary disc or pressure nozzle" },
      },
    ],
    faq: [
      {
        q: { th: "เครื่องอบพ่นฝอยทำอะไร?", en: "What does a spray dryer do?" },
        a: {
          th: "เปลี่ยนน้ำดินให้เป็นผงแห้งแบบเม็ดที่ไหลตัวดี ความชื้นคงที่ พร้อมป้อนเข้าเครื่องอัดแห้งได้สม่ำเสมอ โดยพ่นน้ำดินเป็นละอองเข้าสู่ลมร้อน น้ำระเหยออกทันที",
          en: "It turns slip into free-flowing granulated powder at stable moisture, ready to feed dry-press lines, by atomising the slip into hot air where the water flashes off.",
        },
      },
      {
        q: { th: "สั่งทำขนาดไหนได้บ้าง?", en: "What sizes can you build?" },
        a: {
          th: "เป็นงานเฉพาะทาง มีตั้งแต่ระดับแล็บ/นำร่องไปจนถึงกำลังผลิตเล็ก ขนาดใหญ่ระดับโรงงานกระเบื้องเป็นอีกระดับ เราปรึกษาความเป็นไปได้และออกแบบตามกำลังผลิตของคุณก่อนสั่งทำ",
          en: "It is specialised equipment, from lab/pilot to small-production scale; giant tile-plant towers are a different class. We assess feasibility and design to your throughput before building.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตและจัดหาเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made and sourced in-house, and the team that builds it maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องอบพ่นฝอย", "สเปรย์ดรายเออร์", "spray dryer"],
      en: ["spray dryer", "spray drying ceramic", "granulation dryer"],
    },
    aliases: {
      th: ["สเปรย์ดรายเออร์", "เครื่องอบแห้งแบบพ่นฝอย", "เครื่องทำผงแห้งแบบพ่นฝอย", "เครื่องทำแห้งแบบพ่นฝอย", "เครื่องอบผง", "สเปรย์ดราย", "เครื่องอบสเปรย์", "เครื่องผลิตผงแห้งจากน้ำดิน"],
      en: ["spray dryer", "spray drying machine", "spray drier", "industrial spray dryer", "ceramic spray dryer", "atomizer dryer", "slip spray dryer", "powder spray dryer"],
    },
    images: ["/machines/spray-dryer.webp"],
  },
  {
    slug: "dryer-chamber",
    model: "PSCM-DC",
    stage: "drying",
    status: "on_request",
    order: 18,
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
    description: {
      th: "ตู้อบ/ห้องอบแห้ง (Drying Chamber) คือห้องสำหรับไล่ความชื้นในชิ้นงานเซรามิกให้แห้งทั่วถึงก่อนเข้าเตาเผา โดยคุมอุณหภูมิและความชื้นให้ชิ้นงานแห้งสม่ำเสมอ ลดการแตกร้าวจากการแห้งไม่เท่ากัน ซึ่งเป็นต้นเหตุของเสียก่อนถึงหน้าเตา ออกแบบขนาดและกำลังตามจำนวนชิ้นงานต่อรอบ เป็นงานเฉพาะทาง เพชรเกษมจักรกลซีรามิครับปรึกษารายละเอียดและความเป็นไปได้ก่อนสั่งทำ พร้อมดูแลและทำอะไหล่เองในโรงงาน",
      en: "A drying chamber is a room that dries ceramic ware evenly to the right moisture before firing, controlling temperature and humidity so pieces dry uniformly. Even drying prevents the cracks that come from uneven moisture, a common source of pre-kiln loss. Size and power are engineered to your pieces-per-cycle. It is specialised work; Phetkasem Ceramic Machinery discusses requirements and feasibility before building, and services and makes parts in-house.",
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
    specs: [
      {
        label: { th: "ปริมาตรห้องอบ", en: "Chamber volume" },
        value: { th: "0.5–20 ลบ.ม. (ตามจำนวนชิ้นต่อรอบ)", en: "0.5–20 m³ (per pieces-per-cycle)" },
      },
      {
        label: { th: "ช่วงอุณหภูมิ", en: "Temperature range" },
        value: { th: "อุณหภูมิห้อง – 150 °C (อบ ไม่ใช่เผา)", en: "Ambient – 150 °C (drying, not firing)" },
      },
      {
        label: { th: "ควบคุมความชื้น", en: "Humidity control" },
        value: { th: "มี (ลดความชื้นแบบเป็นขั้น 40–95% RH)", en: "Yes (staged ramp-down, 40–95% RH)" },
      },
      {
        label: { th: "กำลังให้ความร้อน", en: "Heating power" },
        value: { th: "5–60 kW", en: "5–60 kW" },
      },
      {
        label: { th: "วิธีให้ความร้อน", en: "Heating method" },
        value: { th: "ไฟฟ้า / แก๊ส / ลมร้อนหมุนเวียน", en: "Electric / gas / hot-air recirculation" },
      },
    ],
    faq: [
      {
        q: { th: "ตู้อบช่วยลดการแตกร้าวได้ยังไง?", en: "How does the chamber cut cracking?" },
        a: {
          th: "คุมอุณหภูมิและความชื้นให้ชิ้นงานแห้งทั่วถึงและสม่ำเสมอ การแห้งไม่เท่ากันคือต้นเหตุการแตกร้าวก่อนถึงหน้าเตา การคุมความชื้นแบบเป็นขั้นจึงช่วยลดของเสีย",
          en: "It controls temperature and humidity so pieces dry evenly. Uneven drying is what causes pre-kiln cracks, so staged humidity control cuts those losses.",
        },
      },
      {
        q: { th: "ออกแบบขนาดตามจำนวนชิ้นงานได้ไหม?", en: "Can it be sized to our pieces-per-cycle?" },
        a: {
          th: "ได้ ออกแบบขนาดและกำลังให้ตามจำนวนชิ้นงานต่อรอบ เป็นงานเฉพาะทาง ปรึกษารายละเอียดและความเป็นไปได้กับเราก่อนสั่งทำ",
          en: "Yes. Size and power are engineered to your pieces-per-cycle. It is specialised work; discuss requirements and feasibility with us before ordering.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that builds it maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["ตู้อบเซรามิก", "ห้องอบแห้ง", "ceramic dryer"],
      en: ["drying chamber", "ceramic dryer", "industrial dryer"],
    },
    aliases: {
      th: ["ตู้อบ", "ห้องอบแห้ง", "ตู้อบแห้ง", "ตู้อบลมร้อน", "ตู้อบอุตสาหกรรม", "เตาอบแห้ง", "ห้องอบดิน", "ตู้อบเซรามิก", "ตู้อบไฟฟ้า"],
      en: ["drying chamber", "drying oven", "drying cabinet", "hot air oven", "industrial drying oven", "ceramic dryer", "tray dryer", "batch dryer", "drying room"],
    },
    images: ["/machines/dryer-chamber.webp"],
  },
  {
    slug: "dust-press",
    model: "PSCM-DP",
    stage: "pressing",
    status: "on_request",
    order: 16,
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
    description: {
      th: "เครื่องอัดผงแห้ง (Dust Press) หรือดัสท์เพรส คือเครื่องอัดที่ขึ้นรูปชิ้นงานจากผงแห้งด้วยแรงอัดสูง ได้ชิ้นงานหนาแน่นและขนาดเท่ากันทุกชิ้น เหมาะกับงานอย่างกระเบื้องและวัสดุทนไฟ ออกแบบแม่พิมพ์และโต๊ะรับตามผลิตภัณฑ์ของคุณ เป็นงานเฉพาะทางที่ต้องวางแผนแม่พิมพ์ร่วมกัน เพชรเกษมจักรกลซีรามิครับปรึกษาความเป็นไปได้และออกแบบตามงานจริงก่อนสั่งทำ พร้อมดูแลระบบและทำอะไหล่เองในโรงงาน",
      en: "A dust press, or dry press, forms parts from dry powder under high force, producing dense pieces with consistent density and dimension, well suited to tile and refractory work. The die and bed are engineered to your product. It is specialised work that needs the die planned jointly; Phetkasem Ceramic Machinery assesses feasibility and designs to the real job before building, and services the system and makes parts in-house.",
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
    specs: [
      {
        label: { th: "แรงอัด", en: "Pressing force" },
        value: { th: "50–630 ตัน", en: "50–630 tonnes" },
      },
      {
        label: { th: "ขนาดชิ้นงาน", en: "Part size" },
        value: { th: "50×50 ถึง 300×300 มม.", en: "50×50 to 300×300 mm" },
      },
      {
        label: { th: "กำลังผลิต", en: "Output" },
        value: {
          th: "ตามขนาดชิ้นและจำนวนช่องแม่พิมพ์ (≈ 8–25 ชิ้น/นาที)",
          en: "Per part size and cavity count (≈ 8–25 pcs/min)",
        },
      },
      {
        label: { th: "แรงดันจำเพาะ", en: "Specific pressure" },
        value: { th: "250–400 กก./ตร.ซม. (≈ 25–40 MPa)", en: "250–400 kg/cm² (≈ 25–40 MPa)" },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "5.5–37 kW", en: "5.5–37 kW" },
      },
    ],
    faq: [
      {
        q: { th: "เครื่องอัดผงแห้งเหมาะกับงานอะไร?", en: "What is a dust press best for?" },
        a: {
          th: "อัดผงแห้งให้เป็นชิ้นงานหนาแน่น ขนาดเท่ากันทุกชิ้น เหมาะกับกระเบื้องและวัสดุทนไฟ แรงอัดและกำลังผลิตขึ้นกับขนาดชิ้นและจำนวนช่องแม่พิมพ์",
          en: "It compacts dry powder into dense, consistent parts, well suited to tile and refractory. Tonnage and output depend on part size and the number of mould cavities.",
        },
      },
      {
        q: { th: "ออกแบบแม่พิมพ์ให้ได้ไหม?", en: "Can you design the die for us?" },
        a: {
          th: "ได้ ออกแบบแม่พิมพ์และโต๊ะรับตามผลิตภัณฑ์ของคุณ เป็นงานเฉพาะทางที่ต้องวางแผนแม่พิมพ์ร่วมกัน ปรึกษาความเป็นไปได้กับเราก่อน",
          en: "Yes. We engineer the die and bed to your product. It is specialised work that needs the die planned jointly; discuss feasibility with us first.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน เราดูแลระบบและทีมที่สร้างคือทีมที่ซ่อมให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, we service the system, and the team that builds it repairs it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เครื่องอัดผง", "เครื่องอัดกระเบื้อง", "dust press"],
      en: ["dust press", "dry press", "tile press"],
    },
    aliases: {
      th: ["เครื่องอัดผงแห้ง", "เครื่องอัดผง", "ดัสท์เพรส", "เครื่องอัดกระเบื้อง", "เครื่องอัดแห้ง", "เครื่องอัดผงเซรามิก", "เครื่องอัดผงทนไฟ", "เครื่องอัดอิฐทนไฟ"],
      en: ["dust press", "dry press", "dust pressing machine", "tile press", "ceramic dust press", "powder press", "refractory dust press", "dry powder press", "hydraulic tile press"],
    },
    images: ["/machines/dust-press.webp"],
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
    description: {
      th: "เตาเผา (Kiln) คือเตาสำหรับเผาชิ้นงานเซรามิกตามรอบอุณหภูมิที่ต้องการ เป็นขั้นชี้ขาดความแข็งแรงและคุณภาพผิวของชิ้นงานสุดท้าย รอบอุณหภูมิและขนาดห้องเผาต้องออกแบบให้เหมาะกับชนิดชิ้นงานและกำลังผลิต เป็นงานเฉพาะทางที่ต้องวางแผนร่วมกันอย่างละเอียด เพชรเกษมจักรกลซีรามิครับปรึกษาและประเมินความเป็นไปได้ก่อนสั่งทำ พร้อมดูแลและทำอะไหล่เองในโรงงาน",
      en: "A kiln fires ceramic ware through a required temperature cycle. It is the decisive stage for the final strength and surface quality of the piece. The firing cycle and chamber size must be designed around the ware type and output, which makes it specialised work that needs careful joint planning. Phetkasem Ceramic Machinery assesses feasibility before building, and services and makes parts in-house.",
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
    specs: [
      {
        label: { th: "อุณหภูมิสูงสุด", en: "Max temperature" },
        value: {
          th: "1,250–1,350 °C ทั่วไป (ดินเผา 1,100–1,200, พอร์ซเลน 1,300–1,400)",
          en: "1,250–1,350 °C typical (earthenware 1,100–1,200, porcelain 1,300–1,400)",
        },
      },
      {
        label: { th: "ปริมาตรห้องเผา", en: "Chamber volume" },
        value: {
          th: "30–1,000 ลิตร (สตูดิโอ 30–150, โรงงาน ถึง ~1 ลบ.ม.+)",
          en: "30–1,000 L (studio 30–150, factory to ~1 m³+)",
        },
      },
      {
        label: { th: "ระบบให้ความร้อน", en: "Heating type" },
        value: { th: "ไฟฟ้า หรือแก๊ส (LPG/NG)", en: "Electric or gas (LPG/NG)" },
      },
      {
        label: { th: "ความสม่ำเสมออุณหภูมิ", en: "Temperature uniformity" },
        value: { th: "±5 ถึง ±15 °C ทั่วห้องเผา", en: "±5 to ±15 °C across chamber" },
      },
    ],
    faq: [
      {
        q: { th: "เตาเผาเผาได้อุณหภูมิเท่าไหร่?", en: "What temperature does the kiln reach?" },
        a: {
          th: "ออกแบบได้ตามชนิดงาน ทั่วไป 1,250–1,350 °C งานดินเผาต่ำกว่า งานพอร์ซเลนสูงกว่า รอบอุณหภูมิและขนาดห้องเผาออกแบบตามชิ้นงานและกำลังผลิตของคุณ",
          en: "It is designed to your ware, typically 1,250–1,350 °C, lower for earthenware and higher for porcelain. The firing cycle and chamber size are designed around your pieces and output.",
        },
      },
      {
        q: { th: "ใช้ไฟฟ้าหรือแก๊ส?", en: "Electric or gas?" },
        a: {
          th: "ได้ทั้งไฟฟ้าและแก๊ส (LPG/NG) เลือกตามชนิดงาน ต้นทุนพลังงาน และระบบที่โรงงานมี เป็นงานเฉพาะทางที่ต้องวางแผนร่วมกัน ปรึกษาเราเพื่อประเมินความเป็นไปได้",
          en: "Either electric or gas (LPG/NG), chosen by your ware, energy cost, and existing utilities. It is specialised work needing joint planning; talk to us to assess feasibility.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตและจัดหาเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made and sourced in-house, and the team that builds it maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["เตาเผาเซรามิก", "เตาเผา", "ceramic kiln"],
      en: ["ceramic kiln", "industrial kiln", "shuttle kiln"],
    },
    aliases: {
      th: ["เตาเผา", "เตาเผาเซรามิก", "เตาเผาไฟฟ้า", "เตาเผาแก๊ส", "เตาเผาเครื่องปั้นดินเผา", "เตาเผาไฟสูง", "เตาเผาอุตสาหกรรม", "เตาอบเซรามิก", "เตาเผาเคลือบ", "เตาเผาชัทเทิล"],
      en: ["kiln", "ceramic kiln", "electric kiln", "gas kiln", "pottery kiln", "shuttle kiln", "tunnel kiln", "industrial kiln", "high temperature kiln", "firing kiln"],
    },
    images: ["/machines/kiln.webp"],
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
    description: {
      th: "แป้นหมุนปั้น (Potter's Wheel) หรือพ็อตเตอร์วีล คือแป้นหมุนสำหรับงานปั้นมือ ใช้ในสตูดิโอ สถานศึกษา และงานสอนเซรามิก ปรับความเร็วและทิศทางหมุนได้ตามผู้ใช้ โครงมั่นคง เสียงเงียบ เหมาะกับห้องเรียนและสตูดิโอ รองรับงานปั้นปริมาณน้อยถึงปานกลาง เพชรเกษมจักรกลซีรามิคมีรุ่นที่ผลิตเป็นรอบ สอบถามรุ่นที่กำลังผลิตอยู่ตอนนั้นได้เลย พร้อมดูแลและทำอะไหล่เองในโรงงาน",
      en: "A potter's wheel is a throwing wheel for hand forming, used in studios, schools, and ceramics teaching. Its speed and direction adjust to suit the potter, and its stable, quiet build fits classrooms and studios for small-to-medium throwing. Phetkasem Ceramic Machinery produces these in batches, so ask which models are currently in production. Servicing and parts are handled in-house.",
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
    specs: [
      {
        label: { th: "น้ำหนักดินสูงสุด", en: "Max centering weight" },
        value: {
          th: "10–25 กก. (สถานศึกษา 10–15, สตูดิโอ 20–25)",
          en: "10–25 kg (school 10–15, studio 20–25)",
        },
      },
      {
        label: { th: "ขนาดแป้นหมุน", en: "Wheel head diameter" },
        value: { th: '250–355 มม. (12"/14")', en: '250–355 mm (12"/14")' },
      },
      {
        label: { th: "กำลังมอเตอร์", en: "Motor power" },
        value: { th: "250–750 วัตต์", en: "250–750 W" },
      },
      {
        label: { th: "ช่วงความเร็ว", en: "Speed range" },
        value: { th: "0–240 รอบ/นาที (ปรับได้)", en: "0–240 rpm (variable)" },
      },
    ],
    faq: [
      {
        q: { th: "แป้นหมุนเหมาะกับใคร?", en: "Who is the wheel for?" },
        a: {
          th: "เหมาะกับงานปั้นมือในสตูดิโอ สถานศึกษา และงานสอน รองรับงานปริมาณน้อยถึงปานกลาง ปรับความเร็วและทิศทางหมุนได้ตามผู้ใช้ โครงมั่นคง เสียงเงียบ",
          en: "It suits hand throwing in studios, schools, and teaching, for small-to-medium work. Speed and direction adjust to the potter, with a stable, quiet build.",
        },
      },
      {
        q: { th: "มีรุ่นไหนพร้อมส่งบ้าง?", en: "Which models are available now?" },
        a: {
          th: "เราผลิตเป็นรอบ รุ่นที่พร้อมส่งขึ้นกับล็อตที่กำลังผลิตอยู่ตอนนั้น สอบถามรุ่นและสเปกที่มีอยู่ปัจจุบันกับเราได้เลย",
          en: "We produce these in batches, so what's available depends on the current production lot. Ask us about the models and specs we have right now.",
        },
      },
      {
        q: { th: "มีอะไหล่และบริการซ่อมไหม?", en: "Do you supply parts and repair service?" },
        a: {
          th: "มี อะไหล่ผลิตเองในโรงงาน และทีมที่สร้างเครื่องคือทีมที่ซ่อมและดูแลให้ ติดต่อเราได้โดยตรง",
          en: "Yes. Parts are made in-house, and the team that built the machine is the team that repairs and maintains it. Contact us directly.",
        },
      },
    ],
    seoKeywords: {
      th: ["แป้นหมุนปั้น", "แป้นหมุนเซรามิก", "potters wheel"],
      en: ["potters wheel", "pottery wheel", "throwing wheel"],
    },
    aliases: {
      th: ["แป้นหมุน", "แป้นหมุนปั้นดิน", "แป้นหมุนไฟฟ้า", "แป้นปั้นไฟฟ้า", "แป้นหมุนเซรามิก", "แป้นปั้น", "แป้นหมุนปั้นเซรามิก", "แป้นหมุนเครื่องปั้นดินเผา", "พ็อตเตอร์วีล"],
      en: ["potter's wheel", "potters wheel", "pottery wheel", "electric pottery wheel", "ceramic wheel", "throwing wheel", "studio pottery wheel"],
    },
    images: ["/machines/potters-wheel.webp"],
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

/**
 * Display form of the popular name. English aliases are stored lowercase
 * for SEO synonym matching ("ball mill", "filter press"); on headings and
 * links we want them Title-Cased ("Ball Mill"). Thai has no letter case,
 * so it passes through untouched. Use this anywhere the popular name is
 * shown to a human; keep `machinePopularName` for raw alias text.
 */
export const machineDisplayName = (m: Machine, locale: Locale) => {
  const popular = machinePopularName(m, locale);
  if (locale !== "en") return popular;
  return popular.replace(/\b\p{L}/gu, (c) => c.toUpperCase());
};

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
