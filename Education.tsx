import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  description?: string;
  skills?: string[];
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: 'Andhra Loyola Institute of Engineering and Technology',
      degree: 'BTech, Computer Science and Data Science',
      period: 'Sep 2023 - Jun 2027',
      grade: '8.24/10.0',
      description: 'Currently pursuing my undergraduate degree with a focus on computer science and data science concepts.',
      skills: ['Python', 'C Programming', 'Data Analysis',  'Database Systems']
    },
    {
      institution: 'Sri Chaitanya College of Education',
      degree: 'Intermediate MPC',
      period: 'Sep 2021 - Mar 2023',
      grade: '8.54/10.0',
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            My academic background and qualifications that have shaped my knowledge and skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-secondary-500"
            >
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen size={32} className="text-secondary-600" />
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.institution}</h3>
                  <h4 className="text-lg font-medium text-secondary-600 mb-3">{item.degree}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-1" />
                      <span>Grade: {item.grade}</span>
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  )}
                  
                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-secondary-50 text-secondary-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;