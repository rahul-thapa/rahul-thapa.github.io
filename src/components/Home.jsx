import { useEffect, useState } from "react";
import ReactIcon from "../assets/react-icon.svg?react";
import NodejsIcon from "../assets/nodejs-icon.svg?react";
import MongodbIcon from "../assets/mongodb-icon.svg?react";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("About");
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const triggerRandomly = () => {
      const delay = Math.random() * 5000 + 3000; // 3–8 sec random interval
      setTimeout(() => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 300); // glitch lasts 0.3s
        triggerRandomly();
      }, delay);
    };

    triggerRandomly();
  }, []);

  const setActive = (menuItem) => {
    console.log("Setting active menu to:", menuItem);
    setActiveMenu(menuItem);
  };

  return (
    <main className="overflow-auto relative font-rajdhani w-screen h-screen crt">
      <div className="absolute bg-gradient-to-r from-cyber-black/50 via-cyber-red/10 to-transparent top-0 left-0 h-screen w-sm"></div>

      <div className="absolute top-0 right-2" style={{ writingMode: "sideways-lr" }}>
        <p className="text-cyber-green/50 text-sm tracking-wide">
          REMOTE: <span className="text-cyber-green/50">YES</span> | HYBRID: <span className="text-cyber-green/50">YES</span>
        </p>
        <div className="h-72 w-[1px] bg-cyber-red/50"></div>
        <p className="text-cyber-red/50 text-xs tracking-widest">COORDINATES: 26.6340°N, 92.8000°E</p>
      </div>

      <div className="relative flex flex-col justify-center items-start p-4 mb-6">
        <h1 className="absolute font-cyberpunk text-8xl text-right text-cyber-black/20 tracking-[-0.15em]">RAHUL THAPA</h1>
        <h1
          className={`relative font-cyberpunk text-8xl text-right text-cyber-yellow tracking-[-0.15em] text-shadow-cyber-cyan/75 text-shadow-sm ${
            glitching && "glitch"
          }`}
        >
          RAHUL THAPA
        </h1>

        <p className="font-cyberpunk text-xl text-right text-cyber-cyan text-shadow-cyber-yellow/75 text-shadow-xs">
          FULLSTACK DEVELOPER
        </p>
      </div>

      <section className="flex p-4 justify-start items-center">
        <div className="grid grid-cols-3 gap-0 w-full">
          <div className="col-span-1">
            <div className="flex flex-col">
              <MenuItem title="About" active={activeMenu} setActive={setActive} />
              <MenuItem title="Projects" active={activeMenu} setActive={setActive} />
              <MenuItem title="Contact" active={activeMenu} setActive={setActive} />
              <MenuItem title="Switch To Boring Mode" active={activeMenu} setActive={setActive} />
              <div className="mt-24 tracking-wider">
                <p className="text-cyber-green/50 text-sm">STATUS: Open to opportunities</p>
                <div className="w-84 h-[1px] bg-gradient-to-r from-cyber-red/50 via-cyber-red/50 to-transparent"></div>
                <p className="text-cyber-red/50 text-[10px]">v1.0 | Made with React & Astro</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 font-rajdhani text-cyber-white/75">
            <div>
              <h2 className="text-2xl mb-4 font-bold">
                <GlowingText text="DATA" bgColorClass="bg-cyber-cyan" blurClass="blur-xl" />
              </h2>

              <div className="mb-4">
                <h3>SCAN RESULTS</h3>
                <p className="text-2xl text-cyber-yellow tracking-tighter">FULLSTACK DEVELOPER;</p>
              </div>

              <div className="mb-4">
                <h3>CURRENT MISSION</h3>
                <p className="text-xl text-cyber-cyan/70">Founder & CEO; Stealth Blockchain Startup {"{2022 - current}"};</p>
              </div>

              <div className="mb-4">
                <h3>BIO</h3>
                <p className="text-xl text-cyber-cyan/70">
                  Self-taught developer & hobbyist game-dev; Problem Solver; Obsessed with performance; Introvert; Passionate
                  about games;
                </p>
              </div>

              <div className="mb-4">
                <h3>WANTED FOR</h3>
                <p className="text-xl text-cyber-cyan/70">
                  Building beautiful websites; Optimizing too much; Writing clean code;
                </p>
              </div>

              <div>
                <h3>ABILITIES</h3>
                <div className="flex items-center gap-4 mb-4">
                  <ReactIcon className="w-8 h-8" />
                  <p className="text-cyber-cyan/90 text-2xl">
                    <GlowingText text="REACT;" bgColorClass="bg-cyber-cyan" blurClass="blur-sm" />
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <NodejsIcon className="w-8 h-8" />
                  <p className="text-cyber-cyan/90 text-2xl">
                    <GlowingText text="NODE JS;" bgColorClass="bg-cyber-cyan" blurClass="blur-sm" />
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <MongodbIcon className="w-8 h-8" />
                  <p className="text-cyber-cyan/90 text-2xl">
                    <GlowingText text="MONGO DB;" bgColorClass="bg-cyber-cyan" blurClass="blur-sm" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const MenuItem = ({ title, active, setActive }) => {
  const isActive = title === active;
  if (isActive) {
    return (
      <button
        onClick={() => console.log("Clicked on active menu:", title)}
        className="corner-shape-bevel cursor-pointer relative p-4 w-84 mb-3 text-xl font-rajdhani text-cyber-cyan text-left border-1 border-l-4 border-cyber-cyan hover:bg-cyber-cyan/10  transition-colors duration-300 ease-in-out"
        style={{ borderEndEndRadius: "25px", cornerShape: "bevel" }}
      >
        {title.toUpperCase()}
      </button>
    );
  }

  return (
    <>
      <div
        onClick={() => setActive(title)}
        className="relative corner-shape-bevel  border-1 border-l-4 border-transparent font-rajdhani text-xl p-4 mb-3 w-84 flex-1 cursor-pointer hover:bg-cyber-red/10 hover:border-cyber-red transition-colors duration-300 ease-in-out"
        style={{ borderEndEndRadius: "25px", cornerShape: "bevel" }}
      >
        <span className="absolute pointer-events-none mx-auto flex border w-fit blur-lg bg-cyber-red bg-clip-text box-content text-transparent text-center select-none">
          {title.toUpperCase()}
        </span>
        <h1 className="relative top-0 w-fit h-auto justify-center flex items-center bg-cyber-red bg-clip-text text-transparent text-center select-auto">
          {title.toUpperCase()}
        </h1>
      </div>
    </>
  );
};

const GlowingText = ({ text, bgColorClass, blurClass }) => {
  return (
    <>
      <span
        className={`absolute mx-auto flex border w-fit ${blurClass ? blurClass : "blur-xl"} ${
          bgColorClass && "bg-cyber-cyan"
        } bg-clip-text box-content text-transparent text-center select-none`}
      >
        {text}
      </span>
      <span
        className={`relative top-0 w-fit h-auto justify-center flex items-center ${
          bgColorClass && "bg-cyber-cyan"
        } bg-clip-text text-transparent text-center select-auto`}
      >
        {text}
      </span>
    </>
  );
};

export default Home;
