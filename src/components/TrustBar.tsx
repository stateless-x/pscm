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
    <section className="border-y-2 border-bg bg-amber py-12 text-ink md:py-16">
      <Container>
        <div className="reveal-stagger grid grid-cols-2 divide-x divide-y divide-ink/25 md:grid-cols-4 md:divide-y-0">
          {ITEMS.map((item, i) => (
            <div
              key={item.labelKey}
              className="flex flex-col gap-3 p-5 md:px-7 md:py-2 md:first:pl-0 md:last:pr-0"
            >
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
                {String(i + 1).padStart(2, "0")} / 04
              </span>
              <span className="mono text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-none tracking-tight text-ink">
                {item.stat}
              </span>
              <div className="mt-1">
                <div className="text-base font-bold leading-snug text-ink">
                  {t(item.labelKey)}
                </div>
                <div className="mt-1 text-sm text-ink/65 leading-snug">
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
