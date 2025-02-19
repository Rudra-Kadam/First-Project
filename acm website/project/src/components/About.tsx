import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Rocket, Brain } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join a vibrant community of tech enthusiasts and innovators."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth",
      description: "Accelerate your career with hands-on projects and workshops."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Learning",
      description: "Access exclusive resources and mentorship opportunities."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Why Join ACM?
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Our ACM chapter is dedicated to advancing computing as a science and profession.
            We provide a platform for students to explore, learn, and grow in the field of computer science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;