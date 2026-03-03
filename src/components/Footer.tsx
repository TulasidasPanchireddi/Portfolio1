import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-200 text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

       
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">TulasiDas Panchireddi</h2>
          <p className="text-sm text-gray-400">
            Python Full Stack Developer
          </p>
        </div>

      
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/TulasidasPanchireddi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/panchireddi-tulasidas-2546a0270/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

         
        </div>

       
        <div className="text-sm text-gray-400 text-center md:text-right space-y-2">
          <p className="flex items-center justify-center md:justify-end gap-2">
            <FaPhone /> +91 7093193866
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2">
            <FaEnvelope /> panchireddi01@gmail.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} TulasiDas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;