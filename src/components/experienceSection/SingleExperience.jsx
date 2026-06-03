// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const SingleExperience = ({ experience }) => {
//   return (
//     <motion.div
//       variants={fadeIn("right", 0)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.7 }}
//       className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
//     >
//       <p className="font-bold text-cyan">{experience.job}</p>
//       <p className="text-orange">{experience.company}</p>
//       <p className="text-lightGrey">{experience.date}</p>
//       <ul className="list-disc mt-4 pl-4">
//         {experience.responsibilities.map((resp, index) => {
//           return <li key={index}>{resp}</li>;
//         })}
//       </ul>
//     </motion.div>
//   );
// };

// export default SingleExperience;

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="flex gap-4 mb-8"
    >
      {/* Left dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-orange mt-1 shrink-0" />
        <div className="w-px flex-1 bg-lightBrown mt-1" />
      </div>

      {/* Content */}
      <div className="pb-8">
        <p className="font-bold text-white text-lg leading-tight">{experience.job}</p>
        <p className="text-orange text-sm font-semibold mt-0.5">{experience.company}</p>
        <p className="text-lightGrey text-xs mt-0.5">
          {experience.date}
          {experience.location && ` · ${experience.location}`}
        </p>
        <ul className="list-disc mt-3 pl-4 space-y-1">
          {experience.responsibilities.map((resp, index) => (
            <li key={index} className="text-lightGrey text-sm">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
