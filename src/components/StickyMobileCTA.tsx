import { Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/site";

export function StickyMobileCTA() {
  const t = useTranslations("nav");
  const phone = SITE.phones[0];

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-line-dark bg-bg/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${phone.tel}`}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-amber text-sm font-semibold text-ink active:bg-amber-strong"
        >
          <Phone size={18} />
          {t("call")} {phone.display}
        </a>
        <a
          href={SITE.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-[#06C755] text-sm font-semibold text-white active:bg-[#05a648]"
        >
          <MessageCircle size={18} />
          {t("line")}
        </a>
      </div>
    </div>
  );
}
