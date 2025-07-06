
// this is goat and this is absolute best i have choosen this ok 

"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const educationData = [
  {
    id: "edu-1",
    title: "Honours Bachelor of Science – Computer Science Specialization in AI & ML",
    institution: "University of Mumbai",
    location: "Mumbai, Maharashtra",
    year: "2023 – 2027 (Ongoing)",
    description: "Currently pursuing a degree focused on core computer science subjects with a specialization in Artificial Intelligence and Machine Learning.",
  },
  {
    id: "edu-2",
    title: "Higher Secondary Education (HSC)",
    institution: "Wilson College, Mumbai - Maharashtra State Board",
    location: "Mumbai, Maharashtra",
    year: "2021 – 2023",
    description: "Completed high school education with a strong foundation in science and mathematics.",
  },
];

// Timeline Node Component
const TimelineNode = ({ index }) => (
  <div className={`absolute left-1/2 -translate-x-1/2 ${index === 0 ? 'top-[15%]' : 'bottom-[15%]'}`}>
    <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center">
      <div className="w-2 h-2 bg-gray-400 rounded-full" />
    </div>
  </div>
);

const Education = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30
  });

  // 3D Card Tilt Effect Handler
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x - rect.width/2) / 20;
    const rotateX = (y - rect.height/2) / -20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY*3}px ${rotateX*3}px 30px rgba(255,255,255,0.1)`;
  };

  // Reset Card Position on Mouse Leave
  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
  };

  // Simulate Loading State
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} id="education" className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Animated Header Section */}
        <AnimatePresence>
          {loaded && (
            <motion.div
              key="heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-4">Education</h2>
              <p className="text-xl text-gray-300">What I have Studied so far</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Timeline Line */}
        <motion.div
          className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-gray-300 "
          style={{ scaleY: pathLength }}
        />

        {/* Cards Container */}
        <div className="relative space-y-32">
          <AnimatePresence>
            {loaded && educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                className="relative flex justify-center items-center min-h-[50vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ margin: "-20% 0px" }}
              >
                <TimelineNode index={index} />

                {/* Glass-morphism Card with 3D Effect */}
                <motion.div 
                  ref={el => cardsRef.current[index] = el}
                  className={`w-full max-w-2xl bg-black/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-500/30 relative shadow-2xl cursor-pointer
                    ${index % 2 === 0 ? "lg:ml-32" : "lg:mr-32"}`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity' 
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  whileHover={{ 
                    zIndex: 1,
                    scale: 1.02,
                    transition: { type: 'spring', mass: 0.5 }
                  }}
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-gray-500/20" />
                  <div className="absolute -inset-<h1 className2 bg-gray-500/10 filter blur-3xl" />
                  
                  {/* Card Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <GraduationCap className="w-10 h-10 text-gray-300" />
                        <span className="text-lg font-semibold text-white">{item.institution}</span>
                      </div>
                      <span className="bg-gray-700/50 text-gray-200 px-4 py-1 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-100 mb-4">{item.title}</h3>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <MapPin className="w-5 h-5 text-gray-300" />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Education;










