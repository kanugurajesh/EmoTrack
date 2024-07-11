import { SignedIn } from '@clerk/nextjs'
import StoreProvider from '../StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SignedIn>
      <StoreProvider>
        <div className="px-10">{children}</div>
      </StoreProvider>
    </SignedIn>
  )
}
