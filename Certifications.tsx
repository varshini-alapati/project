import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: string[];
  link?: string;
  logo?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'DESIGN THINKING AND INNOVATION',
      issuer: 'Infosys Springboard',
      date: 'April 2025',
    },
    {
      title: 'Internet of Things (IoT)',
      issuer: 'ExcelR',
      date: 'April 2025',
      credentialId: '113260/EXCELR/EDL/25042025',
      skills: ['IoT', 'Embedded Systems', 'Sensors'],
    },
    {
      title: 'Data Science Internship',
      issuer: 'RineX.Ai',
      date: 'March 2024',
      credentialId: 'DS24-RNCO-3068',
      skills: ['Data Structures', 'Algorithms', 'Data Science'],
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'November 2024',
      credentialId: 'NPTEL24CS118S955702381',
      skills: ['Cloud Computing'],
    },
    {
      title: 'Ethical Hacking & Cyber Security Workshop',
      issuer: 'Infosys Springboard',
      date: 'September 2024',
      credentialId: '23HP1A4443',
    },
    {
      title: 'Python Basics',
      issuer: 'HackerRank',
      date: 'December 2024',
      credentialId: 'B19064262AC9',
    },
    {
      title: 'Project Excellence: Mastering Your Minor and Major Projects',
      issuer: 'ExcelR',
      date: 'April 2025',
      credentialId: '114719/EXCELR/EDL/08052025',
    },
    {
      title: 'Problem Solving - Basic',
      issuer: 'HackerRank',
      date: 'April 2025',
      credentialId: 'F07701D16DD',
    },
    {
      title: 'Problem Solving - Intermediate',
      issuer: 'HackerRank',
      date: 'April 2025',
      credentialId: '6368EB36C6C2',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Lernx India',
      date: 'April 2025',
      credentialId: 'Iftstjb0cwp',
    },
    {
      title: 'Java Basics',
      issuer: 'HackerRank',
      date: 'April 2025',
      credentialId: '8D33A9434E3F',
    },
    {
      title: 'Data Analytics ',
      issuer: 'TechnoHacks',
      date: 'MAY 2025',
      credentialId: 'THO9248',
    },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Professional certifications that validate my skills and expertise in various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                expandedId === index ? 'ring-2 ring-primary-500' : 'hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-28 md:h-auto relative">
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-primary-100 flex items-center justify-center">
                      <Award size={48} className="text-primary-500" />
                    </div>
                  )}
                </div>

                <div className="p-5 md:w-2/3 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h3>
                  <span className="text-sm font-medium text-primary-600">{cert.issuer}</span>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  <button onClick={() => toggleExpand(index)} className="text-primary-600 text-sm">
                    {expandedId === index ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === index && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 pb-5">
                    {cert.credentialId && <p className="text-sm">Credential ID: {cert.credentialId}</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
