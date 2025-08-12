import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "Tonny Kimanthi",
  description:
    "The website showcases my skills and projects I have built since becoming a web developer.",
  icons: {
    icon: "/my-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-light bg-[url('/animatedBg.svg')] p-5 text-dark antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
