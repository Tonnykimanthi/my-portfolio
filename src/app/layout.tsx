import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "Tonny Kimanthi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-light p-5 text-dark antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
