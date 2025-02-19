import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-6">
            Stay updated with the latest events, workshops, and opportunities.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Copyright and Attribution */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} ACM Student Chapter. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400 mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by ACM Development Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;