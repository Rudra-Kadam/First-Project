import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { format, isFuture } from 'date-fns';

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  type: 'workshop' | 'meetup' | 'hackathon';
  capacity: number;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    time: "2:00 PM - 4:00 PM",
    location: "Computer Science Building, Room 101",
    description: "Learn modern web development techniques with React and TypeScript.",
    type: "workshop",
    capacity: 30,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    title: "AI/ML Hackathon",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    time: "9:00 AM - 6:00 PM",
    location: "Innovation Hub",
    description: "48-hour hackathon focused on artificial intelligence and machine learning projects.",
    type: "hackathon",
    capacity: 100,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    title: "Tech Talk: Future of Computing",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    time: "5:00 PM - 6:30 PM",
    location: "Virtual Event",
    description: "Join industry experts as they discuss the future of computing and emerging technologies.",
    type: "meetup",
    capacity: 200,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
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
        <div className="h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              event.type === 'workshop' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              event.type === 'hackathon' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{event.capacity} spots</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
          
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{format(event.date, 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <p className="mt-4 text-gray-600 dark:text-gray-300">{event.description}</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {isFuture(event.date) ? 'Register Now' : 'View Details'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredEvents = events.filter(event => {
    if (activeTab === 'upcoming') return isFuture(event.date);
    if (activeTab === 'past') return !isFuture(event.date);
    return true;
  });

  const tabs = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'past', label: 'Past Events' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="events">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Events & Workshops
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            Join our upcoming events or explore our past gatherings
          </p>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;