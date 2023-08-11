"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { FilterContextProvider } from "@/context/filter/FilterContext";
import { usePathname } from "next/navigation";
import { AuthContextProvider } from "@/context/auth/AuthContext";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  console.log(pathName);
  if (pathName == "/login") {
    return (
      <html lang="en">
        <body className="poppins.calssName" id="root">{children}</body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContextProvider>
          <Navbar />
          <FilterContextProvider>{children}</FilterContextProvider>
        </AuthContextProvider>
        <div id="portal"></div>
      </body>
    </html>
  );
}
