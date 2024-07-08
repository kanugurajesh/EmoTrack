import { SignedIn } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SignedIn>{children}</SignedIn>
}
