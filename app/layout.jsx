import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import "./globals.css";
import Loader from "@/components/loader/Loader";
import Providers from "@/store/provider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Healthcare",
  description: "Weight loss and fitness tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={inter.className}
          style={{
            height: "100vh",
          }}
        >
          <Header />
          <Suspense fallback={<Loader />}>{children}</Suspense>
          {/* {children} */}
        </body>
      </Providers>
    </html>
  );
}
