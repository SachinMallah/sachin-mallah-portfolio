// // // export default function Footer() {
// // //     return (
// // //       <footer className="bg-white text-white py-12">
// // //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex flex-col md:flex-row justify-between items-center">
// // //             <div className="mb-6 md:mb-0">
// // //               <span className="text-xl font-bold">Sachin Mallah</span>
// // //               <p className="mt-2 text-gray-400">Building intelligent systems with purpose.</p>
// // //             </div>
            
// // //             <div className="flex space-x-6">
// // //               <a href="#" className="text-gray-400 hover:text-white transition">
// // //                 <i className="fab fa-github text-xl"></i>
// // //               </a>
// // //               <a href="#" className="text-gray-400 hover:text-white transition">
// // //                 <i className="fab fa-linkedin-in text-xl"></i>
// // //               </a>
// // //               <a href="#" className="text-gray-400 hover:text-white transition">
// // //                 <i className="fab fa-twitter text-xl"></i>
// // //               </a>
// // //               <a href="#" className="text-gray-400 hover:text-white transition">
// // //                 <i className="fas fa-envelope text-xl"></i>
// // //               </a>
// // //             </div>
// // //           </div>
          
// // //           <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
// // //             &copy; 2025 Sachin Mallah. All rights reserved.
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     );
// // //   }


























// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-100 shadow-sm">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//           {/* Left Section */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold text-gray-900">Sachin Mallah</h3>
//             <p className="text-gray-600 max-w-sm">
//               Building intelligent systems with purpose and precision.
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex flex-col space-y-4">
//             <div className="flex space-x-6">
//               <SocialLink href="#" icon="github" label="GitHub" />
//               <SocialLink href="#" icon="linkedin-in" label="LinkedIn" />
//               <SocialLink href="#" icon="twitter" label="Twitter" />
//               <SocialLink href="#" icon="envelope" label="Email" />
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-8 border-t border-gray-100 text-center">
//           <p className="text-sm text-gray-600">
//             &copy; {new Date().getFullYear()} Sachin Mallah. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function SocialLink({ href, icon, label }: { href: string; icon: string; label: string }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-gray-600 hover:text-black transition-colors"
//       aria-label={label}
//     >
//       <i className={`fab fa-${icon} text-xl`} />
//     </a>
//   );
// }




































































// 'use client';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="relative bg-black border-t border-gray-500/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
//           {/* Left Section */}
//           <motion.div 
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-100">Sachin Mallah</h3>
//             <p className="text-gray-300 max-w-sm">
//               Building intelligent systems with purpose and precision.
//             </p>
//           </motion.div>

//           {/* Social Links with Enhanced Logos */}
//           <motion.div 
//             className="flex flex-col space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.1 }}
//           >
//             <div className="flex space-x-4">
//               <SocialLink 
//                 href="https://github.com/SachinMallah" 
//                 label="GitHub"
//               >
//                 <motion.div 
//                   className="p-3 bg-gray-700/50 rounded-full border border-gray-500/30"
//                   whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
//                 >
//                   <Github className="w-8 h-8 text-gray-300" />
//                 </motion.div>
//               </SocialLink>

//               <SocialLink 
//                 href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" 
//                 label="LinkedIn"
//               >
//                 <motion.div 
//                   className="p-3 bg-gray-700/50 rounded-full border border-gray-500/30"
//                   whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
//                 >
//                   <Linkedin className="w-8 h-8 text-gray-300" />
//                 </motion.div>
//               </SocialLink>
//             </div>
//           </motion.div>
//         </div>

//         {/* Copyright Section */}
//         <motion.div 
//           className="mt-12 pt-8 border-t border-gray-500/30 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//         >
// //           <p className="text-sm text-gray-300">
// //             &copy; {new Date().getFullYear()} Sachin Mallah. All rights reserved.
// //           </p>
// //           <div className="mt-2 flex justify-center items-center gap-2 text-gray-400">
// //             <MapPin className="w-4 h-4" />
// //             <span className="text-xs">Mumbai, Maharashtra</span>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Background Gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0" />
// //     </footer>
// //   );
// // }

// // function SocialLink({ href, children, label }) {
// //   return (
// //     <motion.a
// //       href={href}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="text-gray-400 hover:text-white transition-colors"
// //       whileHover={{ scale: 1.05 }}
// //       whileTap={{ scale: 0.95 }}
// //       aria-label={label}
// //     >
// //       {children}
// //     </motion.a>
// //   );
// // }



































// 'use client';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="relative bg-black border-t border-gray-500/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
//           {/* Left Section */}
//           <motion.div 
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-100">Sachin Mallah</h3>
//             <p className="text-gray-300 max-w-sm">
//               Building intelligent systems with purpose and precision.
//             </p>
//           </motion.div>

//           {/* Enhanced Social Links */}
//           <motion.div 
//             className="flex flex-col space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.1 }}
//           >
//             <div className="flex justify-center md:justify-start space-x-6">
//               <SocialLink 
//                 href="https://github.com/SachinMallah" 
//                 label="GitHub"
//               >
//                 <motion.div 
//                   className="p-4 bg-gray-700/20 rounded-2xl border border-gray-500/30 backdrop-blur-lg"
//                   whileHover={{ 
//                     backgroundColor: 'rgba(55, 65, 81, 0.4)',
//                     y: -4,
//                     boxShadow: '0 10px 20px rgba(255,255,255,0.05)'
//                   }}
//                 >
//                   <Github className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
//                 </motion.div>
//               </SocialLink>

//               <SocialLink 
//                 href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" 
//                 label="LinkedIn"
//               >
//                 <motion.div 
//                   className="p-4 bg-gray-700/20 rounded-2xl border border-gray-500/30 backdrop-blur-lg"
//                   whileHover={{ 
//                     backgroundColor: 'rgba(55, 65, 81, 0.4)',
//                     y: -4,
//                     boxShadow: '0 10px 20px rgba(255,255,255,0.05)'
//                   }}
//                 >
//                   <Linkedin className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
//                 </motion.div>
//               </SocialLink>
//             </div>
//           </motion.div>
//         </div>

//         {/* Copyright Section */}
//         <motion.div 
//           className="mt-12 pt-8 border-t border-gray-500/30 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//         >
//           <p className="text-sm text-gray-300">
//             &copy; {new Date().getFullYear()} Sachin Mallah. All rights reserved.
//           </p>
//           <div className="mt-2 flex justify-center items-center gap-2 text-gray-400">
//             <MapPin className="w-4 h-4 md:w-5 md:h-5" />
//             <span className="text-xs md:text-sm">Mumbai, Maharashtra</span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0" />
//     </footer>
//   );
// }

// function SocialLink({ href, children, label }) {
//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-gray-400 hover:text-white transition-colors"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       aria-label={label}
//     >
//       {children}
//     </motion.a>
//   );
// }



























































































// 'use client';
// import { motion } from 'framer-motion';
// import { MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="relative bg-black border-t border-gray-500/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
//           {/* Left Section */}
//           <motion.div 
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-100">Sachin Mallah</h3>
//             <p className="text-gray-300 max-w-sm">
//               Building intelligent systems with purpose and precision.
//             </p>
//           </motion.div>

//           {/* Clean Social Links */}
//           <motion.div 
//             className="flex flex-col space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.1 }}
//           >
//             <div className="flex space-x-6">
//               <SocialLink 
//                 href="https://github.com/SachinMallah" 
//                 label="GitHub"
//               >
//                 <svg className="w-8 h-8 text-gray-300 hover:text-white transition-colors" 
//                      viewBox="0 0 24 24" 
//                      fill="currentColor"
//                      aria-hidden="true">
//                   <path fillRule="evenodd" 
//                         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                         clipRule="evenodd"/>
//                 </svg>
//               </SocialLink>

//               <SocialLink 
//                 href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" 
//                 label="LinkedIn"
//               >
//                 <svg className="w-8 h-8 text-gray-300 hover:text-white transition-colors" 
//                      viewBox="0 0 24 24" 
//                      fill="currentColor"
//                      aria-hidden="true">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//               </SocialLink>
//             </div>
//           </motion.div>
//         </div>

//         {/* Copyright Section */}
//         <motion.div 
//           className="mt-12 pt-8 border-t border-gray-500/30 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//         >
//           <p className="text-sm text-gray-300">
//             &copy; {new Date().getFullYear()} Sachin Mallah. All rights reserved.
//           </p>
//           <div className="mt-2 flex justify-center items-center gap-2 text-gray-400">
//             <MapPin className="w-4 h-4" />
//             <span className="text-xs">Mumbai, Maharashtra</span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0" />
//     </footer>
//   );
// }

// function SocialLink({ href, children, label }) {
//   return (
//     <motion.a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="hover:text-white transition-colors"
//       whileHover={{ scale: 1.15 }}
//       whileTap={{ scale: 0.95 }}
//       aria-label={label}
//     >
//       {children}
//     </motion.a>
//   );
// }

































'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          {/* Left Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-100">Sachin Mallah</h3>
            <p className="text-gray-300 max-w-sm">
              Building intelligent systems with purpose and precision.
            </p>
          </motion.div>

          {/* Social Links with White Icons */}
          <motion.div 
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex space-x-6">
              <SocialLink 
                href="https://github.com/SachinMallah" 
                label="GitHub"
              >
                <svg 
                  className="w-8 h-8 text-gray-100 hover:text-white transition-colors"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" 
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialLink>

              <SocialLink 
                href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" 
                label="LinkedIn"
              >
                <svg 
                  className="w-8 h-8 text-gray-100 hover:text-white transition-colors"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </SocialLink>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-500/30 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Sachin Mallah. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">Mumbai, India</span>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0" />
    </footer>
  );
}

function SocialLink({ href, children, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {children}
    </motion.a>
  );
}





