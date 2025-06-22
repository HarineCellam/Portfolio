import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/HarineCellam', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harine-cellam-ns-160a44256/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nsharinecellam@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-400 max-w-md">
              Thank you for visiting my portfolio. I'm excited to hear about your next project!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 group"
              >
                <social.icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-t border-gray-800 pt-8 w-full"
          >
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear}.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};