// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import { Code2, Sparkles, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
// import { Link } from "react-scroll";

// const HeroText = () => {
//   const socialLinks = [
//     { icon: <Github className="w-5 h-5" />, href: "https://github.com/lievin219", label: "GitHub" },
//     { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/gakiza-lievin-271115307/", label: "LinkedIn" },
//     { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
//   ];

//   return (
//     <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center relative">
//       {/* Animated Background Elements */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-0 left-0 w-64 h-64 bg-cyan/20 rounded-full blur-3xl -z-10"
//       />
//       <motion.div
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.2, 0.4, 0.2],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1,
//         }}
//         className="absolute bottom-0 right-0 w-72 h-72 bg-orange/20 rounded-full blur-3xl -z-10"
//       />

//       {/* Greeting Badge */}
//       <motion.div
//         variants={fadeIn("down", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="flex items-center gap-2 md:self-start sm:self-center"
//       >
//         <motion.div
//           animate={{ rotate: [0, 10, -10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
//         >
//           <Sparkles className="w-5 h-5 text-orange" />
//         </motion.div>
//         <span className="text-lightGrey font-medium">Hello, I'm</span>
//       </motion.div>

//       {/* Main Title */}
//       <motion.div
//         variants={fadeIn("right", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//       >
//         <h1 className="md:text-[4rem] lg:text-[5rem] sm:text-5xl font-bold leading-none">
//           <span className="text-white">GAKIZA meaning "Salvation"</span>
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-orange to-cyan bg-[length:200%_auto] animate-gradient">
//             Lievin
//           </span>
//         </h1>
//       </motion.div>

//       {/* Role with Icon */}
//       <motion.div
//         variants={fadeIn("right", 0.3)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="flex items-center gap-3 md:self-start sm:self-center"
//       >
//         <div className="p-2 bg-gradient-to-br from-cyan/20 to-orange/20 border border-cyan/30 rounded-lg">
//           <Code2 className="w-6 h-6 text-cyan" />
//         </div>
//         <div>
//           <h2 className="lg:text-3xl sm:text-2xl font-bold text-white">
//             Full-Stack Developer
//           </h2>
        
//         </div>
//       </motion.div>

//       {/* Description */}
//       <motion.p
//         variants={fadeIn("up", 0.4)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="text-lg text-gray-300 leading-relaxed max-w-2xl md:mx-0 sm:mx-auto"
//       >
//         Crafting exceptional digital experiences with{" "}
//         <span className="text-cyan font-semibold">modern web technologies</span>.
//         Empowering the next generation of developers through{" "}
//         <span className="text-orange font-semibold">hands-on mentorship</span> and
//         real-world projects.
//       </motion.p>

//       {/* Stats Mini Cards */}
//       <motion.div
//         variants={fadeIn("up", 0.5)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="flex flex-wrap gap-4 md:justify-start sm:justify-center"
//       >
//         {[
//           { number: "3+", label: "Years Experience" },
//           { number: "50+", label: "Students Taught" },
//           { number: "20+", label: "Projects Delivered" },
//         ].map((stat, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)" }}
//             className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 backdrop-blur-sm"
//           >
//             <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-orange">
//               {stat.number}
//             </div>
//             <div className="text-xs text-gray-400">{stat.label}</div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* CTA Buttons */}
//       <motion.div
//         variants={fadeIn("up", 0.6)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="flex flex-wrap gap-4 mt-4 md:self-start sm:self-center"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="group relative overflow-hidden border-2 border-orange rounded-full py-3 px-8 text-lg font-semibold bg-gradient-to-r from-orange to-orange/80 text-white hover:shadow-lg hover:shadow-orange/50 transition-all duration-300"
//         >
//           <Link
//             spy={true}
//             smooth={true}
//             duration={500}
//             offset={-120}
//             to="projects"
//             className="cursor-pointer flex items-center gap-2"
//           >
//             View My Work
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="border-2 border-cyan rounded-full py-3 px-8 text-lg font-semibold text-cyan hover:bg-cyan hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
//         >
//           <Download className="w-5 h-5" />
        
//         </motion.button>
//       </motion.div>

//       {/* Social Links */}
//       <motion.div
//         variants={fadeIn("up", 0.7)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="flex items-center gap-4 mt-6 md:self-start sm:self-center"
//       >
//         <span className="text-gray-400 text-sm">Connect with me:</span>
//         <div className="flex gap-3">
//           {socialLinks.map((social, index) => (
//             <motion.a
//               key={index}
//               href={social.href}
//               whileHover={{ y: -3, scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan hover:border-cyan transition-all duration-300"
//               aria-label={social.label}
//             >
//               {social.icon}
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>

//       {/* Availability Badge */}
//       <motion.div
//         variants={fadeIn("up", 0.8)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="flex items-center gap-2 mt-4 md:self-start sm:self-center"
//       >
//         <motion.div
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-3 h-3 bg-cyan rounded-full"
//         />
//         <span className="text-gray-300 text-sm">
//           Available for freelance projects
//         </span>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroText;

import { motion } from "framer-motion";
import HeroMusic from "./HeroMusic";
import { fadeIn } from "../../framerMotion/variants";
import { Code2, Sparkles, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

const HeroText = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/lievin219", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/gakiza-lievin-271115307/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
  ];

   function Codes(){
 console.log('Saved by grace')
   }

  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center relative">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-64 h-64 bg-cyan/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-orange/20 rounded-full blur-3xl -z-10"
      />

      {/* Greeting Badge */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-2 md:self-start sm:self-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Sparkles className="w-5 h-5 text-orange" />
        </motion.div>
        <span className="text-lightGrey font-medium">Hello, I'm</span>
      </motion.div>

      {/* Main Title */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col items-center text-center gap-2"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
        />

        {/* GAKIZA */}
        <motion.div className="relative">
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:text-[5rem] lg:text-[6rem] sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-orange bg-[length:200%_auto] animate-gradient uppercase"
          >
            GAKIZA
          </motion.h1>
          {/* Glow behind GAKIZA */}
          <div className="absolute inset-0 blur-3xl bg-cyan/10 -z-10 rounded-full" />
        </motion.div>

        {/* meaning "Salvation" pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 px-4 py-1 rounded-full border border-orange/30 bg-orange/10"
        >
          <span className="text-orange/80 text-xs tracking-widest uppercase font-medium">
            meaning
          </span>
          <span className="w-px h-3 bg-orange/30" />
          <span className="text-white text-xs tracking-widest uppercase font-semibold">
            ✦ Salvation ✦
          </span>
        </motion.div>

        {/* LIEVIN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <h1 className="md:text-[3.5rem] lg:text-[4.5rem] sm:text-5xl font-bold text-white tracking-tight">
            Lievin
          </h1>
          {/* Underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan via-orange to-transparent origin-left"
          />
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-orange to-transparent mt-1"
        />
      </motion.div>

      {/* Role with Icon */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-3 md:self-start sm:self-center"
      >
        <div className="p-2 bg-gradient-to-br from-cyan/20 to-orange/20 border border-cyan/30 rounded-lg">
          <Code2 className="w-6 h-6 text-cyan" />
        </div>
        <div>
          <h2 className="lg:text-3xl sm:text-2xl font-bold text-white">
            Full-Stack Developer
          </h2>
        </div>
      </motion.div>

      {/* Description */}
     <motion.p
  variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0 }}
  className="text-lg text-gray-300 leading-relaxed max-w-2xl md:mx-0 sm:mx-auto"
>
  Saved by grace, building for purpose.{" "}
  <span className="text-cyan font-semibold">I write code</span> the same way I
  worship with everything I have. When I'm not pushing commits, you'll find me
  strumming my 
  <span className="text-orange font-semibold">guitar</span>, losing myself in a
  game of <span className="text-cyan font-semibold">FIFA</span>, or quietly on purpit sharpening my soul{" "}
  <span className="text-orange font-semibold">
    Every line of code is an act of gratitude.
  </span>
</motion.p>

      {/* Stats Mini Cards */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 md:justify-start sm:justify-center"
      >
        {[
          { number: "3+", label: "Years Experience" },
          { number: "50+", label: "Students Taught" },
          { number: "20+", label: "Projects Delivered" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)" }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 backdrop-blur-sm"
          >
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-orange">
              {stat.number}
            </div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 mt-4 md:self-start sm:self-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden border-2 border-orange rounded-full py-3 px-8 text-lg font-semibold bg-gradient-to-r from-orange to-orange/80 text-white hover:shadow-lg hover:shadow-orange/50 transition-all duration-300"
        >
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-cyan rounded-full py-3 px-8 text-lg font-semibold text-cyan hover:bg-cyan hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-4 mt-6 md:self-start sm:self-center"
      >
        <span className="text-gray-400 text-sm">Connect with me:</span>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan hover:border-cyan transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Availability Badge */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-2 mt-4 md:self-start sm:self-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-cyan rounded-full"
        />
        <span className="text-gray-300 text-sm">
          Available for freelance projects
        </span>
      </motion.div>
      <HeroMusic/>
    </div>
  );
};

export default HeroText;