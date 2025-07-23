import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import valueImage from '../../../public/images/imagee1.jpg'
import valueImagee from '../../../public/images/imagee2.jpg'


const projects = [
  {
    name: "E-COMMERCE-PLATFORM",
    year: "Mar2024",
    align: "right",
    image: valueImage,
    link: "https://lievin219.github.io/Ecommerce-MERN-PROJECT/",
  },
  {
    name: "MOVIE-API",
    year: "Sept2024",
    align: "left",
    image:valueImagee,
    link: "https://lievin219.github.io/react-project-course/",
  },
  {
    name: "PROLIFIC-MIND-PROJECT",
    year: "Dec2024",
    align: "right",
    image:"../../../public/images/website-img-1.jpg",
    link: "https://lievin219.github.io/Prolific_Minded/",
  },
  {
    name: "Ibuye-developers",
    year: "March2025",
    align: "left",
    image: "../../../public/images/website-img-1.jpg",
    link: "#",
  },
  
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
