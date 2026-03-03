import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import resume from "../../assets/TulasiDas.pdf";



const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Vertical Line */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* Text Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]}{" "}
            <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          {/* Resume Button */}
  <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "TulasiDas.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300"
>
  Download Resume
</button>
        </div>
      </div>

      {/* 3D Background */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;