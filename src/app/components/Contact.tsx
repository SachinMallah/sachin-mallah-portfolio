"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Envelope, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black overflow-hidden py-24 flex items-center"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Let&apos;s collaborate on something extraordinary
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-8">
          
          <motion.div
            className="md:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p className="text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
              I&apos;m currently exploring new opportunities in AI/ML research and development.
              Whether you have a question, opportunity, or just want to connect - my inbox
              is always open. Let&apos;s create something remarkable together.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {[
                // here we can add this special envelope made for gmail option but to keep it simple just dont add this 
                // {
                //   icon: Envelope,
                //   label: "Email",
                //   value: "sachinmallah118@gmail.com",
                //   href:
                //     "mailto:yourmailheretowherecontact@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.",
                // },
                {
                  icon: GithubLogo,
                  label: "GitHub",
                  value: "sachinmallah",
                  href: "https://github.com/SachinMallah",
                },
                {
                  icon: LinkedinLogo,
                  label: "LinkedIn",
                  value: "sachin-mallah",
                  href: "https://www.linkedin.com/in/sachin-mallah-1b0a3527a",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center p-4 rounded-2xl bg-black/70 backdrop-blur-xl border-2 border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-black/30 border-2 border-gray-500/30 flex items-center justify-center mr-4 transition-all group-hover:bg-black/50">
                    <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                    <div className="text-gray-100 group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            
            <div className="mt-12 px-6 py-4 bg-gray-900 rounded-2xl border border-gray-700 max-w-md shadow-lg">
              <h3 className="text-white font-semibold text-lg mb-2">Typical Response Time</h3>
              <p className="text-gray-400">
                 I reply within <strong>24 hours</strong>.
                {/* I usually respond within <strong>24 hours</strong> on business days. */}
              </p>
            </div>

            
            <div className="mt-8 flex items-center space-x-3 bg-gray-900 rounded-2xl border border-gray-700 px-6 py-4 max-w-md shadow-lg">
              <MapPin className="w-6 h-6 text-gray-300" />
              <span className="text-gray-100 font-medium">Mumbai, India</span>
            </div>
          </motion.div>

          
          <motion.div
            className="md:w-1/2 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-full flex flex-col items-center justify-center h-full max-w-md">
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-lg text-gray-300 mb-6 text-center">
                  Prefer email? <br className="block md:hidden" />
                  Click the button below to open your mail app and send me a message directly!
                </p>
                <a
                  href="mailto:sachinmallah118@gmail.com?subject=Contact%20from%20Website&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl text-white font-medium hover:bg-gradient-to-l transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <Envelope className="w-6 h-6 mr-2" />
                  Email Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}