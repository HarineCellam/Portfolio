import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
  {
    title: 'Full Stack Intern',
    company: 'Copter Code',
    location: 'On-Site',
    period: 'June 9, 2025 – Present',
    description: [
      'Contributing to full-stack development projects using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
      'Collaborating with cross-functional teams to design and implement scalable web applications',
      'Gaining hands-on experience in building secure authentication systems and efficient data workflows',
      'Applying modern UI/UX principles and component-level structuring to ensure responsive user interfaces',
    ],
  },
];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-purple-400 to-cyan-400"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-purple-400 font-semibold mb-2">
                      {experience.company}
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <MapPin size={16} className="mr-1" />
                      {experience.location}
                    </div>
                    
                    <ul className="space-y-2">
                      {experience.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};