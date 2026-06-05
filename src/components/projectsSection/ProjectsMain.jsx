import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import valueImage from '../../../public/images/imagee1.jpg'
import valueImagee from '../../../public/images/imagee2.jpg'
import rav4 from '../../../public/images/rav4.jpg'
import prolific from '../../../public/images/prolific.jpg'
import linktravel from '../../../public/images/image.png'
import ibuye from "../../../public/images//ibuye.png"


const projects = [
  {
    name: "Link Travel Agency",
    year: "Mar2026",
    align: "right",
    image: linktravel,
    link: "https://www.linksvoyage.com/",
  },

   {
    name: "Ibuye developers",
    year: "Mar2026",
    align: "left",
    image: ibuye,
    link: "https://ibuye-developers.com/",
  },

  {
    name: "EuroAsia Rwanda car rental",
    year: "Feb2026",
    align: "right",
    image: rav4,
    link: "https://lievin219.github.io/car-rental-business",
  },
  {
    name: "PROLIFIC-MIND-PROJECT",
    year: "Dec2024",
    align: "left",
    image:prolific,
    link: "https://github.com/lievin219/backend_prolific/",
  },
  {
    name: "E-COMMERCE-PLATFORM",
    year: "Mar2024",
    align: "right",
    image: valueImage,
    link: "https://github.com/lievin219/Backend-Mernproject",
  },
  {
    name: "MOVIE-API",
    year: "Sept2024",
    align: "left",
    image:valueImagee,
    link: "https://lievin219.github.io/react-project-course/",
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
