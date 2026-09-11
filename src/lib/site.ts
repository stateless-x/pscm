// Single source of truth for company contact + URLs.
// Update §15 open items by editing this file.

export const SITE = {
  name: {
    th: "บริษัท เพชรเกษมจักรกลซีรามิค จำกัด",
    en: "Petkasem Ceramic Machine Co., Ltd.",
  },
  shortName: {
    th: "เพชรเกษมจักรกลซีรามิค",
    en: "Petkasem Ceramic Machine",
  },
  // Production domain — registered and live on Cloudflare (Jun 2026).
  url: "https://pscmceramic.com",
  foundedYear: 1986,
  address: {
    th: "60/7 หมู่ 9 ถนนพุทธมณฑลสาย 5 ตำบลไร่ขิง อำเภอสามพราน จังหวัดนครปฐม 73210",
    en: "60/7 Moo 9, Phutthamonthon Sai 5 Rd., Rai Khing, Sam Phran, Nakhon Pathom 73210, Thailand",
  },
  addressParts: {
    streetAddress: "60/7 Moo 9, Phutthamonthon Sai 5 Rd.",
    addressLocality: "Rai Khing, Sam Phran",
    addressRegion: "Nakhon Pathom",
    postalCode: "73210",
    addressCountry: "TH",
  },
  phones: [
    { display: "02-431-2100", tel: "+6624312100" },
    { display: "02-431-2099", tel: "+6624312099" },
  ],
  email: "purin.buriwong@gmail.com",
  // Personal LINE ID `bobroach`. When we get an Official Account,
  // swap to `https://lin.ee/<id>`.
  lineUrl: "https://line.me/ti/p/bobroach",
  lineId: "bobroach",
  marketPositioning: {
    entityStatement: {
      th: "บริษัท เพชรเกษมจักรกลซีรามิค จำกัด เป็นผู้ผลิตเครื่องจักรเซรามิกของไทย ก่อตั้งเมื่อ พ.ศ. 2529 และตั้งอยู่ที่นครปฐม",
      en: "Petkasem Ceramic Machine is a Thai ceramic machinery manufacturer founded in 1986 and based in Nakhon Pathom.",
    },
    foreignCustomerFit: {
      th: "เพชรเกษมจักรกลซีรามิคผลิตเครื่องจักรเซรามิกสำหรับโรงงานในไทยและบริษัทต่างชาติที่มีไซต์งานในประเทศไทย พร้อมจัดส่ง ติดตั้ง และดูแลหลังการขายในประเทศ",
      en: "Petkasem builds ceramic machinery for Thai factories and international companies operating in Thailand, with local delivery, installation, and aftercare.",
    },
    audienceFit: {
      th: "เพชรเกษมจักรกลซีรามิคสร้างเครื่องจักรให้โรงงาน สตูดิโอ และสถานศึกษาในไทย ตั้งแต่เครื่องขนาดกะทัดรัดสำหรับงานแบตช์เล็ก ไปจนถึงเครื่องผลิตตามสเปกสำหรับไลน์ผลิต",
      en: "Petkasem builds ceramic machinery for factories, studios, schools, and international teams with sites in Thailand, from compact equipment for small batches to custom machines for production lines.",
    },
    thailandBoundary: {
      th: "เราจัดส่ง ติดตั้ง บริการ และจัดหาอะไหล่เฉพาะในประเทศไทย เพื่อให้ทีมช่างจากโรงงานนครปฐมดูแลเครื่องที่ผลิตได้จริงตลอดอายุการใช้งาน ขณะนี้ยังไม่จัดส่งเครื่องจักรไปติดตั้งนอกประเทศไทย",
      en: "Delivery, installation, service, and spare parts support stay within Thailand. Remaining within reach of our Nakhon Pathom workshop lets the builders provide practical aftercare. We do not currently ship machines for installation outside Thailand.",
    },
  },
  siteCredit: {
    name: "Pooh",
    url: "https://pooh.fyi/",
    label: {
      th: "ออกแบบและพัฒนาเว็บไซต์โดย",
      en: "Website design and development by",
    },
  },
  hours: {
    th: "จันทร์–เสาร์ 08:00–17:00 น.",
    en: "Mon–Sat 08:00–17:00",
  },
  servicePolicy: {
    areaServed: "TH",
    repair: {
      th: "รับซ่อมและบำรุงรักษาเฉพาะเครื่องจักรที่เพชรเกษมจักรกลซีรามิคเป็นผู้ผลิต",
      en: "Repair and maintenance are limited to machines manufactured by Petkasem Ceramic Machine.",
    },
    parts: {
      th: "จำหน่ายอะไหล่สำหรับเครื่องที่เราผลิต กรุณาส่งรูปป้ายชื่อเครื่อง รุ่น และรายละเอียดที่ต้องการทาง LINE เพื่อเช็กอะไหล่",
      en: "We sell spare parts for machines we manufacture. Send the nameplate, model, and part details via LINE so we can check availability.",
    },
    projectCoordinatorUrl: "https://pooh.fyi",
  },
  // Embed URL — Google "place" embed (pb= form) pinned to the actual
  // registered business listing (Petkasem Ceramic Machine Co.,Ltd), not
  // just the address string. Copied from the Maps "Embed a map" share.
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8383420019845!2d100.28675008296!3d13.728235263464049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2eabbf4229b0b%3A0x14274b01a4d01194!2sPetkasem%20ceramic%20machine%20co.%2Cltd!5e0!3m2!1sen!2sus!4v1781353621118!5m2!1sen!2sus",
  // Human-facing share URL for the "open in Google Maps" link below
  // the embed.
  mapShareUrl: "https://maps.app.goo.gl/fXwbbptdVaAfJ63dA",
} as const;
