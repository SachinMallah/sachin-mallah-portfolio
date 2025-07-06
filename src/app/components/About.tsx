// // // best code 1 designed by perplexcity
// 'use client';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useState, useEffect, useRef, createRef } from 'react';
// import React from 'react';

// const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Refs for interactive elements
//   const photoRef = useRef(null);
//   const terminalRef = useRef(null);
  
//   // Container for word elements references
//   const [wordElements, setWordElements] = useState([]);
  
//   // Animation controls
//   const photoControls = useAnimation();
//   const containerControls = useAnimation();

//   // Typing animation state
//   const [textItems, setTextItems] = useState({
//     welcome: '',
//     aboutMeCommand: '',
//     aboutMeLines: ['', '', '', '', ''],
//     strengthsCommand: '',
//     strengthsLines: ['', '', '', ''],
//   });
//   const [typingStage, setTypingStage] = useState(0);
//   const [isTypingComplete, setIsTypingComplete] = useState(false);

//   // Draggable photo state
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragHistory, setDragHistory] = useState([]);
//   const [photoPosition, setPhotoPosition] = useState({ x: 0, y: 0 });
//   const [photoInitialPosition, setPhotoInitialPosition] = useState({ x: 0, y: 0 });
//   const [affectedWords, setAffectedWords] = useState(new Map());

//   // Text content configuration
//   const textContent = {
//     welcome: "Welcome! Thanks for taking the time to check out my website.",
//     aboutMeCommand: "sachin@portfolio:~$ about_me",
//     aboutMeLines: [
//       "• Hi, I'm Sachin Kumar Dinesh Chandra Mallah — a passionate AI/ML undergraduate (2nd year, Mumbai University) with a strong technical and mathematical background.",
//       "• I love solving real-world problems using artificial intelligence and modern web technologies. My experience spans data science, deep learning, and full stack web development.",
//       "• Notable Project: Reddit Sentiment Analysis Dashboard Built a real-time sentiment analysis dashboard for any Reddit topic with interactive visualizations like sentiment distribution and word clouds. Developed using Python, PRAW, Streamlit, Plotly, VADER, and NLTK. This project enhanced my skills in NLP, real-time data extraction, data visualization, and deploying AI web apps.",
//       "• Proficient in Python, TensorFlow, React, Docker, AWS, and more.",
//       "• Actively seeking internships, research opportunities, and collaborations that challenge me to grow as a technologist and problem-solver."
//     ],
//     strengthsCommand: "sachin@portfolio:~$ current_strengths",
//     strengthsLines: [
//       "• Data Science, Machine Learning, AI automation, Deep Learning, and Full Stack Web Development.",
//       "• Strong foundation in Linear Algebra, Probability, Statistics, and Calculus.",
//       "• Quick learner—confident I can figure out anything I set my mind to.",
//       "Always excited to collaborate and connect with passionate minds in tech!"
//     ]
//   };

//   // Function to split text into words while preserving spaces and punctuation
//   const splitIntoWords = (text) => {
//     // Match words, spaces, and punctuation
//     const pattern = /(\S+|\s+)/g;
//     return text.match(pattern) || [];
//   };

//   // Register word elements for physics calculations
//   useEffect(() => {
//     if (isTypingComplete) {
//       const wordRefs = document.querySelectorAll('.interactive-word');
//       const newElements = [];
      
//       wordRefs.forEach((element) => {
//         newElements.push({
//           element,
//           original: { x: 0, y: 0 },
//           current: { x: 0, y: 0 }
//         });
//       });
      
//       setWordElements(newElements);
//     }
//   }, [isTypingComplete]);

//   // Calculate initial photo position after component mounts
//   useEffect(() => {
//     if (photoRef.current) {
//       const rect = photoRef.current.getBoundingClientRect();
//       setPhotoInitialPosition({ 
//         x: rect.left + rect.width / 2, 
//         y: rect.top + rect.height / 2 
//       });
//     }
//   }, [inView]);

//   // Start photo animation when in view
//   useEffect(() => {
//     if (inView) {
//       photoControls.start("animate");
//       containerControls.start("animate");
//     }
//   }, [inView, photoControls, containerControls]);

//   // Enhanced typing animation sequence
//   useEffect(() => {
//     if (!inView) return;

//     const typeText = async () => {
//       const typeString = async (text, updater) => {
//         for (let i = 0; i <= text.length; i++) {
//           updater(text.substring(0, i));
//           await new Promise(resolve => setTimeout(resolve, 20));
//         }
//       };

//       // Welcome message
//       await typeString(textContent.welcome, (text) => {
//         setTextItems(prev => ({ ...prev, welcome: text }));
//       });
//       setTypingStage(1);
//       await new Promise(resolve => setTimeout(resolve, 700));

//       // About me command
//       await typeString(textContent.aboutMeCommand, (text) => {
//         setTextItems(prev => ({ ...prev, aboutMeCommand: text }));
//       });
//       setTypingStage(2);
//       await new Promise(resolve => setTimeout(resolve, 500));

//       // About me content lines
//       for (let i = 0; i < textContent.aboutMeLines.length; i++) {
//         await typeString(textContent.aboutMeLines[i], (text) => {
//           setTextItems(prev => {
//             const newLines = [...prev.aboutMeLines];
//             newLines[i] = text;
//             return { ...prev, aboutMeLines: newLines };
//           });
//         });
//         await new Promise(resolve => setTimeout(resolve, 200));
//       }
//       setTypingStage(3);
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // Strengths command
//       await typeString(textContent.strengthsCommand, (text) => {
//         setTextItems(prev => ({ ...prev, strengthsCommand: text }));
//       });
//       setTypingStage(4);
//       await new Promise(resolve => setTimeout(resolve, 500));

//       // Strengths content lines
//       for (let i = 0; i < textContent.strengthsLines.length; i++) {
//         await typeString(textContent.strengthsLines[i], (text) => {
//           setTextItems(prev => {
//             const newLines = [...prev.strengthsLines];
//             newLines[i] = text;
//             return { ...prev, strengthsLines: newLines };
//           });
//         });
//         await new Promise(resolve => setTimeout(resolve, 200));
//       }

//       setIsTypingComplete(true);
//     };

//     typeText();
//   }, [inView]);

//   // Physics-based word interaction handler - core functionality
//   useEffect(() => {
//     if (!isDragging || !photoRef.current || !isTypingComplete || wordElements.length === 0) return;

//     const handlePhotoMovement = (e) => {
//       // Track drag history for smooth return path
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;
//       setPhotoPosition({ x: mouseX, y: mouseY });
      
//       // Store position in drag history (limit to 20 points for performance)
//       setDragHistory(prev => {
//         const newHistory = [...prev, { x: mouseX, y: mouseY }];
//         if (newHistory.length > 20) {
//           return newHistory.slice(newHistory.length - 20);
//         }
//         return newHistory;
//       });

//       const photoRect = photoRef.current.getBoundingClientRect();
//       const photoCenter = {
//         x: photoRect.left + photoRect.width / 2,
//         y: photoRect.top + photoRect.height / 2
//       };

//       // Use a larger radius for better effect
//       const repulsionRadius = Math.max(photoRect.width, photoRect.height) * 2;
//       const newAffectedWords = new Map();

//       // Calculate repulsion for each word
//       wordElements.forEach((wordData) => {
//         const element = wordData.element;
//         const wordRect = element.getBoundingClientRect();
//         const wordCenter = {
//           x: wordRect.left + wordRect.width / 2,
//           y: wordRect.top + wordRect.height / 2
//         };

//         const dx = photoCenter.x - wordCenter.x;
//         const dy = photoCenter.y - wordCenter.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < repulsionRadius) {
//           // Calculate repulsion with non-linear falloff for more natural effect
//           const repulsionFactor = Math.pow(1 - Math.min(1, distance / repulsionRadius), 2);
//           const maxRepulsion = 80; // Stronger repulsion
//           const repulsionX = -dx / distance * maxRepulsion * repulsionFactor;
//           const repulsionY = -dy / distance * maxRepulsion * repulsionFactor;
          
//           // Add some randomness for more organic movement
//           const randomFactor = 0.3;
//           const randomX = (Math.random() - 0.5) * maxRepulsion * randomFactor * repulsionFactor;
//           const randomY = (Math.random() - 0.5) * maxRepulsion * randomFactor * repulsionFactor;
          
//           const finalX = repulsionX + randomX;
//           const finalY = repulsionY + randomY;

//           element.style.transform = `translate(${finalX}px, ${finalY}px)`;
//           element.style.transition = 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          
//           // Store the current position for smooth return
//           newAffectedWords.set(element, { x: finalX, y: finalY });
//         } else if (affectedWords.has(element)) {
//           // Smooth return to original position
//           element.style.transform = 'translate(0, 0)';
//           element.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
//         }
//       });

//       setAffectedWords(newAffectedWords);
//     };

//     window.addEventListener('mousemove', handlePhotoMovement);
//     return () => window.removeEventListener('mousemove', handlePhotoMovement);
//   }, [isDragging, affectedWords, isTypingComplete, wordElements]);

//   // Animated return of words to original positions
//   useEffect(() => {
//     if (isDragging || affectedWords.size === 0) return;
    
//     // Smooth return animation for affected words
//     affectedWords.forEach((position, element) => {
//       // Apply spring animation for return
//       element.style.transform = 'translate(0, 0)';
//       element.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
//     });
    
//     // Clear affected words after animation
//     const timeout = setTimeout(() => {
//       setAffectedWords(new Map());
//     }, 800);
    
//     return () => clearTimeout(timeout);
//   }, [isDragging, affectedWords]);

//   // Drag handlers with path-following return animation
//   const handleDragStart = () => {
//     setIsDragging(true);
//     setDragHistory([]);
//     photoControls.start({ scale: 1.1, rotate: 2 });
    
//     // Capture initial photo position
//     if (photoRef.current) {
//       const rect = photoRef.current.getBoundingClientRect();
//       setPhotoInitialPosition({ 
//         x: rect.left + rect.width / 2, 
//         y: rect.top + rect.height / 2 
//       });
//     }
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
    
//     // Create a smooth return path using the drag history
//     if (dragHistory.length > 0) {
//       // Animate through drag path in reverse with decreasing steps
//       const animateReturn = async () => {
//         const reversePath = [...dragHistory].reverse();
//         const totalPoints = reversePath.length;
//         const minPoints = Math.min(500, totalPoints); // here i have change it from 10 to 500  Cap at 10 points for smooth animation
        
//         // Select evenly spaced points for smoother animation
//         const stepSize = Math.max(1, Math.floor(totalPoints / minPoints));
//         const animationPath = [];
        
//         for (let i = 0; i < totalPoints; i += stepSize) {
//           animationPath.push(reversePath[i]);
//         }
        
//         // Add the final position to ensure we end at the original spot
//         animationPath.push({ x: 0, y: 0 });
        
//         // Animate through each point with decreasing duration
//         for (let i = 0; i < animationPath.length; i++) {
//           const point = animationPath[i];
//           const progress = i / animationPath.length;
//           const duration = 0.15 + (0.1 * (1 - progress)); // Slower at start, faster at end this is the line where we can make change like photo back animation
          
//           await photoControls.start({
//             x: point.x === 0 ? 0 : point.x - photoInitialPosition.x,
//             y: point.y === 0 ? 0 : point.y - photoInitialPosition.y,
//             scale: 1 + (0.1 * (1 - progress)),
//             rotate: 2 * (1 - progress),
//             transition: { 
//               duration: duration,
//               ease: [0.25, 0.46, 0.45, 0.94]
//             }
//           });
//         }
        
//         // Final return animation to ensure we get back precisely
//         await photoControls.start({
//           scale: 1,
//           rotate: 0,
//           x: 0,
//           y: 0,
//           transition: { 
//             type: "spring", 
//             stiffness: 200, 
//             damping: 20 
//           }
//         });
//       };
      
//       animateReturn();
//     } else {
//       // If no drag history, just reset position
//       photoControls.start({
//         scale: 1,
//         rotate: 0,
//         x: 0,
//         y: 0,
//         transition: { type: "spring", stiffness: 300 }
//       });
//     }
//   };

//   // Render each word individually for fine-grained animation
//   const renderWords = (text, customClass = '') => {
//     const words = splitIntoWords(text);
//     return words.map((word, idx) => (
//       <motion.span
//         key={`${text.substring(0, 5)}-word-${idx}`}
//         className={`interactive-word ${customClass}`}
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 1 }}
//         style={{ 
//           display: 'inline-block',
//           position: 'relative',
//           transformOrigin: 'center center',
//           willChange: 'transform',
//           zIndex: 10,
//           whiteSpace: word.trim() === '' ? 'pre' : 'normal' // Preserve spaces
//         }}
//       >
//         {word}
//       </motion.span>
//     ));
//   };

//   // Animation variants
//   const profileImageVariants = {
//     initial: { scale: 0.8, rotate: -5, opacity: 0, y: 20 },
//     animate: {
//       scale: 1,
//       rotate: 0,
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 0.8
//       }
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
//       transition: {
//         type: "spring",
//         stiffness: 300
//       }
//     },
//     dragging: {
//       scale: 1.1,
//       boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)",
//       zIndex: 50
//     }
//   };

//   const containerVariants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       }
//     }
//   };

//   const terminalVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 20,
//         duration: 0.8
//       }
//     }
//   };

//   return (
//     <section id="about" className="py-20 bg-transparent">
//       <motion.div 
//         className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
//         variants={containerVariants}
//         initial="initial"
//         animate={containerControls}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.9 }}
//           className="text-4xl font-bold mb-12 section-title text-center text-black"
//           ref={ref}
//         >
//           <span className="text-black font-bold about-heading">About</span>
//         </motion.h2>

//         <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
//           {/* Interactive Profile Image with improved positioning */}
//           <motion.div
//             className="lg:w-1/3 w-full flex justify-center mb-8 lg:mb-0"
//             initial="initial"
//             animate={photoControls}
//             whileHover="hover"
//             variants={profileImageVariants}
//             drag
//             dragMomentum={false}
//             dragElastic={0.1}
//             onDragStart={handleDragStart}
//             onDragEnd={handleDragEnd}
//             ref={photoRef}
//             style={{
//               zIndex: isDragging ? 50 : 10,
//               cursor: isDragging ? 'grabbing' : 'grab',
//               position: 'relative',
//               touchAction: 'none',
//               alignSelf: 'center'
//             }}
//           >
//             <div className="relative overflow-hidden rounded-full border-4 border-gray-800 w- h- ">
//               <motion.img
//                 src='/images/sachin.png'
//                 alt="Sachin kumar"
//                 className="w-full h-full object-cover no-drag"
//                 initial={{ scale: 1 }}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 draggable="false"
//               />
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0 }}
//                 transition={{ delay: 0.5, duration: 0.3 }}
//               />
//               <motion.div
//                 className="absolute bottom-7 w-full bg-black bg-opacity-50 py-3 text-center text-white font-medium z-10"
//                 initial={{ y: 0 }}
//                 animate={{ y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.4, type: "spring", stiffness: 100 }}
//               >
//                 AI/ML Developer
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Terminal Content with word-level animations */}
//           <motion.div
//             className="terminal-window lg:w-2/3 w-full rounded-lg overflow-hidden shadow-2xl"
//             variants={terminalVariants}
//             initial="initial"
//             animate={inView ? "animate" : "initial"}
//           >
//             <div className="terminal-header bg-gray-900 px-4 py-2 flex items-center">
//               <div className="flex space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               <div className="ml-4 text-green-400 text-sm font-mono">about.sh</div>
//             </div>

//             <div className="terminal-content bg-black bg-opacity-80 p-6 font-mono text-white min-h-[400px] relative overflow-hidden">
//               {/* Background terminal effect */}
//               <div className="absolute inset-0 bg-grid opacity-0 pointer-events-none"></div>   
//               {/* here up code i have made change like it was 5 % opactity but i made i to 100% */}
//               <div className="terminal-text-container relative z-10">
//                 <p className="text-gray-500 mb-4">
//                   {renderWords(textItems.welcome, 'text-gray-400')}
//                 </p>

//                 {typingStage >= 1 && (
//                   <div className="mt-4">
//                     <p className="text-green-400 mb-2">
//                       {renderWords('$ ' + textItems.aboutMeCommand, 'text-green-400')}
//                     </p>

//                     {typingStage >= 2 && (
//                       <div className="ml-4 mt-3 space-y-3">
//                         {textItems.aboutMeLines.map((line, index) => (
//                           <p
//                             key={`about-${index}`}
//                             className="text-white"
//                           >
//                             {renderWords(line, 'text-white')}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {typingStage >= 3 && (
//                   <div className="mt-6">
//                     <p className="text-green-400 mb-2">
//                       {renderWords('$ ' + textItems.strengthsCommand, 'text-green-400')}
//                     </p>

//                     {typingStage >= 4 && (
//                       <div className="ml-4 mt-3 space-y-3">
//                         {textItems.strengthsLines.map((line, index) => (
//                           <p
//                             key={`strength-${index}`}
//                             className="text-white"
//                           >
//                             {renderWords(line, 'text-white')}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {isTypingComplete && (
//                   <div className="flex items-center mt-6">
//                     <p className="text-green-400">$</p>
//                     <span className="ml-2 w-3 h-5 bg-green-400 animate-blink"></span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <style jsx global>{`
//         .section-title {
//           position: relative;
//           display: inline-block;
//         }

//         .about-heading {
//           background: linear-gradient(90deg,rgb(0, 0, 0),rgb(0, 0, 0));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           position: relative;
//         }

//         .about-heading::after {
//           content: '';
//           position: absolute;
//           bottom: -8px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 120px;
//           height: 3px;
//           background: linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%);
//         }

//         .terminal-window {
//           border-radius: 0.75rem;
//           overflow: hidden;
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//         }

//         .terminal-content {
//           line-height: 1.7;
//           position: relative;
//           background-image: radial-gradient(rgba(0, 30, 20, 0.4) 5%, transparent 5%);
//           background-position: 0 0;
//           background-size: 20px 20px;
//         }

//         .interactive-word {
//           display: inline-block;
//           position: relative;
//           transform: translate(0, 0);
//           transition: transform 0.3s ease;
//           will-change: transform;
//           z-index: 10;
//           margin: 0;
//           padding: 0;
//         }

//         .photo-container {
//           transform-origin: center center;
//           will-change: transform;
//           box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.8);
//           position: relative;
//           overflow: hidden;
//         }

//         .shadow-photo {
//           box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.8), 
//                       0 0 15px rgb(255, 255, 255),
//                       inset 0 0 15px rgb(255, 255, 255);
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }

//         .animate-blink {
//           animation: blink 1s infinite;
//         }

//         .no-drag {
//           -webkit-user-drag: none;
//           user-drag: none;
//         }

//         .bg-grid {
//           background-size: 20px 20px;
//           background-image: 
//             linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
//         }

//         /* Additional terminal styling */
//         .terminal-text-container::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent);
//           animation: scanline 13s linear infinite;
//           z-index: -1;
//         }

//         @keyframes scanline {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(800px);
//           }
//         }

//         /* Responsive adjustments */
//         @media (max-width: 1024px) {
//           .terminal-content {
//             min-height: 300px;
//           }
//         }

//         @media (max-width: 768px) {
//           .photo-container {
//             width: 180px;
//             height: 180px;
//           }
//         }

//         @media (max-width: 640px) {
//           .terminal-content {
//             padding: 1rem;
//             font-size: 0.9rem;
//           }
//           .photo-container {
//             width: 150px;
//             height: 150px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;


























































































'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const About = () => {
  // Intersection Observer setup
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Typing animation states
  const [welcome, setWelcome] = useState('')
  const [aboutMeCommand, setAboutMeCommand] = useState('')
  const [aboutMeLines, setAboutMeLines] = useState([])
  const [strengthsCommand, setStrengthsCommand] = useState('')
  const [strengthsLines, setStrengthsLines] = useState([])
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [typingStage, setTypingStage] = useState(0)

  // 3D card effect motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  // Content configuration
  const textContent = {
    welcome: "Welcome! Thanks for taking the time to check out my website.",
    aboutMeCommand: "sachin@portfolio:~$ about_me",
    aboutMeLines: [
      "• Hi, I'm Sachin Kumar Dinesh Chandra Mallah — a passionate AI/ML undergraduate (2nd year, Mumbai University) with a strong technical and mathematical background.",
      "• I love solving real-world problems using artificial intelligence and modern web technologies. My experience spans data science, deep learning, and full stack web development.",
      "• Notable Project: Reddit Sentiment Analysis Dashboard Built a real-time sentiment analysis dashboard for any Reddit topic with interactive visualizations like sentiment distribution and word clouds. Developed using Python, PRAW, Streamlit, Plotly, VADER, and NLTK. This project enhanced my skills in NLP, real-time data extraction, data visualization, and deploying AI web apps.",
      "• Actively seeking internships, research opportunities, and collaborations that challenge me to grow as a technologist and problem-solver."
    ],
    strengthsCommand: "sachin@portfolio:~$ current_strengths",
    strengthsLines: [
      "• Data Science, Machine Learning, AI automation, Deep Learning, and Full Stack Web Development.",
      "• Strong foundation in Linear Algebra, Probability, Statistics, and Calculus.",
      "• Quick learner—confident I can figure out anything I set my mind to.",
      "Always excited to collaborate and connect with passionate minds in tech!"
    ]
  }

  // Typing animation effect
  useEffect(() => {
    if (!inView) return

    const typeString = async (text, updater) => {
      for (let i = 0; i <= text.length; i++) {
        updater(text.substring(0, i))
        await new Promise(resolve => setTimeout(resolve, 20))
      }
    }

    const typeText = async () => {
      // Stage 1: Welcome message
      await typeString(textContent.welcome, setWelcome)
      setTypingStage(1)
      await new Promise(resolve => setTimeout(resolve, 700))

      // Stage 2: About Me command
      await typeString(textContent.aboutMeCommand, setAboutMeCommand)
      setTypingStage(2)
      await new Promise(resolve => setTimeout(resolve, 500))

      // Stage 3: About Me content
      let aboutLines = []
      for (let i = 0; i < textContent.aboutMeLines.length; i++) {
        await typeString(textContent.aboutMeLines[i], (t) => {
          aboutLines[i] = t
          setAboutMeLines([...aboutLines])
        })
      }
      setTypingStage(3)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Stage 4: Strengths command
      await typeString(textContent.strengthsCommand, setStrengthsCommand)
      setTypingStage(4)
      await new Promise(resolve => setTimeout(resolve, 500))

      // Stage 5: Strengths content
      let strengthsArr = []
      for (let i = 0; i < textContent.strengthsLines.length; i++) {
        await typeString(textContent.strengthsLines[i], (t) => {
          strengthsArr[i] = t
          setStrengthsLines([...strengthsArr])
        })
      }

      setIsTypingComplete(true)
    }

    typeText()
  }, [inView])

  // Mouse move handler for 3D effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
    rotateX.set((e.clientY - (top + height/2)) / 20)
    rotateY.set(-(e.clientX - (left + width/2)) / 20)
  }

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
          <p className="text-xl text-gray-300 mt-4">The Developer Behind the Code</p>
        </motion.h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* 3D Profile Card */}
          <motion.div 
            className="relative group w-full lg:w-1/3"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              rotateX.set(0)
              rotateY.set(0)
            }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/30 to-gray-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            
            <motion.div
              style={{ transform }}
              className="bg-black/80 backdrop-blur-xl rounded-3xl border-2 border-gray-500/30 shadow-2xl overflow-hidden p-4"
            >
              <img 
                src="/images/sachin.png" 
                alt="Sachin Kumar" 
                className="w-full h-full object-cover rounded-2xl border-2 border-gray-500/30"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-center"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <span className="text-gray-100 font-medium">AI/ML Developer</span>
                <div className="mt-2 flex justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Terminal Interface */}
          <motion.div 
            className="w-full lg:w-2/3 bg-black/80 backdrop-blur-xl rounded-3xl border-2 border-gray-500/30 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="terminal-header bg-gray-900/50 px-6 py-3 flex items-center border-b border-gray-500/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-green-400 font-mono text-sm">about_sachin.sh</span>
            </div>

            <div className="terminal-content p-6 font-mono text-gray-300 min-h-[400px] relative">
              <div className="space-y-4">
                {/* Welcome Message */}
                <motion.p>{welcome}</motion.p>

                {/* About Me Section */}
                {typingStage >= 1 && (
                  <div className="mt-4">
                    <p className="text-green-400">$ {aboutMeCommand}</p>
                    <div className="ml-4 mt-3 space-y-3">
                      {aboutMeLines.map((line, i) => (
                        <motion.p key={`about-line-${i}`} className="text-gray-100">
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Strengths Section */}
                {typingStage >= 3 && (
                  <div className="mt-6">
                    <p className="text-green-400">$ {strengthsCommand}</p>
                    <div className="ml-4 mt-3 space-y-3">
                      {strengthsLines.map((line, i) => (
                        <motion.p key={`strength-line-${i}`} className="text-gray-100">
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terminal Prompt */}
                {isTypingComplete && (
                  <div className="mt-6 flex items-center text-green-400">
                    <span>$</span>
                    <div className="ml-2 w-3 h-5 bg-green-400 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0" /> */}
    </section>
  )
}

export default About
