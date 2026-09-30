import Header from "./components/header.tsx";
import About from "./components/about.tsx";
import Achievements from "./components/achievements.tsx";
import Hero from "./components/hero.tsx";
import Testimonials from "./components/testimonials.tsx";
import FormsFooter from "./components/forms-n-footer.tsx";
import Pricing from "./components/pricing.tsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Pricing />
      <Testimonials />
      <FormsFooter />
    </div>
  );
}

export default App;
