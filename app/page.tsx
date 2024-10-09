import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { AppleCardsCarouselDemo } from "./components/AppleCarouselDemo";
import Transformando from "./components/transformando";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import Sobremi from "./components/Sobremi";

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroParallaxDemo/>
    <Transformando />
    <AppleCardsCarouselDemo />
    <Sobremi />
    <Footer />
    </>
  );
}
