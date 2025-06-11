import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Berneisch | Frontend Developer",
  description:
    "Welcome to my portfolio website. I'm a frontend developer based in Munich.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/images/new-profile-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grid-gray-900/[0.04]`}>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1e2939",
              color: "#fff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
