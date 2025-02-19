import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  funFact: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Professor of Computer Science with expertise in AI and Machine Learning.",
    funFact: "Once coded for 72 hours straight during a NASA hackathon!",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Chapter President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Senior CS student passionate about blockchain technology and cybersecurity.",
    funFact: "Built his first computer at age 12!",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Maya Patel",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Junior focusing on full-stack development and cloud computing.",
    funFact: "Speaks five programming languages and three human languages!",
    social: {
      github: "#",
      linkedin: "#",
      email: "#"
    }
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
          
          <div className="relative overflow-hidden">
            <motion.div
              initial={false}
              animate={{ height: isHovered ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Fun Fact:</span> {member.funFact}
              </p>
            </motion.div>
          </div>
          
          <div className="flex space-x-4 mt-4">
            {member.social.github && (
              <a href={member.social.github} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {member.social.email && (
              <a href={`mailto:${member.social.email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            The passionate individuals behind our ACM chapter
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;