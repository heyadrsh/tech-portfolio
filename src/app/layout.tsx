import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Aadarsh Kumar - Software Developer & AI/ML Engineer",
  description: "Passionate software developer specializing in AI/ML development. Building innovative solutions and striving for excellence in every project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} antialiased`}
        style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
