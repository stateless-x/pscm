// Dev-mode root redirect: / → /th/
// Under `output: 'export'` Next can't do a server redirect at /, so we
// ship a client-side one. Production (static export) overwrites this
// emitted index.html with scripts/postbuild.mjs, which is a noindex
// meta-refresh stub — so this client component only matters in `bun
// run dev`. Same destination either way.
"use client";
import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace("/th/");
  }, []);
  return (
    <main className="grid min-h-screen place-items-center bg-[#0f1113] text-[#9aa1a8]">
      <p>Redirecting to /th/…</p>
    </main>
  );
}
