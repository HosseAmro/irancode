import SignUser from "@/components/SignUser/SignUser";
import Header from "@/components/Header/Header";
import { Provider } from "@/context";
import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-iranyekan">
        <Provider>
          <div className="flex w-full justify-center">
            <div className="relative min-h-screen w-[500px] max-[300px]:w-full">
              <Header />
              <SignUser>{children}</SignUser>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
