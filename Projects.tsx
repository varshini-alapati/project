import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Environmental Monitoring System',
      description: 'A smart system to monitor air, water, and soil pollution, providing analytics and reporting for a safer environment.',
      category: 'data',
      technologies: ['Python', 'Pandas', 'Plotly', 'Dash'],
      github: 'https://github.com',
    },
    {
      title: 'Safe Birth',
      description: 'A pregnancy tracking platform with diet plans, medical alerts, document management, and emergency features for expecting mothers.',
      category: 'iot',
      technologies: ['Arduino', 'Python', 'MQTT', 'Node.js'],
      link: 'https://example.com',
    },
  ];

  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'iot', label: 'IoT' },
    { id: 'web', label: 'Web Development' },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || '/default-placeholder.jpg'} // fallback image
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


