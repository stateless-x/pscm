export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={i}
          className="job-sheet relative flex min-h-36 flex-col justify-between gap-4 p-5"
        >
          <span className="mono text-3xl font-medium tracking-tight text-amber-strong">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold leading-snug text-text">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
