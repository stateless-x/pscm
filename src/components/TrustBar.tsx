import { useTranslations } from "next-intl";
import { Container } from "./Container";

// Restraint: big numerals as the visual hierarchy, mono labels supporting.
// No cards. Hairline rules separate the columns; vertical rhythm carries
// the eye. Falls back to stacked on mobile.

const ITEMS = [
  { stat: "35+", labelKey: "years", subKey: "yearsSub" },
  { stat: "OEM", labelKey: "inhouse", subKey: "inhouseSub" },
  { stat: "TH", labelKey: "thailand", subKey: "thailandSub" },
  { stat: "1986", labelKey: "nationwide", subKey: "nationwideSub" },
] as const;

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section className="border-y border-line bg-paper py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-4 md:divide-y-0 md:divide-x">
          {ITEMS.map((item, i) => (
            <div
              key={item.labelKey}
              className="flex flex-col gap-3 py-6 md:py-2 md:px-7 md:first:pl-0 md:last:pr-0"
            >
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                {String(i + 1).padStart(2, "0")} / 04
              </span>
              <span className="mono text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-none tracking-tight text-text">
                {item.stat}
              </span>
              <div className="mt-1">
                <div className="text-base font-semibold leading-snug text-text">
                  {t(item.labelKey)}
                </div>
                <div className="mt-1 text-sm text-text-muted leading-snug">
                  {t(item.subKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
