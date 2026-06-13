// PSCM logotype — single row "PSCM", industrial. Rendered inline (not <img>)
// so it inherits `currentColor`; set the colour with a text-* class and it
// works on dark or light. Wide horizontal lockup (≈3:1), so size it by height
// and let width follow (h-* w-auto). This is the nav/footer wordmark.
//
// NOTE: public/logo.svg is intentionally DIFFERENT — it stays the square 2x2
// PSCM stamp because a wide one-liner is unreadable as a favicon/tab icon.
//
// Letters are bold geometric paths (no font dependency) on a 120x40 grid,
// each in its own ~28-wide column, with a thin baseline rule for a
// stamped-on-steel cue.
export function PscmMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      role="img"
      aria-label="PSCM — Petkasem Ceramic Machine"
      fill="currentColor"
    >
      {/* P (x0) */}
      <path d="M2 6h9.5c4.7 0 7.8 2.8 7.8 7.2 0 4.4-3.1 7.2-7.8 7.2H7v6.6H2zM7 10.4v5.6h3.9c2 0 3.2-1 3.2-2.8s-1.2-2.8-3.2-2.8z" />
      {/* S (x30) */}
      <path d="M40.6 5.5c3.5 0 6.1 1.3 7.7 3.5l-3.5 2.9c-1-1.3-2.4-2-4.2-2-1.5 0-2.6.6-2.6 1.7 0 1.1 1.3 1.5 3.5 2 3.4.8 7.1 1.9 7.1 6.1 0 3.9-3.2 6.2-7.9 6.2-3.8 0-6.8-1.5-8.5-3.9l3.6-2.8c1.1 1.5 2.8 2.4 5 2.4 1.8 0 2.8-.6 2.8-1.8 0-1.2-1.4-1.6-3.7-2.1-3.3-.8-6.8-1.9-6.8-6 0-3.7 3.1-6.1 7.5-6.1z" />
      {/* C (x60) */}
      <path d="M73 5.5c3.5 0 6.4 1.5 8.1 4.1l-3.9 2.7c-.9-1.3-2.4-2.2-4.2-2.2-2.8 0-4.9 2.2-4.9 5.4s2.1 5.4 4.9 5.4c1.8 0 3.3-.9 4.2-2.2l3.9 2.7c-1.7 2.6-4.6 4.1-8.1 4.1-5.9 0-10.1-4.2-10.1-10s4.2-10 10.1-10z" />
      {/* M (x90) */}
      <path d="M90 6h5.3l4.4 8.6L104.1 6h5.3v21.2h-5v-12l-4.6 8.8-4.6-8.8v12H90z" />
      {/* baseline rule */}
      <rect x="2" y="33.5" width="107.4" height="2.2" />
    </svg>
  );
}
