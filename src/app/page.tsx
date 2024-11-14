import Hr from "./components/Hr";
import About from "./ui/About";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";

export default function Home() {
  return (
    <div className="p-5">
      <About />

      <Hr title="Skills"/>
      <Skills />


      <Hr title="Projects"/>
      <Projects />

    </div>
  );
}
