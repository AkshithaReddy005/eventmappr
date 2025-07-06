import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300">
                I'm a dedicated developer with a passion for creating innovative solutions. My journey in technology has been driven by curiosity and a desire to make meaningful contributions to the digital world.
              </p>
              <p className="text-gray-300">
                I specialize in building modern web applications that are both functional and beautiful. I believe in the power of clean code, user-centric design, and continuous learning.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-sm text-gray-400">React, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-gray-400">Node.js, Express, MongoDB</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">Tools</h4>
                  <p className="text-sm text-gray-400">Git, Docker, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
