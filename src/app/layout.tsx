// Root layout passes through to the locale-specific layout.
// Per next-intl static-export pattern, html/body live in [locale]/layout.tsx
// so the lang attribute and font variables reflect the active locale.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
