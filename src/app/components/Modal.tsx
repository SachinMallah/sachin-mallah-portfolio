'use client';
import { useEffect } from 'react';
import Image from 'next/image';

type ProjectType = {
  id: string;
  title: string;
  image: string;
  details: {
    description: string;
    features: string[];
    techUsed: string[];
  };
};

type ModalProps = {
  project: ProjectType;
  onClose: () => void;
};

export default function Modal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button onClick={onClose} className="text-black text-2xl hover:text-gray-600 transition-colors">
              ✕
            </button>
          </div>
          
          <div className="relative h-64 bg-gray-200 mb-6 rounded overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Description</h4>
              <p className="text-gray-600">{project.details.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900">Key Features</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {project.details.features.map((feature, index) => (
                  <li key={`feature-${index}`}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.details.techUsed.map((tech, index) => (
                  <span key={`tech-${index}`} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 flex space-x-4">
              <a 
                href="#" 
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <button 
                onClick={onClose} 
                className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}