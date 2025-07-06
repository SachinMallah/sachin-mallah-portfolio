// export default function Contact() {
//     return (
//       <section id="contact" className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-12 section-title">Get In Touch</h2>
          
//           <div className="flex flex-col md:flex-row gap-12">
//             <div className="md:w-1/2">
//               <p className="text-lg mb-8">
//                 I'm currently looking for new opportunities in AI/ML research and development. 
//                 Whether you have a question, opportunity, or just want to connect, feel free to reach out.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
//                     <i className="fas fa-envelope text-white"></i>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Email</div>
//                     <div>contact@sachinmallah.dev</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
//                     <i className="fab fa-github text-white"></i>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">GitHub</div>
//                     <div>github.com/sachinmallah</div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
//                     <i className="fab fa-linkedin-in text-white"></i>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">LinkedIn</div>
//                     <div>linkedin.com/in/sachinmallah</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/2">
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//                   <input type="text" id="name" className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black" />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//                   <input type="email" id="email" className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black" />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
//                   <textarea id="message" rows={4} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black"></textarea>
//                 </div>
                
//                 <button type="submit" className="w-full bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }



































// "use client";
// import { motion, AnimatePresence } from 'framer-motion';
// import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

// export default function Contact() {
//   return (
//     <section id="contact" className="relative min-h-screen bg-black overflow-hidden py-24">
//       {/* Background Effects */}
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80" /> */}
//       {/* <div className="absolute inset-0 bg-[radial-gradient(at_center_center,_#ffffff10_0%,_transparent_70%)]" /> */}

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row gap-12">
//           {/* Contact Info */}
//           <motion.div 
//             className="md:w-1/2 space-y-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed">
//               I'm currently exploring new opportunities in AI/ML research and development. 
//               Whether you have a question, opportunity, or just want to connect - my inbox 
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div 
//               className="space-y-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } }
//               }}
//             >
//               {[
//                 // {
//                 //   icon: Envelope,
//                 //   label: "Email",
//                 //   value: "contact@sachinmallah.dev",
//                 //   href: "mailto:sachinmallah118@gmail.com"
//                 // },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah"
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a"
//                 }
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center p-4 rounded-2xl bg-black/60 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 }
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div 
//             className="md:w-1/2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <form className="space-y-6 bg-black/60 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-500/30">
//               {/* Form Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-600/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-3 bg-black/30 border-2 border-gray-500/30 rounded-xl text-gray-100 focus:outline-none focus:border-gray-400/50 focus:ring-1 focus:ring-gray-400/30 transition-all"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-3 bg-black/30 border-2 border-gray-500/30 rounded-xl text-gray-100 focus:outline-none focus:border-gray-400/50 focus:ring-1 focus:ring-gray-400/30 transition-all"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full px-4 py-3 bg-black/30 border-2 border-gray-500/30 rounded-xl text-gray-100 focus:outline-none focus:border-gray-400/50 focus:ring-1 focus:ring-gray-400/30 transition-all"
//                 ></textarea>
//               </div>

//               <motion.button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-gray-700 px-8 py-4 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


















































// "use client";
// import { motion, AnimatePresence } from 'framer-motion';
// import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

// export default function Contact() {
//   return (
//     <section id="contact" className="relative min-h-screen bg-black overflow-hidden py-24">
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row gap-12">
//           {/* Contact Info */}
//           <motion.div 
//             className="md:w-1/2 space-y-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed">
//               I'm currently exploring new opportunities in AI/ML research and development. 
//               Whether you have a question, opportunity, or just want to connect - my inbox 
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div 
//               className="space-y-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } }
//               }}
//             >
//               {[
//                 // {
//                 //   icon: Envelope,
//                 //   label: "Email",
//                 //   value: "sachinmallah118@gmail.com",
//                 //   href: "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
//                 // },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah"
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a"
//                 }
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.label === "Email" ? undefined : "_blank"}
//                   rel={item.label === "Email" ? undefined : "noopener noreferrer"}
//                   className="group flex items-center p-4 rounded-2xl bg-black/60 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 }
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* No Contact Form, just a message */}
//           <motion.div 
//             className="md:w-1/2 flex items-center justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="text-center">
//               <p className="text-lg text-gray-300 mb-8">
//                 Prefer email? Click the button below to open your mail app and send me a message directly!
//               </p>
//               <a
//                 href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//               >
//                 <Envelope className="w-6 h-6 mr-2" />
//                 Email Me
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }















































// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
//     >
//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-4">
//           {/* Contact Info */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
//               I'm currently exploring new opportunities in AI/ML research and development.
//               Whether you have a question, opportunity, or just want to connect - my inbox
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div
//               className="space-y-4"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {[
//                 {
//                   icon: Envelope,
//                   label: "Email",
//                   value: "sachinmallah118@gmail.com",
//                   href:
//                     "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
//                 },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah",
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
//                 },
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.label === "Email" ? undefined : "_blank"}
//                   rel={item.label === "Email" ? undefined : "noopener noreferrer"}
//                   className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 },
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Email Button */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="w-full flex flex-col items-center justify-center h-full">
//               <p className="text-lg text-gray-300 mb-8 text-center max-w-md">
//                 Prefer email? Click the button below to open your mail app and send me a message directly!
//               </p>
//               <a
//                 href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//               >
//                 <Envelope className="w-6 h-6 mr-2" />
//                 Email Me
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


















































// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
//     >
//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8">
//           {/* Contact Info */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
//               I'm currently exploring new opportunities in AI/ML research and development.
//               Whether you have a question, opportunity, or just want to connect - my inbox
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div
//               className="space-y-4"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {[
//                 {
//                   icon: Envelope,
//                   label: "Email",
//                   value: "sachinmallah118@gmail.com",
//                   href:
//                     "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
//                 },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah",
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
//                 },
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.label === "Email" ? undefined : "_blank"}
//                   rel={item.label === "Email" ? undefined : "noopener noreferrer"}
//                   className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 },
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Response Time */}
//             <div className="mt-12 px-6 py-4 bg-gray-900 rounded-2xl border border-gray-700 max-w-md">
//               <h3 className="text-white font-semibold text-lg mb-2">Typical Response Time</h3>
//               <p className="text-gray-400">
//                 I usually respond within <strong>24 hours</strong> on business days.
//               </p>
//             </div>
//           </motion.div>

//           {/* Email Button + Location */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center items-center space-y-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="w-full flex flex-col items-center justify-center h-full max-w-md">
//               <p className="text-lg text-gray-300 mb-8 text-center">
//                 Prefer email? Click the button below to open your mail app and send me a message directly!
//               </p>
//               <a
//                 href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//               >
//                 <Envelope className="w-6 h-6 mr-2" />
//                 Email Me
//               </a>
//             </div>

//             {/* Location */}
//             <div className="w-full max-w-md rounded-2xl overflow-hidden border-2 border-gray-700">
//               <iframe
//                 title="Mumbai Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.884221727147!2d72.81498731502262!3d19.07609098668243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63e9f4a8f91%3A0x3f1a0b2f7e3d0a9f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698475200000!5m2!1sen!2sus"
//                 width="100%"
//                 height="280"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





























































// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
// import GoogleMapReact from "google-map-react";

// // Mumbai coordinates
// const MUMBAI_COORDS = { lat: 19.076, lng: 72.8777 };

// // Night mode map style (black/white/dark)
// const darkMapStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#f5f5f5" }] },
//   { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#444" }] },
//   { featureType: "poi", elementType: "geometry", stylers: [{ color: "#222" }] },
//   { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#cccccc" }] },
//   { featureType: "road", elementType: "geometry", stylers: [{ color: "#333" }] },
//   { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#222" }] },
//   { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#bbbbbb" }] },
//   { featureType: "water", elementType: "geometry", stylers: [{ color: "#111" }] },
//   { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#444" }] },
// ];

// // Custom marker for Mumbai
// const Marker = () => (
//   <div
//     style={{
//       background: "#fff",
//       border: "3px solid #222",
//       borderRadius: "50%",
//       width: 18,
//       height: 18,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       boxShadow: "0 0 8px #0008",
//     }}
//     title="Mumbai, India"
//   >
//     <div
//       style={{
//         width: 8,
//         height: 8,
//         background: "#111",
//         borderRadius: "50%",
//       }}
//     />
//   </div>
// );

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
//     >
//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8">
//           {/* Contact Info */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
//               I'm currently exploring new opportunities in AI/ML research and development.
//               Whether you have a question, opportunity, or just want to connect - my inbox
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div
//               className="space-y-4"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {[
//                 {
//                   icon: Envelope,
//                   label: "Email",
//                   value: "sachinmallah118@gmail.com",
//                   href:
//                     "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
//                 },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah",
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
//                 },
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.label === "Email" ? undefined : "_blank"}
//                   rel={item.label === "Email" ? undefined : "noopener noreferrer"}
//                   className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 },
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Response Time */}
//             <div className="mt-12 px-6 py-4 bg-gray-900 rounded-2xl border border-gray-700 max-w-md shadow-lg">
//               <h3 className="text-white font-semibold text-lg mb-2">Typical Response Time</h3>
//               <p className="text-gray-400">
//                 I usually respond within <strong>24 hours</strong> on business days.
//               </p>
//             </div>
//           </motion.div>

//           {/* Email Button + Location */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center items-center space-y-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="w-full flex flex-col items-center justify-center h-full max-w-md">
//               <p className="text-lg text-gray-300 mb-8 text-center">
//                 Prefer email? Click the button below to open your mail app and send me a message directly!
//               </p>
//               <a
//                 href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//               >
//                 <Envelope className="w-6 h-6 mr-2" />
//                 Email Me
//               </a>
//             </div>

//             {/* Location - Dark Themed Map */}
//             <div className="w-full max-w-md rounded-2xl overflow-hidden border-2 border-gray-700 shadow-lg bg-black">
//               <div className="w-full h-64" style={{ minWidth: 240 }}>
//                 <GoogleMapReact
//                   bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
//                   defaultCenter={MUMBAI_COORDS}
//                   defaultZoom={11}
//                   options={{
//                     styles: darkMapStyle,
//                     disableDefaultUI: true,
//                   }}
//                   yesIWantToUseGoogleMapApiInternals
//                 >
//                   <Marker lat={MUMBAI_COORDS.lat} lng={MUMBAI_COORDS.lng} />
//                 </GoogleMapReact>
//               </div>
//               <div className="bg-black text-white text-center py-2 font-medium">
//                 Mumbai, India
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }












// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { Envelope, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";

// // Mumbai coordinates
// const MAP_WIDTH = 400;
// const MAP_HEIGHT = 220;
// const MAP_ZOOM = 12;
// const MAP_CENTER = "19.076,72.8777";
// const MAP_MARKER = "color:red|label:M|19.076,72.8777";
// const MAP_TYPE = "satellite"; // <--- Satellite view!
// const STATIC_MAP_URL = `https://maps.googleapis.com/maps/api/staticmap?center=${MAP_CENTER}&zoom=${MAP_ZOOM}&size=${MAP_WIDTH}x${MAP_HEIGHT}&scale=2&maptype=${MAP_TYPE}&markers=${MAP_MARKER}&key=YOUR_GOOGLE_MAPS_API_KEY`;

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
//     >
//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8">
//           {/* Contact Info */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
//               I'm currently exploring new opportunities in AI/ML research and development.
//               Whether you have a question, opportunity, or just want to connect - my inbox
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div
//               className="space-y-4"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {[
//                 {
//                   icon: Envelope,
//                   label: "Email",
//                   value: "sachinmallah118@gmail.com",
//                   href:
//                     "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
//                 },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah",
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
//                 },
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.label === "Email" ? undefined : "_blank"}
//                   rel={item.label === "Email" ? undefined : "noopener noreferrer"}
//                   className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 },
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Response Time */}
//             <div className="mt-12 px-6 py-4 bg-gray-900 rounded-2xl border border-gray-700 max-w-md shadow-lg">
//               <h3 className="text-white font-semibold text-lg mb-2">Typical Response Time</h3>
//               <p className="text-gray-400">
//                 I usually respond within <strong>24 hours</strong> on business days.
//               </p>
//             </div>
//           </motion.div>

//           {/* Email Button + Location */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center items-center space-y-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="w-full flex flex-col items-center justify-center h-full max-w-md">
//               <p className="text-lg text-gray-300 mb-8 text-center">
//                 Prefer email? Click the button below to open your mail app and send me a message directly!
//               </p>
//               <a
//                 href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//               >
//                 <Envelope className="w-6 h-6 mr-2" />
//                 Email Me
//               </a>
//             </div>

//             {/* Location - Satellite Map */}
//             <div className="w-full max-w-md rounded-2xl overflow-hidden border-2 border-gray-700 shadow-lg bg-black flex flex-col items-center">
//               <img
//                 src={STATIC_MAP_URL}
//                 alt="Satellite map of Mumbai, India"
//                 width={MAP_WIDTH}
//                 height={MAP_HEIGHT}
//                 className="w-full h-auto object-cover"
//                 style={{ background: "#181818", display: "block" }}
//                 loading="lazy"
//               />
//               <div className="bg-gray-900 text-white py-3 px-4 flex items-center justify-center w-full">
//                 <MapPin className="w-5 h-5 mr-2 text-gray-300" />
//                 <span className="font-medium">Mumbai, India</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
















































// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { Envelope, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
//     >
//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatePresence>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
//             <p className="text-xl text-gray-300">
//               Let's collaborate on something extraordinary
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8">
//           {/* Contact Info */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
//               I'm currently exploring new opportunities in AI/ML research and development.
//               Whether you have a question, opportunity, or just want to connect - my inbox
//               is always open. Let's create something remarkable together.
//             </motion.p>

//             <motion.div
//               className="space-y-4"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: { transition: { staggerChildren: 0.1 } },
//               }}
//             >
//               {[
//                 // {
//                 //   icon: Envelope,
//                 //   label: "Email",
//                 //   value: "sachinmallah118@gmail.com",
//                 //   href:
//                 //     "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
//                 // },
//                 {
//                   icon: GithubLogo,
//                   label: "GitHub",
//                   value: "sachinmallah",
//                   href: "https://github.com/SachinMallah",
//                 },
//                 {
//                   icon: LinkedinLogo,
//                   label: "LinkedIn",
//                   value: "sachin-mallah",
//                   href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
//                 },
//               ].map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.label === "Email" ? undefined : "_blank"}
//                   rel={item.label === "Email" ? undefined : "noopener noreferrer"}
//                   className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
//                   variants={{
//                     hidden: { opacity: 0, x: -20 },
//                     visible: { opacity: 1, x: 0 },
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
//                     <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-400 mb-1">{item.label}</div>
//                     <div className="text-gray-100 group-hover:text-white transition-colors">
//                       {item.value}
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Response Time */}
//             <div className="mt-12 px-6 py-4 bg-gray-900 rounded-2xl border border-gray-700 max-w-md shadow-lg">
//               <h3 className="text-white font-semibold text-lg mb-2">Typical Response Time</h3>
//               <p className="text-gray-400">
//                 I reply within <strong>24 hours</strong>.
//                 {/* I usually respond within <strong>24 hours</strong> on business days. */}
//               </p>
//             </div>

//             {/* Location */}
//             <div className="mt-8 flex items-center space-x-3 bg-gray-900 rounded-2xl border border-gray-700 px-6 py-4 max-w-md shadow-lg">
//               <MapPin className="w-6 h-6 text-gray-300" />
//               <span className="text-gray-100 font-medium">Mumbai, India</span>
//             </div>
//           </motion.div>

//           {/* Email Button */}
//           <motion.div
//             className="md:w-1/2 flex flex-col justify-center items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="w-full flex flex-col items-center justify-center h-full max-w-md">
//               <p className="text-lg text-gray-300 mb-8 text-center">
//                 Prefer email? Click the button below to open your mail app and send me a message directly!
//               </p>
//               <a
//                 href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
//               >
//                 <Envelope className="w-6 h-6 mr-2" />
//                 Email Me
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
































"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Envelope, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Let's collaborate on something extraordinary
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8">
          {/* Contact Info */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
              I'm currently exploring new opportunities in AI/ML research and development.
              Whether you have a question, opportunity, or just want to connect - my inbox
              is always open. Let's create something remarkable together.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {[
                // {
                //   icon: Envelope,
                //   label: "Email",
                //   value: "sachinmallah118@gmail.com",
                //   href:
                //     "mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
                // },
                {
                  icon: GithubLogo,
                  label: "GitHub",
                  value: "sachinmallah",
                  href: "https://github.com/SachinMallah",
                },
                {
                  icon: LinkedinLogo,
                  label: "LinkedIn",
                  value: "sachin-mallah",
                  href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
                    <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                    <div className="text-gray-100 group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Response Time */}
            <div className="mt-12 px-6 py-4 bg-gray-900 rounded-2xl border border-gray-700 max-w-md shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-2">Typical Response Time</h3>
              <p className="text-gray-400">
                 I reply within <strong>24 hours</strong>.
                {/* I usually respond within <strong>24 hours</strong> on business days. */}
              </p>
            </div>

            {/* Location */}
            <div className="mt-8 flex items-center space-x-3 bg-gray-900 rounded-2xl border border-gray-700 px-6 py-4 max-w-md shadow-lg">
              <MapPin className="w-6 h-6 text-gray-300" />
              <span className="text-gray-100 font-medium">Mumbai, India</span>
            </div>
          </motion.div>

          {/* Email Button Section - perfectly centered */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-full flex flex-col items-center justify-center h-full max-w-md">
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-lg text-gray-300 mb-6 text-center">
                  Prefer email? <br className="block md:hidden" />
                  Click the button below to open your mail app and send me a message directly!
                </p>
                <a
                  href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <Envelope className="w-6 h-6 mr-2" />
                  Email Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
