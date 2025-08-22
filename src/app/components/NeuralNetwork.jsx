"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';


// this is the just the logic behind the neural network not usefull at all but considered this as important
const NeuralNetwork = ({ nodes = 64, active = false, className }) => {
  const connections = useMemo(() => {
    return Array.from({ length: nodes * 2 }, (_, i) => ({
      id: i,
      path: generateRandomPath()
    }));
  }, [nodes]);

  function generateRandomPath() {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;
    return `M ${startX} ${startY} Q ${(startX + endX)/2 + Math.random()*20} ${(startY + endY)/2 + Math.random()*20}, ${endX} ${endY}`;
  }

  return (
    <svg viewBox="0 0 100 100" className={className}>
      <g className="opacity-50">
        {connections.map((connection) => (
          <motion.path
            key={connection.id}
            d={connection.path}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: active ? 0.3 : 0.1,
              pathLength: active ? 1 : 0.5 
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
          />
        ))}
      </g>
      {Array.from({ length: nodes }).map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 100}
          cy={Math.random() * 100}
          r="0.3"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{
            opacity: active ? 0.8 : 0.2,
            scale: active ? [1, 1.5, 1] : 1
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </svg>
  );
};

export default NeuralNetwork;