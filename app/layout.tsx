import type { Metadata } from "next";
import { Cinzel, Roboto } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://will-hargrave-portfolio.vercel.app"),
  title: {
    default: "Will H. | Software Engineering Portfolio",
    template: "%s | Will H.",
  },
  description:
    "A bilingual software-engineering portfolio presenting solo projects, technical challenges, and implementation details.",
  openGraph: {
    title: "Will H. | Software Engineering Portfolio",
    description:
      "Solo software projects for recruiters, hiring managers, and engineering teams.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${roboto.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
