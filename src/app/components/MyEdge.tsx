// export default function MyEdge() {
//     return (
//       <section id="difference" className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-12 section-title">My Edge</h2>
          
//           <div className="relative">
//             <div className="absolute left-8 md:left-1/2 h-full border-l-2 border-black"></div>
            
//             {/* Timeline Item 1 */}
//             <div className="mb-12 flex justify-between items-center w-full timeline-item">
//               <div className="order-1 md:w-5/12"></div>
//               <div className="order-1 md:w-5/12 px-4 py-4">
//                 <h3 className="text-xl font-bold mb-2">Theoretical Foundation</h3>
//                 <p className="text-gray-600">
//                   While many focus solely on implementation, I prioritize understanding the mathematical 
//                   underpinnings of algorithms. This allows me to adapt and improve models beyond standard use cases.
//                 </p>
//               </div>
//             </div>
            
//             {/* Timeline Item 2 */}
//             <div className="mb-12 flex justify-between items-center w-full timeline-item">
//               <div className="order-1 md:w-5/12 px-4 py-4">
//                 <h3 className="text-xl font-bold mb-2">Ethical Framework</h3>
//                 <p className="text-gray-600">
//                   I approach AI development with a strong ethical framework, considering bias mitigation, 
//                   explainability, and societal impact from the initial design phase.
//                 </p>
//               </div>
//             </div>
            
//             {/* Timeline Item 3 */}
//             <div className="mb-12 flex justify-between items-center w-full timeline-item">
//               <div className="order-1 md:w-5/12"></div>
//               <div className="order-1 md:w-5/12 px-4 py-4">
//                 <h3 className="text-xl font-bold mb-2">Interdisciplinary Thinking</h3>
//                 <p className="text-gray-600">
//                   My projects often combine AI with psychology, design, and domain-specific knowledge to 
//                   create solutions that are technically sound and human-centered.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Learning Philosophy */}
//           <div className="mt-16 bg-black p-8 rounded-lg shadow-sm">
//             <h3 className="text-2xl font-bold mb-4">My Learning Philosophy</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div>
//                 <div className="text-5xl font-bold mb-2">01</div>
//                 <h4 className="text-lg font-semibold mb-2">Learn Deeply</h4>
//                 <p className="text-gray-600">
//                   Master fundamentals before chasing trends. Strong foundations enable faster adaptation.
//                 </p>
//               </div>
//               <div>
//                 <div className="text-5xl font-bold mb-2">02</div>
//                 <h4 className="text-lg font-semibold mb-2">Build Publicly</h4>
//                 <p className="text-gray-600">
//                   Share progress and failures openly. Documentation accelerates learning.
//                 </p>
//               </div>
//               <div>
//                 <div className="text-5xl font-bold mb-2">03</div>
//                 <h4 className="text-lg font-semibold mb-2">Teach Others</h4>
//                 <p className="text-gray-600">
//                   Explaining concepts reveals gaps in understanding. Teaching is the ultimate test.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }






















// // this is best till now but this is in white theme 
// 'use client';

// import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';

// function Particles({ count = 40 }) {
//   const particles = Array.from({ length: count }).map((_, i) => ({
//     id: i,
//     x: Math.random() * 0,
//     y: Math.random() * 0,
//     size: Math.random() * 0 + 0,
//     speed: Math.random() * 0 + 0,
//   }));

//   return (
//     <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute rounded-full bg-black"
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             opacity: particle.size / 5,
//           }}
//           animate={{
//             y: ["0%", `${particle.speed * 100}%`],
//             opacity: [particle.size / 5, 0],
//           }}
//           transition={{
//             duration: 10 / particle.speed,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // this is timeline card for that 3 card that are being coming from left to right and vice versa
// function TimelineCard({ title, content, position, index }) {
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { once: true, margin: "-100px" });
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     setMousePosition({
//       x: (e.clientX - rect.left) / rect.width - 0.5,
//       y: (e.clientY - rect.top) / rect.height - 0.5
//     });
//   };

//   const slideVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: position === "right" ? 100 : position === "left" ? -100 : 0,
//       y: position === "full" ? 50 : 0,
//       filter: "blur(10px)",
//       scale: 0.9
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       y: 0,
//       filter: "blur(0px)",
//       scale: 1,
//       transition: { 
//         duration: 0.7, 
//         delay: index * 0.2,
//         ease: "easeOut" 
//       }
//     }
//   };

//   const rotateX = isHovered ? mousePosition.y * 10 : 0;
//   const rotateY = isHovered ? -mousePosition.x * 10 : 0;

//   return (
//     <div className={`mb-12 flex justify-between items-center w-full timeline-item ${
//       position === "full" 
//         ? "flex-col" 
//         : position === "right" 
//           ? "flex-col md:flex-row" 
//           : "flex-col md:flex-row-reverse"
//     }`}
//     role="listitem"
//     aria-label={`Timeline card: ${title}`}
//     >
//       {position !== "full" && <div className="md:w-5/12"></div>}
      
//       <div className="z-10 h-4 w-4 bg-black rounded-full absolute left-4 md:left-1/2 transform -translate-x-1/2" aria-hidden="true"></div>
      
//       <motion.div 
//         ref={cardRef}
//         className={`${position === "full" ? "w-full" : "w-full md:w-5/12"} backdrop-lg bg-black/10 p-6 rounded-lg shadow-lg border border-black/20 transition-all duration-300`}
//         variants={slideVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         style={{ 
//           rotateX: rotateX,
//           rotateY: rotateY,
//           transformStyle: "preserve-3d",
//           perspective: "1000px"
//         }}
//         whileHover={{ 
//           scale: 1.06, 
//           boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)",
//         }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         onMouseMove={handleMouseMove}
//         tabIndex="0"
//       >
//         <motion.h3 
//           className="text-xl font-bold mb-2 text-black"
//           style={{ 
//             transform: "translateZ(20px)",
//             // textShadow: isHovered ? "0 10px 20px rgb(0, 0, 0)" : "none"
//           }}
//         >
//           {title}
//         </motion.h3>
//         <motion.p 
//           className="text-white-300"
//           style={{ transform: "translateZ(10px)" }}
//         >
//           {content}
//         </motion.p>
        
//         <motion.div 
//           className="absolute inset-0 rounded-lg"
//           initial={{ boxShadow: "0 0 0 0 rgb(0, 0, 0)" }}
//           animate={{ 
//             boxShadow: isHovered 
//               ? "0 0 10px 0 rgba(0, 0, 0, 0.56)" 
//               : "0 0 0 0 rgba(255, 255, 255, 0)" 
//           }}
//           transition={{ duration: 0.03 }}
//           aria-hidden="true"
//         />
        
//         {isHovered && (
//           <AnimatePresence>
//             {Array.from({ length: 10 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute rounded-full bg-black"
//                 initial={{ 
//                   x: mousePosition.x * 100 + 50, 
//                   y: mousePosition.y * 100 + 50,
//                   scale: 0,
//                   opacity: 0.7
//                 }}
//                 animate={{ 
//                   x: [mousePosition.x * 100 + 50, mousePosition.x * 100 + 50 + (Math.random() - 0.5) * 100],
//                   y: [mousePosition.y * 100 + 50, mousePosition.y * 100 + 50 + (Math.random() - 0.5) * 100],
//                   scale: [0, Math.random() * 0.5],
//                   opacity: [0.7, 0]
//                 }}
//                 exit={{ opacity: 0, scale: 0 }}
//                 transition={{ duration: 0.8 }}
//                 style={{
//                   width: `${Math.random() * 4 + 1}px`,
//                   height: `${Math.random() * 4 + 1}px`,
//                 }}
//                 aria-hidden="true"
//               />
//             ))}
//           </AnimatePresence>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// // for dark mode theme
// // function DarkModeToggle() {
// //   const [dark, setDark] = useState(() => localStorage.getItem('dark') === 'true');

// //   useEffect(() => {
// //     if (dark) document.documentElement.classList.add('dark');
// //     else document.documentElement.classList.remove('dark');
// //     localStorage.setItem('dark', dark);
// //   }, [dark]);

// //   return (
// //     <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
// //       {dark ? '🌙' : '☀️'}
// //     </button>
// //   );
// // }

// // philosophy components
// function PhilosophyCard({ number, title, content }) {
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { once: true });
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     setMousePosition({
//       x: (e.clientX - rect.left) / rect.width - 0.5,
//       y: (e.clientY - rect.top) / rect.height - 0.5
//     });
//   };

//   const rotateX = isHovered ? mousePosition.y * 10 : 0;
//   const rotateY = isHovered ? -mousePosition.x * 10 : 0;

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//       transition={{ duration: 0.5, delay: parseInt(number.substring(1)) * 0.1 }}
//       style={{ 
//         rotateX: rotateX,
//         rotateY: rotateY,
//         transformStyle: "preserve-3d",
//         perspective: "1000px"
//       }}
//       whileHover={{ 
//         scale: 1.05, 
//         y: -5,
//         boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.1)"
//       }}
//       className="backdrop--sm bg-black/5 p-5 rounded-lg border border-black/10 transition-all duration-300 relative"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       onMouseMove={handleMouseMove}
//       tabIndex="0"
//       role="article"
//       aria-label={`Learning philosophy: ${title}`}
//     >
//       <motion.div 
//         className="text-5xl font-bold mb-2 text-white"
//         style={{ transform: "translateZ(20px)" }}
//       >
//         {number}
//       </motion.div>
//       <motion.h4 
//         className="text-lg font-semibold mb-2 text-white"
//         style={{ transform: "translateZ(15px)" }}
//       >
//         {title}
//       </motion.h4>
//       <motion.p 
//         className="text-white"
//         style={{ transform: "translateZ(10px)" }}
//       >
//         {content}
//       </motion.p>

//       {isHovered && (
//         <AnimatePresence>
//           {Array.from({ length: 5 }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-black"
//               initial={{ 
//                 x: mousePosition.x * 100 + 50, 
//                 y: mousePosition.y * 100 + 50,
//                 scale: 0,
//                 opacity: 0.5
//               }}
//               animate={{ 
//                 x: [mousePosition.x * 100 + 50, mousePosition.x * 100 + 50 + (Math.random() - 0.5) * 60],
//                 y: [mousePosition.y * 100 + 50, mousePosition.y * 100 + 50 + (Math.random() - 0.5) * 60],
//                 scale: [0, Math.random() * 0.3],
//                 opacity: [0.5, 0]
//               }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.6 }}
//               style={{
//                 width: `${Math.random() * 3 + 1}px`,
//                 height: `${Math.random() * 3 + 1}px`,
//               }}
//               aria-hidden="true"
//             />
//           ))}
//         </AnimatePresence>
//       )}
//     </motion.div>
//   );
// }

// export default function MyEdge() {
//   const { scrollYProgress } = useScroll();
//   const timelineRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [blips, setBlips] = useState([]);
//   const drawProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!sectionRef.current) return;
//       if (e.key === 'ArrowDown') {
//         e.preventDefault();
//         window.scrollBy({ top: 100, behavior: 'smooth' });
//       } else if (e.key === 'ArrowUp') {
//         e.preventDefault();
//         window.scrollBy({ top: -100, behavior: 'smooth' });
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // this is for that node that is there in the main going up to down
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (Math.random() > 1) {
//         const newBlip = { id: Date.now(), progress: 0 };
//         setBlips(prev => [...prev, newBlip]);
//         setTimeout(() => {
//           setBlips(prev => prev.filter(blip => blip.id !== newBlip.id));
//         }, 2000);
//       }
//     }, 800);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section 
//       id="difference" 
//       ref={sectionRef}
//       className="py-20 relative overflow-hidden bg-transparent"
//       aria-label="My professional edge and specialties"
//       tabIndex="0"
//     >
//       <Particles count={50} />
      
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.h2 
//           className="text-3xl font-bold mb-12 text-black section-title"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           My Edge
//         </motion.h2>
        
//         <div className="relative">
//           <motion.div 
//             className="absolute left-4 md:left-1/2 h-full border-l-2 border-black/100"
//             ref={timelineRef}
//             style={{ scaleY: drawProgress, transformOrigin: 'top' }}
//             aria-hidden="true"
//           ></motion.div>
          
//           <AnimatePresence>
//             {/* {blips.map(blip => (
//               <motion.div
//                 key={blip.id}
//                 className="absolute left-4 md:left-1/2 w-3 h-3 bg-black rounded-full z-10 transform -translate-x-1/2"
//                 initial={{ top: 0, scale: 0.5, opacity: 0.7 }}
//                 animate={{ 
//                   top: ['0%', '100%'],
//                   scale: [0.5, 1.5, 0.5],
//                   opacity: [0.7, 1, 0]
//                 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 2, ease: "linear" }}
//                 aria-hidden="true"
//               />
//             ))} */}
//           </AnimatePresence>
          
//           <TimelineCard 
//             title="💡 Theory-Driven Innovation"
//             content="I don't just apply algorithms—I understand them. With a strong foundation in the mathematics behind machine learning and AI, I can adapt, optimize, and build solutions that go beyond off-the-shelf models."
//             position={windowWidth < 768 ? "full" : "right"}
//             index={0}
//           />
          
//           <TimelineCard 
//             title="🛡️ Built on Ethics"
//             content="Responsible AI is a core part of my process. From day one, I consider bias, fairness, and explainability to ensure my work is not only effective—but also trustworthy and aligned with real-world values."
//             position={windowWidth < 768 ? "full" : "left"}
//             index={1}
//           />
          
//           <TimelineCard 
//             title="🌍 Interdisciplinary Thinking"
//             content="I bring AI to life by blending it with psychology, design, and domain-specific insights. This helps me create solutions that are not only technically sound but also intuitive, human-centered, and built for real impact."
//             position={windowWidth < 768 ? "full" : "right"}
//             index={2}
//           />
          
//           {/* that blinking node */}
//           {/* <motion.div 
//             className="absolute left-4 md:left-1/2 transform -translate-x-1/2 bottom-0 h-3 w-3 bg-black rounded-full z-10"
//             initial={{ scale: 0 }}
//             animate={{ 
//               scale: [0.8, 1.5, 0.8], 
//               boxShadow: [
//                 "0 0 0 0 rgba(255, 255, 255, 0.7)",
//                 "0 0 0 90px rgba(255, 255, 255, 0)",
//                 "0 0 0 0 rgba(255, 255, 255, 0.7)"
//               ]
//             }}
//             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//             aria-hidden="true"
//           ></motion.div> */}
//         </div>
        
//         <div className="mt-16 bg-transparent/40 p-8 rounded-lg shadow-sm backdrop-transparent-md">
//           <h3 className="text-2xl font-bold mb-8 text-white">My Learning Philosophy</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             <PhilosophyCard 
//               number="01"
//               title="Learn Deeply"
//               content="Master fundamentals before chasing trends. Strong foundations enable faster adaptation."
//             />
//             <PhilosophyCard 
//               number="02"
//               title="Build Publicly"
//               content="Share progress and failures openly. Documentation accelerates learning."
//             />
//             <PhilosophyCard 
//               number="03"
//               title="Teach Others"
//               content="Explaining concepts reveals gaps in understanding. Teaching is the ultimate test."
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





















































































































// this is my edge section best code black theme as required 

'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Lightbulb, Shield, Globe } from 'lucide-react';

function Particles({ count = 40 }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gray-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.size / 5,
          }}
          animate={{
            y: ["0%", `${particle.speed * 100}%`],
            opacity: [particle.size / 5, 0],
          }}
          transition={{
            duration: 10 / particle.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function TimelineCard({ title, content, position, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5
    });
  };

  const slideVariants = {
    hidden: { 
      opacity: 0, 
      x: position === "right" ? 100 : position === "left" ? -100 : 0,
      y: position === "full" ? 50 : 0,
      filter: "blur(10px)",
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.1, 
        delay: index * 0.1,
        ease: "easeOut" 
      }
    }
  };

  const rotateX = isHovered ? mousePosition.y * 8 : 0;
  const rotateY = isHovered ? -mousePosition.x * 8 : 0;

  return (
    <div className={`mb-12 flex justify-between items-center w-full timeline-item ${
      position === "full" 
        ? "flex-col" 
        : position === "right" 
          ? "flex-col md:flex-row" 
          : "flex-col md:flex-row-reverse"
    }`}
    role="listitem"
    aria-label={`Timeline card: ${title}`}
    >
      {position !== "full" && <div className="md:w-5/12"></div>}
      
      <div className="z-10 h-6 w-6 bg-white rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center absolute left-4 md:left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
      </div>
      
      <motion.div 
        ref={cardRef}
        className={`${position === "full" ? "w-full" : "w-full md:w-5/12"} bg-black/80 backdrop-blur-xl p-8 rounded-3xl border-2 border-gray-500/30 shadow-2xl relative transition-all duration-300`}
        variants={slideVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 25px 50px rgba(255,255,255,0.1)",
          transition: { type: 'spring', mass: 0.5 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        tabIndex="0"
      >
        <div className="absolute -inset-2 bg-gray-500/10 filter blur-3xl" aria-hidden="true" />
        <div className="relative z-10 space-y-4">
          <motion.h3 
            className="text-2xl font-bold text-gray-100 mb-4"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-300 leading-relaxed border-t border-gray-700 pt-4"
            style={{ transform: "translateZ(10px)" }}
          >
            {content}
          </motion.p>
        </div>

        {isHovered && (
          <AnimatePresence>
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gray-400"
                initial={{ 
                  x: mousePosition.x * 100 + 50, 
                  y: mousePosition.y * 100 + 50,
                  scale: 0,
                  opacity: 0.7
                }}
                animate={{ 
                  x: [mousePosition.x * 100 + 50, mousePosition.x * 100 + 50 + (Math.random() - 0.5) * 100],
                  y: [mousePosition.y * 100 + 50, mousePosition.y * 100 + 50 + (Math.random() - 0.5) * 100],
                  scale: [0, Math.random() * 0.5],
                  opacity: [0.7, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                }}
                aria-hidden="true"
              />
            ))}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}

function PhilosophyCard({ number, title, content }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5
    });
  };

  const rotateX = isHovered ? mousePosition.y * 8 : 0;
  const rotateY = isHovered ? -mousePosition.x * 8 : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: parseInt(number.substring(1)) * 0.1 }}
      style={{ 
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className="bg-black/80 backdrop-blur-xl p-8 rounded-3xl border-2 border-gray-500/30 shadow-2xl relative transition-all duration-300"
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 25px 50px rgba(255,255,255,0.1)",
        transition: { type: 'spring', mass: 0.5 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      tabIndex="0"
      role="article"
    >
      <div className="absolute -inset-2 bg-gray-500/10 filter blur-3xl" aria-hidden="true" />
      <div className="relative z-10 space-y-4">
        <motion.div 
          className="text-3xl font-bold mb-2 text-gray-300"
          style={{ transform: "translateZ(20px)" }}
        >
          {number}
        </motion.div>
        <motion.h4 
          className="text-xl font-semibold text-gray-100"
          style={{ transform: "translateZ(15px)" }}
        >
          {title}
        </motion.h4>
        <motion.p 
          className="text-gray-300 leading-relaxed"
          style={{ transform: "translateZ(10px)" }}
        >
          {content}
        </motion.p>
      </div>

      {isHovered && (
        <AnimatePresence>
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gray-400"
              initial={{ 
                x: mousePosition.x * 100 + 50, 
                y: mousePosition.y * 100 + 50,
                scale: 0,
                opacity: 0.5
              }}
              animate={{ 
                x: [mousePosition.x * 100 + 50, mousePosition.x * 100 + 50 + (Math.random() - 0.5) * 60],
                y: [mousePosition.y * 100 + 50, mousePosition.y * 100 + 50 + (Math.random() - 0.5) * 60],
                scale: [0, Math.random() * 0.3],
                opacity: [0.5, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
              aria-hidden="true"
            />
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default function MyEdge() {
  const { scrollYProgress } = useScroll();
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [blips, setBlips] = useState([]);
  const drawProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: 100, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -100, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="difference" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-black"
      aria-label="My professional edge and specialties"
      tabIndex="0"
    >
      <Particles count={50} />
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Edge
          <p className="text-xl text-gray-300 mt-4">What Makes Me Different</p>
        </motion.h2>
        
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300"
            ref={timelineRef}
            style={{ scaleY: drawProgress, transformOrigin: 'top' }}
            aria-hidden="true"
          ></motion.div>
          
          <TimelineCard 
            title="Theory-Driven Innovation"
            content="I don't just apply algorithms—I understand them. With a strong foundation in the mathematics behind machine learning and AI, I can adapt, optimize, and build solutions that go beyond off-the-shelf models."
            position={windowWidth < 768 ? "full" : "right"}
            index={0}
          />
          
          <TimelineCard 
            title="Built on Ethics"
            content="Responsible AI is a core part of my process. From day one, I consider bias, fairness, and explainability to ensure my work is not only effective—but also trustworthy and aligned with real-world values."
            position={windowWidth < 768 ? "full" : "left"}
            index={1}
          />
          
          <TimelineCard 
            title="Interdisciplinary Thinking"
            content="I bring AI to life by blending it with psychology, design, and domain-specific insights. This helps me create solutions that are not only technically sound but also intuitive, human-centered, and built for real impact."
            position={windowWidth < 768 ? "full" : "right"}
            index={2}
          />
        </div>
        
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Learning Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <PhilosophyCard 
              number="01"
              title="Learn Deeply"
              content="Master fundamentals before chasing trends. Strong foundations enable faster adaptation."
            />
            <PhilosophyCard 
              number="02"
              title="Build Publicly"
              content="Share progress and failures openly. Documentation accelerates learning."
            />
            <PhilosophyCard 
              number="03"
              title="Teach Others"
              content="Explaining concepts reveals gaps in understanding. Teaching is the ultimate test."
            />
          </div>
        </div>
      </div>
    </section>
  );
}


























































































// 'use client';
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// export default function MyEdge() {
//   // References for the section and timeline items
//   const sectionRef = useRef(null);
//   const timelineRef = useRef(null);
//   const item1Ref = useRef(null);
//   const item2Ref = useRef(null);
//   const item3Ref = useRef(null);
  
//   // Track which items are currently visible
//   const [visibleItems, setVisibleItems] = useState({
//     item1: false,
//     item2: false,
//     item3: false
//   });
  
//   // Scroll progress tracking for the entire section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"]
//   });
  
//   // Create smooth animation for line growth
//   const smoothScroll = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });
  
//   // Setup intersection observers to detect when items come into view
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.5,
//       rootMargin: "-100px 0px"
//     };
    
//     const observerCallback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.target === item1Ref.current) {
//           setVisibleItems(prev => ({ ...prev, item1: entry.isIntersecting }));
//         } else if (entry.target === item2Ref.current) {
//           setVisibleItems(prev => ({ ...prev, item2: entry.isIntersecting }));
//         } else if (entry.target === item3Ref.current) {
//           setVisibleItems(prev => ({ ...prev, item3: entry.isIntersecting }));
//         }
//       });
//     };
    
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
    
//     if (item1Ref.current) observer.observe(item1Ref.current);
//     if (item2Ref.current) observer.observe(item2Ref.current);
//     if (item3Ref.current) observer.observe(item3Ref.current);
    
//     return () => {
//       if (item1Ref.current) observer.unobserve(item1Ref.current);
//       if (item2Ref.current) observer.unobserve(item2Ref.current);
//       if (item3Ref.current) observer.unobserve(item3Ref.current);
//     };
//   }, []);

//   return (
//     <section 
//       id="difference" 
//       ref={sectionRef}
//       className="py-20 bg-gray-50 relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl font-bold mb-12 section-title"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           My Edge
//         </motion.h2>
        
//         {/* Timeline Container */}
//         <div className="relative" ref={timelineRef}>
//           {/* The vertical timeline line that grows with scroll */}
//           <div className="absolute left-8 md:left-1/2 h-full z-0">
//             <motion.div 
//               className="border-l-2 border-black h-0"
//               style={{ 
//                 height: useTransform(
//                   smoothScroll, 
//                   [0, 0.95], 
//                   ["0%", "100%"]
//                 ),
//                 originY: 0 
//               }}
//             >
//               {/* Glowing node at the end of timeline */}
//               <motion.div 
//                 className="absolute -left-[8px] bottom-0 w-4 h-4 rounded-full bg-blue-500"
//                 style={{
//                   boxShadow: "0 0 15px 3px rgba(0, 0, 0, 0.6)",
//                 }}
//                 animate={{
//                   boxShadow: [
//                     "0 0 15px 3px rgba(0, 0, 0, 0.6)",
//                     "0 0 25px 8px rgba(0, 0, 0, 0.8)",
//                     "0 0 15px 3px rgba(0, 0, 0, 0.6)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 {/* Inner pulsing effect */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-black"
//                   animate={{
//                     opacity: [0.7, 0.1, 0.7],
//                     scale: [1, 1.2, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
          
//           {/* Timeline Item 1 - Slides in from left */}
//           <motion.div 
//             ref={item1Ref}
//             className="mb-24 flex justify-between items-center w-full timeline-item relative"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="order-1 md:w-5/12"></div>
//             <motion.div 
//               className="order-1 md:w-5/12 px-6 py-6 bg-black rounded-lg shadow-md z-10"
//               whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold mb-2">Theoretical Foundation</h3>
//               <p className="text-gray-600">
//                 While many focus solely on implementation, I prioritize understanding the mathematical 
//                 underpinnings of algorithms. This allows me to adapt and improve models beyond standard use cases.
//               </p>
//             </motion.div>
//             {/* Timeline Node */}
//             <motion.div 
//               className="absolute left-8 md:left-1/2 top-6 w-3 h-3 bg-black rounded-full -ml-1.5 z-20"
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {/* Pulse effect when in view */}
//               {visibleItems.item1 && (
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-blue-500"
//                   initial={{ scale: 1, opacity: 0.8 }}
//                   animate={{ scale: 1.8, opacity: 0 }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//               )}
//             </motion.div>
//           </motion.div>
          
//           {/* Timeline Item 2 - Slides in from right */}
//           <motion.div 
//             ref={item2Ref}
//             className="mb-24 flex justify-between items-center w-full timeline-item relative"
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <motion.div 
//               className="order-1 md:w-5/12 px-6 py-6 bg-black rounded-lg shadow-md z-10"
//               whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold mb-2">Ethical Framework</h3>
//               <p className="text-gray-600">
//                 I approach AI development with a strong ethical framework, considering bias mitigation, 
//                 explainability, and societal impact from the initial design phase.
//               </p>
//             </motion.div>
//             <div className="order-1 md:w-5/12"></div>
//             {/* Timeline Node */}
//             <motion.div 
//               className="absolute left-8 md:left-1/2 top-6 w-3 h-3 bg-black rounded-full -ml-1.5 z-20"
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {/* Pulse effect when in view */}
//               {visibleItems.item2 && (
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-blue-500"
//                   initial={{ scale: 1, opacity: 0.8 }}
//                   animate={{ scale: 1.8, opacity: 0 }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//               )}
//             </motion.div>
//           </motion.div>
          
//           {/* Timeline Item 3 - Slides in from left */}
//           <motion.div 
//             ref={item3Ref}
//             className="mb-24 flex justify-between items-center w-full timeline-item relative"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="order-1 md:w-5/12"></div>
//             <motion.div 
//               className="order-1 md:w-5/12 px-6 py-6 bg-black rounded-lg shadow-md z-10"
//               whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-bold mb-2">Interdisciplinary Thinking</h3>
//               <p className="text-gray-600">
//                 My projects often combine AI with psychology, design, and domain-specific knowledge to 
//                 create solutions that are technically sound and human-centered.
//               </p>
//             </motion.div>
//             {/* Timeline Node */}
//             <motion.div 
//               className="absolute left-8 md:left-1/2 top-6 w-3 h-3 bg-black rounded-full -ml-1.5 z-20"
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {/* Pulse effect when in view */}
//               {visibleItems.item3 && (
//                 <motion.div
//                   className="absolute inset-0 rounded-full bg-blue-500"
//                   initial={{ scale: 1, opacity: 0.8 }}
//                   animate={{ scale: 1.8, opacity: 0 }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                 />
//               )}
//             </motion.div>
//           </motion.div>
//         </div>
        
//         {/* Learning Philosophy */}
//         <motion.div 
//           className="mt-16 bg-black p-8 rounded-lg shadow-md"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           <h3 className="text-2xl font-bold mb-4">My Learning Philosophy</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">01</div>
//               <h4 className="text-lg font-semibold mb-2">Learn Deeply</h4>
//               <p className="text-gray-600">
//                 Master fundamentals before chasing trends. Strong foundations enable faster adaptation.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">02</div>
//               <h4 className="text-lg font-semibold mb-2">Build Publicly</h4>
//               <p className="text-gray-600">
//                 Share progress and failures openly. Documentation accelerates learning.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">03</div>
//               <h4 className="text-lg font-semibold mb-2">Teach Others</h4>
//               <p className="text-gray-600">
//                 Explaining concepts reveals gaps in understanding. Teaching is the ultimate test.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



























// blue one genrre by per
// 'use client';
// import { motion, useScroll, useTransform, useAnimation, useInView, AnimatePresence } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

// const MyEdge = () => {
//   const ref = useRef(null);
//   const [activeCard, setActiveCard] = useState(0);
//   const [showAssistant, setShowAssistant] = useState(false);
//   const [audioEnabled, setAudioEnabled] = useState(false);
//   const [hiddenCardVisible, setHiddenCardVisible] = useState(false);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const controls = useAnimation();
//   const pulseControls = useAnimation();
  
//   // Scroll progress transforms
//   const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
//   const card1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]);
//   const card2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 0, 1]);
//   const card3Opacity = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 0, 1]);

//   // Timeline animation sequence
//   useEffect(() => {
//     const sequence = async () => {
//       await pulseControls.start({ 
//         scale: [1, 1.2, 1],
//         transition: { duration: 2, repeat: Infinity } 
//       });
//     };
//     sequence();
//   }, []);

//   // Audio handler
//   const playAudio = () => {
//     if (audioEnabled) {
//       const audio = new Audio('/sounds/neural-pulse.mp3');
//       audio.volume = 0.3;
//       audio.play();
//     }
//   };

//   // Card variants
//   const cardVariants = {
//     hiddenLeft: { opacity: 0, x: -100, filter: "blur(5px)" },
//     hiddenRight: { opacity: 0, x: 100, filter: "blur(5px)" },
//     visible: { opacity: 1, x: 0, filter: "blur(0px)" }
//   };

//   // Glassmorphism Card
//   const GlassCard = ({ title, text, direction, index }) => (
//     <motion.div
//       className="w-full md:w-2/3 p-8 rounded-2xl backdrop-blur-xl bg-black/10 shadow-2xl border border-black/20 hover:border-black/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
//       variants={cardVariants}
//       initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.8, type: "spring" }}
//       onHoverStart={() => setActiveCard(index)}
//       onHoverEnd={() => setActiveCard(null)}
//       onClick={playAudio}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-30 transition-opacity duration-300"/>
//       <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//         {title}
//       </h3>
//       <p className="text-gray-200 text-lg leading-relaxed">{text}</p>
      
//       {/* Hover snapshot */}
//       <AnimatePresence>
//         {activeCard === index && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="absolute -right-20 -top-10 w-48 h-48 bg-cover bg-center rounded-lg shadow-xl border border-black/20"
//             style={{ backgroundImage: `url(/images/project-${index+1}.jpg)` }}
//           />
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );

//   return (
//     <section 
//       ref={ref}
//       className="relative min-h-screen py-20 overflow-hidden"
//       style={{ background: "radial-gradient(circle at center, #0f172a 0%, #020617 100%)" }}
//     >
//       {/* Parallax Particles */}
//       <div className="absolute inset-0 opacity-40">
//         <Particles
//           init={loadFull}
//           options={{
//             particles: {
//               number: { value: 80 },
//               move: { enable: true, speed: 0.3 },
//               opacity: { value: 0.5 },
//               size: { value: 1 },
//               links: {
//                 enable: true,
//                 distance: 150,
//                 color: "#ffffff",
//                 opacity: 0.2
//               }
//             }
//           }}
//         />
//       </div>

//       {/* Scroll Progress Tracker */}
//       <motion.div 
//         className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50"
//         style={{ opacity: pathLength }}
//       >
//         {[1, 2, 3].map((dot, index) => (
//           <motion.button
//             key={dot}
//             className="w-3 h-3 rounded-full bg-black/30 backdrop-blur-sm transition-all hover:scale-125 hover:bg-black/80"
//             animate={{ 
//               scale: activeCard === index ? 1.4 : 1,
//               backgroundColor: activeCard === index ? "rgba(96, 165, 250, 0.9)" : "rgba(255, 255, 255, 0.3)"
//             }}
//             onClick={() => document.querySelector(`#card-${index}`)?.scrollIntoView()}
//           />
//         ))}
//       </motion.div>

//       {/* Main Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Vertical Timeline */}
//         <motion.div 
//           className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 to-purple-500/20"
//           style={{ scaleY: pathLength }}
//         >
//           <motion.div
//             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 shadow-glow cursor-pointer"
//             animate={pulseControls}
//             onClick={() => setHiddenCardVisible(!hiddenCardVisible)}
//           />
//         </motion.div>

//         {/* Cards Container */}
//         <div className="space-y-48 py-48">
//           <GlassCard
//             id="card-0"
//             title="Theoretical Foundation"
//             text="Deep understanding of mathematical principles behind AI/ML algorithms, enabling innovative model adaptations and fundamental research contributions."
//             direction="left"
//             index={0}
//           />

//           <GlassCard
//             id="card-1"
//             title="Ethical Framework"
//             text="Comprehensive approach to responsible AI development including bias mitigation, explainability, and societal impact analysis from initial design through deployment."
//             direction="right"
//             index={1}
//           />

//           <GlassCard
//             id="card-2"
//             title="Interdisciplinary Synthesis"
//             text="Integration of AI with psychology, design thinking, and domain-specific knowledge to create human-centered technical solutions."
//             direction="left"
//             index={2}
//           />
//         </div>

//         {/* Hidden Fourth Card */}
//         <AnimatePresence>
//           {hiddenCardVisible && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               className="w-full md:w-2/3 p-8 rounded-2xl backdrop-blur-xl bg-green-500/10 border border-green-400/30 mx-auto mb-48 relative overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-30"/>
//               <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                 Future Vision
//               </h3>
//               <p className="text-gray-200 text-lg leading-relaxed">
//                 Pioneering ethical AGI development through neurosymbolic architectures and embodied cognition research.
//               </p>
//               <div className="absolute inset-0 border-2 border-green-400/20 rounded-2xl animate-pulse"/>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* AI Assistant */}
//       <div 
//         className="fixed bottom-8 right-8 cursor-pointer group"
//         onMouseEnter={() => setShowAssistant(true)}
//         onMouseLeave={() => setShowAssistant(false)}
//       >
//         <div className="relative">
//           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 shadow-glow animate-pulse-slow"/>
//           <AnimatePresence>
//             {showAssistant && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 className="absolute bottom-16 right-0 w-64 p-4 rounded-xl backdrop-blur-xl bg-black/10 border border-black/20"
//               >
//                 <p className="text-sm text-gray-200 animate-typing">
//                   {[
//                     "This section showcases my core competencies...",
//                     "Hover cards for project previews!",
//                     "Click the timeline orb for a secret..."
//                   ][Math.floor(Math.random() * 3)]}
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Audio Control */}
//       <button 
//         onClick={() => setAudioEnabled(!audioEnabled)}
//         className="fixed bottom-8 left-8 p-3 rounded-full backdrop-blur-xl bg-black/10 hover:bg-black/20 transition-all"
//       >
//         {audioEnabled ? "🔊" : "🔇"}
//       </button>
//     </section>
//   );
// };

// export default MyEdge;











































































































































































































































// // this was best but theme was not good 
// 'use client';


// // 'use-client'
// // components/MyEdge.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
// import { useMediaQuery } from 'react-responsive';
// import NeuralParticles from './NeuralParticles';
// import AIAssistant from './AIAssistant';
// import ScrollJumpNav from './ScrollJumpNav';
// import AIQuoteGenerator from './AIQuoteGenerator';

// export default function MyEdge() {
//   const { scrollY, scrollYProgress } = useScroll();
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const [currentSection, setCurrentSection] = useState(0);
//   const [hiddenCardVisible, setHiddenCardVisible] = useState(false);
//   const [isSoundEnabled, setSoundEnabled] = useState(false);
//   const audioRef = useRef(null);
  
//   // References to each section
//   const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
//   const sections = ["Theoretical Foundation", "Ethical Framework", "Interdisciplinary Thinking"];
  
//   // Timeline progress
//   const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
//   const smoothProgress = useSpring(progress, { damping: 15, stiffness: 100 });
  
//   // Card animation variants
//   const cardVariants = {
//     hidden: (direction) => ({
//       x: direction === 'left' ? -100 : 100,
//       opacity: 0,
//       scale: 0.8,
//       filter: "blur(8px)",
//     }),
//     visible: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       }
//     }
//   };
  
//   // Check which section is currently in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.getAttribute('data-index'));
//             setCurrentSection(index);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );
    
//     sectionRefs.forEach((ref, index) => {
//       if (ref.current) {
//         ref.current.setAttribute('data-index', index);
//         observer.observe(ref.current);
//       }
//     });
    
//     return () => {
//       sectionRefs.forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, []);
  
//   // Sound effect
//   useEffect(() => {
//     if (isSoundEnabled && audioRef.current) {
//       audioRef.current.volume = 0.2;
//       audioRef.current.play();
//     } else if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   }, [isSoundEnabled]);
  
//   // Mouse position for magnification effect
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const handleMouseMove = (e) => {
//     mouseX.set(e.clientX);
//     mouseY.set(e.clientY);
//   };
  
//   return (
//     <section 
//       id="difference" 
//       className="relative min-h-screen py-20 overflow-hidden"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background neural network effect */}
//       <div className="absolute inset-0 bg-black z-0">
//         <NeuralParticles />
//       </div> 
      
//       {/* Ambient sound */}
//       <audio ref={audioRef} loop>
//         <source src="/audio/ambient-neural.mp3" type="audio/mpeg" />
//       </audio>
      
//       {/* Sound toggle */}
//       <motion.button
//         className="fixed left-6 bottom-6 w-10 h-10 rounded-full bg-black/10 backdrop-blur-md flex items-center justify-center z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setSoundEnabled(!isSoundEnabled)}
//       >
//         {isSoundEnabled ? (
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-black">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-black">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
//           </svg>
//         )}
//       </motion.button>
      
//       {/* Quote generator
//       <AIQuoteGenerator /> */}
      
//       {/* AI Assistant */}
//       {/* <AIAssistant /> */}
      
//       {/* Scroll Navigation */}
//       {!isMobile && <ScrollJumpNav sections={sections} currentSection={currentSection} />}
      
//       {/* Scroll progress indicator */}
//       <motion.div 
//         className="fixed left-6 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-black/20 rounded-full overflow-hidden z-50"
//         style={{ 
//           background: "linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.1))",
//         }}
//       >
//         <motion.div 
//           className="w-full bg-black rounded-full"
//           style={{ 
//             height: smoothProgress,
//             top: 0,
//             position: "absolute",
//           }}
//         />
//       </motion.div>
      
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.h2 
//           className="text-3xl font-bold mb-12 text-black section-title"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           My Edge
//         </motion.h2>
        
//         <div className="relative">
//           {/* Timeline line */}
//           <motion.div 
//             className="absolute left-8 md:left-1/2 h-full border-l-2 border-black/40 z-10"
//             style={{ 
//               scaleY: scrollYProgress,
//               transformOrigin: "top" 
//             }}
//           >
//             {/* Animated pulses */}
//             <motion.div
//               className="absolute w-3 h-3 bg-black rounded-full -left-[5px] glow-pulse"
//               style={{ top: "20%" }}
//               animate={{ 
//                 opacity: [0.3, 1, 0.3],
//                 scale: [1, 1.3, 1]
//               }}
//               transition={{ 
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//             />
//             <motion.div
//               className="absolute w-3 h-3 bg-black rounded-full -left-[5px] glow-pulse"
//               style={{ top: "50%" }}
//               animate={{ 
//                 opacity: [0.3, 1, 0.3],
//                 scale: [1, 1.3, 1]
//               }}
//               transition={{ 
//                 duration: 2,
//                 delay: 0.5,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//             />
//             <motion.div
//               className="absolute w-3 h-3 bg-black rounded-full -left-[5px] glow-pulse"
//               style={{ top: "80%" }}
//               animate={{ 
//                 opacity: [0.3, 1, 0.3],
//                 scale: [1, 1.3, 1]
//               }}
//               transition={{ 
//                 duration: 2,
//                 delay: 1,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//             />
//           </motion.div>
          
//           {/* Timeline pulse node at bottom */}
//           <motion.div 
//             className="absolute left-[7.5px] md:left-[calc(50%-2px)] bottom-0 z-20"
//             whileHover={{ scale: 1.5 }}
//             onClick={() => setHiddenCardVisible(true)}
//           >
//             <div className="relative">
//               <motion.div 
//                 className="w-4 h-4 bg-black rounded-full"
//                 animate={{ 
//                   boxShadow: [
//                     "0 0 0 0 rgba(255, 255, 255, 0.7)",
//                     "0 0 0 10px rgba(255, 255, 255, 0)"
//                   ]
//                 }}
//                 transition={{ 
//                   duration: 1.5, 
//                   repeat: Infinity,
//                   repeatType: "loop"
//                 }}
//               />
//               <motion.div 
//                 className="absolute inset-0 bg-black rounded-full"
//                 animate={{ 
//                   opacity: [0.7, 0.1],
//                   scale: [1, 2.5]
//                 }}
//                 transition={{ 
//                   duration: 1.5, 
//                   repeat: Infinity,
//                   repeatType: "loop"
//                 }}
//                 style={{ zIndex: -1 }}
//               />
//             </div>
//           </motion.div>
          
//           {/* Timeline Item 1 */}
//           <div 
//             ref={sectionRefs[0]} 
//             id="section-0" 
//             className="mb-24 flex justify-between items-center w-full timeline-item"
//             onMouseEnter={() => document.dispatchEvent(new CustomEvent('showAITooltip', { detail: { index: 0 } }))}
//           >
//             <div className="order-1 md:w-5/12"></div>
//             <motion.div
//               className="order-1 md:w-5/12 px-6 py-6 rounded-xl glass-card relative group"
//               custom="left"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               whileHover={{ 
//                 scale: 1.03, 
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 rotateY: 5,
//                 rotateX: -5
//               }}
//               style={{
//                 background: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(10px)",
//                 borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderRight: "1px solid rgba(0, 0, 0, 0.2)",
//                 borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               <h3 className="text-xl font-bold mb-3 text-black">Theoretical Foundation</h3>
//               <p className="text-gray-300">
//                 While many focus solely on implementation, I prioritize understanding the mathematical 
//                 underpinnings of algorithms. This allows me to adapt and improve models beyond standard use cases.
//               </p>
              
//               {/* Growth bar */}
//               <div className="mt-4 pt-4 border-t border-black/10">
//                 <div className="flex justify-between text-xs text-black/60 mb-1">
//                   <span>📘 Depth</span>
//                   <span>Expert</span>
//                 </div>
//                 <motion.div 
//                   className="h-1 bg-black/20 rounded-full overflow-hidden"
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div 
//                     className="h-full bg-black" 
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "90%" }}
//                     transition={{ duration: 1, delay: 0.5 }}
//                     viewport={{ once: true }}
//                   />
//                 </motion.div>
//               </div>
              
//               {/* Hidden project preview */}
//               <motion.div 
//                 className="absolute -right-10 top-0 p-2 bg-black/70 rounded-lg transform scale-0 origin-top-left group-hover:scale-100 transition-transform duration-300 z-30"
//                 style={{ 
//                   width: "200px",
//                   pointerEvents: "none",
//                 }}
//               >
//                 <div className="text-xs text-black/80 mb-1">Project Showcase</div>
//                 <div className="w-full h-24 bg-black/10 rounded flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black/40">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5" />
//                   </svg>
//                 </div>
//                 <div className="text-xs text-black/60 mt-1">Neural Network Architecture Research</div>
//               </motion.div>
//             </motion.div>
//           </div>
          
//           {/* Timeline Item 2 */}
//           <div 
//             ref={sectionRefs[1]} 
//             id="section-1" 
//             className="mb-24 flex justify-between items-center w-full timeline-item"
//             onMouseEnter={() => document.dispatchEvent(new CustomEvent('showAITooltip', { detail: { index: 1 } }))}
//           >
//             <motion.div
//               className="order-1 md:w-5/12 px-6 py-6 rounded-xl glass-card group relative"
//               custom="right"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               whileHover={{ 
//                 scale: 1.03, 
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 rotateY: -5,
//                 rotateX: -5
//               }}
//               style={{
//                 background: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(10px)",
//                 borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderRight: "1px solid rgba(0, 0, 0, 0.2)",
//                 borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               <h3 className="text-xl font-bold mb-3 text-black">Ethical Framework</h3>
//               <p className="text-gray-300">
//                 I approach AI development with a strong ethical framework, considering bias mitigation, 
//                 explainability, and societal impact from the initial design phase.
//               </p>
              
//               {/* Growth bar */}
//               <div className="mt-4 pt-4 border-t border-black/10">
//                 <div className="flex justify-between text-xs text-black/60 mb-1">
//                   <span>💡 Application</span>
//                   <span>Specialist</span>
//                 </div>
//                 <motion.div 
//                   className="h-1 bg-black/20 rounded-full overflow-hidden"
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div 
//                     className="h-full bg-black" 
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "85%" }}
//                     transition={{ duration: 1, delay: 0.5 }}
//                     viewport={{ once: true }}
//                   />
//                 </motion.div>
//               </div>
              
//               {/* Hidden project preview */}
//               <motion.div 
//                 className="absolute -left-10 top-0 p-2 bg-black/70 rounded-lg transform scale-0 origin-top-right group-hover:scale-100 transition-transform duration-300 z-30"
//                 style={{ 
//                   width: "200px",
//                   pointerEvents: "none",
//                 }}
//               >
//                 <div className="text-xs text-black/80 mb-1">Project Showcase</div>
//                 <div className="w-full h-24 bg-black/10 rounded flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black/40">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <div className="text-xs text-black/60 mt-1">AI Ethics Framework & Guidelines</div>
//               </motion.div>
//             </motion.div>
//             <div className="order-1 md:w-5/12"></div>
//           </div>
          
//           {/* Timeline Item 3 */}
//           <div 
//             ref={sectionRefs[2]} 
//             id="section-2" 
//             className="mb-24 flex justify-between items-center w-full timeline-item"
//             onMouseEnter={() => document.dispatchEvent(new CustomEvent('showAITooltip', { detail: { index: 2 } }))}
//           >
//             <div className="order-1 md:w-5/12"></div>
//             <motion.div
//               className="order-1 md:w-5/12 px-6 py-6 rounded-xl glass-card group relative"
//               custom="left"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               whileHover={{ 
//                 scale: 1.03, 
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 rotateY: 5,
//                 rotateX: -5
//               }}
//               style={{
//                 background: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(10px)",
//                 borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//                 borderRight: "1px solid rgba(0, 0, 0, 0.2)",
//                 borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               <h3 className="text-xl font-bold mb-3 text-black">Interdisciplinary Thinking</h3>
//               <p className="text-gray-300">
//                 My projects often combine AI with psychology, design, and domain-specific knowledge to 
//                 create solutions that are technically sound and human-centered.
//               </p>
              
//               {/* Growth bar */}
//               <div className="mt-4 pt-4 border-t border-black/10">
//                 <div className="flex justify-between text-xs text-black/60 mb-1">
//                   <span>⚡️ Innovation</span>
//                   <span>Visionary</span>
//                 </div>
//                 <motion.div 
//                   className="h-1 bg-black/20 rounded-full overflow-hidden"
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div 
//                     className="h-full bg-black" 
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "95%" }}
//                     transition={{ duration: 1, delay: 0.5 }}
//                     viewport={{ once: true }}
//                   />
//                 </motion.div>
//               </div>
              
//               {/* Hidden project preview */}
//               <motion.div 
//                 className="absolute -right-10 top-0 p-2 bg-black/70 rounded-lg transform scale-0 origin-top-left group-hover:scale-100 transition-transform duration-300 z-30"
//                 style={{ 
//                   width: "200px",
//                   pointerEvents: "none",
//                 }}
//               >
//                 <div className="text-xs text-black/80 mb-1">Project Showcase</div>
//                 <div className="w-full h-24 bg-black/10 rounded flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black/40">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <div className="text-xs text-black/60 mt-1">Cross-Discipline Innovation Lab</div>
//               </motion.div>
//             </motion.div>
//           </div>
          
//           {/* Hidden fourth card */}
//           {hiddenCardVisible && (
//             <motion.div 
//               ref={sectionRefs[3]}
//               id="section-3"
//               className="mb-24 flex justify-center items-center w-full timeline-item"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ 
//                 duration: 0.8,
//                 type: "spring",
//                 stiffness: 100
//               }}
//             >
//               <motion.div
//                 className="w-full md:w-2/3 px-6 py-6 rounded-xl relative overflow-hidden"
//                 whileHover={{ scale: 1.02 }}
//                 style={{
//                   background: "rgba(255, 255, 255, 0.15)",
//                   backdropFilter: "blur(10px)",
//                   border: "1px solid rgba(255, 255, 255, 0.3)",
//                 }}
//               >
//                 <motion.div 
//                   className="absolute inset-0 z-0" 
//                   animate={{
//                     background: [
//                       "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)",
//                       "radial-gradient(circle at 90% 90%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)",
//                       "radial-gradient(circle at 50% 10%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)",
//                       "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)",
//                     ]
//                   }}
//                   transition={{ duration: 8, repeat: Infinity }}
//                 />
//                 <div className="relative z-10">
//                   <div className="flex items-center mb-4">
//                     <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-black">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                       </svg>
//                     </div>
//                     <h3 className="text-xl font-bold ml-3 text-black">Future Directions</h3>
//                   </div>
//                   <p className="text-gray-300">
//                     My journey is just beginning. I'm currently developing a new framework that combines neural architecture 
//                     search with interpretability methods to create AI systems that are both highly performant and transparent.
//                     This work will bridge theoretical computer science with practical AI engineering in ways that haven't been
//                     explored before.
//                   </p>
                  
//                   <div className="mt-6 grid grid-cols-2 gap-4">
//                     <div className="bg-black/30 p-3 rounded">
//                       <div className="text-sm text-black/80 font-medium mb-1">Next Research Focus</div>
//                       <div className="text-black text-sm">Generative Models + Causal Reasoning</div>
//                     </div>
//                     <div className="bg-black/30 p-3 rounded">
//                       <div className="text-sm text-black/80 font-medium mb-1">Collaboration Interest</div>
//                       <div className="text-black text-sm">Open to research partnerships</div>
//                     </div>
//                   </div>
                  
//                   <motion.button
//                     className="mt-6 px-4 py-2 bg-black text-black rounded-md text-sm font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Connect & Collaborate
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </div>
        
//         {/* Learning Philosophy */}
//         <motion.div 
//           className="mt-24 bg-black/10 backdrop-blur-md p-8 rounded-lg shadow-lg relative overflow-hidden"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Background particles */}
//           <motion.div 
//             className="absolute inset-0 z-0"
//             style={{
//               background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)",
//             }}
//           />
//           <div className="relative z-10">
//             <h3 className="text-2xl font-bold mb-8 text-black">My Learning Philosophy</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="relative"
//               >
//                 <div className="text-5xl font-bold mb-2 text-black/90">01</div>
//                 <h4 className="text-lg font-semibold mb-2 text-black">Learn Deeply</h4>
//                 <p className="text-gray-300">
//                   Master fundamentals before chasing trends. Strong foundations enable faster adaptation.
//                 </p>
//                 <motion.div
//                   className="absolute -left-2 -top-2 -right-2 -bottom-2 rounded-lg border border-black/20 z-0"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="relative"
//               >
//                 <div className="text-5xl font-bold mb-2 text-black/90">02</div>
//                 <h4 className="text-lg font-semibold mb-2 text-black">Build Publicly</h4>
//                 <p className="text-gray-300">
//                   Share progress and failures openly. Documentation accelerates learning.
//                 </p>
//                 <motion.div
//                   className="absolute -left-2 -top-2 -right-2 -bottom-2 rounded-lg border border-black/20 z-0"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="relative"
//               >
//                 <div className="text-5xl font-bold mb-2 text-black/90">03</div>
//                 <h4 className="text-lg font-semibold mb-2 text-black">Teach Others</h4>
//                 <p className="text-gray-300">
//                   Explaining concepts reveals gaps in understanding. Teaching is the ultimate test.
//                 </p>
//                 <motion.div
//                   className="absolute -left-2 -top-2 -right-2 -bottom-2 rounded-lg border border-black/20 z-0"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
      
//       {/* Magnifying glass effect */}
//       {!isMobile && (
//         <motion.div
//           className="fixed pointer-events-none z-50"
//           style={{
//             width: "150px",
//             height: "150px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.03)",
//             backdropFilter: "blur(4px) brightness(1.1)",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//             transform: "translate(-50%, -50%)",
//             left: mouseX,
//             top: mouseY,
//             opacity: 0.7,
//           }}
//         />
//       )}
      
//       {/* CSS styles */}
//       <style jsx>{`
//         .glass-card {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           transform-style: preserve-3d;
//         }
        
//         .glow-pulse {
//           box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
//         }
        
//         @media (max-width: 768px) {
//           .timeline-item {
//             flex-direction: column;
//             align-items: flex-start;
//           }
          
//           .order-1 {
//             width: 100% !important;
//             margin-left: 20px;
//           }
//         }
        
//         @keyframes glowing {
//           0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
//           50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
//           100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
//         }
//       `}</style>
//     </section>
//   );
// }
