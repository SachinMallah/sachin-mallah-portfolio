'use client';
import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Modal from './Modal';

const projects = [
  {
    id: 'project1',
    title: 'Sentiment Analysis Engine',
    description: 'Real-time sentiment classification of social media posts',
    image: './images/Project1 Reddit.png',
    tech: ['Python', 'NLTK', 'Streamlit'],
    github: "https://github.com/SachinMallah/reddit-sentiment-analysis", // <-- commented out
    details: {
      description: `A real-time sentiment analysis engine that processes social media posts and classifies them 
      into positive, negative, or neutral sentiments. The system uses NLP techniques and machine 
      learning to provide accurate sentiment classification with context awareness.`,
      features: [
        'Real-time processing of streaming social media data',
        'Context-aware sentiment classification',
        'Custom-trained model for domain-specific terminology',
        'Dashboard for sentiment trend visualization'
      ],
      techUsed: ['Python', 'NLTK', 'Streamlit', 'Huggingface']
    }
  },
  {
    id: 'project2',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio to showcase my work and skills.',
    // description: 'Real-time sentiment classification of social media posts',
    image: './images/personal portfolio.png',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    // tech: ['Python', 'NLTK', 'Streamlit'],
    details: {
      description: `A sleek, interactive portfolio website built to professionally present my projects, technical skills, 
    and personal journey in the world of full stack development and machine learning. Designed with a strong focus 
    on responsiveness, smooth animations, and minimalistic black-and-white aesthetics. Deployed on Vercel with 
    custom domain integration for a real-world production setup.`,
      // description: `A real-time sentiment analysis engine that processes social media posts and classifies them 
      // into positive, negative, or neutral sentiments. The system uses NLP techniques and machine 
      // learning to provide accurate sentiment classification with context awareness.`,
      features: [
        'Fully responsive design for all screen sizes',
        'Animated neural network background using canvas API',
        'Custom project cards with interactive hover effects',
        'Dark-themed, minimalistic UI with smooth scroll and hover animations',
        // 'Dark-themed UI with smooth scroll and clean layout',
        'SEO-friendly structure and accessibility compliance',
        'Optimized Lighthouse scores for performance and UX',
        'Clean folder structure and reusable components for scalability',
        'Deployed with Vercel and connected to a custom domain'

        // 'Real-time processing of streaming social media data',
        // 'Context-aware sentiment classification',
        // 'Custom-trained model for domain-specific terminology',
        // 'Dashboard for sentiment trend visualization'
      ],
      techUsed: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Github Actions']

      // techUsed: ['Python', 'NLTK', 'Streamlit', 'MongoDB', 'Huggingface']
    }
  },
//   {
//   id: 'project3',
//   title: 'More Projects Coming Soon...',
//   description: '',
//   image: '', // No image needed
//   tech: [],
//   comingSoon: true // Custom flag to detect this card
// }

  // {
  //   id: 'project1',
  //   title: 'Sentiment Analysis Engine',
  //   description: 'Real-time sentiment classification of social media posts',
  //   image: './images/sachin.png',
  //   tech: ['Python', 'NLTK', 'Streamlit'],
  //   details: {
  //     description: `A real-time sentiment analysis engine that processes social media posts and classifies them 
  //     into positive, negative, or neutral sentiments. The system uses NLP techniques and machine 
  //     learning to provide accurate sentiment classification with context awareness.`,
  //     features: [
  //       'Real-time processing of streaming social media data',
  //       'Context-aware sentiment classification',
  //       'Custom-trained model for domain-specific terminology',
  //       'Dashboard for sentiment trend visualization'
  //     ],
  //     techUsed: ['Python', 'NLTK', 'Streamlit', 'MongoDB', 'Huggingface']
  //   }
  // },
  // {
  //   id: 'project1',
  //   title: 'Sentiment Analysis Engine',
  //   description: 'Real-time sentiment classification of social media posts',
  //   image: './images/sachin.png',
  //   tech: ['Python', 'NLTK', 'Streamlit'],
  //   details: {
  //     description: `A real-time sentiment analysis engine that processes social media posts and classifies them 
  //     into positive, negative, or neutral sentiments. The system uses NLP techniques and machine 
  //     learning to provide accurate sentiment classification with context awareness.`,
  //     features: [
  //       'Real-time processing of streaming social media data',
  //       'Context-aware sentiment classification',
  //       'Custom-trained model for domain-specific terminology',
  //       'Dashboard for sentiment trend visualization'
  //     ],
  //     techUsed: ['Python', 'NLTK', 'Streamlit', 'MongoDB', 'Huggingface']
  //   }
  // },
  // {
  //   id: 'project1',
  //   title: 'Sentiment Analysis Engine',
  //   description: 'Real-time sentiment classification of social media posts',
  //   image: './images/sachin.png',
  //   tech: ['Python', 'NLTK', 'Streamlit'],
  //   details: {
  //     description: `A real-time sentiment analysis engine that processes social media posts and classifies them 
  //     into positive, negative, or neutral sentiments. The system uses NLP techniques and machine 
  //     learning to provide accurate sentiment classification with context awareness.`,
  //     features: [
  //       'Real-time processing of streaming social media data',
  //       'Context-aware sentiment classification',
  //       'Custom-trained model for domain-specific terminology',
  //       'Dashboard for sentiment trend visualization'
  //     ],
  //     techUsed: ['Python', 'NLTK', 'Streamlit', 'MongoDB', 'Huggingface']
  //   }
  // },
  // {
  //   id: 'project1',
  //   title: 'Sentiment Analysis Engine',
  //   description: 'Real-time sentiment classification of social media posts',
  //   image: './images/sachin.png',
  //   tech: ['Python', 'NLTK', 'Streamlit'],
  //   details: {
  //     description: `A real-time sentiment analysis engine that processes social media posts and classifies them 
  //     into positive, negative, or neutral sentiments. The system uses NLP techniques and machine 
  //     learning to provide accurate sentiment classification with context awareness.`,
  //     features: [
  //       'Real-time processing of streaming social media data',
  //       'Context-aware sentiment classification',
  //       'Custom-trained model for domain-specific terminology',
  //       'Dashboard for sentiment trend visualization'
  //     ],
  //     techUsed: ['Python', 'NLTK', 'Streamlit', 'MongoDB', 'Huggingface']
  //   }
  // },
  
  // Add other projects similarly
];
function ProjectCard({ project, setSelectedProject }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    rotateX.set((e.clientY - (top + height/2)) / 10);
    rotateY.set(-(e.clientX - (left + width/2)) / 10);
  };

  return (
    <motion.div
      key={project.id}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/30 to-gray-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      <motion.div
        style={{ transform }}
        className="bg-black/80 backdrop-blur-xl rounded-3xl border-2 border-gray-500/30 shadow-2xl overflow-hidden relative transition-all duration-300"
      >
        <div className="h-60 bg-gray-900/50 overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setSelectedProject(project.id)}
              className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// function ProjectCard({ project, setSelectedProject }) {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const rotateX = useMotionValue(0);
//   const rotateY = useMotionValue(0);
//   const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - left);
//     mouseY.set(e.clientY - top);
//     rotateX.set((e.clientY - (top + height/2)) / 10);
//     rotateY.set(-(e.clientX - (left + width/2)) / 10);
//   };

//   return (
//     <motion.div
//       key={project.id}
//       className="relative group"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         rotateX.set(0);
//         rotateY.set(0);
//       }}
//     >
//       <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/30 to-gray-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
//       <motion.div
//         style={{ transform }}
//         className="bg-black/80 backdrop-blur-xl rounded-3xl border-2 border-gray-500/30 shadow-2xl overflow-hidden relative transition-all duration-300"
//       >
//         <div className="h-60 bg-gray-900/50 overflow-hidden relative">
//           <img 
//             src={project.image} 
//             alt={project.title} 
//             className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
//           />
//         </div>
        
//         <div className="p-6 space-y-4">
//           <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
//           <p className="text-gray-300 leading-relaxed">{project.description}</p>
          
//           <div className="flex flex-wrap gap-2">
//             {project.tech.map((tech) => (
//               <span 
//                 key={tech} 
//                 className="text-xs font-medium bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
          
//           <div className="flex gap-3 mt-4">
//             <button
//               onClick={() => setSelectedProject(project.id)}
//               className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
//             >
//               View Details <ArrowRight className="w-4 h-4" />
//             </button>
            
//             <a 
//               href="#" 
//               className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
//             >
//               GitHub <Github className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
          <p className="text-xl text-gray-300 mt-4">Explore My Technical Endeavors</p>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </motion.div>

        <p className="block mt-14 text-center">
  🚀 More projects coming soon. Stay tuned!
        </p>

        {selectedProject && (
          <Modal 
            project={projects.find(p => p.id === selectedProject)} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
      
      {/* Add animated background elements if needed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/80 z-0" /> */}
    </section>
  );
}
