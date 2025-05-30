import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Example experience entry */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Senior Software Engineer</h3>
                <p className="text-blue-600">Example Company</p>
              </div>
              <p className="text-gray-600">2020 - Present</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Led development of key features resulting in 40% increase in user engagement</li>
              <li>Mentored junior developers and implemented best practices across team projects</li>
              <li>Optimized application performance leading to 50% reduction in load times</li>
            </ul>
          </div>

          {/* Additional experience entry */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Full Stack Developer</h3>
                <p className="text-blue-600">Previous Company</p>
              </div>
              <p className="text-gray-600">2018 - 2020</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed and maintained multiple client-facing web applications</li>
              <li>Collaborated with design team to implement responsive UI/UX improvements</li>
              <li>Integrated third-party APIs and services to enhance application functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;