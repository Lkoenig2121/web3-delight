'use client'

import { motion } from 'framer-motion'
import { FiPlay, FiTrendingUp, FiUsers } from 'react-icons/fi'

export default function Hero() {
  const scrollToVideos = () => {
    const videosSection = document.getElementById('trending-videos')
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="neon-cyan">Web3</span>{' '}
          <span className="text-white">Delight</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Experience the future of decentralized video streaming. 
          Watch, create, and share content on the blockchain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={scrollToVideos}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold text-lg flex items-center gap-2 glass border border-neon-cyan/50"
          >
            <FiPlay size={24} />
            Start Watching
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-lg text-white font-semibold text-lg border border-white/20 hover:border-neon-cyan/50 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: FiPlay, label: 'Videos', value: '10K+', color: 'text-neon-cyan' },
            { icon: FiUsers, label: 'Creators', value: '500+', color: 'text-neon-purple' },
            { icon: FiTrendingUp, label: 'Views', value: '1M+', color: 'text-neon-pink' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.15, y: -10 }}
              className="glass p-6 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all cursor-pointer"
            >
              <stat.icon className={`${stat.color} mx-auto mb-4`} size={32} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

