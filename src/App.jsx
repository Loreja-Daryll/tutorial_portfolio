import Hero from "./components/Hero.jsx";
import WhoIsMe from "./components/WhoIsMe.jsx";
import Background from "./components/Background.jsx";
import MyArt from "./components/MyArt.jsx";
import Quote from "./components/Quote.jsx";
import MoreWork from "./components/MoreWork.jsx";

export default function App() {
  return (
    <main className="bg-ink min-h-screen text-white overflow-x-hidden">
      <Hero />
      <WhoIsMe />
      <Background />
      <MyArt />
      <Quote />
      <MoreWork />
    </main>
  );
}
