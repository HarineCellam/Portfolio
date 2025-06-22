import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, inView, delay }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${animatedLevel}%` : 0 }}
          transition={{ delay, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-50 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'C', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'C#', level: 55 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Oracle Database', level: 70 },
      { name: 'MySQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'JavaFX', level: 70 },
      { name: 'Swing', level: 65 },
    ],
  },
  {
    title: 'Frameworks & Platforms',
    skills: [
      { name: 'Unity', level: 75 },
      { name: 'AR/VR', level: 70 },
      { name: 'Meta Quest 2', level: 65 },
    ],
  },
];
  return (
    <section id="skills" className="py-20">
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
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    inView={inView}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};