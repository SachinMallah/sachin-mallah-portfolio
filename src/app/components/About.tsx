'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const textContent = {
  welcome: "Welcome! Thanks for taking the time to check out my website.",
  aboutMeCommand: "sachin@portfolio:~$ about_me",
  aboutMeLines: [
    "• Hi, I'm Sachin Kumar Dinesh Chandra Mallah — a passionate AI/ML undergraduate (3rd year, Mumbai University) with a strong technical and mathematical background.",
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
};

const About = () => {
  
  const [welcome, setWelcome] = useState('')
  const [aboutMeCommand, setAboutMeCommand] = useState('')
  const [aboutMeLines, setAboutMeLines] = useState<string[]>([])
  const [strengthsCommand, setStrengthsCommand] = useState('')
  const [strengthsLines, setStrengthsLines] = useState<string[]>([])
  const [typingStage, setTypingStage] = useState(0)

  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  
  useEffect(() => {
    let isCancelled = false 

    const typeString = async (text: string, updater: (val: string) => void) => {
      for (let i = 0; i <= text.length; i++) {
        if (isCancelled) return
        updater(text.substring(0, i))
        await new Promise(resolve => setTimeout(resolve, 20))
      }
    }

    const typeText = async () => {
      await typeString(textContent.welcome, setWelcome)
      setTypingStage(1)
      await new Promise(resolve => setTimeout(resolve, 700))

      await typeString(textContent.aboutMeCommand, setAboutMeCommand)
      setTypingStage(2)
      await new Promise(resolve => setTimeout(resolve, 500))

      for (let i = 0; i < textContent.aboutMeLines.length; i++) {
        await typeString(textContent.aboutMeLines[i], (t) => {
          setAboutMeLines(prev => {
            const newLines = [...prev]
            newLines[i] = t
            return newLines
          })
        })
      }
      setTypingStage(3)
      await new Promise(resolve => setTimeout(resolve, 1000))

      await typeString(textContent.strengthsCommand, setStrengthsCommand)
      setTypingStage(4)
      await new Promise(resolve => setTimeout(resolve, 500))

      for (let i = 0; i < textContent.strengthsLines.length; i++) {
        await typeString(textContent.strengthsLines[i], (t) => {
          setStrengthsLines(prev => {
            const newLines = [...prev]
            newLines[i] = t
            return newLines
          })
        })
      }
    }

    typeText()
    return () => { isCancelled = true }
  }, [])

  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
    rotateX.set((e.clientY - (top + height / 2)) / 20)
    rotateY.set(-(e.clientX - (left + width / 2)) / 20)
  }

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
          <p className="text-xl text-gray-300 mt-4">The Developer Behind the Code</p>
        </motion.h2>

        
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          
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
              <Image
                src="/images/sachin.png"
                alt="Sachin Kumar"
                width={3684}
                height={4906}
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
                
                <motion.p>{welcome}</motion.p>

                
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

                
                <div className="mt-6 flex items-center text-green-400">
                  <span>$</span>
                  <div className="ml-2 w-3 h-5 bg-green-400 animate-pulse" />
                </div>
              </div>

              
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About