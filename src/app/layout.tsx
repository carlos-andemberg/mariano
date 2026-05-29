import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dscreative.duckdns.org/"),
  title: "DS Creative | Design Profissional e Restauração de Imagens",
  description: "Transforme suas imagens em resultados com o design profissional de David Saravia. Correção de nitidez, restauração de fotos e materiais de marketing de alta conversão.",
  keywords: ["design", "restauração de fotos", "marketing", "David Saravia", "DS Creative", "design gráfico", "social media", "alta conversão"],
  authors: [{ name: "Carlos Andemberg", url: "https://www.carlosandemberg.com.br" }],
  creator: "Carlos Andemberg",
  publisher: "DS Creative",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dscreative.duckdns.org/",
    title: "DS Creative | Design Profissional e Restauração de Imagens",
    description: "Transforme suas imagens em resultados com o design profissional de David Saravia. Correção de nitidez, restauração de fotos e materiais de marketing de alta conversão.",
    siteName: "DS Creative",
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Creative | Design Profissional e Restauração de Imagens",
    description: "Transforme suas imagens em resultados com o design profissional de David Saravia. Correção de nitidez, restauração de fotos e materiais de marketing de alta conversão.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
