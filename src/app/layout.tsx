import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"Grupo Haymour | Arquitetura em movimento",description:"Uma experiência visual de arquitetura e engenharia."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
