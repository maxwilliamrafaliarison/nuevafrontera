// Root layout passes through to [locale]/layout.tsx which provides <html> and <body>
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
