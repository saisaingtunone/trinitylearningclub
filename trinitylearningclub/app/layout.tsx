import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"Trinity Learning Club | Learn, Connect, Grow",description:"English, Chinese, Thai and mathematics courses in Muse, Myanmar.",other:{"codex-preview":"development"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
