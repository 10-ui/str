import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lineSeed = localFont({
  src: [
    {
      path: "./fonts/lineSeed/LINESeedJP_OTF_Th.woff2",
      weight: "250",
      style: "normal",
    },
    {
      path: "./fonts/lineSeed/LINESeedJP_OTF_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/lineSeed/LINESeedJP_OTF_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/lineSeed/LINESeedJP_OTF_Eb.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-line-seed",
});

export const metadata: Metadata = {
  title: "4rl.me | 想いを伝えるメッセージアプリ",
  description:
    "4rl.meは、あなたの恋人、家族、親友への想いを伝えられるアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={` ${lineSeed.variable} antialiased`}>{children}</body>
    </html>
  );
}
