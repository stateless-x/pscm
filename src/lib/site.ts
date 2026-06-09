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
  // TODO §15.7: confirm production domain
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
  // TODO §15.1: replace with LINE Official Account deep link
  lineUrl: "https://line.me/R/ti/p/~",
  hours: {
    th: "จันทร์–เสาร์ 08:00–17:00 น.",
    en: "Mon–Sat 08:00–17:00",
  },
  // Map embed src (Nakhon Pathom approx — replace once confirmed)
  mapEmbedSrc:
    "https://www.google.com/maps?q=Sam+Phran,+Nakhon+Pathom&output=embed",
} as const;
