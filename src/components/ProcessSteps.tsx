export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={i}
          className="relative flex flex-col gap-2 border border-line bg-paper p-4"
        >
          <span className="mono text-[10px] uppercase tracking-[0.18em] text-amber-strong">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium leading-snug text-text">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
