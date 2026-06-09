import { useTranslations } from "next-intl";
import { Award, Wrench, Flag, Factory } from "lucide-react";
import { Container } from "./Container";

const ITEMS = [
  { icon: Award, stat: "35+", labelKey: "years", subKey: "yearsSub" },
  { icon: Wrench, stat: "OEM", labelKey: "inhouse", subKey: "inhouseSub" },
  { icon: Flag, stat: "TH", labelKey: "thailand", subKey: "thailandSub" },
  { icon: Factory, stat: "1986", labelKey: "nationwide", subKey: "nationwideSub" },
] as const;

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section className="border-y border-line bg-paper-2 py-10 md:py-12">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.labelKey}
              className="flex flex-col gap-1.5 border-l-2 border-amber pl-4"
            >
              <div className="flex items-center gap-2">
                <item.icon size={18} className="text-text-muted" aria-hidden="true" />
                <span className="mono text-xs uppercase tracking-wider text-text-muted">
                  {item.stat}
                </span>
              </div>
              <div className="text-sm font-semibold text-text leading-tight">
                {t(item.labelKey)}
              </div>
              <div className="text-xs text-text-muted leading-snug">
                {t(item.subKey)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
