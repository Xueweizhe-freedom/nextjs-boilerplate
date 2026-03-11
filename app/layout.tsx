import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI工具导航 - 发现最热门的AI工具",
  description: "AI工具导航网站，汇集ChatGPT、Midjourney、Claude等150+热门AI工具，涵盖AI聊天、图像生成、视频制作、编程开发等多个分类",
  keywords: "AI工具,AI导航,ChatGPT,Midjourney,AI写作,AI编程,AI图像,AI视频",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
