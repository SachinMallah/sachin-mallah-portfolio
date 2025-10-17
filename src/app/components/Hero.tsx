'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import styles from './Hero.module.css';

//Dont change anything here because one change can make the neural network not to work properly its advanced with logic and code 

// no of layer and no of the nodes we can put here
const NEURAL_NETWORK_CONFIG = {
  network: {
    layers: [7, 9, 7, 5],
    widthSpread: 0.65,
    heightSpread: 0.6,
  },
  nodes: {
    size: 3.5,
    glow: 100,
    color: 'rgb(255, 255, 255)',
    highlight: 'rgb(255, 255, 255)',
  },
  connections: {
    thickness: 1,
    activeThickness: 1.5,
    color: 'rgb(255, 255, 255)',
    activeColor: 'rgb(255, 255, 255)',
  },
  animation: {
    driftRadius: 150,
    speed: 0.009,
    speedVariation: 0.3,
  },
  content: {
    verticalOffset: '-5%',
    maxWidth: '4xl',
  }
};

const TITLE_TEXTS = [
  'Machine learning engineer', 
  'Full Stack Web Developer', 
  'Business Enthusiast', 
  'INNOVATOR'
];

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
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<NodeType[][]>([]);
  const connections = useRef<ConnectionType[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const pixelRatio = useRef(1);

  const config = useMemo(() => NEURAL_NETWORK_CONFIG, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable animation on mobile for performance

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

      nodes.current.forEach(layer => layer.forEach(node => {
        node.driftX += config.animation.speed * node.driftSpeedX;
        node.driftY += config.animation.speed * node.driftSpeedY;
        node.x = node.baseX + Math.sin(node.driftX) * config.animation.driftRadius;
        node.y = node.baseY + Math.sin(node.driftY) * config.animation.driftRadius;
      }));

      connections.current.forEach(conn => {
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.lineWidth = conn.active ? config.connections.activeThickness : conn.width;
        ctx.strokeStyle = conn.active ? config.connections.activeColor : config.connections.color;
        ctx.stroke();
      });

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
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [config, isMobile]);

  useEffect(() => {
    const currentTitle = TITLE_TEXTS[currentIndex];
    const typeSpeed = isDeleting ? 50 : 150;
    const pause = isDeleting ? 500 : 1000;

    if (!isDeleting && currentText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % TITLE_TEXTS.length);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText(prev => isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
      />

      
      <div 
        className={`text-center max-${config.content.maxWidth} w-full mx-4 relative z-10`}
        style={{ transform: `translateY(${config.content.verticalOffset})` }}
      >
        
        <div className="mb-4 flex justify-center items-baseline">
          <span className="text-xl text-gray-300 font-light mr-2">Hi, I&apos;m</span>
          <h2 className="text-2xl font-medium text-green-400">
            {currentText}
            <span className={styles.cursor}>|</span>
          </h2>
        </div>

        {/* name and all content of hero section start here except the neural network */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
          SACHIN MALLAH
        </h1>

        
        <div className="text-lg text-gray-300 mb-8 space-y-2 mx-auto max-w-2xl">
          <p>Always learning, being creative and playing around with</p>
          <p>AI models to build something cool!</p>
        </div>

        
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="/CV/sachin-resume.pdf"
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

        
        <div className="flex justify-center gap-6 mt-8">
          {[
            ['https://www.instagram.com/sachinmallah_?igsh=enZ5em53M2Q3b3Yx', 'Instagram'],
            ['https://github.com/SachinMallah26', 'GitHub'],
            ['https://www.linkedin.com/in/sachin-mallah-sm', 'LinkedIn']
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


    </section>
  );
}