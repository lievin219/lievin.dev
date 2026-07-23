// import SingleExperience from "./SingleExperience";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const experiences = [
//   {
//   job: "Software Developer Trainee",
//   company: "Andela Technical Leadership Program",
//   date: "2023 - 2024",
//   responsibilities: [
//     "Applied modern software development methodologies in team projects.",
//     "Worked with technologies including Node.js and PostgreSQL.",
//     "Strengthened problem-solving, teamwork, and communication skills.",
//     "Participated in collaborative development and technical leadership activities.",
//   ],
// },
// {
//   job: "Website Maintainer & Course Instructor",
//   company: "Techtonic Africa",
//   date: "2024 - 2025",
//   responsibilities: [
//     "Maintaining and updating company websites and digital platforms.",
//     "Teaching web development concepts and practical coding skills.",
//     "Supporting students with assignments, projects, and weekly evaluations.",
//     "Collaborating with teams to improve learning resources and platform performance.",
//   ],
// },

//  {
//   job: "Product Designer & Platform Lead ",
//   company: "WEDTC",
//   date: "2025 - Present",
//   responsibilities: [
    
//     "Teaching full stack web development concepts to students.",
//     "Lead product design for WEDTC's digital platform, owning the end-to-end UX/UI process from wireframing and prototyping in Figma to final handoff and implementation.", 

//     "Guiding students through practical projects and assignments.",
//     "Providing mentorship and technical support during training sessions.",
//     "Creating and managing course content for web development programs.",
//   ],
// },

  
// ];

// const AllExperiences = () => {
//   return (
//     <div className="flex md:flex-row sm:flex-col items-center justify-between">
//       {experiences.map((experience, index) => {
//         return (
//           <>
//             <SingleExperience key={index} experience={experience} />
//             {index < 2 ? (
//               <motion.div
//                 variants={fadeIn("right", 0)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: false, amount: 0.7 }}
//               >
//                 <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
//               </motion.div>
//             ) : (
//               ""
//             )}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default AllExperiences;

import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
  job: "Software Developer Trainee",
  company: "Andela Technical Leadership Program",
  date: "2023 - 2024",
  responsibilities: [
    "Participated in an intensive technical leadership development program focused on software engineering best practices and team collaboration.",
    "Delivered full-stack features on team projects using Node.js, Express.js, and PostgreSQL within agile sprintcycles.",
    "Applied Agile and Scrum methodologies in project planning, execution, and delivery.",
    "Practiced pair programming and test-driven development, improving team velocity and reducing bugrates.",
  ],
},
{
  job: "Software Engineer & Course Instructor",
  company: "Techtonic Africa",
  date: "2024 - 2025",
  responsibilities: [
    "Maintaining and updating company websites and digital platforms.",
    "Teaching web development concepts and practical coding skills.",
    "Supporting students with assignments, projects, and weekly evaluations.",
    "Collaborating with teams to improve learning resources and platform performance.",
  ],
},
{
  job: "Software Engineer",
  company: "The Gym || first intensive coding  program in rwanda",
  date: "2024 - 2025",
  responsibilities: [
    "Participated in code reviews and collaborated with cross-functional teams to deliver high quality software solutions.",
    "Contributed to project planning, requirement analysis, and software testing",
    "Conducted workshops on Git, GitHub, API integration, and modern development workflows.",

  ],
},

 {
  job: "Product Designer & Platform Lead ",
  company: "WEDTC",
  date: "2025 - Present",
  responsibilities: [
    
    "Teaching full stack web development concepts to students.",
    "Lead product design for WEDTC's digital platform, owning the end-to-end UX/UI process from wireframing and prototyping in Figma to final handoff and implementation.", 

    "Guiding students through practical projects and assignments.",
    "Providing mentorship and technical support during training sessions.",
    "Creating and managing course content for web development programs.",
  ],
},
{
  job: "Software Engineer",
  company: "LearnLife",
  date: "2025 - Present",
  responsibilities: [
    
    "Working as a software engineer on Learnlife's product, building and shipping features across different Technologies",
"Writing, testing, and debugging code to fix issues .",
"Collaborating with the team on technical decisions, code reviews",
"Maintaining and improving existing code ",
"Solving real technical problems from small bugs to bigger performance issues.",]
},

  
];

const AllExperiences = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="max-w-[600px] mt-10"
    >
      {experiences.map((experience, index) => (
        <SingleExperience key={index} experience={experience} />
      ))}
    </motion.div>
  );
};

export default AllExperiences;
