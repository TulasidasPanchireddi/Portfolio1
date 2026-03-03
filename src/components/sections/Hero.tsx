import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import resume from "../../assets/TulasiDas.pdf";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-6 pt-28`}
      >
        {/* Left Line (Hide on Mobile) */}
        <div className="hidden sm:flex flex-col items-center justify-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-4`}>
            {config.hero.p[0]}
            <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume;
              link.setAttribute("download", "TulasiDas.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="mt-6 px-6 py-3 sm:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <a href="#about">
          <div className="border-secondary flex h-[50px] w-[30px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary h-2 w-2 rounded-full"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;