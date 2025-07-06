import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm Akshitha Reddy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A passionate developer and problem solver
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-500 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
