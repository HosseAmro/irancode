import { FaAngleLeft } from "react-icons/fa6";
import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Iran Code",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        <div className="flex w-full justify-center">
          <div className="relative min-h-screen w-[500px] max-[300px]:w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
