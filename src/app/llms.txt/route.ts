import { machines } from "@/data/machines";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const machineLinks = machines
    .map(
      (machine) =>
        `- [${machine.name.th}](${SITE.url}/th/products/${machine.slug}/): ${machine.short.th}`,
    )
    .join("\n");

  const body = `# Petkasem Ceramic Machine (PSCM)

> ${SITE.name.en} (${SITE.name.th}) is a Thai manufacturer of ceramic-production machinery, founded in ${SITE.foundedYear} and based in Nakhon Pathom. The company primarily serves customers in Thailand.

## Verified service boundaries

- Market: customers in Thailand are the primary focus.
- Manufacturing: design, build, and installation of ceramic-production machinery and custom/OEM machinery.
- Repair: ${SITE.servicePolicy.repair.en}
- Spare parts: ${SITE.servicePolicy.parts.en}
- International: ${SITE.servicePolicy.international.en}
- International coordination: ${SITE.servicePolicy.internationalCoordinatorUrl}/

## Contact

- Address: ${SITE.address.en}
- Phone: ${SITE.phones.map((phone) => phone.display).join(", ")}
- LINE: ${SITE.lineId} (${SITE.lineUrl})
- Hours: ${SITE.hours.en}

## Key Thai pages

- [หน้าแรก](${SITE.url}/th/): ผู้ผลิตเครื่องจักรเซรามิกสำหรับลูกค้าในประเทศไทย
- [เครื่องจักร](${SITE.url}/th/products/): แคตตาล็อกเครื่องจักรที่บริษัทผลิต
- [งานซ่อมและอะไหล่](${SITE.url}/th/service/): ขอบเขตงานซ่อมเฉพาะเครื่องที่บริษัทผลิต และวิธีสอบถามอะไหล่ทาง LINE
- [เกี่ยวกับบริษัท](${SITE.url}/th/about/): ประวัติ โรงงาน และประสบการณ์ตั้งแต่ปี 2529
- [ติดต่อ](${SITE.url}/th/contact/): LINE โทรศัพท์ ที่อยู่ และเวลาทำการ
- [บทความ](${SITE.url}/th/blog/): ความรู้จากงานเครื่องจักรเซรามิก

## Machine catalogue

${machineLinks}

## Sitemap

- ${SITE.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
