// components/ScrollJumpNav.jsx for that color one my edge section designed by per
// import React from 'react';
// import { motion } from 'framer-motion';

// const ScrollJumpNav = ({ sections, currentSection }) => {
//   return (
//     <motion.div 
//       className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50"
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 1, duration: 0.5 }}
//     >
//       {sections.map((section, index) => (
//         <motion.div
//           key={index}
//           className="relative"
//           initial={{ opacity: 0.5 }}
//           animate={{ opacity: currentSection === index ? 1 : 0.5 }}
//         >
//           <motion.button
//             className={`w-3 h-3 rounded-full ${currentSection === index ? 'bg-white' : 'bg-white/40'}`}
//             whileHover={{ scale: 1.5 }}
//             onClick={() => {
//               document.getElementById(`section-${index}`).scrollIntoView({ 
//                 behavior: 'smooth' 
//               });
//             }}
//           />
//           <motion.div
//             className="absolute -right-20 top-0 text-white text-xs whitespace-nowrap"
//             initial={{ opacity: 0, x: -10 }}
//             whileHover={{ opacity: 1, x: 0 }}
//           >
//             {section}
//           </motion.div>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default ScrollJumpNav;
