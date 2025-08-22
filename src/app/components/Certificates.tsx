'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Award, BookOpen, BarChart3, Brain, Map } from 'lucide-react';
import Image from 'next/image';

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  tech: string[];
  credential?: string; 
};

// store the certificates here all certificates cards

const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    title: "Machine Learning Professional Certification",
    issuer: "Altair Company",
    date: "Issued April 2025",
    image: "/images/ML.png",
    tech: [
      "Classification", "Regression", "Scoring", "Hold out Validation",
      "Correlations", "Feature Importance", "Clustering"
    ],
    
  },
  {
    id: "cert-2",
    title: "Applications & Use Cases Master Certification",
    issuer: "Altair Company",
    date: "Issued March 2024",
    image: "/images/APPDEP.png",
    tech: [
      "Running Process", "Deploying Process", "Model Management", "Web Apps"
    ],
    credential: undefined, 
  },
  {
    id: "cert-3",
    title: "Data Engineering Master Certification",
    issuer: "Altair Company",
    date: "Issued April 2024",
    image: "/images/DE.png",
    tech: [
      "Loops & Branches", "Advanced Text Processing", "Exception Handling",
      "Logging", "Data Cleaning", "Regular Expressions", "Macros", "Web APIs", "Scripting"
    ],
  },
  {
    id: "cert-4",
    title: "Applications & Use Cases Master Certification",
    issuer: "Altair Company",
    date: "Issued March 2024",
    image: "/images/APPDEP2.png",
    tech: [
      "Machine Learning", "Data Science", "CRISP-DM", "Visualization"
    ],
  },
  {
    id: "cert-5",
    title: "Web Scraping with Python",
    issuer: "Duke University (via Coursera)",
    date: "Issued Aug 2025",
    image: "/images/UIPATH.png",
    tech: [
      "Python", "BeautifulSoup", "Requests", 
    "Data Extraction", "Automation", "Web Scraping"
    ],
  },
  {
    id: "cert-6",
     title: "RPA Basics and Introduction to UiPath",
    issuer: "UiPath (via Coursera)",
    date: "Issued Aug 2025",
    image: "/images/RPA.png",
    tech: [
    "RPA", "UiPath", "Automation", 
    "Process Design", "Workflow Automation", "Bot Development"
  ]
},
  {
    id: "cert-7",
    title: "Python Development with ChatGPT: Fullstack App Development",
    issuer: "Coursera Project Network",
    date: "Issued Aug 2025",
    image: "/images/chatfullstack.png",
    tech: [
    "Python", "ChatGPT", "Fullstack Development", 
    "APIs", "Flask", "Frontend Integration", "Deployment"
  ]
},
];

const additionalCertificates = [
  {
    category: "Machine Learning & AI",
    icon: Brain,
    certificates: [
      "Machine Learning for Beginners",
      "AI For Everyone",
      "Introduction to Machine Learning",
      "Elements of AI",
      "Intro to Machine Learning with Python"
    ]
  },
  {
    category: "Data Science",
    icon: BookOpen,
    certificates: [
      "Data Science Foundations",
      "Data Science in Python",
      "Data Analysis with Python",
      "Google Data Analytics: Intro Course"
    ]
  },
  {
    category: "Data Visualization & Analytics",
    icon: BarChart3,
    certificates: [
      "Data Visualization in Python",
      "Power BI for Beginners",
      "Tableau for Beginners",
      "Excel for Beginners",
      "Data Analysis with Pandas"
    ]
  },
  {
    category: "Internships Certifications",
    icon: Map,
    certificates: [
      "Artificial Intelligence Virtual Internship",
      "Machine Learning Virtual Internship"
    ]
  }
];

const Certificates = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const baseY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const baseYSpring = useSpring(baseY, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} id="certificates" className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-block mb-6"
            >
             
            </motion.div>
            <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-300 mt-4">Verified Technical Credentials</p>
          </motion.div>
        </AnimatePresence>

        {/* Certificates grid (container stores here) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15, 
                type: 'spring',
                stiffness: 100,
                damping: 20
              }}
              className="group relative"
              whileHover="hover"
            >
              <motion.div
                className="h-full bg-black/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-gray-500/30 shadow-2xl relative overflow-hidden hover:border-emerald-400/50 transition-all duration-500"
                variants={{
                  hover: { 
                    y: -15, 
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 } 
                  }
                }}
              >
                
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                {/* Certificate images stores here */}
                <motion.div
                  className="relative overflow-hidden rounded-xl aspect-video mb-6 bg-gray-800/50"
                  style={{ y: baseYSpring }}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                  />

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Tech tag store here*/}
                    <div className="flex gap-2 flex-wrap">
                      {cert.tech.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-3 py-1.5 text-xs font-semibold bg-emerald-400/90 text-black rounded-full border border-emerald-300 shadow-lg backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {cert.tech.length > 3 && (
                        <motion.span 
                          className="px-3 py-1.5 text-xs font-semibold bg-cyan-400/90 text-black rounded-full border border-cyan-300 shadow-lg backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          +{cert.tech.length - 3} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                </motion.div>

                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors">
                      <BadgeCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">{cert.issuer}</p>
                    </div>
                  </div>

                 
                  <motion.div
                    className="flex items-center justify-between py-3 px-4 bg-black/50 rounded-xl group-hover:bg-black/70 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-sm text-gray-400">{cert.date}</span>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-sm" />
                        <div className="flex items-center gap-1.5 relative">
                          <span className="text-xs font-bold text-emerald-400">VERIFIED</span>
                          <motion.div 
                            className="w-2 h-2 bg-emerald-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* floating particles animation logic code */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
                    initial={{ scale: 0, x: "50%", y: "50%" }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [
                        "50%", 
                        `${50 + (Math.random() - 0.5) * 100}%`,
                        `${50 + (Math.random() - 0.5) * 150}%`
                      ],
                      y: [
                        "50%",
                        `${50 + (Math.random() - 0.5) * 100}%`,
                        `${50 + (Math.random() - 0.5) * 150}%`
                      ]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* extra certificates additional certificates container stores here */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Additional Certifications
            </h3>
            <p className="text-gray-400">Continuous Learning & Professional Development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalCertificates.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 + 1 }}
                  className="group bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 hover:border-emerald-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-400/10 rounded-xl group-hover:bg-emerald-400/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors">
                        {category.category}
                      </h4>
                      <p className="text-sm text-gray-400">{category.certificates.length} certificates</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.certificates.map((cert, certIndex) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + certIndex * 0.1 + 1.2 }}
                        className="flex items-center gap-3 p-3 bg-black/40 rounded-lg hover:bg-black/60 transition-colors group/cert"
                      >
                        <Award className="w-4 h-4 text-gray-400 group-hover/cert:text-emerald-400 transition-colors flex-shrink-0" />
                        <span className="text-sm text-gray-300 group-hover/cert:text-gray-100 transition-colors">
                          {cert}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* certificate matter nhi karta but skill does section quotes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 text-center relative overflow-hidden">
            
            
           
            <div className="absolute top-4 left-6 text-6xl text-gray-300 font-serif">&quot;</div>
            <div className="absolute bottom-4 right-6 text-6xl text-gray-300 font-serif rotate-180">&quot;</div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.blockquote
                className="text-2xl md:text-3xl font-medium text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                {/* extra block code can add extra line here */}
                {/* <p className="block text-3xl text-gray-300 mt-4">Certificates show effort, but skills show results.</p> */}
                <span className="block text-4xl text-gray-300 mt-4">
                  Certificates show effort, but skills show results.
                  In the end, what you can build matters more than what you can print.
                </span>
              </motion.blockquote>
              
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-gray-500/10 to-transparent blur-3xl -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-[800px] h-[800px] bg-gradient-radial from-gray-500/8 to-transparent blur-3xl -z-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-600/30 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* custom css here not mentioned in the layout part */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Certificates;
