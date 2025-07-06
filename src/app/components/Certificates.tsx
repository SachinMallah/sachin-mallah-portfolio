"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { BadgeCheck, ArrowUpRight, ZoomIn, ShieldCheck, Award, BookOpen, BarChart3, Brain,  Map} from 'lucide-react';
import Image from 'next/image';

const certificatesData = [
  {
    id: "cert-1",
    title: "Machine Learning Professional Certification",
    issuer: "Altair Company",
    date: "Issued April 2025",
    image: "/images/ML.png",
    tech: ["Classification", "Regression", "Scoring", "Hold out Validation", "Correlations", "Feature Importance", "Clustering"],
    // credential: "https://example.com/verify/123"
  },
  {
    id: "cert-2",
    title: "Applications & Use Cases Master Certification",
    issuer: "Altair Company",
    date: "Issued March 2024",
    image: "/images/APPDEP.png",
    tech: ["Running Process","Deploying Process","Model Management", "Web Apps"],
    // credential: "https://example.com/verify/456"
  },
  {
    id: "cert-3",
    title: "Data Engineering Master Certification",
    issuer: "Altair Company",
    date: "Issued April 2024",
    image: "/Images/DE.png",
    tech: ["Loops & Branches", "Advanced Text Processing","Exception Handling","Logging","Data Cleaning","Regular Expressions","Macros","Web APIs","Scripting"],
    // credential: "https://example.com/verify/456"
  },
  {
    id: "cert-4",
    title: "Applications & Use Cases Master Certification",
    issuer: "Altair Company",
    date: "Issued March 2024",
    image: "/images/APPDEP2.png",
    tech: ["Machine Learning", "Data Science", "CRISP-DM","Visualization"],
    // credential: "https://example.com/verify/456"
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
    category: "Interships Certifications",
    icon: Map,
    certificates: [
      "Artificial Intelligence Virtual Intership",
      "Machine Learning Virtual Intership",
      // "Tableau for Beginners",
      // "Excel for Beginners",
      // "Data Analysis with Pandas"
    ]
  }
];

const Certificates = () => {
  const sectionRef = useRef(null);
  const [activeCert, setActiveCert] = useState(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30
  });

  // 3D Parallax Effect
  const parallax = (index) => ({
    y: useSpring(useTransform(scrollYProgress, [0, 1], [index % 2 ? -25 : 25, 0]), {
      stiffness: 100,
      damping: 30
    })
  });

  return (
    <section ref={sectionRef} id="certificates" className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Animated Header */}
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
              <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" />
            </motion.div>
            <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-white-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-300">Verified Technical Credentials</p>
          </motion.div>
        </AnimatePresence>

        {/* Animated Timeline */}
        <motion.div
          // className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-gray-300/50 via-gray-300 to-gray-300/50"
          style={{ scaleY: pathLength }}
        />

        {/* Featured Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 mb-20">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, type: 'spring' }}
              className="group relative"
              whileHover="hover"
            >
              {/* Floating Card Container */}
              <motion.div
                className="h-full bg-black/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-gray-500/30 shadow-2xl relative overflow-hidden"
                variants={{
                  hover: { y: -15, transition: { type: 'spring', stiffness: 300 } }
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-black-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                {/* Image Parallax Container */}
                <motion.div
                  className="relative overflow-hidden rounded-xl aspect-video mb-6"
                  style={parallax(index)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-end">
                      <button 
                        className="p-2 bg-black/50 rounded-full hover:bg-emerald-400/20 transition-colors"
                        onClick={() => window.open(cert.credential, '_blank')}
                      >
                        <ArrowUpRight className="w-6 h-6 text-emerald-400" />
                      </button>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {cert.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {cert.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-emerald-400/10 text-emerald-400 rounded-full">
                          +{cert.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Card Content */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100 mb-1">{cert.title}</h3>
                      <p className="text-sm text-gray-400 font-mono">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Animated Verification Badge */}
                  <motion.div 
                    className="flex items-center justify-between py-2 px-4 bg-black/50 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-sm text-gray-400">{cert.date}</span>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur" />
                        <div className="flex items-center gap-1.5 relative">
                          <span className="text-xs font-bold text-emerald-400">VERIFIED</span>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Reflection Effect */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Floating Particles */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-400/50 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certificates Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <IconComponent className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-100">{category.category}</h4>
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

        {/* Inspirational Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-3xl" />
            
            {/* Quote marks */}
            <div className="absolute top-4 left-6 text-6xl text-white-400/20 font-serif">"</div>
            <div className="absolute bottom-4 right-6 text-6xl text-white-400/20 font-serif rotate-180">"</div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.blockquote
                className="text-2xl md:text-3xl font-medium text-gray-100 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                Certificates show effort, but skills show results. 
                <span className="block mt-2">
                  In the end, what you can build matters more than what you can print.
                </span>
              </motion.blockquote>
              
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/10 to-transparent blur-3xl -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl -z-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

export default Certificates;