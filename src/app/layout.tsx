import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../../context/appContext";
import APIContextProvider from "../../context/apiContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geography Graphic",
  description: "Geography Graphic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppContextProvider>
        <APIContextProvider>
          <body className={inter.className}>{children}</body>
        </APIContextProvider>
      </AppContextProvider>
    </html>
  );
}
