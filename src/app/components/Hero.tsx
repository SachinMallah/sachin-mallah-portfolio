// 'use client'; 
// import { useEffect, useRef } from 'react';

// export default function Hero() {
//   const neuralNetworkRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createNeuralNetwork = () => {
//       if (!neuralNetworkRef.current) return;

//       const container = neuralNetworkRef.current;
//       container.innerHTML = '';
//       const width = container.offsetWidth;
//       const height = container.offsetHeight;
//       const intervals: NodeJS.Timeout[] = [];

//       // Neural network creation logic
//       const layers = 5;
//       const neuronsPerLayer = [3, 4, 5, 4, 3];

//       for (let l = 0; l < layers; l++) {
//         const xPos = (width / (layers - 1)) * l;
        
//         for (let n = 0; n < neuronsPerLayer[l]; n++) {
//           const yPos = (height / (neuronsPerLayer[l] + 1)) * (n + 1);
          
//           // Create neuron with specific type
//           const neuron = document.createElement('div');
//           neuron.className = 'neuron';
//           neuron.style.position = 'absolute';
//           neuron.style.left = `${xPos}px`;
//           neuron.style.top = `${yPos}px`;
//           container.appendChild(neuron);

//           if (l < layers - 1) {
//             for (let nextN = 0; nextN < neuronsPerLayer[l + 1]; nextN++) {
//               const nextYPos = (height / (neuronsPerLayer[l + 1] + 1)) * (nextN + 1);
//               const nextXPos = (width / (layers - 1)) * (l + 1);
              
//               // Create connection with specific type
//               const connection = document.createElement('div');
//               connection.className = 'connection';
//               connection.style.position = 'absolute';
              
//               const length = Math.sqrt(Math.pow(nextXPos - xPos, 2) + Math.pow(nextYPos - yPos, 2));
//               const angle = Math.atan2(nextYPos - yPos, nextXPos - xPos);
              
//               connection.style.width = `${length}px`;
//               connection.style.height = '1px';
//               connection.style.left = `${xPos}px`;
//               connection.style.top = `${yPos}px`;
//               connection.style.transform = `rotate(${angle}rad)`;
              
//               container.appendChild(connection);
//             }
//           }
//         }
//       }

//       // Animation with type-safe selectors
//       const neurons = container.querySelectorAll<HTMLDivElement>('.neuron');
//       neurons.forEach(neuron => {
//         const interval = setInterval(() => {
//           neuron.style.transform = `scale(${1 + Math.random() * 0.5})`;
//           neuron.style.opacity = `${0.5 + Math.random() * 0.5}`;
//         }, 1000 + Math.random() * 2000);
//         intervals.push(interval);
//       });

//       const connections = container.querySelectorAll<HTMLDivElement>('.connection');
//       connections.forEach(conn => {
//         const interval = setInterval(() => {
//           conn.style.backgroundColor = `rgba(0, 0, 0, ${0.1 + Math.random() * 0.3})`;
//           conn.style.height = `${Math.random() * 2}px`;
//         }, 1000 + Math.random() * 2000);
//         intervals.push(interval);
//       });

//       return () => {
//         intervals.forEach(clearInterval);
//         container.innerHTML = '';
//       };
//     };

//     const cleanup = createNeuralNetwork();
//     return () => {
//       cleanup?.();
//       if (neuralNetworkRef.current) {
//         neuralNetworkRef.current.innerHTML = '';
//       }
//     };
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
//       <div ref={neuralNetworkRef} className="absolute inset-0 opacity-10" />
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//         <h1 className="hero-text font-bold mb-6">
//           <span className="typing-animation">BUILDING THE FUTURE</span><br />
//           <span className="block mt-4">WITH INTELLIGENT SYSTEMS</span>
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto mb-8">
//           I'm a passionate AI/ML student creating solutions that blend creativity with deep tech.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <a href="#projects" className="px-6 py-3 border-2 border-black font-medium hover:bg-black hover:text-white transition">
//             View My Work
//           </a>
//           <a href="#contact" className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition">
//             Get In Touch
//           </a>
//         </div>
//       </div>
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="animate-bounce">
//           <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//             <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }











// 'use client';
// import { useEffect, useRef } from 'react';

// export default function Hero() {
//   const neuralNetworkRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const createNeuralNetwork = () => {
//       if (!neuralNetworkRef.current) return;

//       const container = neuralNetworkRef.current;
//       container.innerHTML = '';
//       const width = container.offsetWidth;
//       const height = container.offsetHeight;
//       const intervals: NodeJS.Timeout[] = [];

//       // Neural network configuration
//       const layers = 5;
//       const neuronsPerLayer = [3, 4, 5, 4, 3];

//       // Create neural network elements
//       for (let l = 0; l < layers; l++) {
//         const xPos = (width / (layers - 1)) * l;
        
//         for (let n = 0; n < neuronsPerLayer[l]; n++) {
//           const yPos = (height / (neuronsPerLayer[l] + 1)) * (n + 1);
          
//           // Create neuron
//           const neuron = document.createElement('div');
//           neuron.className = 'neuron';
//           neuron.style.cssText = `
//             position: absolute;
//             left: ${xPos}px;
//             top: ${yPos}px;
//             width: 8px;
//             height: 8px;
//             background: rgba(0, 0, 0, 0.3);
//             border-radius: 50%;
//           `;
//           container.appendChild(neuron);

//           // Create connections
//           if (l < layers - 1) {
//             for (let nextN = 0; nextN < neuronsPerLayer[l + 1]; nextN++) {
//               const nextYPos = (height / (neuronsPerLayer[l + 1] + 1)) * (nextN + 1);
//               const nextXPos = (width / (layers - 1)) * (l + 1);
              
//               const connection = document.createElement('div');
//               connection.className = 'connection';
//               connection.style.cssText = `
//                 position: absolute;
//                 background: rgba(0, 0, 0, 0.1);
//                 transform-origin: left center;
//                 transform: rotate(${Math.atan2(nextYPos - yPos, nextXPos - xPos)}rad);
//                 width: ${Math.hypot(nextXPos - xPos, nextYPos - yPos)}px;
//                 height: 1px;
//                 left: ${xPos}px;
//                 top: ${yPos}px;
//               `;
//               container.appendChild(connection);
//             }
//           }
//         }
//       }

//       // Animation logic
//       const animateElements = () => {
//         const neurons = container.querySelectorAll<HTMLDivElement>('.neuron');
//         neurons.forEach(neuron => {
//           const interval = setInterval(() => {
//             neuron.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
//             neuron.style.opacity = `${0.3 + Math.random() * 0.4}`;
//           }, 1000 + Math.random() * 1500);
//           intervals.push(interval);
//         });

//         const connections = container.querySelectorAll<HTMLDivElement>('.connection');
//         connections.forEach(conn => {
//           const interval = setInterval(() => {
//             conn.style.opacity = `${0.1 + Math.random() * 0.3}`;
//             conn.style.height = `${Math.random() * 1.5}px`;
//           }, 1000 + Math.random() * 1500);
//           intervals.push(interval);
//         });
//       };

//       animateElements();

//       return () => intervals.forEach(clearInterval);
//     };

//     const cleanup = createNeuralNetwork();
//     return () => {
//       cleanup?.();
//       if (neuralNetworkRef.current) neuralNetworkRef.current.innerHTML = '';
//     };
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div ref={neuralNetworkRef} className="absolute inset-0 opacity-20" />
      
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Hi, I'm An Equity<span className="text-red-500">!</span>!
//         </h1>
        
//         {/* Subheading */}
//         <h2 className="text-2xl md:text-4xl font-mono mb-8 text-gray-600">
//           Sachin Mallah
//         </h2>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed">
//           Always learning, being creative and playing around with AI models to build something cool!
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-lg font-medium hover:border-black transition-colors duration-300"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }




























// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// export default function Hero() {
//   const [displayWord, setDisplayWord] = useState('Equity');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const words = ["Equity", "Business", "Creator", "Developer", "Designer"];
//   const indexRef = useRef(0);

//   useEffect(() => {
//     const rotateWords = () => {
//       setIsAnimating(true);
      
//       // After fade out
//       setTimeout(() => {
//         indexRef.current = (indexRef.current + 1) % words.length;
//         setDisplayWord(words[indexRef.current]);
        
//         // After fade in
//         setTimeout(() => {
//           setIsAnimating(false);
//         }, 500);
//       }, 500);
//     };

//     const interval = setInterval(() => {
//       rotateWords();
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto w-full">
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//           {/* Profile Photo */}
//           <div className="flex-shrink-0">
//             <div className="w-28 h-28 md:w-36 md:h-36 relative rounded-full overflow-hidden">
//               <Image
//                 src='./images/sachin.png'
//                 alt="Vinit Juneja"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
          
//           {/* Content */}
//           <div className="flex-1 text-center md:text-left">
//             {/* Animated Text */}
//             <div className="mb-1">
//               <h3 className="text-gray-600 text-lg font-light">
//                 Hi, I'm An <span className={`text-orange-500 inline-block min-w-[80px] transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>{displayWord}</span> ||
//               </h3>
//             </div>
            
//             {/* Name */}
//             <h1 className="text-4xl md:text-6xl font-bold text-black mb-3">
//               Vinit Juneja
//             </h1>
            
//             {/* Description */}
//             <p className="text-gray-600 mb-6 max-w-xl">
//               Always learning, being creative and playing around with AI models to build something cool!
//             </p>
            
//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-6">
//               <a
//                 href="/cv.pdf"
//                 download
//                 className="px-8 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300"
//               >
//                 Download CV
//               </a>
//               <a
//                 href="#contact"
//                 className="px-8 py-3 border border-gray-300 rounded-md font-medium hover:border-black transition-colors duration-300"
//               >
//                 Contact
//               </a>
//             </div>
            
//             {/* Social Icons */}
//             <div className="flex gap-5 justify-center md:justify-start">
//               <a href="https://instagram.com" aria-label="Instagram" className="text-black hover:text-gray-600 transition-colors">
//                 <FaInstagram size={20} />
//               </a>
//               <a href="https://linkedin.com" aria-label="LinkedIn" className="text-black hover:text-gray-600 transition-colors">
//                 <FaLinkedin size={20} />
//               </a>
//               <a href="https://github.com" aria-label="GitHub" className="text-black hover:text-gray-600 transition-colors">
//                 <FaGithub size={20} />
//               </a>
//               <a href="mailto:email@example.com" aria-label="Email" className="text-black hover:text-gray-600 transition-colors">
//                 <FaEnvelope size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


































// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [currentTitle, setCurrentTitle] = useState(0);
//   const titles = ['EQUITY', 'BUILDER', 'CREATOR', 'INNOVATOR', 'DEVELOPER'];

//   useEffect(() => {
//     const titleInterval = setInterval(() => {
//       setCurrentTitle((prev) => (prev + 1) % titles.length);
//     }, 2000);

//     return () => clearInterval(titleInterval);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
//       {/* Profile Photo */}
//       <div className="absolute left-8 bottom z-30">
//         <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden">
//           <img
//             src='./images/sachin.png' // Replace with your photo path
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Dynamic Heading */}
//         <div className="mb-2">
//           <span className="text-xl font-light text-gray-500">
//             Hi, I'm
//           </span>
//           <div className="text-3xl md:text-4xl font-bold mt-1 h-12">
//             <span className="text-red-500 transition-all duration-500">
//               {titles[currentTitle]}
//             </span>
//           </div>
//         </div>

//         {/* Name */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           <span className="text-black">VINIT</span> JUNEJA
//         </h1>

//         {/* Description */}
//         <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
//           Always learning, being creative and playing around with AI models<br />
//           to build something cool!
//         </p>

//         {/* Main Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-5">
//           <a href="https://instagram.com" target="_blank" rel="noopener" className="text-gray-600 hover:text-black">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-gray-600 hover:text-black">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener" className="text-gray-600 hover:text-black">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
















































// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [currentTitle, setCurrentTitle] = useState(0);
//   const titles = ['AN EQUITY', 'CREATOR', 'BUILDER', 'INNOVATOR'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitle((prev) => (prev + 1) % titles.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       {/* Profile Image */}
//       <div className="absolute left-8 bottom-8 z-20">
//         <div className="w-20 h-20 rounded-full border-2 border-black overflow-hidden">
//           <img
//             src='./images/sachin.png' // Replace with your image
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="text-center max-w-2xl mx-4">
//         {/* Dynamic Heading - Single Line */}
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <div className="text-2xl font-medium text-red-500">
//             {titles[currentTitle]}!!
//           </div>
//         </div>

//         {/* Name */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           <span className="text-black">SACHIN</span> MALLAH
//         </h1>

//         {/* Description */}
//         <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
//           Always learning, being creative and playing around with AI models<br />
//           to build something cool!
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-4">
//           <a href="https://instagram.com" target="_blank" className="text-gray-500 hover:text-black">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{/* Instagram icon */}</svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-black">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{/* LinkedIn icon */}</svg>
//           </a>
//           <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-black">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{/* GitHub icon */}</svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }






































// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [currentTitle, setCurrentTitle] = useState(0);
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitle((prev) => (prev + 1) % titles.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       {/* Profile Photo - Bottom Left */}
//       <div className="absolute left-8 bottom-8 z-20">
//         <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden">
//           <img
//             // src="/profile.jpg"
//             // alt="Profile"
//             // className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="text-center max-w-2xl mx-4">
//         {/* Dynamic Title Line */}
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {titles[currentTitle]}!!
//           </h2>
//         </div>

//         {/* Name */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         {/* Description with line breaks */}
//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models</p>
//           <p>to build something cool!</p>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com/" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }































































// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       setTimeout(() => setIsDeleting(true), pause);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText((prev) => {
//           if (isDeleting) {
//             return prev.slice(0, -1);
//           }
//           return currentTitle.slice(0, prev.length + 1);
//         });
//       }, typeSpeed);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <div className="text-center max-w-2xl mx-4">
//         {/* Dynamic Title Line */}
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         {/* Name */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         {/* Description with line breaks */}
//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models</p>
//           <p>to build something cool!</p>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6">
          
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { border-color: transparent; }
//           50% { border-color: currentColor; }
//         }
//         .cursor {
//           border-right: 2px solid;
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }







































// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       setTimeout(() => setIsDeleting(true), pause);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText((prev) => {
//           if (isDeleting) {
//             return prev.slice(0, -1);
//           }
//           return currentTitle.slice(0, prev.length + 1);
//         });
//       }, typeSpeed);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <div className="text-center max-w-2xl mx-4">
//         {/* Dynamic Title Line */}
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         {/* Name */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         {/* Description with line breaks */}
//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models</p>
//           <p>to build something cool!</p>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }
















































































































// 'use client';
// import { useEffect, useState, useRef } from 'react';

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef(null);

//   // Neural Network Configuration
//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 2,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   // Neural Network Refs
//   const nodes = useRef([]);
//   const connections = useRef([]);
//   const particles = useRef([]);
//   const hoveredNode = useRef(null);
//   const animationFrameId = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     // Neural Network Functions
//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       for (let l = 0; l < config.layers.length; l++) {
//         const layer = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       }

//       for (let l = 0; l < nodes.current.length - 1; l++) {
//         for (let a = 0; a < nodes.current[l].length; a++) {
//           for (let b = 0; b < nodes.current[l+1].length; b++) {
//             connections.current.push({
//               from: nodes.current[l][a],
//               to: nodes.current[l+1][b],
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           }
//         }
//       }
//     };

//     const animate = (ts) => {
//       ctx.clearRect(0, 0, width, height);

//       // Node drifting
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
//           if (node.pulseActive) {
//             let t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       // Draw connections
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, 2 * Math.PI);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse -= 0.025;
//           if (conn.pulse < 0) conn.pulse = 0;
//         }
//       });

//       // Draw particles
//       particles.current = particles.current.filter(p => {
//         p.life -= 0.02;
//         if (p.life <= 0) return false;
//         p.x += p.vx * 0.016;
//         p.y += p.vy * 0.016;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
//         ctx.fillStyle = config.particleColor;
//         ctx.globalAlpha = p.life;
//         ctx.fill();
//         return true;
//       });

//       // Draw nodes
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(node.x, node.y, config.nodeRadius + (node.pulse * config.nodeGlow), 0, 2 * Math.PI);
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(node.x, node.y, config.nodeRadius + node.pulse * 35, 0, 2 * Math.PI);
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     // Event Handlers
//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       const mx = e.clientX - rect.left;
//       const my = e.clientY - rect.top;
//       let found = null;

//       nodes.current.some(layer => 
//         layer.some(node => {
//           const dx = mx - node.x, dy = my - node.y;
//           if (dx * dx + dy * dy < config.hoverRadius * config.hoverRadius) {
//             found = node;
//             return true;
//           }
//           return false;
//         })
//       );

//       if (found !== hoveredNode.current) {
//         if (hoveredNode.current) hoveredNode.current.highlight = false;
//         hoveredNode.current = found;
//         if (hoveredNode.current) {
//           hoveredNode.current.highlight = true;
//           triggerNodePulse(hoveredNode.current);
//           activateConnections(hoveredNode.current);
//           spawnParticles(hoveredNode.current);
//         }
//       }
//     };

//     const triggerNodePulse = (node) => {
//       node.pulseActive = true;
//       node.pulseStart = performance.now();
//       node.pulse = 1;
//     };

//     const activateConnections = (node) => {
//       connections.current.forEach(conn => {
//         if (conn.from === node || conn.to === node) {
//           conn.active = true;
//           conn.pulse = 1;
//           setTimeout(() => conn.active = false, 350);
//         }
//       });
//     };

//     const spawnParticles = (node, burst = false) => {
//       const count = burst ? config.particleCount * 2 : config.particleCount;
//       for (let i = 0; i < count; i++) {
//         const angle = Math.random() * Math.PI * 2;
//         const speed = config.particleSpeed * (0.5 + Math.random());
//         particles.current.push({
//           x: node.x,
//           y: node.y,
//           vx: Math.cos(angle) * speed,
//           vy: Math.sin(angle) * speed,
//           size: config.particleSize + Math.random() * 1.5,
//           life: 0.7 + Math.random() * 0.4
//         });
//       }
//     };

//     // Initial Setup
//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//       buildNetwork();
//     };

//     resize();
//     animationFrameId.current = requestAnimationFrame(animate);
//     window.addEventListener('resize', resize);
//     canvas.addEventListener('mousemove', handleMouseMove);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', resize);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models</p>
//           <p>to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }





















































































// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Neural Network Configuration
//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();
//   const pixelRatioRef = useRef<number>(1);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Get the device pixel ratio
//     pixelRatioRef.current = window.devicePixelRatio || 1;
    
//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     // Neural Network Functions
//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
        
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach((node, a) => {
//           nodes.current[l + 1].forEach((nextNode, b) => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = (ts: number) => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, width * pixelRatioRef.current, height * pixelRatioRef.current);

//       // Node drifting
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
          
//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       // Draw connections
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x * pixelRatioRef.current, conn.from.y * pixelRatioRef.current);
//         ctx.lineTo(conn.to.x * pixelRatioRef.current, conn.to.y * pixelRatioRef.current);
//         ctx.lineWidth = (conn.active ? config.lineActiveWidth : config.lineWidth) * pixelRatioRef.current;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 * pixelRatioRef.current : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = (conn.from.x + (conn.to.x - conn.from.x) * t) * pixelRatioRef.current;
//           const py = (conn.from.y + (conn.to.y - conn.from.y) * t) * pixelRatioRef.current;
//           ctx.beginPath();
//           ctx.arc(px, py, (7 * t + 2) * pixelRatioRef.current, 0, 2 * Math.PI);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       // Draw nodes
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x * pixelRatioRef.current,
//             node.y * pixelRatioRef.current,
//             (config.nodeRadius + (node.pulse * config.nodeGlow)) * pixelRatioRef.current,
//             0,
//             2 * Math.PI
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 * pixelRatioRef.current : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x * pixelRatioRef.current,
//               node.y * pixelRatioRef.current,
//               (config.nodeRadius + node.pulse * 35) * pixelRatioRef.current,
//               0,
//               2 * Math.PI
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = (2 + node.pulse * 4) * pixelRatioRef.current;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     // Initial Setup
//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
      
//       // Get the device pixel ratio each time we resize
//       pixelRatioRef.current = window.devicePixelRatio || 1;
      
//       // Set the canvas size in actual pixels (scaled for high-DPI displays)
//       canvas.width = width * pixelRatioRef.current;
//       canvas.height = height * pixelRatioRef.current;
      
//       // Set the display size (CSS) to match the desired size
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;
      
//       buildNetwork();
//     };

//     resize();
//     window.addEventListener('resize', resize);
//     animationFrameId.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//       window.removeEventListener('resize', resize);
//     };
//   }, []);

  
//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//           {/* <p>you can add here one line too</p> */}
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }






























// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();
//   const pixelRatio = useRef(1);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const setupCanvas = () => {
//       pixelRatio.current = window.devicePixelRatio || 1;
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       canvas.width = width * pixelRatio.current;
//       canvas.height = height * pixelRatio.current;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
//       ctx.imageSmoothingEnabled = false;
//     };

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
        
//         Array.from({ length: config.layers[l] }).forEach((_, n) => {
//           const y = top + ((n + 1) * netHeight) / (config.layers[l] + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         });
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach(node => {
//           nodes.current[l + 1].forEach(nextNode => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;

//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = Math.max(0, 1 - t);
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, Math.PI * 2);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + node.pulse * config.nodeGlow,
//             0,
//             Math.PI * 2
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x,
//               node.y,
//               config.nodeRadius + node.pulse * 35,
//               0,
//               Math.PI * 2
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     setupCanvas();
//     buildNetwork();
//     animationFrameId.current = requestAnimationFrame(animate);

//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   // Typing effect remains unchanged
//   // ... (keep the existing typing effect code)

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       {/* Keep existing UI elements unchanged */}
//       {/* ... (rest of the JSX remains the same) */}
//     </section>
//   );
// }

















// main best code for hero section took 50 hrs to made this 
// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Neural Network Configuration
//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     // Neural Network Functions
//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
        
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach((node, a) => {
//           nodes.current[l + 1].forEach((nextNode, b) => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = (ts: number) => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, width, height);

//       // Node drifting
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
          
//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       // Draw connections
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, 2 * Math.PI);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       // Draw nodes
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + (node.pulse * config.nodeGlow),
//             0,
//             2 * Math.PI
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x,
//               node.y,
//               config.nodeRadius + node.pulse * 35,
//               0,
//               2 * Math.PI
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     // Initial Setup
//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//       buildNetwork();
//     };

//     resize();
//     animationFrameId.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []);

  
//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//           {/* <p>you can add here one line too</p> */}
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }









































































// // perplexity code this is best but design is not centred
// 'use client';
// import { useEffect, useState, useRef, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Types for network elements
// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
//   nearMouse: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
//   opacity: number;
// };

// type ParticleType = {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   size: number;
//   color: string;
//   life: number;
//   maxLife: number;
// };

// export default function Hero() {
//   // Professional titles with expanded variety
//   const titles = [
//     'Machine Learning Engineer', 
//     'Full Stack Web Developer', 
//     'AI/ML Enthusiast', 
//     'Neural Network Architect',
//     'Deep Learning Practitioner',
//     'AI-Powered Web Developer',
//     'Artificial Intelligence Engineer',
//     'Creative Technologist'
//   ];
  
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [showCursor, setShowCursor] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [loaded, setLoaded] = useState(false);
  
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouseRef = useRef<{x: number, y: number, active: boolean}>({x: 0, y: 0, active: false});
//   const lastClickRef = useRef<{x: number, y: number, time: number}>({x: 0, y: 0, time: 0});

//   // Enhanced Neural Network Configuration
//   const config = {
//     layers: [10, 12, 12, 10],
//     nodeRadius: darkMode ? 3.5 : 4,
//     nodeGlow: darkMode ? 60 : 44,
//     lineWidth: darkMode ? 1 : 1.2,
//     lineActiveWidth: darkMode ? 1.3 : 1.5,
//     hoverRadius: 60,
//     driftRadius: 120,
//     driftSpeed: 0.0008,
//     pulseDuration: 1500,
//     pulseColor: darkMode ? 'rgba(120,187,255,0.2)' : 'rgba(0,0,0,0.14)',
//     idleColor: darkMode ? 'rgba(180,200,255,0.7)' : 'rgba(0,0,0,0.8)',
//     activeColor: darkMode ? 'rgba(100,200,255,1)' : 'rgba(0,0,0,1)',
//     highlightColor: darkMode ? 'rgba(130,220,255,0.95)' : 'rgba(0,0,0,0.95)',
//     particleColor: darkMode ? 'rgba(150,200,255,0.2)' : 'rgba(0,0,0,0.15)',
//     backgroundColor: darkMode ? '#111827' : '#ffffff',
//     textColor: darkMode ? '#ffffff' : '#000000',
//     accentColor: darkMode ? '#60a5fa' : '#ef4444',
//     particleCount: 30,
//     particleSpeed: 6,
//     particleSize: 2.5,
//     mouseInfluenceRadius: 150,
//     mouseInfluenceStrength: 0.7,
//     connectionActivationThreshold: 0.3,
//     maxConnections: 120
//   };

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<ParticleType[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();
//   const lastFrameTime = useRef<number>(0);

//   // Initialize network structure
//   const initializeNetwork = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const width = window.innerWidth;
//     const height = window.innerHeight;
    
//     nodes.current = [];
//     connections.current = [];
//     particles.current = [];
    
//     const netWidth = width * 0.65;
//     const netHeight = height * 0.7;
//     const left = (width - netWidth) / 2;
//     const top = (height - netHeight) / 2;

//     // Create nodes in layers
//     config.layers.forEach((nodeCount, layerIndex) => {
//       const layer: NodeType[] = [];
//       const layerX = left + (netWidth * layerIndex) / (config.layers.length - 1);
      
//       for (let i = 0; i < nodeCount; i++) {
//         const y = top + ((i + 1) * netHeight) / (nodeCount + 1);
//         layer.push({
//           baseX: layerX,
//           baseY: y,
//           x: layerX,
//           y: y,
//           driftX: Math.random() * Math.PI * 2,
//           driftY: Math.random() * Math.PI * 2,
//           driftSpeedX: 0.5 + Math.random(),
//           driftSpeedY: 0.5 + Math.random(),
//           scale: 1,
//           pulse: 0,
//           pulseActive: false,
//           pulseStart: 0,
//           highlight: false,
//           nearMouse: false
//         });
//       }
//       nodes.current.push(layer);
//     });

//     // Create connections between nodes
//     let connectionCounter = 0;
//     nodes.current.slice(0, -1).forEach((layer, layerIdx) => {
//       layer.forEach((node) => {
//         // Connect to a subset of nodes in the next layer
//         const nextLayer = nodes.current[layerIdx + 1];
//         const connectionsPerNode = Math.min(
//           Math.ceil(config.maxConnections / (layer.length * nextLayer.length)),
//           nextLayer.length
//         );
        
//         // Choose random connections
//         const selectedIndices = new Set<number>();
//         while (selectedIndices.size < connectionsPerNode && connectionCounter < config.maxConnections) {
//           const idx = Math.floor(Math.random() * nextLayer.length);
//           if (!selectedIndices.has(idx)) {
//             selectedIndices.add(idx);
//             connections.current.push({
//               from: node,
//               to: nextLayer[idx],
//               active: false,
//               width: config.lineWidth,
//               pulse: 0,
//               opacity: 0.1 + Math.random() * 0.3
//             });
//             connectionCounter++;
//           }
//         }
//       });
//     });

//     // Initialize particles
//     for (let i = 0; i < config.particleCount; i++) {
//       createParticle(Math.random() * width, Math.random() * height);
//     }
//   }, [darkMode]);

//   // Create a new particle
//   const createParticle = (x: number, y: number, isFromClick = false) => {
//     const angle = Math.random() * Math.PI * 2;
//     const speed = isFromClick ? 
//       config.particleSpeed * (1 + Math.random()) : 
//       config.particleSpeed * 0.5 * (1 + Math.random());
    
//     const life = isFromClick ? 
//       1 + Math.random() * 2 : 
//       3 + Math.random() * 7;
    
//     const size = isFromClick ?
//       config.particleSize * (1 + Math.random()) :
//       config.particleSize * (0.5 + Math.random() * 0.5);
    
//     particles.current.push({
//       x,
//       y,
//       vx: Math.cos(angle) * speed,
//       vy: Math.sin(angle) * speed,
//       size,
//       color: darkMode ? 
//         `rgba(${100 + Math.random() * 155},${150 + Math.random() * 105},255,${0.1 + Math.random() * 0.3})` :
//         `rgba(0,0,0,${0.05 + Math.random() * 0.15})`,
//       life,
//       maxLife: life
//     });
//   };

//   // Handle mouse movement
//   const handleMouseMove = useCallback((e: MouseEvent) => {
//     mouseRef.current = {
//       x: e.clientX,
//       y: e.clientY,
//       active: true
//     };
//   }, []);

//   // Handle mouse click
//   const handleMouseClick = useCallback((e: MouseEvent) => {
//     const time = performance.now();
//     lastClickRef.current = {
//       x: e.clientX,
//       y: e.clientY,
//       time
//     };
    
//     // Create particles at click position
//     for (let i = 0; i < 12; i++) {
//       createParticle(e.clientX, e.clientY, true);
//     }
    
//     // Activate nodes near the click
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         const dist = Math.hypot(node.x - e.clientX, node.y - e.clientY);
//         if (dist < config.hoverRadius * 3) {
//           node.pulseActive = true;
//           node.pulseStart = time;
//           node.highlight = true;
          
//           // Activate connections from this node
//           connections.current.forEach(conn => {
//             if ((conn.from === node || conn.to === node) && Math.random() > config.connectionActivationThreshold) {
//               conn.active = true;
//               conn.pulse = 1.0;
//             }
//           });
          
//           setTimeout(() => {
//             node.highlight = false;
//           }, 1500);
//         }
//       });
//     });
//   }, []);

//   // Mouse leave handler
//   const handleMouseLeave = useCallback(() => {
//     mouseRef.current.active = false;
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(prev => !prev);
//   };

//   // Animation loop
//   const animate = useCallback((timestamp: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
    
//     const deltaTime = timestamp - lastFrameTime.current;
//     lastFrameTime.current = timestamp;
    
//     // Clear canvas
//     ctx.fillStyle = config.backgroundColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
    
//     // Update nodes (drifting, pulse)
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         // Update drifting position
//         node.driftX += config.driftSpeed * node.driftSpeedX;
//         node.driftY += config.driftSpeed * node.driftSpeedY;
//         node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//         node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
        
//         // Update pulse effect
//         if (node.pulseActive) {
//           const t = (timestamp - node.pulseStart) / config.pulseDuration;
//           node.pulse = t > 1 ? 0 : 1 - t;
//           if (t > 1) node.pulseActive = false;
//         }
        
//         // Check if node is near mouse
//         if (mouseRef.current.active) {
//           const dx = node.x - mouseRef.current.x;
//           const dy = node.y - mouseRef.current.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < config.mouseInfluenceRadius) {
//             node.nearMouse = true;
//             // Apply subtle repulsion
//             const influence = (1 - distance / config.mouseInfluenceRadius) * config.mouseInfluenceStrength;
//             node.x += dx * influence * 0.05;
//             node.y += dy * influence * 0.05;
//           } else {
//             node.nearMouse = false;
//           }
//         }
//       });
//     });
    
//     // Update connections
//     connections.current.forEach(conn => {
//       // Gradually reduce activity
//       if (conn.active && Math.random() > 0.99) {
//         conn.active = false;
//       }
      
//       // Update pulse animation
//       if (conn.pulse > 0) {
//         conn.pulse = Math.max(0, conn.pulse - 0.01);
//       }
      
//       // Activate connections between nodes near mouse
//       if (mouseRef.current.active && conn.from.nearMouse && conn.to.nearMouse) {
//         conn.active = true;
//       }
//     });
    
//     // Update particles
//     particles.current.forEach((particle, index) => {
//       particle.x += particle.vx;
//       particle.y += particle.vy;
//       particle.life -= 0.02;
      
//       // Remove dead particles
//       if (particle.life <= 0) {
//         particles.current.splice(index, 1);
//         createParticle(
//           Math.random() * canvas.width,
//           Math.random() * canvas.height
//         );
//       }
//     });
    
//     // Draw connections
//     connections.current.forEach(conn => {
//       ctx.beginPath();
//       ctx.moveTo(conn.from.x, conn.from.y);
//       ctx.lineTo(conn.to.x, conn.to.y);
//       ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//       ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//       ctx.globalAlpha = conn.active ? 1 : conn.opacity;
//       ctx.shadowBlur = conn.active ? 8 : 0;
//       ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//       ctx.stroke();
      
//       // Draw pulse effect on connections
//       if (conn.pulse > 0) {
//         const t = conn.pulse;
//         const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//         const py = conn.from.y + (conn.to.y - conn.from.y) * t;
        
//         ctx.beginPath();
//         ctx.arc(px, py, 7 * t + 2, 0, 2 * Math.PI);
//         ctx.fillStyle = config.pulseColor;
//         ctx.globalAlpha = t;
//         ctx.fill();
//       }
//     });
    
//     // Draw nodes
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         // Node base
//         ctx.beginPath();
//         ctx.arc(
//           node.x,
//           node.y,
//           config.nodeRadius + (node.nearMouse ? 2 : 0) + (node.pulse * 2),
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = node.highlight ? config.highlightColor : 
//                       node.nearMouse ? config.activeColor : 
//                       config.idleColor;
//         ctx.shadowBlur = node.highlight ? 20 : node.nearMouse ? 10 : 0;
//         ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//         ctx.globalAlpha = 1;
//         ctx.fill();
        
//         // Node pulse effect
//         if (node.pulse > 0) {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + node.pulse * 40,
//             0,
//             2 * Math.PI
//           );
//           ctx.strokeStyle = config.pulseColor;
//           ctx.lineWidth = 2 + node.pulse * 5;
//           ctx.globalAlpha = node.pulse * 0.5;
//           ctx.stroke();
//         }
//       });
//     });
    
//     // Draw particles
//     ctx.globalAlpha = 1;
//     particles.current.forEach(particle => {
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//       ctx.fillStyle = particle.color;
//       ctx.globalAlpha = (particle.life / particle.maxLife) * 0.7;
//       ctx.fill();
//     });
    
//     animationFrameId.current = requestAnimationFrame(animate);
//   }, []);

//   // Setup effect
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const handleResize = () => {
//       if (canvas) {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         initializeNetwork();
//       }
//     };
    
//     // Set canvas size
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
    
//     // Initialize
//     initializeNetwork();
//     lastFrameTime.current = performance.now();
//     animationFrameId.current = requestAnimationFrame(animate);
    
//     // Event listeners
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('click', handleMouseClick);
//     window.addEventListener('mouseleave', handleMouseLeave);
    
//     // Show UI elements after initialization
//     setTimeout(() => setLoaded(true), 500);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('click', handleMouseClick);
//       window.removeEventListener('mouseleave', handleMouseLeave);
      
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, [animate, initializeNetwork, handleMouseMove, handleMouseClick, handleMouseLeave]);

//   // Effect for cursor blinking
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);
    
//     return () => clearInterval(cursorInterval);
//   }, []);

//   // Typing effect with improved timing
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 40 + Math.random() * 30 : 100 + Math.random() * 80;
//     const pause = isDeleting ? 500 : 2000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section 
//       className={`relative h-screen flex items-center justify-center transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
//     >
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none"
//       />
      
//       <button 
//         onClick={toggleDarkMode} 
//         className={`absolute top-5 right-5 p-2 rounded-full z-20 transition-all duration-300 ${
//           darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//         }`}
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         {darkMode ? (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         ) : (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//           </svg>
//         )}
//       </button>
      
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-center max-w-2xl mx-4 relative z-10"
//       >
//         <motion.div 
//           className="mb-2 flex justify-center items-baseline"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <span className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} font-light mr-2`}>
//             Hi, I'm
//           </span>
//           <h2 className={`text-2xl font-medium ${darkMode ? 'text-blue-400' : 'text-red-500'}`}>
//             {currentText}
//             <span className={`cursor ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
//           </h2>
//         </motion.div>

//         <motion.h1 
//           className={`text-5xl md:text-6xl font-bold mb-4 mt-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.5 }}
//         >
//           SACHIN MALLAH
//         </motion.h1>

//         <motion.div 
//           className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//           <p>Turning complex ideas into elegant solutions</p>
//         </motion.div>

//         <motion.div 
//           className="flex justify-center gap-4 mb-8"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.9 }}
//         >
//           <motion.a
//             href="/cv.pdf"
//             download
//             className={`px-8 py-3 ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-black hover:bg-gray-800'} text-white rounded-full font-medium transition-colors`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Download CV
//           </motion.a>
//           <motion.a
//             href="#contact"
//             className={`px-8 py-3 border-2 ${
//               darkMode ? 'border-gray-600 hover:border-blue-400' : 'border-gray-300 hover:border-black'
//             } rounded-full font-medium transition-colors`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact
//           </motion.a>
//         </motion.div>

//         <motion.div 
//           className="flex justify-center gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1.1 }}
//         >
//           {[
//             {
//               href: "https://instagram.com",
//               icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             },
//             {
//               href: "https://github.com",
//               icon: <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             },
//             {
//               href: "https://linkedin.com",
//               icon: <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             }
//           ].map((social, index) => (
//             <motion.a 
//               key={index}
//               href={social.href} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className={`transition-transform ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-black'}`}
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 {social.icon}
//               </svg>
//             </motion.a>
//           ))}
//         </motion.div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }





























































// perplexity code which is absolute best hd and all
// 'use client';
// import { useEffect, useState, useRef, useCallback } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
//   opacity: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [dpr, setDpr] = useState(1);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Ultra HD Configuration
//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 130,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   // High DPI Setup
//   const setupCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const devicePixelRatio = window.devicePixelRatio || 1;
//     setDpr(devicePixelRatio);

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     canvas.style.width = `${width}px`;
//     canvas.style.height = `${height}px`;
//     canvas.width = width * devicePixelRatio;
//     canvas.height = height * devicePixelRatio;

//     ctx.scale(devicePixelRatio, devicePixelRatio);
//   }, []);

//   // HD Network Initialization
//   const buildNetwork = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const width = canvas.width / dpr;
//     const height = canvas.height / dpr;

//     nodes.current = [];
//     connections.current = [];
//     const netWidth = width * 0.65;
//     const netHeight = height * 0.7;
//     const left = (width - netWidth) / 2;
//     const top = (height - netHeight) / 2;

//     config.layers.forEach((_, l) => {
//       const layer: NodeType[] = [];
//       const layerX = left + (netWidth * l) / (config.layers.length - 1);
//       const count = config.layers[l];
      
//       for (let n = 0; n < count; n++) {
//         const y = top + ((n + 1) * netHeight) / (count + 1);
//         layer.push({
//           baseX: layerX,
//           baseY: y,
//           x: layerX,
//           y: y,
//           driftX: Math.random() * Math.PI * 2,
//           driftY: Math.random() * Math.PI * 2,
//           driftSpeedX: 0.5 + Math.random(),
//           driftSpeedY: 0.5 + Math.random(),
//           scale: 1,
//           pulse: 0,
//           pulseActive: false,
//           pulseStart: 0,
//           highlight: false
//         });
//       }
//       nodes.current.push(layer);
//     });

//     nodes.current.slice(0, -1).forEach((layer, l) => {
//       layer.forEach((node, a) => {
//         nodes.current[l + 1].forEach((nextNode, b) => {
//           connections.current.push({
//             from: node,
//             to: nextNode,
//             active: false,
//             width: config.lineWidth,
//             pulse: 0,
//             opacity: 0.28
//           });
//         });
//       });
//     });
//   }, [dpr]);

//   // HD Rendering Loop
//   const animate = useCallback((ts: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const width = canvas.width / dpr;
//     const height = canvas.height / dpr;

//     ctx.clearRect(0, 0, width * dpr, height * dpr);
//     ctx.save();
//     ctx.scale(dpr, dpr);

//     // Node animation
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         node.driftX += config.driftSpeed * node.driftSpeedX;
//         node.driftY += config.driftSpeed * node.driftSpeedY;
//         node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//         node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
        
//         if (node.pulseActive) {
//           const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//           node.pulse = t > 1 ? 0 : 1 - t;
//           if (t > 1) node.pulseActive = false;
//         }
//       });
//     });

//     // HD Connection rendering
//     connections.current.forEach(conn => {
//       ctx.beginPath();
//       ctx.moveTo(conn.from.x, conn.from.y);
//       ctx.lineTo(conn.to.x, conn.to.y);
//       ctx.lineWidth = (conn.active ? config.lineActiveWidth : config.lineWidth) * dpr;
//       ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//       ctx.globalAlpha = conn.active ? 1 : conn.opacity;
//       ctx.shadowBlur = (conn.active ? 6 : 0) * dpr;
//       ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//       ctx.stroke();

//       if (conn.pulse > 0) {
//         const t = conn.pulse;
//         const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//         const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//         ctx.beginPath();
//         ctx.arc(px, py, (7 * t + 2) * dpr, 0, 2 * Math.PI);
//         ctx.fillStyle = config.pulseColor;
//         ctx.globalAlpha = t;
//         ctx.fill();
//         conn.pulse = Math.max(0, conn.pulse - 0.025);
//       }
//     });

//     // HD Node rendering
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         ctx.beginPath();
//         ctx.arc(
//           node.x,
//           node.y,
//           (config.nodeRadius + (node.pulse * config.nodeGlow)) * dpr,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//         ctx.shadowBlur = (node.highlight ? 20 : 0) * dpr;
//         ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//         ctx.fill();

//         if (node.pulse > 0) {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             (config.nodeRadius + node.pulse * 35) * dpr,
//             0,
//             2 * Math.PI
//           );
//           ctx.strokeStyle = config.pulseColor;
//           ctx.lineWidth = (2 + node.pulse * 4) * dpr;
//           ctx.globalAlpha = node.pulse * 0.5;
//           ctx.stroke();
//         }
//       });
//     });

//     ctx.restore();
//     animationFrameId.current = requestAnimationFrame(animate);
//   }, [dpr]);

//   // Responsive Setup
//   useEffect(() => {
//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     setupCanvas();
//     buildNetwork();
//     animationFrameId.current = requestAnimationFrame(animate);

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, [setupCanvas, buildNetwork, animate]);

//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }


































































// 'use client';
// import { useEffect, useState, useRef, useCallback } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
//   opacity: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [dpr, setDpr] = useState(1);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Ultra HD Configuration
//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.2,
//     hoverRadius: 4,
//     driftRadius: 100,  // Reduced drift for better centering
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   // High DPI Setup
//   const setupCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const devicePixelRatio = window.devicePixelRatio || 1;
//     setDpr(devicePixelRatio);

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     canvas.style.width = `${width}px`;
//     canvas.style.height = `${height}px`;
//     canvas.width = width * devicePixelRatio;
//     canvas.height = height * devicePixelRatio;

//     ctx.scale(devicePixelRatio, devicePixelRatio);
//   }, []);

//   // Centered Network Initialization
//   const buildNetwork = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const width = canvas.width / dpr;
//     const height = canvas.height / dpr;

//     nodes.current = [];
//     connections.current = [];
    
//     // Use full width for better centering
//     const netWidth = width * 0.9;
//     const netHeight = height * 0.7;
//     const left = (width - netWidth) / 2;
//     const top = (height - netHeight) / 2;

//     config.layers.forEach((_, l) => {
//       const layer: NodeType[] = [];
//       const layerX = left + (netWidth * l) / (config.layers.length - 1);
//       const count = config.layers[l];
      
//       // Vertical centering with dynamic spacing
//       const verticalSpacing = netHeight / (count + 1);
      
//       for (let n = 0; n < count; n++) {
//         const y = top + verticalSpacing * (n + 1);
//         layer.push({
//           baseX: layerX,
//           baseY: y,
//           x: layerX,
//           y: y,
//           driftX: Math.random() * Math.PI * 2,
//           driftY: Math.random() * Math.PI * 2,
//           driftSpeedX: 0.5 + Math.random(),
//           driftSpeedY: 0.5 + Math.random(),
//           scale: 1,
//           pulse: 0,
//           pulseActive: false,
//           pulseStart: 0,
//           highlight: false
//         });
//       }
//       nodes.current.push(layer);
//     });

//     // Optimized connections
//     nodes.current.slice(0, -1).forEach((layer, l) => {
//       layer.forEach((node) => {
//         nodes.current[l + 1].forEach((nextNode) => {
//           if (Math.random() < 0.4) { // Reduced connection density
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0,
//               opacity: 0.28
//             });
//           }
//         });
//       });
//     });
//   }, [dpr]);

//   // HD Rendering Loop
//   const animate = useCallback((ts: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const width = canvas.width / dpr;
//     const height = canvas.height / dpr;

//     ctx.clearRect(0, 0, width * dpr, height * dpr);
//     ctx.save();
//     ctx.scale(dpr, dpr);

//     // Node animation with centered drift
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         node.driftX += config.driftSpeed * node.driftSpeedX;
//         node.driftY += config.driftSpeed * node.driftSpeedY;
        
//         // Centered drifting
//         node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//         node.y = node.baseY + Math.cos(node.driftY) * config.driftRadius;
        
//         if (node.pulseActive) {
//           const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//           node.pulse = t > 1 ? 0 : 1 - t;
//           if (t > 1) node.pulseActive = false;
//         }
//       });
//     });

//     // Connection rendering
//     connections.current.forEach(conn => {
//       ctx.beginPath();
//       ctx.moveTo(conn.from.x, conn.from.y);
//       ctx.lineTo(conn.to.x, conn.to.y);
//       ctx.lineWidth = (conn.active ? config.lineActiveWidth : config.lineWidth) * dpr;
//       ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//       ctx.globalAlpha = conn.active ? 1 : conn.opacity;
//       ctx.shadowBlur = (conn.active ? 6 : 0) * dpr;
//       ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//       ctx.stroke();
//     });

//     // Node rendering
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         ctx.beginPath();
//         ctx.arc(
//           node.x,
//           node.y,
//           (config.nodeRadius + (node.pulse * config.nodeGlow)) * dpr,
//           0,
//           2 * Math.PI
//         );
//         ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//         ctx.shadowBlur = (node.highlight ? 20 : 0) * dpr;
//         ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//         ctx.fill();
//       });
//     });

//     ctx.restore();
//     animationFrameId.current = requestAnimationFrame(animate);
//   }, [dpr]);

//   // Responsive Setup
//   useEffect(() => {
//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     setupCanvas();
//     buildNetwork();
//     animationFrameId.current = requestAnimationFrame(animate);

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       animationFrameId.current && cancelAnimationFrame(animationFrameId.current);
//     };
//   }, [setupCanvas, buildNetwork, animate]);

//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           {['instagram', 'github', 'linkedin'].map((platform, index) => (
//             <a 
//               key={index}
//               href={`https://${platform}.com`} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-110 transition-transform"
//             >
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 {/* Icons remain same */}
//               </svg>
//             </a>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }















































































// dublicating the main code to make more efficient and clickable ok
// 'use client';
// // import { useEffect, useState, useRef } from 'react';
// import { useEffect, useState, useRef, useCallback } from 'react';


// // type NodeType = {
// //   baseX: number;
// //   baseY: number;
// //   x: number;
// //   y: number;
// //   driftX: number;
// //   driftY: number;
// //   driftSpeedX: number;
// //   driftSpeedY: number;
// //   scale: number;
// //   pulse: number;
// //   pulseActive: boolean;
// //   pulseStart: number;
// //   highlight: boolean;
// // };



// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };



// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine Learning Engineer', 'Full Stack Web Developer', 'AI/ML Enthusiast', 'AI-Powered Web Developer','Deep Learning Practitioner','AI-Powered Web Developer','Artificial Intelligence Engineer'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Neural Network Configuration
//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     // Neural Network Functions
//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
        
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach((node, a) => {
//           nodes.current[l + 1].forEach((nextNode, b) => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = (ts: number) => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, width, height);

//       // Node drifting
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
          
//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       // Draw connections
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, 2 * Math.PI);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       // Draw nodes
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + (node.pulse * config.nodeGlow),
//             0,
//             2 * Math.PI
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x,
//               node.y,
//               config.nodeRadius + node.pulse * 35,
//               0,
//               2 * Math.PI
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     // Initial Setup
//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//       buildNetwork();
//     };

//     resize();
//     animationFrameId.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []);

  
//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//           {/* <p>you can add here one line too</p> */}
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }

























































































// // this is best and can be customize
// 'use client';
// import { useEffect, useState, useRef, useCallback } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Customizable Configuration
//   const [config] = useState({
//     layers: [9, 9, 9, 9],
//     nodeRadius: 3,
//     nodeGlow: 43,
//     lineWidth: 2.0,
//     lineActiveWidth: 2.5,
//     hoverRadius: 9,
//     driftRadius: 130,
//     driftSpeed: 0.001,
//     pulseDuration: 120,
//     pulseColor: 'rgba(255,0,0,0.2)',
//     idleColor: 'rgba(0,0,0,0.9)',
//     activeColor: 'rgba(255,0,0,1)',
//     highlightColor: 'rgba(255,0,0,0.8)',
//     particleColor: 'rgba(255,0,0,0.15)',
//     particleCount: 20,
//     particleSpeed: 8,
//     particleSize: 2.5
//   });

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   // Mouse Event Handlers
//   const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const rect = canvas.getBoundingClientRect();
//     const mx = e.clientX - rect.left;
//     const my = e.clientY - rect.top;

//     let foundNode: NodeType | null = null;
    
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         const dx = mx - node.x;
//         const dy = my - node.y;
//         if (dx * dx + dy * dy < config.hoverRadius ** 2) {
//           foundNode = node;
//         }
//       });
//     });

//     if (foundNode !== hoveredNode.current) {
//       if (hoveredNode.current) {
//         hoveredNode.current.highlight = false;
//       }
//       hoveredNode.current = foundNode;
      
//       if (hoveredNode.current) {
//         hoveredNode.current.highlight = true;
//         triggerNodePulse(hoveredNode.current);
//         activateConnections(hoveredNode.current);
//         spawnParticles(hoveredNode.current);
//       }
//     }
//   }, [config.hoverRadius]);

//   const handleMouseLeave = useCallback(() => {
//     if (hoveredNode.current) {
//       hoveredNode.current.highlight = false;
//       hoveredNode.current = null;
//     }
//   }, []);

//   const handleClick = useCallback(() => {
//     if (hoveredNode.current) {
//       propagatePulseForward(hoveredNode.current);
//       spawnParticles(hoveredNode.current, true);
//     }
//   }, []);

//   // Neural Network Functions
//   const triggerNodePulse = useCallback((node: NodeType) => {
//     node.pulseActive = true;
//     node.pulseStart = performance.now();
//     node.pulse = 1;
//   }, []);

//   const activateConnections = useCallback((node: NodeType) => {
//     connections.current.forEach(conn => {
//       if (conn.from === node || conn.to === node) {
//         conn.active = true;
//         conn.pulse = 1;
//         setTimeout(() => conn.active = false, 350);
//       }
//     });
//   }, []);

//   const propagatePulseForward = useCallback((node: NodeType) => {
//     const layerIdx = nodes.current.findIndex(layer => layer.includes(node));
//     if (layerIdx === -1 || layerIdx === nodes.current.length - 1) return;

//     triggerNodePulse(node);
    
//     connections.current.forEach(conn => {
//       if (conn.from === node) {
//         conn.active = true;
//         conn.pulse = 1;
//         setTimeout(() => conn.active = false, 350);
        
//         setTimeout(() => {
//           triggerNodePulse(conn.to);
//           propagatePulseForward(conn.to);
//         }, 80);
//       }
//     });
//   }, [triggerNodePulse]);

//   const spawnParticles = useCallback((node: NodeType, burst = false) => {
//     const count = burst ? config.particleCount * 2 : config.particleCount;
//     for (let i = 0; i < count; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = config.particleSpeed * (0.5 + Math.random());
//       particles.current.push({
//         x: node.x,
//         y: node.y,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         size: config.particleSize + Math.random() * 1.5,
//         life: 0.7 + Math.random() * 0.4
//       });
//     }
//   }, [config.particleCount, config.particleSpeed, config.particleSize]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
        
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach((node) => {
//           nodes.current[l + 1].forEach((nextNode) => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = (ts: number) => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, width, height);

//       // Update nodes
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;
          
//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       // Draw connections
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, 2 * Math.PI);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       // Draw particles
//       particles.current = particles.current.filter(p => {
//         p.life -= 0.02;
//         if (p.life <= 0) return false;
//         p.x += p.vx * 0.016;
//         p.y += p.vy * 0.016;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
//         ctx.fillStyle = config.particleColor;
//         ctx.globalAlpha = p.life;
//         ctx.fill();
//         return true;
//       });

//       // Draw nodes
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + (node.pulse * config.nodeGlow),
//             0,
//             2 * Math.PI
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x,
//               node.y,
//               config.nodeRadius + node.pulse * 35,
//               0,
//               2 * Math.PI
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       const dpr = window.devicePixelRatio;
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       ctx.scale(dpr, dpr);
//       // canvas.width = width;
//       // canvas.height = height;
//       buildNetwork();
//     };

//     resize();
//     animationFrameId.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, [config]);

//   // Typing Effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         onClick={handleClick}
//       />
//       {/* from here add this  */}
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }






















































// 'use client';
// import { useEffect, useState, useRef, useCallback } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Customizable Configuration with DPR scaling
//   const [config] = useState(() => {
//     const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
//     return {
//       layers: [9, 9, 9, 9],
//       nodeRadius: 3 * dpr,
//       nodeGlow: 43 * dpr,
//       lineWidth: 2.0 * dpr,
//       lineActiveWidth: 2.5 * dpr,
//       hoverRadius: 9 * dpr,
//       driftRadius: 130 * dpr,
//       driftSpeed: 0.001,
//       pulseDuration: 120,
//       pulseColor: 'rgba(255,0,0,0.2)',
//       idleColor: 'rgba(0,0,0,0.9)',
//       activeColor: 'rgba(255,0,0,1)',
//       highlightColor: 'rgba(255,0,0,0.8)',
//       particleColor: 'rgba(255,0,0,0.15)',
//       particleCount: 20,
//       particleSpeed: 8 * dpr,
//       particleSize: 2.5 * dpr
//     };
//   });

//   // Neural Network Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   // Pixel-Perfect Canvas Setup
//   const setupCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return null;
    
//     const dpr = window.devicePixelRatio;
//     const rect = canvas.getBoundingClientRect();
    
//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return null;

//     ctx.scale(dpr, dpr);
//     ctx.imageSmoothingEnabled = false;
//     return ctx;
//   }, []);

//   // Enhanced Mouse Event Handlers
//   const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const rect = canvas.getBoundingClientRect();
//     const dpr = window.devicePixelRatio;
//     const mx = (e.clientX - rect.left) * dpr;
//     const my = (e.clientY - rect.top) * dpr;

//     let foundNode: NodeType | null = null;
    
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         const dx = mx - node.x * dpr;
//         const dy = my - node.y * dpr;
//         if (dx * dx + dy * dy < (config.hoverRadius ** 2) * dpr) {
//           foundNode = node;
//         }
//       });
//     });
    
//     if (foundNode !== hoveredNode.current) {
//       if (hoveredNode.current) hoveredNode.current.highlight = false;
//       hoveredNode.current = foundNode;
//       if (hoveredNode.current) {
//         hoveredNode.current.highlight = true;
//         triggerNodePulse(hoveredNode.current);
//         activateConnections(hoveredNode.current);
//         spawnParticles(hoveredNode.current);
//       }
//     }
//   }, [config.hoverRadius]);
//   const handleMouseLeave = useCallback(() => {
//     if (hoveredNode.current) {
//       hoveredNode.current.highlight = false;
//       hoveredNode.current = null;
//     }
//   }, []);
  
  
//   // Optimized Network Functions
//   const triggerNodePulse = useCallback((node: NodeType) => {
//     node.pulseActive = true;
//     node.pulseStart = performance.now();
//     node.pulse = 1;
//   }, []);

//   const activateConnections = useCallback((node: NodeType) => {
//     connections.current.forEach(conn => {
//       if (conn.from === node || conn.to === node) {
//         conn.active = true;
//         conn.pulse = 1;
//         setTimeout(() => conn.active = false, 350);
//       }
//     });
//   }, []);

//   // Improved Particle System
//   const spawnParticles = useCallback((node: NodeType, burst = false) => {
//     const count = burst ? config.particleCount * 2 : config.particleCount;
//     const dpr = window.devicePixelRatio;
//     for (let i = 0; i < count; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = config.particleSpeed * (0.5 + Math.random());
//       particles.current.push({
//         x: node.x * dpr,
//         y: node.y * dpr,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         size: config.particleSize + Math.random() * 1.5,
//         life: 0.7 + Math.random() * 0.4
//       });
//     }
//   }, [config.particleCount, config.particleSpeed, config.particleSize]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = setupCanvas();
//     if (!canvas || !ctx) return;

//     let width = canvas.width;
//     let height = canvas.height;
//     let animationRunning = true;

//     // High-Resolution Network Builder
//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const dpr = window.devicePixelRatio;
//       const netWidth = (width / dpr) * 0.65;
//       const netHeight = (height / dpr) * 0.7;
//       const left = ((width / dpr) - netWidth) / 2;
//       const top = ((height / dpr) - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
        
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach((node) => {
//           nodes.current[l + 1].forEach((nextNode) => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     // Precision Rendering Loop
//     const animate = () => {
//       if (!animationRunning) return;
//       ctx.clearRect(0, 0, width, height);

//       // Update node positions with sub-pixel precision
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * (config.driftRadius / window.devicePixelRatio);
//           node.y = node.baseY + Math.sin(node.driftY) * (config.driftRadius / window.devicePixelRatio);
          
//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       // Render connections with anti-aliasing control
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.lineCap = 'round';
//         ctx.lineJoin = 'round';
//         ctx.stroke();
//       });

//       // High-performance particle system
//       particles.current = particles.current.filter(p => {
//         p.life -= 0.02;
//         p.x += p.vx;
//         p.y += p.vy;
        
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = config.particleColor;
//         ctx.globalAlpha = p.life;
//         ctx.fill();
//         return p.life > 0;
//       });

//       // Render nodes with crisp edges
//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + (node.pulse * config.nodeGlow),
//             0,
//             Math.PI * 2
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.fill();
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     // Responsive Handling
//     const resizeObserver = new ResizeObserver(() => {
//       setupCanvas();
//       buildNetwork();
//     });

//     resizeObserver.observe(canvas);
//     buildNetwork();
//     animate();

//     return () => {
//       animationRunning = false;
//       resizeObserver.disconnect();
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, [config, setupCanvas]);

//   // Typing Effect (unchanged)
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         onClick={handleClick}
//       />
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }



































































// 'use client';
// import { useEffect, useState, useRef, useCallback } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Configuration with DPR scaling
//   const [config] = useState(() => {
//     const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
//     return {
//       layers: [9, 9, 9, 9],
//       nodeRadius: 3 * dpr,
//       nodeGlow: 43 * dpr,
//       lineWidth: 2.0 * dpr,
//       lineActiveWidth: 2.5 * dpr,
//       hoverRadius: 9 * dpr,
//       driftRadius: 130 * dpr,
//       driftSpeed: 0.001,
//       pulseDuration: 120,
//       pulseColor: 'rgba(255,0,0,0.2)',
//       idleColor: 'rgba(0,0,0,0.9)',
//       activeColor: 'rgba(255,0,0,1)',
//       highlightColor: 'rgba(255,0,0,0.8)',
//       particleColor: 'rgba(255,0,0,0.15)',
//       particleCount: 20,
//       particleSpeed: 8 * dpr,
//       particleSize: 2.5 * dpr
//     };
//   });

//   // Refs
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();

//   // Canvas setup
//   const setupCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return null;
    
//     const dpr = window.devicePixelRatio;
//     const rect = canvas.getBoundingClientRect();
    
//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return null;

//     ctx.scale(dpr, dpr);
//     ctx.imageSmoothingEnabled = false;
//     return ctx;
//   }, []);

//   // Event handlers
//   const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const rect = canvas.getBoundingClientRect();
//     const dpr = window.devicePixelRatio;
//     const mx = (e.clientX - rect.left) * dpr;
//     const my = (e.clientY - rect.top) * dpr;

//     let foundNode: NodeType | null = null;
    
//     nodes.current.forEach(layer => {
//       layer.forEach(node => {
//         const dx = mx - node.x * dpr;
//         const dy = my - node.y * dpr;
//         if (dx * dx + dy * dy < (config.hoverRadius ** 2) * dpr) {
//           foundNode = node;
//         }
//       });
//     });

//     if (foundNode !== hoveredNode.current) {
//       if (hoveredNode.current) hoveredNode.current.highlight = false;
//       hoveredNode.current = foundNode;
//       if (hoveredNode.current) {
//         hoveredNode.current.highlight = true;
//         triggerNodePulse(hoveredNode.current);
//         activateConnections(hoveredNode.current);
//         spawnParticles(hoveredNode.current);
//       }
//     }
//   }, [config.hoverRadius]);

//   const handleMouseLeave = useCallback(() => {
//     if (hoveredNode.current) {
//       hoveredNode.current.highlight = false;
//       hoveredNode.current = null;
//     }
//   }, []);

//   const handleClick = useCallback(() => {
//     if (hoveredNode.current) {
//       propagatePulseForward(hoveredNode.current);
//       spawnParticles(hoveredNode.current, true);
//     }
//   }, []);

//   // Network functions
//   const triggerNodePulse = useCallback((node: NodeType) => {
//     node.pulseActive = true;
//     node.pulseStart = performance.now();
//     node.pulse = 1;
//   }, []);

//   const activateConnections = useCallback((node: NodeType) => {
//     connections.current.forEach(conn => {
//       if (conn.from === node || conn.to === node) {
//         conn.active = true;
//         conn.pulse = 1;
//         setTimeout(() => conn.active = false, 350);
//       }
//     });
//   }, []);

//   const propagatePulseForward = useCallback((node: NodeType) => {
//     const layerIdx = nodes.current.findIndex(layer => layer.includes(node));
//     if (layerIdx === -1 || layerIdx === nodes.current.length - 1) return;

//     triggerNodePulse(node);
    
//     connections.current.forEach(conn => {
//       if (conn.from === node) {
//         conn.active = true;
//         conn.pulse = 1;
//         setTimeout(() => conn.active = false, 350);
        
//         setTimeout(() => {
//           triggerNodePulse(conn.to);
//           propagatePulseForward(conn.to);
//         }, 80);
//       }
//     });
//   }, [triggerNodePulse]);

//   const spawnParticles = useCallback((node: NodeType, burst = false) => {
//     const count = burst ? config.particleCount * 2 : config.particleCount;
//     const dpr = window.devicePixelRatio;
//     for (let i = 0; i < count; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = config.particleSpeed * (0.5 + Math.random());
//       particles.current.push({
//         x: node.x * dpr,
//         y: node.y * dpr,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         size: config.particleSize + Math.random() * 1.5,
//         life: 0.7 + Math.random() * 0.4
//       });
//     }
//   }, [config.particleCount, config.particleSpeed, config.particleSize]);

//   // Animation setup
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = setupCanvas();
//     if (!canvas || !ctx) return;

//     let width = canvas.width;
//     let height = canvas.height;
//     let animationRunning = true;

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const dpr = window.devicePixelRatio;
//       const netWidth = (width / dpr) * 0.65;
//       const netHeight = (height / dpr) * 0.7;
//       const left = ((width / dpr) - netWidth) / 2;
//       const top = ((height / dpr) - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
//         const count = config.layers[l];
        
//         for (let n = 0; n < count; n++) {
//           const y = top + ((n + 1) * netHeight) / (count + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         }
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach((node) => {
//           nodes.current[l + 1].forEach((nextNode) => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = () => {
//       if (!animationRunning) return;
//       ctx.clearRect(0, 0, width, height);

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * (config.driftRadius / window.devicePixelRatio);
//           node.y = node.baseY + Math.sin(node.driftY) * (config.driftRadius / window.devicePixelRatio);
          
//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = t > 1 ? 0 : 1 - t;
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.lineCap = 'round';
//         ctx.lineJoin = 'round';
//         ctx.stroke();
//       });

//       particles.current = particles.current.filter(p => {
//         p.life -= 0.02;
//         p.x += p.vx;
//         p.y += p.vy;
        
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = config.particleColor;
//         ctx.globalAlpha = p.life;
//         ctx.fill();
//         return p.life > 0;
//       });

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + (node.pulse * config.nodeGlow),
//             0,
//             Math.PI * 2
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.fill();
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     const resizeObserver = new ResizeObserver(() => {
//       setupCanvas();
//       buildNetwork();
//     });

//     resizeObserver.observe(canvas);
//     buildNetwork();
//     animate();

//     return () => {
//       animationRunning = false;
//       resizeObserver.disconnect();
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, [config, setupCanvas]);

//   // Typing effect
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         onClick={handleClick}
//       />
      
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-gray-500 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-red-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }










































































































// // // best 2nd best and its ultra hd best made in 60hrs

// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(0,0,0,0.14)',
//     idleColor: 'rgba(0,0,0,0.82)',
//     activeColor: 'rgba(0,0,0,1)',
//     highlightColor: 'rgba(0,0,0,0.95)',
//     particleColor: 'rgba(0,0,0,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();
//   const pixelRatio = useRef(1);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const setupCanvas = () => {
//       pixelRatio.current = window.devicePixelRatio || 1;
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       canvas.width = width * pixelRatio.current;
//       canvas.height = height * pixelRatio.current;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
//       ctx.imageSmoothingEnabled = false;
//     };

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
        
//         Array.from({ length: config.layers[l] }).forEach((_, n) => {
//           const y = top + ((n + 1) * netHeight) / (config.layers[l] + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         });
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach(node => {
//           nodes.current[l + 1].forEach(nextNode => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;

//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = Math.max(0, 1 - t);
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, Math.PI * 2);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + node.pulse * config.nodeGlow,
//             0,
//             Math.PI * 2
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x,
//               node.y,
//               config.nodeRadius + node.pulse * 35,
//               0,
//               Math.PI * 2
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     setupCanvas();
//     buildNetwork();
//     animationFrameId.current = requestAnimationFrame(animate);

//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-white">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80"
//       />
//       {/* here the pointer opacity was 50 but i made change and put it to 80 */}
//       <div className="text-center max-w-2xl mx-4 relative z-10">
//         <div className="mb-2 flex justify-center items-baseline">
//           <span className="text-xl text-black-600 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-green-500">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-6xl md:text-6xl font-bold mb-4 mt-2">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-black-600 mb-8">
//           <p>Always learning, being creative and playing around with</p>
//           <p className="my-1">AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-black text-white rounded-full font-medium border border-gray-700 hover:bg-gray-100 hover:text-black hover:border-black transition-all duration-300 ease-in-out"
//             // className="px-8 py-3 bg-black text-white rounded-full font-medium border border-black hover:bg-white hover:text-black transition-colors duration-300"
//             // className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-400 transition-colors"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-black transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           <a href="https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//             </svg>
//           </a>
//           <a href="https://github.com/SachinMallah" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//         }
//       `}</style>
//     </section>
//   );
// }





































































// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   pulse: number;
//   pulseActive: boolean;
//   pulseStart: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
//   pulse: number;
// };

// export default function Hero() {
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const config = {
//     layers: [9, 9, 9, 9],
//     nodeRadius: 4,
//     nodeGlow: 44,
//     lineWidth: 1.2,
//     lineActiveWidth: 1.5,
//     hoverRadius: 4,
//     driftRadius: 100,
//     driftSpeed: 0.001,
//     pulseDuration: 100,
//     pulseColor: 'rgba(255,255,255,0.14)',
//     idleColor: 'rgba(255,255,255,0.82)',
//     activeColor: 'rgba(255,255,255,1)',
//     highlightColor: 'rgba(255,255,255,0.95)',
//     particleColor: 'rgba(255,255,255,0.15)',
//     particleCount: 14,
//     particleSpeed: 6,
//     particleSize: 2.5
//   };

//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const particles = useRef<any[]>([]);
//   const hoveredNode = useRef<NodeType | null>(null);
//   const animationFrameId = useRef<number>();
//   const pixelRatio = useRef(1);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const setupCanvas = () => {
//       pixelRatio.current = window.devicePixelRatio || 1;
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       canvas.width = width * pixelRatio.current;
//       canvas.height = height * pixelRatio.current;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
//       ctx.imageSmoothingEnabled = false;
//     };

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const netWidth = width * 0.65;
//       const netHeight = height * 0.7;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       config.layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (config.layers.length - 1);
        
//         Array.from({ length: config.layers[l] }).forEach((_, n) => {
//           const y = top + ((n + 1) * netHeight) / (config.layers[l] + 1);
//           layer.push({
//             baseX: layerX,
//             baseY: y,
//             x: layerX,
//             y: y,
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 0.5 + Math.random(),
//             driftSpeedY: 0.5 + Math.random(),
//             scale: 1,
//             pulse: 0,
//             pulseActive: false,
//             pulseStart: 0,
//             highlight: false
//           });
//         });
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach(node => {
//           nodes.current[l + 1].forEach(nextNode => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.lineWidth,
//               pulse: 0
//             });
//           });
//         });
//       });
//     };

//     const animate = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           node.driftX += config.driftSpeed * node.driftSpeedX;
//           node.driftY += config.driftSpeed * node.driftSpeedY;
//           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
//           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;

//           if (node.pulseActive) {
//             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
//             node.pulse = Math.max(0, 1 - t);
//             if (t > 1) node.pulseActive = false;
//           }
//         });
//       });

//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
//         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
//         ctx.globalAlpha = conn.active ? 1 : 0.28;
//         ctx.shadowBlur = conn.active ? 6 : 0;
//         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
//         ctx.stroke();

//         if (conn.pulse > 0) {
//           const t = conn.pulse;
//           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
//           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
//           ctx.beginPath();
//           ctx.arc(px, py, 7 * t + 2, 0, Math.PI * 2);
//           ctx.fillStyle = config.pulseColor;
//           ctx.globalAlpha = t;
//           ctx.fill();
//           conn.pulse = Math.max(0, conn.pulse - 0.025);
//         }
//       });

//       nodes.current.forEach(layer => {
//         layer.forEach(node => {
//           ctx.beginPath();
//           ctx.arc(
//             node.x,
//             node.y,
//             config.nodeRadius + node.pulse * config.nodeGlow,
//             0,
//             Math.PI * 2
//           );
//           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
//           ctx.shadowBlur = node.highlight ? 20 : 0;
//           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
//           ctx.fill();

//           if (node.pulse > 0) {
//             ctx.beginPath();
//             ctx.arc(
//               node.x,
//               node.y,
//               config.nodeRadius + node.pulse * 35,
//               0,
//               Math.PI * 2
//             );
//             ctx.strokeStyle = config.pulseColor;
//             ctx.lineWidth = 2 + node.pulse * 4;
//             ctx.globalAlpha = node.pulse * 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     setupCanvas();
//     buildNetwork();
//     animationFrameId.current = requestAnimationFrame(animate);

//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80"
//       />
      
//       <div className="text-center max-w-4xl mx-4 relative z-10 px-4">
//         <div className="mb-4 flex justify-center items-baseline">
//           <span className="text-xl text-gray-300 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-green-400">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
//         SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-300 mb-8 space-y-2">
//           <p>Always learning, being creative and playing around with</p>
//           <p>AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-white/90 text-black rounded-full font-medium border border-white hover:bg-gray-100 hover:border-gray-300 hover:text-black transition-all"          >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-400/50 text-gray-300 rounded-full font-medium hover:border-white hover:text-white"          >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           {[
//             ['https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx', 'Instagram'],
//             ['https://github.com/SachinMallah', 'GitHub'],
//             ['https://www.linkedin.com/in/sachin-mallah-1b0a3527a', 'LinkedIn']
//           ].map(([href, label]) => (
//             <a 
//               key={href}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-110 transition-transform group"
//               aria-label={label}
//             >
//               <svg className="w-7 h-7 text-gray-300 group-hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
//                 {label === 'Instagram' && (
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 )}
//                 {label === 'GitHub' && (
//                   <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//                 )}
//                 {label === 'LinkedIn' && (
//                   <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//                 )}
//               </svg>
//             </a>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//           color: #34d399;
//         }
//       `}</style>
//     </section>
//   );
// }







































































// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
// };

// export default function Hero() {
//   // ======================
//   // CONFIGURATION SECTION
//   // ======================
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
  
//   // Neural Network Configuration
//   const config = {
//     // Network Structure
//     network: {
//       layers: [7, 9, 7, 5],        // Number of nodes in each layer
//       widthRatio: 65,            // Horizontal spread (0-1)
//       heightRatio: 60,            // Vertical spread (0-1)
//     },

//     // Node Appearance
//     nodes: {
//       radius: 3.5,                 // Base node size
//       glow: 100,                     // Glow effect radius (0 to disable)
//       baseColor: 'rgb(255, 255, 255)',  // Normal node color
//       highlightColor: 'rgb(255, 255, 255)', // Active node color
//     },

//     // Connection Lines
//     connections: {
//       width: 10,                  // Normal line thickness
//       activeWidth: 10,            // Active line thickness
//       baseColor: 'rgb(255, 255, 255)', // Normal line color
//       activeColor: 'rgb(255, 255, 255)', // Active line color
//       opacity: 100,                // Base line opacity (0-1)
//     },

//     // Animation Parameters
//     movement: {
//       driftRadius: 80,             // Movement range from base position
//       baseSpeed: 0.008,           // Base animation speed
//       speedVariation: 0.3,         // Speed variation between nodes (0-1)
//     },

//     // Content Positioning
//     content: {
//       verticalOffset: '-10%',      // Move content up/down ('-10%', '5%', etc)
//       maxWidth: '4xl',             // Max content width (Tailwind width)
//     }
//   };

//   // ======================
//   // STATE & REFERENCES
//   // ======================
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const animationFrameId = useRef<number>();
//   const pixelRatio = useRef(1);

//   // ======================
//   // CANVAS SETUP & ANIMATION
//   // ======================
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const setupCanvas = () => {
//       pixelRatio.current = window.devicePixelRatio || 1;
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       canvas.width = width * pixelRatio.current;
//       canvas.height = height * pixelRatio.current;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
//       ctx.imageSmoothingEnabled = false;
//     };

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const { widthRatio, heightRatio, layers } = config.network;
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const netWidth = width * widthRatio;
//       const netHeight = height * heightRatio;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (layers.length - 1);
        
//         Array.from({ length: layers[l] }).forEach((_, n) => {
//           layer.push({
//             baseX: layerX,
//             baseY: top + ((n + 1) * netHeight) / (layers[l] + 1),
//             x: layerX,
//             y: top + ((n + 1) * netHeight) / (layers[l] + 1),
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 1 - config.movement.speedVariation + Math.random() * config.movement.speedVariation * 2,
//             driftSpeedY: 1 - config.movement.speedVariation + Math.random() * config.movement.speedVariation * 2,
//             scale: 1,
//             highlight: false
//           });
//         });
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach(node => {
//           nodes.current[l + 1].forEach(nextNode => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.connections.width
//             });
//           });
//         });
//       });
//     };

//     const animate = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

//       // Update node positions
//       nodes.current.forEach(layer => layer.forEach(node => {
//         node.driftX += config.movement.baseSpeed * node.driftSpeedX;
//         node.driftY += config.movement.baseSpeed * node.driftSpeedY;
//         node.x = node.baseX + Math.sin(node.driftX) * config.movement.driftRadius;
//         node.y = node.baseY + Math.sin(node.driftY) * config.movement.driftRadius;
//       }));

//       // Draw connections
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.connections.activeWidth : conn.width;
//         ctx.strokeStyle = conn.active ? config.connections.activeColor : config.connections.baseColor;
//         ctx.globalAlpha = config.connections.opacity;
//         ctx.stroke();
//       });

//       // Draw nodes
//       nodes.current.forEach(layer => layer.forEach(node => {
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, config.nodes.radius, 0, Math.PI * 2);
//         ctx.fillStyle = node.highlight ? config.nodes.highlightColor : config.nodes.baseColor;
//         ctx.shadowBlur = config.nodes.glow;
//         ctx.shadowColor = config.nodes.baseColor;
//         ctx.fill();
//       }));

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     setupCanvas();
//     buildNetwork();
//     animationFrameId.current = requestAnimationFrame(animate);

//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       animationFrameId.current && cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []);

//   // ======================
//   // TEXT ANIMATION LOGIC
//   // ======================
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   // ======================
//   // COMPONENT RENDER
//   // ======================
//   return (
//     <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
//       <canvas 
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80"
//       />

//       {/* Content container with vertical adjustment */}
//       <div 
//         className={`text-center max-${config.content.maxWidth} mx-4 relative z-10 px-4`}
//         style={{ marginTop: config.content.verticalOffset }}
//       >
//         <div className="mb-4 flex justify-center items-baseline">
//           <span className="text-xl text-gray-300 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-white">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
//           SACHIN MALLAH
//         </h1>

//         <div className="text-lg text-gray-300 mb-8 space-y-2">
//           <p>Always learning, being creative and playing around with</p>
//           <p>AI models to build something cool!</p>
//         </div>

//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-white/90 text-black rounded-full font-medium border border-white hover:bg-gray-100 hover:border-gray-300 hover:text-black transition-all"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-400/50 text-gray-300 rounded-full font-medium hover:border-white hover:text-white"
//           >
//             Contact
//           </a>
//         </div>

//         <div className="flex justify-center gap-6">
//           {[
//             ['https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx', 'Instagram'],
//             ['https://github.com/SachinMallah', 'GitHub'],
//             ['https://www.linkedin.com/in/sachin-mallah-1b0a3527a', 'LinkedIn']
//           ].map(([href, label]) => (
//             <a 
//               key={href}
//               href={href as string}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-110 transition-transform group"
//               aria-label={label as string}
//             >
//               <svg className="w-7 h-7 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
//                 {/* SVG paths remain same */}
//               </svg>
//             </a>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//           color: white;
//         }
//       `}</style>
//     </section>
//   );
// }






















































































// this is best till now because it has everything

'use client';
import { useEffect, useState, useRef } from 'react';

type NodeType = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  driftSpeedX: number;
  driftSpeedY: number;
  scale: number;
  highlight: boolean;
};

type ConnectionType = {
  from: NodeType;
  to: NodeType;
  active: boolean;
  width: number;
};

export default function Hero() {
  // ======================
  // CONFIGURATION SECTION
  // ======================
  const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
  
  // Neural Network Configuration (Edit these values to customize)
  const config = {
    network: {
      layers: [7, 9, 7, 5],        // Number of nodes in each layer [left to right]
      widthSpread: 0.65,           // Horizontal spread (0-1)
      heightSpread: 0.6,           // Vertical spread (0-1)
    },
    nodes: {
      size: 3.5,                             // Node diameter in pixels
      glow: 100,                             // Glow effect intensity (0 to disable)
      color: 'rgb(255, 255, 255)',         // Node color (RGBA format)
      highlight: 'rgb(255, 255, 255)',     // Active node color
    },
    connections: {
      thickness: 1,                        // Line thickness
      activeThickness: 1.5,                  // Active line thickness
      color: 'rgb(255, 255, 255)',         // Line color
      activeColor: 'rgb(255, 255, 255)',   // Active line color
    },
    animation: {
      driftRadius: 150,             // Movement range from base position
      speed: 0.009,               // Base animation speed (0.0001-0.01)
      speedVariation: 0.3,         // Speed variation between nodes (0-1)
    },
    content: {
      verticalOffset: '-5%',       // Vertical position (-20% to 20%)
      maxWidth: '4xl',             // Text container width (Tailwind class)
    }
  };

  // ======================
  // STATE & REFERENCES
  // ======================
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<NodeType[][]>([]);
  const connections = useRef<ConnectionType[]>([]);
  const animationFrameId = useRef<number>();
  const pixelRatio = useRef(1);

  // ======================
  // CANVAS SETUP & ANIMATION
  // ======================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setupCanvas = () => {
      pixelRatio.current = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      
      canvas.width = width * pixelRatio.current;
      canvas.height = height * pixelRatio.current;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    const buildNetwork = () => {
      nodes.current = [];
      connections.current = [];
      const { widthSpread, heightSpread, layers } = config.network;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const netWidth = width * widthSpread;
      const netHeight = height * heightSpread;
      const left = (width - netWidth) / 2;
      const top = (height - netHeight) / 2;

      layers.forEach((_, l) => {
        const layer: NodeType[] = [];
        const layerX = left + (netWidth * l) / (layers.length - 1);
        
        Array.from({ length: layers[l] }).forEach((_, n) => {
          layer.push({
            baseX: layerX,
            baseY: top + ((n + 1) * netHeight) / (layers[l] + 1),
            x: layerX,
            y: top + ((n + 1) * netHeight) / (layers[l] + 1),
            driftX: Math.random() * Math.PI * 2,
            driftY: Math.random() * Math.PI * 2,
            driftSpeedX: 1 - config.animation.speedVariation + 
                        Math.random() * config.animation.speedVariation * 2,
            driftSpeedY: 1 - config.animation.speedVariation + 
                        Math.random() * config.animation.speedVariation * 2,
            scale: 1,
            highlight: false
          });
        });
        nodes.current.push(layer);
      });

      nodes.current.slice(0, -1).forEach((layer, l) => {
        layer.forEach(node => {
          nodes.current[l + 1].forEach(nextNode => {
            connections.current.push({
              from: node,
              to: nextNode,
              active: false,
              width: config.connections.thickness
            });
          });
        });
      });
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update node positions
      nodes.current.forEach(layer => layer.forEach(node => {
        node.driftX += config.animation.speed * node.driftSpeedX;
        node.driftY += config.animation.speed * node.driftSpeedY;
        node.x = node.baseX + Math.sin(node.driftX) * config.animation.driftRadius;
        node.y = node.baseY + Math.sin(node.driftY) * config.animation.driftRadius;
      }));

      // Draw connections
      connections.current.forEach(conn => {
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.lineWidth = conn.active ? config.connections.activeThickness : conn.width;
        ctx.strokeStyle = conn.active ? config.connections.activeColor : config.connections.color;
        ctx.stroke();
      });

      // Draw nodes
      nodes.current.forEach(layer => layer.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, config.nodes.size, 0, Math.PI * 2);
        ctx.fillStyle = node.highlight ? config.nodes.highlight : config.nodes.color;
        ctx.shadowBlur = config.nodes.glow;
        ctx.shadowColor = config.nodes.color;
        ctx.fill();
      }));

      animationFrameId.current = requestAnimationFrame(animate);
    };

    setupCanvas();
    buildNetwork();
    animationFrameId.current = requestAnimationFrame(animate);

    const handleResize = () => {
      setupCanvas();
      buildNetwork();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      animationFrameId.current && cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // ======================
  // TEXT ANIMATION LOGIC
  // ======================
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typeSpeed = isDeleting ? 50 : 150;
    const pause = isDeleting ? 500 : 1000;

    if (!isDeleting && currentText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, isDeleting, titles]);

  // ======================
  // COMPONENT RENDER
  // ======================
  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        // className="fixed inset-0 w-full h-full pointer-events-none opacity-100"
      />

      {/* Centered Content Container */}
      <div 
        className={`text-center max-${config.content.maxWidth} w-full mx-4 relative z-10`}
        style={{ transform: `translateY(${config.content.verticalOffset})` }}
      >
        {/* Text Animation */}
        <div className="mb-4 flex justify-center items-baseline">
          <span className="text-xl text-gray-300 font-light mr-2">Hi, I'm</span>
          <h2 className="text-2xl font-medium text-green-400">
            {currentText}
            <span className="cursor">|</span>
          </h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
          SACHIN MALLAH
        </h1>

        {/* Description */}
        <div className="text-lg text-gray-300 mb-8 space-y-2 mx-auto max-w-2xl">
          <p>Always learning, being creative and playing around with</p>
          <p>AI models to build something cool!</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 bg-white/90 text-black rounded-full font-medium border border-white hover:bg-gray-100 hover:border-gray-300 hover:text-black transition-all"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-400/50 text-gray-300 rounded-full font-medium hover:border-white hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            ['https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx', 'Instagram'],
            ['https://github.com/SachinMallah', 'GitHub'],
            ['https://www.linkedin.com/in/sachin-mallah-1b0a3527a', 'LinkedIn']
          ].map(([href, label]) => (
            <a 
              key={href}
              href={href as string}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label={label as string}
            >
              <svg className="w-7 h-7 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                {label === 'Instagram' && (
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                )}
                {label === 'GitHub' && (
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                )}
                {label === 'LinkedIn' && (
                  <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          animation: blink 1s infinite;
          margin-left: 2px;
          color: white;
        }
      `}</style>
    </section>
  );
}






































































// 'use client';
// import { useEffect, useState, useRef } from 'react';

// type NodeType = {
//   baseX: number;
//   baseY: number;
//   x: number;
//   y: number;
//   driftX: number;
//   driftY: number;
//   driftSpeedX: number;
//   driftSpeedY: number;
//   scale: number;
//   highlight: boolean;
// };

// type ConnectionType = {
//   from: NodeType;
//   to: NodeType;
//   active: boolean;
//   width: number;
// };

// export default function Hero() {
//   // ======================
//   // CONFIGURATION SECTION
//   // ======================
//   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
  
//   // Neural Network Configuration (Edit these values to customize)
//   const config = {
//     network: {
//       layers: [7, 9, 7, 5],        // Number of nodes in each layer [left to right]
//       widthSpread: 0.65,           // Horizontal spread (0-1)
//       heightSpread: 0.6,           // Vertical spread (0-1)
//     },
//     nodes: {
//       size: 3.5,                             // Node diameter in pixels
//       glow: 0,                               // No glow effect
//       color: 'rgba(255, 255, 255, 1)',      // Fully opaque white nodes
//       highlight: 'rgba(255, 255, 255, 1)',  // Fully opaque white for highlights
//     },
//     connections: {
//       thickness: 1,                          // Line thickness
//       activeThickness: 1.5,                  // Active line thickness
//       color: 'rgba(255, 255, 255, 0.6)',    // Semi-transparent white lines
//       activeColor: 'rgba(255, 255, 255, 1)', // Fully opaque active lines
//     },
//     animation: {
//       driftRadius: 150,             // Movement range from base position
//       speed: 0.0008,               // Base animation speed (0.0001-0.01)
//       speedVariation: 0.3,         // Speed variation between nodes (0-1)
//     },
//     content: {
//       verticalOffset: '-5%',       // Vertical position (-20% to 20%)
//       maxWidth: '4xl',             // Text container width (Tailwind class)
//     }
//   };

//   // ======================
//   // STATE & REFERENCES
//   // ======================
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const nodes = useRef<NodeType[][]>([]);
//   const connections = useRef<ConnectionType[]>([]);
//   const animationFrameId = useRef<number>();
//   const pixelRatio = useRef(1);

//   // ======================
//   // CANVAS SETUP & ANIMATION
//   // ======================
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const setupCanvas = () => {
//       pixelRatio.current = window.devicePixelRatio || 1;
//       const { width, height } = canvas.getBoundingClientRect();
      
//       canvas.width = width * pixelRatio.current;
//       canvas.height = height * pixelRatio.current;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
//       ctx.imageSmoothingEnabled = true;
//     };

//     const buildNetwork = () => {
//       nodes.current = [];
//       connections.current = [];
//       const { widthSpread, heightSpread, layers } = config.network;
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const netWidth = width * widthSpread;
//       const netHeight = height * heightSpread;
//       const left = (width - netWidth) / 2;
//       const top = (height - netHeight) / 2;

//       layers.forEach((_, l) => {
//         const layer: NodeType[] = [];
//         const layerX = left + (netWidth * l) / (layers.length - 1);
        
//         Array.from({ length: layers[l] }).forEach((_, n) => {
//           layer.push({
//             baseX: layerX,
//             baseY: top + ((n + 1) * netHeight) / (layers[l] + 1),
//             x: layerX,
//             y: top + ((n + 1) * netHeight) / (layers[l] + 1),
//             driftX: Math.random() * Math.PI * 2,
//             driftY: Math.random() * Math.PI * 2,
//             driftSpeedX: 1 - config.animation.speedVariation + 
//                         Math.random() * config.animation.speedVariation * 2,
//             driftSpeedY: 1 - config.animation.speedVariation + 
//                         Math.random() * config.animation.speedVariation * 2,
//             scale: 1,
//             highlight: false
//           });
//         });
//         nodes.current.push(layer);
//       });

//       nodes.current.slice(0, -1).forEach((layer, l) => {
//         layer.forEach(node => {
//           nodes.current[l + 1].forEach(nextNode => {
//             connections.current.push({
//               from: node,
//               to: nextNode,
//               active: false,
//               width: config.connections.thickness
//             });
//           });
//         });
//       });
//     };

//     const animate = () => {
//       if (!ctx) return;
      
//       // Clear the entire canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Reset all shadow and composite settings to ensure stability
//       ctx.shadowBlur = 0;
//       ctx.shadowColor = 'transparent';
//       ctx.globalCompositeOperation = 'source-over';
//       ctx.globalAlpha = 1.0;

//       // Update node positions
//       nodes.current.forEach(layer => layer.forEach(node => {
//         node.driftX += config.animation.speed * node.driftSpeedX;
//         node.driftY += config.animation.speed * node.driftSpeedY;
//         node.x = node.baseX + Math.sin(node.driftX) * config.animation.driftRadius;
//         node.y = node.baseY + Math.sin(node.driftY) * config.animation.driftRadius;
//       }));

//       // Draw connections first (behind nodes)
//       connections.current.forEach(conn => {
//         ctx.beginPath();
//         ctx.moveTo(conn.from.x, conn.from.y);
//         ctx.lineTo(conn.to.x, conn.to.y);
//         ctx.lineWidth = conn.active ? config.connections.activeThickness : conn.width;
//         ctx.strokeStyle = conn.active ? config.connections.activeColor : config.connections.color;
//         ctx.stroke();
//       });

//       // Draw nodes on top of connections
//       nodes.current.forEach(layer => layer.forEach(node => {
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, config.nodes.size, 0, Math.PI * 2);
//         ctx.fillStyle = node.highlight ? config.nodes.highlight : config.nodes.color;
//         ctx.fill();
//       }));

//       animationFrameId.current = requestAnimationFrame(animate);
//     };

//     setupCanvas();
//     buildNetwork();
//     animate();

//     const handleResize = () => {
//       setupCanvas();
//       buildNetwork();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []);

//   // ======================
//   // TEXT ANIMATION LOGIC
//   // ======================
//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   // ======================
//   // COMPONENT RENDER
//   // ======================
//   return (
//     <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
//       <canvas 
//         ref={canvasRef}
//         className="fixed inset-0 w-full h-full pointer-events-none"
//         style={{ 
//           opacity: 1,           // Full opacity - no fading
//           visibility: 'visible', // Always visible
//           zIndex: 1             // Behind content but visible
//         }}
//       />

//       {/* Centered Content Container */}
//       <div 
//         className={`text-center max-${config.content.maxWidth} w-full mx-4 relative z-10`}
//         style={{ transform: `translateY(${config.content.verticalOffset})` }}
//       >
//         {/* Text Animation */}
//         <div className="mb-4 flex justify-center items-baseline">
//           <span className="text-xl text-gray-300 font-light mr-2">Hi, I'm</span>
//           <h2 className="text-2xl font-medium text-green-400">
//             {currentText}
//             <span className="cursor">|</span>
//           </h2>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
//           SACHIN MALLAH
//         </h1>

//         {/* Description */}
//         <div className="text-lg text-gray-300 mb-8 space-y-2 mx-auto max-w-2xl">
//           <p>Always learning, being creative and playing around with</p>
//           <p>AI models to build something cool!</p>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           <a
//             href="/cv.pdf"
//             download
//             className="px-8 py-3 bg-white/90 text-black rounded-full font-medium border border-white hover:bg-gray-100 hover:border-gray-300 hover:text-black transition-all"
//           >
//             Download CV
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border-2 border-gray-400/50 text-gray-300 rounded-full font-medium hover:border-white hover:text-white transition-colors"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-6 mt-8">
//           {[
//             ['https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx', 'Instagram'],
//             ['https://github.com/SachinMallah', 'GitHub'],
//             ['https://www.linkedin.com/in/sachin-mallah-1b0a3527a', 'LinkedIn']
//           ].map(([href, label]) => (
//             <a 
//               key={href}
//               href={href as string}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-110 transition-transform duration-300"
//               aria-label={label as string}
//             >
//               <svg className="w-7 h-7 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
//                 {label === 'Instagram' && (
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 )}
//                 {label === 'GitHub' && (
//                   <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//                 )}
//                 {label === 'LinkedIn' && (
//                   <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//                 )}
//               </svg>
//             </a>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         .cursor {
//           animation: blink 1s infinite;
//           margin-left: 2px;
//           color: white;
//         }
//       `}</style>
//     </section>
//   );
// }

















































































































































































































































































// // 'use client';
// // import { useEffect, useState, useRef } from 'react';

// // type NodeType = {
// //   baseX: number;
// //   baseY: number;
// //   x: number;
// //   y: number;
// //   driftX: number;
// //   driftY: number;
// //   driftSpeedX: number;
// //   driftSpeedY: number;
// //   scale: number;
// //   pulse: number;
// //   pulseActive: boolean;
// //   pulseStart: number;
// //   highlight: boolean;
// // };

// // type ConnectionType = {
// //   from: NodeType;
// //   to: NodeType;
// //   active: boolean;
// //   width: number;
// //   pulse: number;
// // };

// // export default function Hero() {
// //   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
// //   const [currentText, setCurrentText] = useState('');
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   // Updated color config for dark theme
// //   const config = {
// //     layers: [9, 9, 9, 9],
// //     nodeRadius: 4,
// //     nodeGlow: 44,
// //     lineWidth: 1.2,
// //     lineActiveWidth: 1.5,
// //     hoverRadius: 4,
// //     driftRadius: 100,
// //     driftSpeed: 0.001,
// //     pulseDuration: 100,
// //     pulseColor: 'rgba(255,255,255,0.14)',
// //     idleColor: 'rgba(255,255,255,0.82)',
// //     activeColor: 'rgba(255,255,255,1)',
// //     highlightColor: 'rgba(255,255,255,0.95)',
// //     particleColor: 'rgba(255,255,255,0.15)',
// //     particleCount: 14,
// //     particleSpeed: 6,
// //     particleSize: 2.5
// //   };

// //   const nodes = useRef<NodeType[][]>([]);
// //   const connections = useRef<ConnectionType[]>([]);
// //   const particles = useRef<any[]>([]);
// //   const hoveredNode = useRef<NodeType | null>(null);
// //   const animationFrameId = useRef<number>();
// //   const pixelRatio = useRef(1);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext('2d');
// //     if (!ctx) return;

// //     const setupCanvas = () => {
// //       pixelRatio.current = window.devicePixelRatio || 1;
// //       const width = window.innerWidth;
// //       const height = window.innerHeight;

// //       canvas.width = width * pixelRatio.current;
// //       canvas.height = height * pixelRatio.current;
// //       canvas.style.width = `${width}px`;
// //       canvas.style.height = `${height}px`;

// //       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
// //       ctx.imageSmoothingEnabled = false;
// //     };

// //     const buildNetwork = () => {
// //       nodes.current = [];
// //       connections.current = [];
// //       const width = window.innerWidth;
// //       const height = window.innerHeight;
// //       const netWidth = width * 0.65;
// //       const netHeight = height * 0.7;
// //       const left = (width - netWidth) / 2;
// //       const top = (height - netHeight) / 2;

// //       config.layers.forEach((_, l) => {
// //         const layer: NodeType[] = [];
// //         const layerX = left + (netWidth * l) / (config.layers.length - 1);
        
// //         Array.from({ length: config.layers[l] }).forEach((_, n) => {
// //           const y = top + ((n + 1) * netHeight) / (config.layers[l] + 1);
// //           layer.push({
// //             baseX: layerX,
// //             baseY: y,
// //             x: layerX,
// //             y: y,
// //             driftX: Math.random() * Math.PI * 2,
// //             driftY: Math.random() * Math.PI * 2,
// //             driftSpeedX: 0.5 + Math.random(),
// //             driftSpeedY: 0.5 + Math.random(),
// //             scale: 1,
// //             pulse: 0,
// //             pulseActive: false,
// //             pulseStart: 0,
// //             highlight: false
// //           });
// //         });
// //         nodes.current.push(layer);
// //       });

// //       nodes.current.slice(0, -1).forEach((layer, l) => {
// //         layer.forEach(node => {
// //           nodes.current[l + 1].forEach(nextNode => {
// //             connections.current.push({
// //               from: node,
// //               to: nextNode,
// //               active: false,
// //               width: config.lineWidth,
// //               pulse: 0
// //             });
// //           });
// //         });
// //       });
// //     };

// //     const animate = () => {
// //       if (!ctx) return;
// //       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

// //       nodes.current.forEach(layer => {
// //         layer.forEach(node => {
// //           node.driftX += config.driftSpeed * node.driftSpeedX;
// //           node.driftY += config.driftSpeed * node.driftSpeedY;
// //           node.x = node.baseX + Math.sin(node.driftX) * config.driftRadius;
// //           node.y = node.baseY + Math.sin(node.driftY) * config.driftRadius;

// //           if (node.pulseActive) {
// //             const t = (performance.now() - node.pulseStart) / config.pulseDuration;
// //             node.pulse = Math.max(0, 1 - t);
// //             if (t > 1) node.pulseActive = false;
// //           }
// //         });
// //       });

// //       connections.current.forEach(conn => {
// //         ctx.beginPath();
// //         ctx.moveTo(conn.from.x, conn.from.y);
// //         ctx.lineTo(conn.to.x, conn.to.y);
// //         ctx.lineWidth = conn.active ? config.lineActiveWidth : config.lineWidth;
// //         ctx.strokeStyle = conn.active ? config.activeColor : config.idleColor;
// //         ctx.globalAlpha = conn.active ? 1 : 0.28;
// //         ctx.shadowBlur = conn.active ? 6 : 0;
// //         ctx.shadowColor = conn.active ? config.activeColor : 'transparent';
// //         ctx.stroke();

// //         if (conn.pulse > 0) {
// //           const t = conn.pulse;
// //           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
// //           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
// //           ctx.beginPath();
// //           ctx.arc(px, py, 7 * t + 2, 0, Math.PI * 2);
// //           ctx.fillStyle = config.pulseColor;
// //           ctx.globalAlpha = t;
// //           ctx.fill();
// //           conn.pulse = Math.max(0, conn.pulse - 0.025);
// //         }
// //       });

// //       nodes.current.forEach(layer => {
// //         layer.forEach(node => {
// //           ctx.beginPath();
// //           ctx.arc(
// //             node.x,
// //             node.y,
// //             config.nodeRadius + node.pulse * config.nodeGlow,
// //             0,
// //             Math.PI * 2
// //           );
// //           ctx.fillStyle = node.highlight ? config.highlightColor : config.idleColor;
// //           ctx.shadowBlur = node.highlight ? 20 : 0;
// //           ctx.shadowColor = node.highlight ? config.activeColor : 'transparent';
// //           ctx.fill();

// //           if (node.pulse > 0) {
// //             ctx.beginPath();
// //             ctx.arc(
// //               node.x,
// //               node.y,
// //               config.nodeRadius + node.pulse * 35,
// //               0,
// //               Math.PI * 2
// //             );
// //             ctx.strokeStyle = config.pulseColor;
// //             ctx.lineWidth = 2 + node.pulse * 4;
// //             ctx.globalAlpha = node.pulse * 0.5;
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       animationFrameId.current = requestAnimationFrame(animate);
// //     };

// //     setupCanvas();
// //     buildNetwork();
// //     animationFrameId.current = requestAnimationFrame(animate);

// //     const handleResize = () => {
// //       setupCanvas();
// //       buildNetwork();
// //     };

// //     window.addEventListener('resize', handleResize);
// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const currentTitle = titles[currentIndex];
// //     const typeSpeed = isDeleting ? 50 : 150;
// //     const pause = isDeleting ? 500 : 1000;

// //     if (!isDeleting && currentText === currentTitle) {
// //       const timeout = setTimeout(() => setIsDeleting(true), pause);
// //       return () => clearTimeout(timeout);
// //     } else if (isDeleting && currentText === '') {
// //       setIsDeleting(false);
// //       setCurrentIndex((prev) => (prev + 1) % titles.length);
// //     } else {
// //       const timeout = setTimeout(() => {
// //         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
// //       }, typeSpeed);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [currentText, currentIndex, isDeleting, titles]);

// //   return (
// //     <section className="relative h-screen flex items-center justify-center bg-black">
// //       <canvas 
// //         ref={canvasRef}
// //         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-80"
// //       />
      
// //       <div className="text-center max-w-2xl mx-4 relative z-10">
// //         <div className="mb-2 flex justify-center items-baseline">
// //           <span className="text-xl text-gray-300 font-light mr-2">Hi, I'm</span>
// //           <h2 className="text-2xl font-medium text-green-400">
// //             {currentText}
// //             <span className="cursor">|</span>
// //           </h2>
// //         </div>

// //         <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2 text-gray-100">
// //           SACHIN MALLAH
// //         </h1>

// //         <div className="text-lg text-gray-300 mb-8">
// //           <p>Always learning, being creative and playing around with</p>
// //           <p className="my-1">AI models to build something cool!</p>
// //         </div>

// //         <div className="flex justify-center gap-4 mb-8">
// //           <a
// //             href="/cv.pdf"
// //             download
// //             className="px-8 py-3 bg-gray-100 text-black rounded-full font-medium border border-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-400 transition-all duration-300"
// //           >
// //             Download CV
// //           </a>
// //           <a
// //             href="#contact"
// //             className="px-8 py-3 border-2 border-gray-500 text-gray-100 rounded-full font-medium hover:border-gray-300 hover:text-gray-300 transition-colors"
// //           >
// //             Contact
// //           </a>
// //         </div>

// //         <div className="flex justify-center gap-6">
// //           <a href="https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
// // //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// // //               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
// // //             </svg>
// // //           </a>
// // //           <a href="https://github.com/SachinMallah" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
// // //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// // //               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
// // //             </svg>
// // //           </a>
// // //           <a href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
// // //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// // //               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
// // //             </svg>
// // //           </a>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         @keyframes blink {
// // //           0%, 100% { opacity: 1; }
// // //           50% { opacity: 0; }
// // //         }
// // //         .cursor {
// // //           animation: blink 1s infinite;
// // //           margin-left: 2px;
// // //           color: #4ade80; /* Matching the green-400 color */
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }































// // 'use client';
// // import { useEffect, useState, useRef } from 'react';

// // type NodeType = {
// //   baseX: number;
// //   baseY: number;
// //   x: number;
// //   y: number;
// //   driftX: number;
// //   driftY: number;
// //   driftSpeedX: number;
// //   driftSpeedY: number;
// //   scale: number;
// //   pulse: number;
// //   pulseActive: boolean;
// //   pulseStart: number;
// //   highlight: boolean;
// // };

// // type ConnectionType = {
// //   from: NodeType;
// //   to: NodeType;
// //   active: boolean;
// //   width: number;
// //   pulse: number;
// // };

// // // Extracted neural network config for easy customization
// // const NEURAL_NET_CONFIG = {
// //   layers: [7, 7, 7, 7], // Adjust number of nodes per layer
// //   nodeRadius: 3.5,
// //   nodeGlow: 40,
// //   lineWidth: 1.1,
// //   lineActiveWidth: 1.4,
// //   hoverRadius: 4,
// //   driftRadius: 85,
// //   driftSpeed: 0.0009,
// //   pulseDuration: 90,
// //   colors: {
// //     pulse: 'rgba(163, 230, 53, 0.12)', // Green-400 with opacity
// //     idle: 'rgba(255, 255, 255, 0.72)',
// //     active: 'rgba(163, 230, 53, 0.9)', // Green-400
// //     highlight: 'rgba(163, 230, 53, 1)', // Green-400
// //     particle: 'rgba(255, 255, 255, 0.12)'
// //   },
// //   particleCount: 12,
// //   particleSpeed: 5.5,
// //   particleSize: 2.2
// // };

// // export default function Hero() {
// //   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
// //   const [currentText, setCurrentText] = useState('');
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   const nodes = useRef<NodeType[][]>([]);
// //   const connections = useRef<ConnectionType[]>([]);
// //   const particles = useRef<any[]>([]);
// //   const hoveredNode = useRef<NodeType | null>(null);
// //   const animationFrameId = useRef<number>();
// //   const pixelRatio = useRef(1);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext('2d');
// //     if (!ctx) return;

// //     const setupCanvas = () => {
// //       pixelRatio.current = window.devicePixelRatio || 1;
// //       const width = window.innerWidth;
// //       const height = window.innerHeight;

// //       canvas.width = width * pixelRatio.current;
// //       canvas.height = height * pixelRatio.current;
// //       canvas.style.width = `${width}px`;
// //       canvas.style.height = `${height}px`;

// //       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
// //       ctx.imageSmoothingEnabled = false;
// //     };

// //     const buildNetwork = () => {
// //       nodes.current = [];
// //       connections.current = [];
// //       const width = window.innerWidth;
// //       const height = window.innerHeight;
// //       const netWidth = width * 0.7;
// //       const netHeight = height * 0.6;
// //       const left = (width - netWidth) / 2;
// //       const top = (height - netHeight) / 2;

// //       NEURAL_NET_CONFIG.layers.forEach((_, l) => {
// //         const layer: NodeType[] = [];
// //         const layerX = left + (netWidth * l) / (NEURAL_NET_CONFIG.layers.length - 1);
        
// //         Array.from({ length: NEURAL_NET_CONFIG.layers[l] }).forEach((_, n) => {
// //           const y = top + ((n + 1) * netHeight) / (NEURAL_NET_CONFIG.layers[l] + 1);
// //           layer.push({
// //             baseX: layerX,
// //             baseY: y,
// //             x: layerX,
// //             y: y,
// //             driftX: Math.random() * Math.PI * 2,
// //             driftY: Math.random() * Math.PI * 2,
// //             driftSpeedX: 0.5 + Math.random(),
// //             driftSpeedY: 0.5 + Math.random(),
// //             scale: 1,
// //             pulse: 0,
// //             pulseActive: false,
// //             pulseStart: 0,
// //             highlight: false
// //           });
// //         });
// //         nodes.current.push(layer);
// //       });

// //       nodes.current.slice(0, -1).forEach((layer, l) => {
// //         layer.forEach(node => {
// //           nodes.current[l + 1].forEach(nextNode => {
// //             connections.current.push({
// //               from: node,
// //               to: nextNode,
// //               active: false,
// //               width: NEURAL_NET_CONFIG.lineWidth,
// //               pulse: 0
// //             });
// //           });
// //         });
// //       });
// //     };

// //     const animate = () => {
// //       if (!ctx) return;
// //       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

// //       nodes.current.forEach(layer => {
// //         layer.forEach(node => {
// //           node.driftX += NEURAL_NET_CONFIG.driftSpeed * node.driftSpeedX;
// //           node.driftY += NEURAL_NET_CONFIG.driftSpeed * node.driftSpeedY;
// //           node.x = node.baseX + Math.sin(node.driftX) * NEURAL_NET_CONFIG.driftRadius;
// //           node.y = node.baseY + Math.sin(node.driftY) * NEURAL_NET_CONFIG.driftRadius;

// //           if (node.pulseActive) {
// //             const t = (performance.now() - node.pulseStart) / NEURAL_NET_CONFIG.pulseDuration;
// //             node.pulse = Math.max(0, 1 - t);
// //             if (t > 1) node.pulseActive = false;
// //           }
// //         });
// //       });

// //       connections.current.forEach(conn => {
// //         ctx.beginPath();
// //         ctx.moveTo(conn.from.x, conn.from.y);
// //         ctx.lineTo(conn.to.x, conn.to.y);
// //         ctx.lineWidth = conn.active ? NEURAL_NET_CONFIG.lineActiveWidth : NEURAL_NET_CONFIG.lineWidth;
// //         ctx.strokeStyle = conn.active ? NEURAL_NET_CONFIG.colors.active : NEURAL_NET_CONFIG.colors.idle;
// //         ctx.globalAlpha = conn.active ? 0.9 : 0.24;
// //         ctx.shadowBlur = conn.active ? 5 : 0;
// //         ctx.shadowColor = conn.active ? NEURAL_NET_CONFIG.colors.active : 'transparent';
// //         ctx.stroke();

// //         if (conn.pulse > 0) {
// //           const t = conn.pulse;
// //           const px = conn.from.x + (conn.to.x - conn.from.x) * t;
// //           const py = conn.from.y + (conn.to.y - conn.from.y) * t;
// //           ctx.beginPath();
// //           ctx.arc(px, py, 6 * t + 2, 0, Math.PI * 2);
// //           ctx.fillStyle = NEURAL_NET_CONFIG.colors.pulse;
// //           ctx.globalAlpha = t;
// //           ctx.fill();
// //           conn.pulse = Math.max(0, conn.pulse - 0.02);
// //         }
// //       });

// //       nodes.current.forEach(layer => {
// //         layer.forEach(node => {
// //           ctx.beginPath();
// //           ctx.arc(
// //             node.x,
// //             node.y,
// //             NEURAL_NET_CONFIG.nodeRadius + node.pulse * NEURAL_NET_CONFIG.nodeGlow,
// //             0,
// //             Math.PI * 2
// //           );
// //           ctx.fillStyle = node.highlight ? NEURAL_NET_CONFIG.colors.highlight : NEURAL_NET_CONFIG.colors.idle;
// //           ctx.shadowBlur = node.highlight ? 18 : 0;
// //           ctx.shadowColor = node.highlight ? NEURAL_NET_CONFIG.colors.active : 'transparent';
// //           ctx.fill();

// //           if (node.pulse > 0) {
// //             ctx.beginPath();
// //             ctx.arc(
// //               node.x,
// //               node.y,
// //               NEURAL_NET_CONFIG.nodeRadius + node.pulse * 32,
// //               0,
// //               Math.PI * 2
// //             );
// //             ctx.strokeStyle = NEURAL_NET_CONFIG.colors.pulse;
// //             ctx.lineWidth = 1.8 + node.pulse * 3.8;
// //             ctx.globalAlpha = node.pulse * 0.45;
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       animationFrameId.current = requestAnimationFrame(animate);
// //     };

// //     setupCanvas();
// //     buildNetwork();
// //     animationFrameId.current = requestAnimationFrame(animate);

// //     const handleResize = () => {
// //       setupCanvas();
// //       buildNetwork();
// //     };

// //     window.addEventListener('resize', handleResize);
// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const currentTitle = titles[currentIndex];
// //     const typeSpeed = isDeleting ? 50 : 150;
// //     const pause = isDeleting ? 500 : 1000;

// //     if (!isDeleting && currentText === currentTitle) {
// //       const timeout = setTimeout(() => setIsDeleting(true), pause);
// //       return () => clearTimeout(timeout);
// //     } else if (isDeleting && currentText === '') {
// //       setIsDeleting(false);
// //       setCurrentIndex((prev) => (prev + 1) % titles.length);
// //     } else {
// //       const timeout = setTimeout(() => {
// //         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
// //       }, typeSpeed);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [currentText, currentIndex, isDeleting, titles]);

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center bg-black">
// //       <canvas 
// //         ref={canvasRef}
// //         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-90"
// //       />
      
// //       <div className="text-center px-4 relative z-10 w-full max-w-4xl">
// //         <div className="mb-3 flex justify-center items-baseline">
// //           <span className="text-lg text-gray-300 font-light mr-2">Hi, I'm</span>
// //           <h2 className="text-xl font-medium text-green-400">
// //             {currentText}
// //             <span className="cursor">|</span>
// //           </h2>
// //         </div>

// //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-100 px-4">
// //           SACHIN MALLAH
// //         </h1>

// //         <div className="text-base md:text-lg text-gray-300 mb-8 mx-auto max-w-2xl">
// //           <p className="mb-2">Always learning, being creative and playing around with</p>
// //           <p>AI models to build something cool!</p>
// //         </div>

// //         <div className="flex justify-center gap-4 mb-8 flex-wrap">
// //           <a
// //             href="/cv.pdf"
// //             download
// //             className="px-6 py-2.5 bg-gray-100 text-black rounded-full font-medium border border-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-400 transition-all duration-300 text-sm md:px-8 md:py-3 md:text-base"
// //           >
// //             Download CV
// //           </a>
// //           <a
// //             href="#contact"
// //             className="px-6 py-2.5 border-2 border-gray-500 text-gray-100 rounded-full font-medium hover:border-gray-300 hover:text-gray-300 transition-colors text-sm md:px-8 md:py-3 md:text-base"
// //           >
// //             Contact
// //           </a>
// //         </div>

// //         <div className="flex justify-center gap-6">
// //           {/* Social Icons remain same */}
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes blink {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0; }
// //         }
// //         .cursor {
// //           animation: blink 1s infinite;
// //           margin-left: 2px;
// //           color: #4ade80;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }










































// // code without neural animation
// // 'use client';
// // import { useEffect, useState } from 'react';

// // // Configuration object for easy customization
// // const HERO_CONFIG = {
// //   titles: ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'],
// //   colors: {
// //     primary: '#a3e635',    // Green-400
// //     secondary: '#d1d5db',  // Gray-300
// //     background: '#000000'  // Black
// //   },
// //   typography: {
// //     heading: 'text-4xl md:text-5xl lg:text-6xl',
// //     subtitle: 'text-lg md:text-xl',
// //     body: 'text-base md:text-lg'
// //   },
// //   spacing: {
// //     verticalPadding: 'py-24',      // Adjust vertical spacing
// //     elementGap: 'gap-4',           // Between elements
// //     buttonPadding: 'px-8 py-3'     // Button sizing
// //   },
// //   animations: {
// //     typeSpeed: {
// //       write: 150,
// //       delete: 50,
// //       pause: 1000
// //     }
// //   }
// // };

// // export default function Hero() {
// //   const [currentText, setCurrentText] = useState('');
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);

// //   useEffect(() => {
// //     const currentTitle = HERO_CONFIG.titles[currentIndex];
// //     const typeSpeed = isDeleting ? HERO_CONFIG.animations.typeSpeed.delete : HERO_CONFIG.animations.typeSpeed.write;
// //     const pause = HERO_CONFIG.animations.typeSpeed.pause;

// //     if (!isDeleting && currentText === currentTitle) {
// //       const timeout = setTimeout(() => setIsDeleting(true), pause);
// //       return () => clearTimeout(timeout);
// //     } else if (isDeleting && currentText === '') {
// //       setIsDeleting(false);
// //       setCurrentIndex((prev) => (prev + 1) % HERO_CONFIG.titles.length);
// //     } else {
// //       const timeout = setTimeout(() => {
// //         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
// //       }, typeSpeed);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [currentText, currentIndex, isDeleting]);

// //   return (
// //     <section className={`relative min-h-screen flex items-center justify-center bg-[${HERO_CONFIG.colors.background}]`}>
// //       <div className={`text-center px-4 w-full max-w-3xl ${HERO_CONFIG.spacing.verticalPadding}`}>
// //         {/* Title Section */}
// //         <div className={`flex flex-col ${HERO_CONFIG.spacing.elementGap} items-center`}>
// //           <div className={`flex ${HERO_CONFIG.spacing.elementGap} items-center mb-2`}>
// //             <span className={`${HERO_CONFIG.typography.subtitle} text-[${HERO_CONFIG.colors.secondary}]`}>
// //               Hi, I'm
// //             </span>
// //             <h2 className={`${HERO_CONFIG.typography.subtitle} font-medium text-[${HERO_CONFIG.colors.primary}]`}>
// //               {currentText}
// //               <span className="cursor">|</span>
// //             </h2>
// //           </div>

// //           <h1 className={`${HERO_CONFIG.typography.heading} font-bold text-[${HERO_CONFIG.colors.secondary}]`}>
// //             SACHIN MALLAH
// //           </h1>
// //         </div>

// //         {/* Description Text */}
// //         <div className={`${HERO_CONFIG.typography.body} text-[${HERO_CONFIG.colors.secondary}] my-8 mx-auto max-w-xl`}>
// //           <p>Always learning, being creative and playing around with</p>
// //           <p className="mt-2">AI models to build something cool!</p>
// //         </div>

// //         {/* Action Buttons */}
// //         <div className={`flex justify-center ${HERO_CONFIG.spacing.elementGap} flex-wrap mb-8`}>
// //           <a
// //             href="/cv.pdf"
// //             download
// //             className={`${HERO_CONFIG.spacing.buttonPadding} bg-[${HERO_CONFIG.colors.secondary}] text-[${HERO_CONFIG.colors.background}] rounded-full font-medium border border-transparent hover:bg-transparent hover:text-[${HERO_CONFIG.colors.secondary}] hover:border-[${HERO_CONFIG.colors.secondary}] transition-all`}
// //           >
// //             Download CV
// // //           </a>
// // //           <a
// // //             href="#contact"
// // //             className={`${HERO_CONFIG.spacing.buttonPadding} border-2 text-[${HERO_CONFIG.colors.secondary}] border-[${HERO_CONFIG.colors.primary}] rounded-full font-medium hover:border-[${HERO_CONFIG.colors.secondary}] hover:text-[${HERO_CONFIG.colors.secondary}] transition-colors`}
// // //           >
// // //             Contact
// // //           </a>
// // //         </div>

// // //         {/* Social Links */}
// // //         <div className={`flex justify-center ${HERO_CONFIG.spacing.elementGap}`}>
// // //           {/* Social icons remain same */}
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         @keyframes blink {
// // //           0%, 100% { opacity: 1; }
// // //           50% { opacity: 0; }
// // //         }
// // //         .cursor {
// // //           animation: blink 1s infinite;
// // //           margin-left: 2px;
// // //           color: ${HERO_CONFIG.colors.primary};
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }






















// // 'use client';
// // import { useEffect, useState, useRef } from 'react';

// // type NodeType = {
// //   baseX: number;
// //   baseY: number;
// //   x: number;
// //   y: number;
// //   driftX: number;
// //   driftY: number;
// //   driftSpeedX: number;
// //   driftSpeedY: number;
// //   scale: number;
// //   pulse: number;
// //   pulseActive: boolean;
// //   pulseStart: number;
// // };

// // type ConnectionType = {
// //   from: NodeType;
// //   to: NodeType;
// //   width: number;
// //   pulse: number;
// // };

// // const NEURAL_CONFIG = {
// //   layers: [7, 7, 7, 7],
// //   nodeRadius: 2.5,
// //   lineWidth: 0.8,
// //   driftRadius: 60,
// //   driftSpeed: 0.0007,
// //   colors: {
// //     node: 'rgba(163, 230, 53, 0.7)',  // green-400
// //     line: 'rgba(163, 230, 53, 0.12)',
// //     pulse: 'rgba(163, 230, 53, 0.2)'
// //   }
// // };

// // export default function Hero() {
// //   const titles = ['Machine learning engineer', 'Full Stack Web Developer', 'Business Enthusiast', 'INNOVATOR'];
// //   const [currentText, setCurrentText] = useState('');
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const canvasRef = useRef<HTMLCanvasElement>(null);
// //   const nodes = useRef<NodeType[][]>([]);
// //   const connections = useRef<ConnectionType[]>([]);
// //   const animationFrameId = useRef<number>();

// //   // Neural network initialization
// //   useEffect(() => {
// //     const initNetwork = () => {
// //       const canvas = canvasRef.current;
// //       if (!canvas) return;
      
// //       const ctx = canvas.getContext('2d');
// //       if (!ctx) return;

// //       const setup = () => {
// //         const dpr = window.devicePixelRatio || 1;
// //         const width = window.innerWidth;
// //         const height = window.innerHeight;

// //         canvas.width = width * dpr;
// //         canvas.height = height * dpr;
// //         canvas.style.width = `${width}px`;
// //         canvas.style.height = `${height}px`;
// //         ctx.scale(dpr, dpr);
// //       };

// //       const createNodes = () => {
// //         nodes.current = [];
// //         const centerY = window.innerHeight / 2;
// //         const layerSpacing = window.innerWidth / (NEURAL_CONFIG.layers.length + 1);

// //         NEURAL_CONFIG.layers.forEach((count, i) => {
// //           const layer = [];
// //           const x = layerSpacing * (i + 1);
// //           const nodeSpacing = window.innerHeight / (count + 1);

// //           for (let j = 0; j < count; j++) {
// //             layer.push({
// //               baseX: x,
// //               baseY: nodeSpacing * (j + 1),
// //               x: x,
// //               y: nodeSpacing * (j + 1),
// //               driftX: Math.random() * Math.PI * 2,
// //               driftY: Math.random() * Math.PI * 2,
// //               driftSpeedX: 0.3 + Math.random() * 0.7,
// //               driftSpeedY: 0.3 + Math.random() * 0.7,
// //               scale: 1,
// //               pulse: 0,
// //               pulseActive: false,
// //               pulseStart: 0
// //             });
// //           }
// //           nodes.current.push(layer);
// //         });
// //       };

// //       const createConnections = () => {
// //         connections.current = [];
// //         nodes.current.slice(0, -1).forEach((layer, i) => {
// //           layer.forEach(node => {
// //             nodes.current[i + 1].forEach(nextNode => {
// //               connections.current.push({
// //                 from: node,
// //                 to: nextNode,
// //                 width: NEURAL_CONFIG.lineWidth,
// //                 pulse: 0
// //               });
// //             });
// //           });
// //         });
// //       };

// //       const animate = () => {
// //         const ctx = canvas?.getContext('2d');
// //         if (!ctx) return;

// //         ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

// //         // Update node positions
// //         nodes.current.forEach(layer => layer.forEach(node => {
// //           node.driftX += NEURAL_CONFIG.driftSpeed * node.driftSpeedX;
// //           node.driftY += NEURAL_CONFIG.driftSpeed * node.driftSpeedY;
// //           node.x = node.baseX + Math.sin(node.driftX) * NEURAL_CONFIG.driftRadius;
// //           node.y = node.baseY + Math.cos(node.driftY) * NEURAL_CONFIG.driftRadius;
// //         }));

// //         // Draw connections
// //         ctx.lineWidth = NEURAL_CONFIG.lineWidth;
// //         ctx.strokeStyle = NEURAL_CONFIG.colors.line;
// //         connections.current.forEach(conn => {
// //           ctx.beginPath();
// //           ctx.moveTo(conn.from.x, conn.from.y);
// //           ctx.lineTo(conn.to.x, conn.to.y);
// //           ctx.stroke();
// //         });

// //         // Draw nodes
// //         ctx.fillStyle = NEURAL_CONFIG.colors.node;
// //         nodes.current.forEach(layer => layer.forEach(node => {
// //           ctx.beginPath();
// //           ctx.arc(node.x, node.y, NEURAL_CONFIG.nodeRadius, 0, Math.PI * 2);
// //           ctx.fill();
// //         }));

// //         animationFrameId.current = requestAnimationFrame(animate);
// //       };

// //       setup();
// //       createNodes();
// //       createConnections();
// //       animate();
// //     };

// //     initNetwork();
// //     return () => {
// //       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
// //     };
// //   }, []);

// //   // Text animation effect remains same...

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
// //       <canvas 
// //         ref={canvasRef}
// //         className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
// //       />
      
// //       {/* Content container with perfect centering */}
// //       <div className="relative z-10 text-center w-full max-w-2xl px-4 
// //         transform -translate-y-8"> {/* Adjust this value to fine-tune vertical position */}
        
// //         {/* Your content here */}
// //         <div className="mb-2 flex justify-center items-baseline">
// //           <span className="text-lg text-gray-300 font-light mr-2">Hi, I'm</span>
// //           <h2 className="text-xl font-medium text-green-400">
// //             {currentText}
// //             <span className="cursor">|</span>
// //           </h2>
// //         </div>

// //         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
// //           SACHIN MALLAH
// //         </h1>

// //         <div className="text-lg text-gray-300 mb-8">
// //           <p>Always learning, being creative and playing around with</p>
// //           <p className="mt-2">AI models to build something cool!</p>
// //         </div>

// //         {/* Buttons and social links */}
// //       </div>
// //     </section>
// //   );
// // }



































































// // 'use client';
// // import { useEffect, useRef, useState } from 'react';
// // import { motion, useScroll, useTransform } from 'framer-motion';

// // const Hero = () => {
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: sectionRef });
// //   const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

// //   useEffect(() => {
// //     const handleMouseMove = (e: MouseEvent) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   const generateHexGrid = () => {
// //     const hexagons = [];
// //     const rows = 15;
// //     const cols = 20;
// //     const hexSize = 60;

// //     for (let i = 0; i < rows; i++) {
// //       for (let j = 0; j < cols; j++) {
// //         const x = (j * hexSize * 1.73) + (i % 2 === 0 ? hexSize * 0.866 : 0);
// //         const y = i * hexSize * 1.5;

// //         hexagons.push(
// //           <motion.div
// //             key={`${i}-${j}`}
// //             className="absolute border border-green-400/10"
// //             style={{
// //               width: `${hexSize}px`,
// //               height: `${hexSize}px`,
// //               left: x,
// //               top: y,
// //               rotate,
// //               scale,
// //             }}
// //             animate={{
// //               borderColor: ['rgba(163,230,53,0.1)', 'rgba(163,230,53,0.3)', 'rgba(163,230,53,0.1)'],
// //             }}
// //             transition={{
// //               duration: 2 + Math.random() * 2,
// //               repeat: Infinity,
// //               repeatType: 'mirror',
// //             }}
// //           >
// //             <div className="absolute inset-0 bg-green-400/5" />
// //           </motion.div>
// //         );
// //       }
// //     }
// //     return hexagons;
// //   };

// //   return (
// //     <section 
// //       ref={sectionRef}
// //       className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
// //     >
// //       {/* Animated Hex Grid */}
// //       <motion.div 
// //         className="absolute inset-0 opacity-20"
// //         style={{
// //           x: useTransform(() => mousePosition.x * 0.02),
// //           y: useTransform(() => mousePosition.y * 0.02),
// //         }}
// //       >
// //         {generateHexGrid()}
// //       </motion.div>

// //       {/* Content Container */}
// //       <div className="relative z-10 text-center max-w-2xl px-4">
// //         {/* Title Section */}
// //         <div className="mb-4 flex justify-center items-baseline">
// //           <span className="text-lg text-gray-300 font-light mr-2">Hi, I'm</span>
// //           <h2 className="text-xl font-medium text-green-400">
// //             Machine Learning Engineer
// //             <span className="cursor">|</span>
// //           </h2>
// //         </div>

// //         <motion.h1 
// //           className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-100"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           SACHIN MALLAH
// //         </motion.h1>

// //         <div className="text-lg text-gray-300 mb-8">
// //           <p>Always learning, being creative and playing around with</p>
// //           <p className="mt-2">AI models to build something cool!</p>
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="flex justify-center gap-4 mb-12">
// //           <motion.a
// //             href="/cv.pdf"
// //             download
// //             className="px-8 py-3 bg-green-400/10 border border-green-400/30 text-green-400 rounded-lg font-medium hover:bg-green-400/20 transition-all"
// //             whileHover={{ scale: 1.05 }}
// //           >
// //             Download CV
// //           </motion.a>
// //           <motion.a
// //             href="#contact"
// //             className="px-8 py-3 border-2 border-green-400/30 text-green-400 rounded-lg font-medium hover:border-green-400/50 transition-colors"
// //             whileHover={{ scale: 1.05 }}
// //           >
// //             Contact
// //           </motion.a>
// //         </div>

// //         {/* Social Links */}
// //         <div className="flex justify-center gap-6">
// //           <motion.a 
// //             href="https://github.com/SachinMallah" 
// //             target="_blank"
// //             whileHover={{ y: -5 }}
// //             className="text-gray-300 hover:text-green-400 transition-colors"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
// //             </svg>
// //           </motion.a>

// //           <motion.a
// //             href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a"
// //             target="_blank"
// //             whileHover={{ y: -5 }}
// //             className="text-gray-300 hover:text-green-400 transition-colors"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
// //             </svg>
// //           </motion.a>

// //           <motion.a
// //             href="https://www.instagram.com/sachinmallah_"
// //             target="_blank"
// //             whileHover={{ y: -5 }}
// //             className="text-gray-300 hover:text-green-400 transition-colors"
// //           >
// //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
// //             </svg>
// //           </motion.a>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .cursor {
// //           animation: blink 1s infinite;
// //           margin-left: 2px;
// //         }

// //         @keyframes blink {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0; }
// //         }

// //         .hex-grid {
// //           clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Hero;















// // // 'use client';
// // // import { useEffect, useState, useRef } from 'react';

// // // // Neural Network Configuration (Easily Customizable)
// // // const neuralConfig = {
// // //   layers: [7, 9, 9, 7],        // Number of nodes in each layer
// // //   colors: {
// // //     idle: 'rgba(255,255,255,0.82)',    // Main node/line color
// // //     active: 'rgba(255,255,255,1)',     // Active state color
// // //     pulse: 'rgba(255,255,255,0.14)',   // Pulse effect color
// // //     highlight: 'rgba(255,255,255,0.95)', // Highlight color
// // //     particle: 'rgba(255,255,255,0.15)' // Particle effect color
// // //   },
// // //   nodeRadius: 3,               // Base node size
// // //   lineWidth: 1,                // Connection line thickness
// // //   driftRadius: 80,             // Node movement range
// // //   pulseDuration: 100,          // Animation duration
// // //   maxWidth: 1200               // Maximum network width
// // // };

// // // type NodeType = {
// // //   baseX: number;
// // //   baseY: number;
// // //   x: number;
// // //   y: number;
// // //   driftX: number;
// // //   driftY: number;
// // //   driftSpeedX: number;
// // //   driftSpeedY: number;
// // //   pulse: number;
// // //   pulseActive: boolean;
// // //   pulseStart: number;
// // // };

// // // type ConnectionType = {
// // //   from: NodeType;
// // //   to: NodeType;
// // //   pulse: number;
// // // };

// // // export default function Hero() {
// // //   const titles = ['Machine Learning Engineer', 'Full Stack Developer', 'AI Researcher', 'Innovator'];
// // //   const [currentText, setCurrentText] = useState('');
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isDeleting, setIsDeleting] = useState(false);
// // //   const canvasRef = useRef<HTMLCanvasElement>(null);

// // //   const nodes = useRef<NodeType[][]>([]);
// // //   const connections = useRef<ConnectionType[]>([]);
// // //   const animationFrameId = useRef<number>();
// // //   const pixelRatio = useRef(1);

// // //   // Neural Network Initialization
// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     if (!canvas) return;
// // //     const ctx = canvas.getContext('2d');
// // //     if (!ctx) return;

// // //     const setupCanvas = () => {
// // //       pixelRatio.current = window.devicePixelRatio || 1;
// // //       canvas.width = window.innerWidth * pixelRatio.current;
// // //       canvas.height = window.innerHeight * pixelRatio.current;
// // //       canvas.style.width = `${window.innerWidth}px`;
// // //       canvas.style.height = `${window.innerHeight}px`;
// // //       ctx.setTransform(pixelRatio.current, 0, 0, pixelRatio.current, 0, 0);
// // //     };

// // //     const buildNetwork = () => {
// // //       nodes.current = [];
// // //       connections.current = [];
// // //       const width = Math.min(window.innerWidth, neuralConfig.maxWidth);
// // //       const height = window.innerHeight;
// // //       const netWidth = width * 0.8;
// // //       const netHeight = height * 0.6;
// // //       const left = (width - netWidth) / 2;
// // //       const top = (height - netHeight) / 2;

// // //       neuralConfig.layers.forEach((nodesCount, layerIndex) => {
// // //         const layer: NodeType[] = [];
// // //         const layerX = left + (netWidth * layerIndex) / (neuralConfig.layers.length - 1);
        
// // //         Array.from({ length: nodesCount }).forEach((_, nodeIndex) => {
// // //           const y = top + ((nodeIndex + 1) * netHeight) / (nodesCount + 1);
// // //           layer.push({
// // //             baseX: layerX,
// // //             baseY: y,
// // //             x: layerX,
// // //             y: y,
// // //             driftX: Math.random() * Math.PI * 2,
// // //             driftY: Math.random() * Math.PI * 2,
// // //             driftSpeedX: 0.5 + Math.random(),
// // //             driftSpeedY: 0.5 + Math.random(),
// // //             pulse: 0,
// // //             pulseActive: false,
// // //             pulseStart: 0
// // //           });
// // //         });
// // //         nodes.current.push(layer);
// // //       });

// // //       nodes.current.slice(0, -1).forEach((layer, layerIndex) => {
// // //         layer.forEach(node => {
// // //           nodes.current[layerIndex + 1].forEach(nextNode => {
// // //             connections.current.push({
// // //               from: node,
// // //               to: nextNode,
// // //               pulse: 0
// // //             });
// // //           });
// // //         });
// // //       });
// // //     };

// // //     const animate = () => {
// // //       if (!ctx) return;
// // //       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

// // //       // Animate nodes
// // //       nodes.current.forEach(layer => layer.forEach(node => {
// // //         node.driftX += 0.001 * node.driftSpeedX;
// // //         node.driftY += 0.001 * node.driftSpeedY;
// // //         node.x = node.baseX + Math.sin(node.driftX) * neuralConfig.driftRadius;
// // //         node.y = node.baseY + Math.sin(node.driftY) * neuralConfig.driftRadius;

// // //         if (node.pulseActive) {
// // //           const t = (performance.now() - node.pulseStart) / neuralConfig.pulseDuration;
// // //           node.pulse = Math.max(0, 1 - t);
// // //           if (t > 1) node.pulseActive = false;
// // //         }
// // //       }));

// // //       // Draw connections
// // //       connections.current.forEach(conn => {
// // //         ctx.beginPath();
// // //         ctx.moveTo(conn.from.x, conn.from.y);
// // //         ctx.lineTo(conn.to.x, conn.to.y);
// // //         ctx.strokeStyle = neuralConfig.colors.idle;
// // //         ctx.lineWidth = neuralConfig.lineWidth;
// // //         ctx.globalAlpha = 0.3;
// // //         ctx.stroke();
// // //       });

// // //       // Draw nodes
// // //       nodes.current.forEach(layer => layer.forEach(node => {
// // //         ctx.beginPath();
// // //         ctx.arc(node.x, node.y, 
// // //           neuralConfig.nodeRadius + node.pulse * 40, 
// // //           0, Math.PI * 2
// // //         );
// // //         ctx.fillStyle = neuralConfig.colors.idle;
// // //         ctx.globalAlpha = 0.8;
// // //         ctx.fill();
// // //       }));

// // //       animationFrameId.current = requestAnimationFrame(animate);
// // //     };

// // //     setupCanvas();
// // //     buildNetwork();
// // //     animate();

// // //     const handleResize = () => {
// // //       setupCanvas();
// // //       buildNetwork();
// // //     };

// // //     window.addEventListener('resize', handleResize);
// // //     return () => {
// // //       window.removeEventListener('resize', handleResize);
// // //       animationFrameId.current && cancelAnimationFrame(animationFrameId.current);
// // //     };
// // //   }, []);

// // //   // Typing Effect
// // //   useEffect(() => {
// // //     const handleTyping = () => {
// // //       const currentTitle = titles[currentIndex];
// // //       const typeSpeed = isDeleting ? 50 : 150;
// // //       const pause = isDeleting ? 500 : 2000;

// // //       if (!isDeleting && currentText === currentTitle) {
// // //         setTimeout(() => setIsDeleting(true), pause);
// // //       } else if (isDeleting && currentText === '') {
// // //         setIsDeleting(false);
// // //         setCurrentIndex(prev => (prev + 1) % titles.length);
// // //       } else {
// // //         setTimeout(() => {
// // //           setCurrentText(prev => isDeleting 
// // //             ? prev.slice(0, -1) 
// // //             : currentTitle.slice(0, prev.length + 1)
// // //           );
// // //         }, typeSpeed);
// // //       }
// // //     };

// // //     const timeout = setTimeout(handleTyping, isDeleting ? 100 : 200);
// // //     return () => clearTimeout(timeout);
// // //   }, [currentText, currentIndex, isDeleting]);

// // //   return (
// // //     <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
// // //       <canvas 
// // //         ref={canvasRef}
// // //         className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80"
// // //       />

// // //       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
// // //         <div className="mb-4 flex justify-center items-baseline">
// // //           <span className="text-lg sm:text-xl text-gray-300 font-light mr-2">
// // //             Hi, I'm
// // //           </span>
// // //           <h2 className="text-xl sm:text-2xl font-medium text-green-400">
// // //             {currentText}
// // //             <span className="cursor animate-blink">|</span>
// // //           </h2>
// // //         </div>

// // //         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 leading-tight">
// // //           Sachin Mallah
// // //         </h1>

// // //         <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
// // //           Building intelligent solutions through AI innovation and modern technology
// // //         </p>

// // //         <div className="flex justify-center gap-4 mb-8 flex-wrap">
// // //           <a
// // //             href="/cv.pdf"
// // //             download
// // //             className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gray-100 text-black rounded-full font-medium 
// // //                      border border-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-400 
// // //                      transition-all duration-300 text-sm sm:text-base"
// // //           >
// // //             Download CV
// // //           </a>
// // //           <a
// // //             href="#contact"
// // //             className="px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-gray-500 text-gray-100 rounded-full 
// // //                      font-medium hover:border-gray-300 hover:text-gray-300 transition-colors text-sm sm:text-base"
// // //           >
// // //             Contact Me
// // //           </a>
// // //         </div>

// // //         <div className="flex justify-center gap-6">
// // //           <a href="https://github.com/SachinMallah" target="_blank" rel="noopener noreferrer" 
// // //              className="text-gray-300 hover:text-white transition-colors">
// // //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// // //               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
// // //             </svg>
// // //           </a>
// // //           <a href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" target="_blank" rel="noopener noreferrer" 
// // //              className="text-gray-300 hover:text-white transition-colors">
// // //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
// // //               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
// // //             </svg>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }







































// // 'use client';
// // import { useEffect, useState } from 'react';

// // export default function Hero() {
// //   const titles = ['Machine learning engineer', 'Full Stack Developer', 'AI Enthusiast', 'Tech Innovator'];
// //   const [currentText, setCurrentText] = useState('');
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);

// //   useEffect(() => {
// //     const currentTitle = titles[currentIndex];
// //     const typeSpeed = isDeleting ? 50 : 150;
// //     const pause = isDeleting ? 500 : 1000;

// //     if (!isDeleting && currentText === currentTitle) {
// //       const timeout = setTimeout(() => setIsDeleting(true), pause);
// //       return () => clearTimeout(timeout);
// //     } else if (isDeleting && currentText === '') {
// //       setIsDeleting(false);
// //       setCurrentIndex((prev) => (prev + 1) % titles.length);
// //     } else {
// //       const timeout = setTimeout(() => {
// //         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
// //       }, typeSpeed);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [currentText, currentIndex, isDeleting, titles]);

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center bg-black">
// //       {/* 4K Background Gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

// //       {/* Content Container */}
// //       <div className="relative z-10 text-center max-w-4xl px-4">
// //         {/* Title Section */}
// //         <div className="mb-6">
// //           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
// //             SACHIN MALLAH
// //           </h1>
          
// //           <div className="flex justify-center items-center space-x-4">
// //             <span className="text-2xl text-slate-300 font-light">Hi, I'm</span>
// //             <h2 className="text-3xl font-medium text-slate-100">
// //               {currentText}
// //               <span className="ml-1 text-slate-400">|</span>
// //             </h2>
// //           </div>
// //         </div>

// //         {/* Description */}
// //         <div className="my-12">
// //           <p className="text-2xl text-slate-300 leading-relaxed">
// //             Always learning, creating, and innovating with
// //           </p>
// //           <p className="text-2xl text-slate-300 mt-4">
// //             cutting-edge AI technologies
// //           </p>
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="flex justify-center gap-8 my-12">
// //           <a
// //             href="/cv.pdf"
// //             download
// //             className="px-12 py-4 bg-white text-black text-xl font-semibold rounded-lg hover:bg-slate-100 transition-colors"
// //           >
// //             Download CV
// //           </a>
// //           <a
// //             href="#contact"
// //             className="px-12 py-4 border-2 border-white text-white text-xl font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
// //           >
// //             Contact
// //           </a>
// //         </div>

// //         {/* Social Links */}
// //         <div className="flex justify-center gap-8 mt-16">
// //           <a href="https://github.com/SachinMallah" target="_blank" rel="noopener">
// //             <svg className="w-10 h-10 text-white hover:text-slate-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
// //             </svg>
// //           </a>

// //           <a href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" target="_blank" rel="noopener">
// //             <svg className="w-10 h-10 text-white hover:text-slate-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
// //             </svg>
// //           </a>

// //           <a href="https://www.instagram.com/sachinmallah_" target="_blank" rel="noopener">
// //             <svg className="w-10 h-10 text-white hover:text-slate-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
// //               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
// //             </svg>
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



























































// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const titles = ['Machine Learning Engineer', 'Full Stack Developer', 'AI Researcher', 'Tech Innovator'];
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[currentIndex];
//     const typeSpeed = isDeleting ? 50 : 150;
//     const pause = isDeleting ? 500 : 1000;

//     if (!isDeleting && currentText === currentTitle) {
//       const timeout = setTimeout(() => setIsDeleting(true), pause);
//       return () => clearTimeout(timeout);
//     } else if (isDeleting && currentText === '') {
//       setIsDeleting(false);
//       setCurrentIndex((prev) => (prev + 1) % titles.length);
//     } else {
//       const timeout = setTimeout(() => {
//         setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
//       }, typeSpeed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentText, currentIndex, isDeleting, titles]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-black">
//       {/* Glass morphism background layer */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

//       {/* Main content container */}
//       <div className="relative z-10 text-center max-w-4xl px-4">
//         {/* Glass card container */}
//         <div className="backdrop-blur-lg bg-black/30 border border-green-400/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-green-400/10">
//           {/* Title section */}
//           <div className="mb-6">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
//               SACHIN MALLAH
//             </h1>
            
//             <div className="flex justify-center items-center space-x-3">
//               <span className="text-lg md:text-xl text-gray-400">Hi, I'm</span>
//               <h2 className="text-lg md:text-xl font-medium text-green-400">
//                 {currentText}
//                 <span className="ml-1 text-gray-400">|</span>
//               </h2>
//             </div>
//           </div>

//           {/* Description with glass panel */}
//           <div className="my-8 backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-green-400/10">
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//               Always learning, creating, and innovating with
//             </p>
//             <p className="text-lg md:text-xl text-gray-300 mt-2">
//               cutting-edge AI technologies
//             </p>
//           </div>

//           {/* Action buttons with glass effect */}
//           <div className="flex justify-center gap-6 my-8">
//             <a
//               href="/cv.pdf"
//               download
//               className="px-8 py-3 backdrop-blur-lg bg-green-400/10 border border-green-400/30 text-green-400 rounded-xl hover:bg-green-400/20 transition-all"
//             >
//               Download CV
//             </a>
//             <a
//               href="#contact"
//               className="px-8 py-3 backdrop-blur-lg border border-green-400/30 text-green-400 rounded-xl hover:border-green-400/50 transition-colors"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Social links with hover effects */}
//           <div className="flex justify-center gap-6 mt-10">
//             <a href="https://github.com/SachinMallah" target="_blank" className="group">
//               <svg className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//               </svg>
//             </a>

//             <a href="https://www.linkedin.com/in/sachin-mallah-1b0a3527a" target="_blank" className="group">
//               <svg className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.2 6.5 3.2s1.75.79 1.75 1.764-.783 1.768-1.75 1.768zM20 19h-3v-5.604c0-3.368-3.85-3.113-5 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
//               </svg>
//             </a>

//             <a href="https://www.instagram.com/sachinmallah_" target="_blank" className="group">
//               <svg className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }