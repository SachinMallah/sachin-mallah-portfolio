// // components/AIAssistant.jsx for that color one my edge section designed by per 
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const AIAssistant = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [position, setPosition] = useState({ x: 0, y: 0 });
  
//   const messages = [
//     "This reflects my theoretical foundation in AI algorithms and mathematics.",
//     "I approach all my work with a strong ethical framework.",
//     "My interdisciplinary thinking helps me create more human-centered solutions.",
//     "I believe in learning deeply, building publicly, and teaching others."
//   ];
  
//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
//   };
  
//   useEffect(() => {
//     // Listen for custom events from cards
//     const handleShowTooltip = (e) => {
//       setMessage(messages[e.detail.index]);
//       setIsOpen(true);
//     };
    
//     document.addEventListener('showAITooltip', handleShowTooltip);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       document.removeEventListener('showAITooltip', handleShowTooltip);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
  
//   return (
//     <>
//       <motion.div 
//         className="fixed right-8 bottom-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//         </svg>
//       </motion.div>
      
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             className="fixed p-4 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 text-white max-w-xs z-50"
//             style={{ left: position.x, top: position.y }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//           >
//             <p className="text-sm">{message || "Hover over cards to learn more about my edge!"}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AIAssistant;
