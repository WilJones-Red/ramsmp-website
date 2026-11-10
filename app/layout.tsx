import { sitePath } from "../lib/site-path";
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'RAMSMP — Your next chapter starts here', description: 'Join RAMSMP on Minecraft Java or Bedrock. Server addresses, updates, FAQs, and community showcases.', icons: { icon: sitePath('/assets/logo.png') } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
