
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import UpcomingEvent from "@/components/UpcomingEvent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <UpcomingEvent/>
    </div>
  );
}
