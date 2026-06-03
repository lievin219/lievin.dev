import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Rocket, Award, Users } from "lucide-react";

const AboutMeText = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Technical Instructor",
      description: "Empowering students to master web development"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Freelance Engineer",
      description: "Delivering custom solutions for clients worldwide"
    }
  ];

  const stats = [
    { number: "50+", label: "Students Taught" },
    { number: "20+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" }
  ];

  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB & PostgreSQL",
    "REST APIs & GraphQL",
    "Docker & CI/CD",
    "AWS & Cloud Services"
  ];

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-6xl font-bold text-cyan mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan to-orange mb-10 md:mx-0 sm:mx-auto"></div>
      </motion.div>

      {/* Main Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4 mb-8"
      >
        {/* <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-cyan font-semibold">Lievin</span> – a passionate{" "}
          <span className="text-orange font-semibold">Software Engineer</span>,{" "}
          <span className="text-orange font-semibold"></span>{" "}
          <span className="text-orange font-semibold"></span> based in Rwanda.
        </p> */}
        
        <p className="text-lg text-gray-300 leading-relaxed">
  I specialize in building modern, scalable web applications with a strong focus on
  <strong className="text-white"> TypeScript, React, Next.js, and Node.js</strong>, backed by
  cloud infrastructure on <strong className="text-white">AWS</strong> and efficient data
  fetching with <strong className="text-white">GraphQL</strong>. With 3–5 years of hands-on
  experience, I craft end-to-end solutions — from responsive, performant frontends to
  robust APIs and cloud-native backends.
</p>

        <p className="text-lg text-gray-300 leading-relaxed">
           I also  run a thriving freelance business, delivering custom web solutions 
          and digital products for clients globally. From e-commerce platforms to SaaS applications, 
          I transform ideas into powerful, user-friendly experiences.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10"
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)" }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-cyan mb-3">{highlight.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
            <p className="text-gray-400 text-sm">{highlight.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center md:justify-start gap-8 mb-10 w-full"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-orange">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full mb-10"
      >
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-cyan" />
          Core Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium cursor-default transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* What I Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full mb-10"
      >
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-orange" />
          What I Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <div className="text-cyan mt-1">●</div>
            <div>
              <h4 className="text-white font-semibold">Web Development</h4>
              <p className="text-gray-400 text-sm">Building responsive, high-performance web applications</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-cyan mt-1">●</div>
            <div>
              <h4 className="text-white font-semibold">Technical Training</h4>
              <p className="text-gray-400 text-sm">Teaching React, JavaScript, and modern development practices</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-orange mt-1">●</div>
            <div>
              <h4 className="text-white font-semibold">Freelance Projects</h4>
              <p className="text-gray-400 text-sm">Custom solutions for businesses and startups</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-orange mt-1">●</div>
            <div>
              <h4 className="text-white font-semibold">Mentorship</h4>
              <p className="text-gray-400 text-sm">Guiding aspiring developers to achieve their goals</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap gap-4 md:self-start sm:self-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-orange rounded-full py-3 px-8 text-lg font-semibold flex gap-2 items-center bg-gradient-to-r from-orange to-orange/80 text-white hover:shadow-lg hover:shadow-orange/50 transition-all duration-300"
        >
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            View My Projects
          </Link>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-cyan rounded-full py-3 px-8 text-lg font-semibold flex gap-2 items-center text-cyan hover:bg-cyan hover:text-gray-900 transition-all duration-300"
        >
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="contact"
            className="cursor-pointer flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Let's Connect
          </Link>
        </motion.button>
      </motion.div>

      {/* Personal Touch */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 p-6 bg-gradient-to-r from-cyan/10 to-orange/10 border border-cyan/30 rounded-xl w-full"
      >
        <p className="text-gray-300 italic">
          💡 <strong className="text-white">My Mission:</strong> To bridge the gap between learning 
          and doing by creating engaging educational content and building products that solve 
          real problems. Whether you're looking to hire a skilled developer, learn web development, 
          or collaborate on an exciting project – I'm here to help!
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMeText;
