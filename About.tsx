import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Users, Code, LightbulbIcon } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    {
      icon: <BrainCircuit size={24} className="text-primary-500" />,
      title: 'Analytical Thinker',
      description: 'I enjoy breaking down complex problems and finding patterns in data.'
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: 'Team Collaborator',
      description: 'I thrive in collaborative environments and value diverse perspectives.'
    },
    {
      icon: <Code size={24} className="text-primary-500" />,
      title: 'Continuous Learner',
      description: 'I\'m constantly expanding my knowledge and technical skills.'
    },
    {
      icon: <LightbulbIcon size={24} className="text-primary-500" />,
      title: 'Creative Problem Solver',
      description: 'I approach challenges with creativity and innovative thinking.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Get to know me better and what drives my passion for data science and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I\'m a curious mind with a drive for learning and growth. I enjoy taking on challenges, solving problems creatively, and constantly pushing myself to improve. 
            </p>
            <p className="text-gray-600 mb-4">
              Currently pursuing my BTech in Computer Science and Data Science at Andhra Loyola Institute of Engineering and Technology, I\'m passionate about leveraging data to derive meaningful insights and create impactful solutions.
            </p>
            <p className="text-gray-600">
              Whether working solo or in a team, I\'m motivated and enjoy learning and growing through new challenges. My goal is to become a skilled data scientist who can use technology to solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{quality.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{quality.title}</h4>
                  <p className="text-gray-600 text-sm">{quality.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;