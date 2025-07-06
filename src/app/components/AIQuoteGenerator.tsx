// // components/AIQuoteGenerator.jsx for that color one my edge section designed by per
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const AIQuoteGenerator = () => {
//   const [quote, setQuote] = useState("Intelligence is not just acquired — it's designed.");
//   const [key, setKey] = useState(0);
  
//   const quotes = [
//     "Intelligence is not just acquired — it's designed.",
//     "Theory powers practice. Practice validates theory.",
//     "At the intersection of disciplines, innovation thrives.",
//     "Learn deeply. Build publicly. Teach others.",
//     "The best AI is invisible yet impactful.",
//     "Code is logic, but great systems require intuition.",
//     "Growth comes from embracing complexity, not avoiding it.",
//     "Data without insight is just noise.",
//   ];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * quotes.length);
//       setQuote(quotes[randomIndex]);
//       setKey(prev => prev + 1);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <motion.div 
//       className="absolute bottom-10 left-10 max-w-md p-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg z-20"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1, duration: 0.8 }}
//     >
//       <div className="mb-2 text-xs text-white/60">AI INSIGHT</div>
//       <motion.div 
//         key={key}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1 }}
//         className="text-white text-lg italic"
//       >
//         "{quote}"
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AIQuoteGenerator;
