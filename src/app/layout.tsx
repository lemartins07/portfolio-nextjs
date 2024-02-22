import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Navlink } from '@/components/Navlink'
import { GlobalStyles } from '@/styles/global'
import ThemeClient from './ThemeClient'

export const metadata: Metadata = {
  title: 'lemartins07 portfolio',
  description: 'Portfolio of Leandro Martins',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeClient>
          <GlobalStyles />
          <Navlink />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeClient>
      </body>
    </html>
  )
}
