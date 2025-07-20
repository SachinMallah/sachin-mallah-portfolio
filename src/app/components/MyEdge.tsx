'use client';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, MouseEvent } from 'react';

function Particles({ count = 40 }: { count?: number }) {
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

type TimelineCardProps = {
  title: string;
  content: string;
  position: 'left' | 'right' | 'full';
  index: number;
};

function TimelineCard({ title, content, position, index }: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
        ease: "easeOut" as const 
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
        tabIndex={0}
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

type PhilosophyCardProps = {
  number: string;
  title: string;
  content: string;
};

function PhilosophyCard({ number, title, content }: PhilosophyCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
      tabIndex={0}
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
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const drawProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      tabIndex={0}
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