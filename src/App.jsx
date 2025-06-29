import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Projects />
        <Experiences />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
};

export default App;
