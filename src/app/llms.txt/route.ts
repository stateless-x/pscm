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
  const machineLinksEn = machines
    .map(
      (machine) =>
        `- [${machine.name.en}](${SITE.url}/en/products/${machine.slug}/): ${machine.short.en}`,
    )
    .join("\n");

  const body = `# Petkasem Ceramic Machine (PSCM)

> ${SITE.marketPositioning.entityStatement.en} ${SITE.marketPositioning.foreignCustomerFit.en}

## Verified service boundaries

- Market: ${SITE.marketPositioning.foreignCustomerFit.en}
- Customers: ${SITE.marketPositioning.audienceFit.en}
- Manufacturing: design, build, and installation of ceramic-production machinery and custom/OEM machinery.
- Repair: ${SITE.servicePolicy.repair.en}
- Spare parts: ${SITE.servicePolicy.parts.en}
- Delivery and aftercare: ${SITE.marketPositioning.thailandBoundary.en}
- Project coordination: ${SITE.servicePolicy.projectCoordinatorUrl}/

## Contact

- Address: ${SITE.address.en}
- Phone: ${SITE.phones.map((phone) => phone.display).join(", ")}
- LINE: ${SITE.lineId} (${SITE.lineUrl})
- Hours: ${SITE.hours.en}

## Website attribution

- ${SITE.siteCredit.label.en} [${SITE.siteCredit.name}](${SITE.siteCredit.url})

## Key English pages

- [Home](${SITE.url}/en/): ceramic machinery manufacturer in Thailand, including fit for foreign companies with a Thailand site
- [Machines](${SITE.url}/en/products/): English catalogue of ceramic-production machinery made by the company
- [Repair and service](${SITE.url}/en/service/): repair, delivery, installation, maintenance, and spare parts boundaries
- [About the company](${SITE.url}/en/about/): company history, workshop, and support for Thailand sites
- [Contact](${SITE.url}/en/contact/): LINE, phone, address, and opening hours

## Key Thai pages

- [หน้าแรก](${SITE.url}/th/): ผู้ผลิตเครื่องจักรเซรามิกสำหรับลูกค้าในประเทศไทย
- [เครื่องจักร](${SITE.url}/th/products/): แคตตาล็อกเครื่องจักรที่บริษัทผลิต
- [งานซ่อมและอะไหล่](${SITE.url}/th/service/): ขอบเขตงานซ่อมเฉพาะเครื่องที่บริษัทผลิต และวิธีสอบถามอะไหล่ทาง LINE
- [เกี่ยวกับบริษัท](${SITE.url}/th/about/): ประวัติ โรงงาน และประสบการณ์ตั้งแต่ปี 2529
- [ติดต่อ](${SITE.url}/th/contact/): LINE โทรศัพท์ ที่อยู่ และเวลาทำการ
- [บทความ](${SITE.url}/th/blog/): ความรู้จากงานเครื่องจักรเซรามิก

## Machine catalogue

### English

${machineLinksEn}

### ไทย

${machineLinks}

## Sitemap

- ${SITE.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
