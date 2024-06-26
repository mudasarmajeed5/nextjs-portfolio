import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
import Footer from "@/components/Footer";
export const metadata = {
  title: "Mudassar Majeed | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
