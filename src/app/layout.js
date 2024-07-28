import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import UserProvider from "@/context/userProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Work Manager",
  description: "Created by sujit sah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden min-h-screen bg-richblack-900 flex flex-col font-inter">
        <UserProvider>
        <Navbar/>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
        <Footer/>
        </UserProvider>
        </body>
    </html>
  );
}
