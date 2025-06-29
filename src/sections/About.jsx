import { useRef, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Ribbons from "../components/Ribbons";
import DownArrowButton from "../components/DownArrowButton";

const About = () => {
  const grid2Container = useRef();
  const [showRibbons, setShowRibbons] = useState(false);

  // Handler to show ribbons animation
  const handleCopyEmail = () => {
    console.log("CopyEmailButton clicked");
    setShowRibbons(true);
    setTimeout(() => setShowRibbons(false), 2000);
  };

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Ayush</p>
            <p className="subtext">
              An aspiring Philosopher. Researcher. AI Engineer. Full Stack
              Developer with knowledge in Game Dev. Over the last year, I have
              turned my fascinations into reality.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              TURNING IDEAS INTO REALITY
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "25%" }}
              image="assets/logos/arch.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "50%" }}
              image="assets/logos/linux.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", top: "10%", left: "75%" }}
              image="assets/logos/rust.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "2%" }}
              image="assets/logos/terminal.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "43%" }}
              image="assets/logos/binary.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "80%" }}
              image="assets/logos/ubuntu.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/cplusplus.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/nInjaOS.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location & Reachability</p>
            <p className="subtext">
              I&apos;m based in India, always open to
              global collaborations, Feel free to reach out!
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 relative">
          <Ribbons visible={showRibbons} />
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Have an Idea? Let&apos;s turn it into reality together.
            </p>
            <CopyEmailButton onClick={handleCopyEmail} />
            <DownArrowButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a wide range - from elegent
              frontends to powerful AI pipelines. I work
              across web, app, ML, and game dev.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
