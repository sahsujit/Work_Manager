import Image from "next/image";
import HomePage from "../components/HomePage/page";

export const metadata = {
  title: "Home : Work Manager",
 
};

export default function Home() {
  return (
    <main className="w-full relative ">
      <HomePage/>
     
    </main>
  );
}
