import About from "@/components/About/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Statistics from '@/components/Statistics';
import Gallery from '@/components/Gallery';


export default function Home() {
  return (
    <>
    <Hero />
    <Team />
    <Statistics />
    <Contact />
    <About />
    <Gallery />
    </>
  )
}
