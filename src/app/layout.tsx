import SignUser from "@/components/SignUser/SignUser";
import GoBack from "@/components/Header/Header";
import { Vazirmatn } from "next/font/google";
import { Provider } from "@/context";
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
    <html lang="fa">
      <body className={vazirmatn.className}>
        <Provider>
          <div className="flex w-full justify-center">
            <div className="relative min-h-screen w-[500px] max-[300px]:w-full">
              <GoBack />
              <SignUser>{children}</SignUser>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
