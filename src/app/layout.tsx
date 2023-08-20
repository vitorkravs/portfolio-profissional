import { GlobalStyle } from '@/styles/global'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <GlobalStyle />
      <body>{children}</body>
    </html>
  )
}
