"use client";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { machineBySlug } from "@/data/machines";
import { SITE } from "@/lib/site";
import { Send } from "lucide-react";

// No backend yet: form composes a mailto: with the body pre-filled.
// Swap the action to a Web3Forms / Formspree endpoint when ready.
export function ContactForm({ locale }: { locale: "th" | "en" }) {
  const t = useTranslations("contact");
  const params = useSearchParams();
  const ref = params.get("ref");
  const refMachine = ref ? machineBySlug(ref) : undefined;
  const initialMessage = refMachine
    ? `${t("interestedIn")} ${refMachine.name[locale]} (${refMachine.model ?? refMachine.slug})\n\n`
    : "";

  const [message, setMessage] = useState(initialMessage);

  return (
    <form
      method="post"
      action={`mailto:${SITE.email}`}
      encType="text/plain"
      className="grid gap-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label={t("fieldName")} required />
        <Field name="company" label={t("fieldCompany")} />
        <Field name="phone" label={t("fieldPhone")} type="tel" required />
        <Field name="email" label={t("fieldEmail")} type="email" />
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-text">{t("fieldMessage")}</span>
        <textarea
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-line bg-paper px-3 py-2.5 text-base text-text outline-none focus:border-amber"
        />
      </label>
      <p className="text-xs text-text-muted">{t("formNote")}</p>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 self-start bg-amber px-6 text-sm font-semibold text-ink hover:bg-amber-strong"
      >
        {t("send")}
        <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-text">
        {label}
        {required && <span className="text-amber-strong"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="border border-line bg-paper px-3 py-2.5 text-base text-text outline-none focus:border-amber"
      />
    </label>
  );
}
