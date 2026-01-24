"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiCode,
  FiServer,
  FiZap,
  FiDroplet,
  FiHeart,
} from "react-icons/fi";
import Link from "next/link";

export default function AboutPage() {
  const router = useRouter();

  const features = [
    {
      icon: FiDroplet,
      title: "Glassmorphism Design",
      description:
        "Beautiful see-through elements with backdrop blur effects that create a modern, futuristic aesthetic throughout the application.",
      color: "text-neon-cyan",
    },
    {
      icon: FiZap,
      title: "Smooth Animations",
      description:
        "Framer Motion powered animations with scroll effects, parallax, and interactive hover states that bring the UI to life.",
      color: "text-neon-purple",
    },
    {
      icon: FiServer,
      title: "Full-Stack Architecture",
      description:
        "Next.js 14 with TypeScript on the frontend, Express.js backend for authentication, creating a robust and scalable application.",
      color: "text-neon-pink",
    },
    {
      icon: FiCode,
      title: "Modern Tech Stack",
      description:
        "Built with cutting-edge technologies including React, Tailwind CSS, JWT authentication, and responsive design principles.",
      color: "text-neon-cyan",
    },
  ];

  const highlights = [
    "Creating the glassmorphism effects that give the app its unique futuristic look",
    "Implementing smooth scroll animations and parallax effects for an immersive experience",
    "Building a complete authentication system with Express and JWT",
    "Designing the YouTube-like video grid with interactive hover effects",
    "Developing individual video pages and user profile pages",
    "Adding click-to-fill buttons for easy demo account testing",
    "Crafting a cohesive design system with neon accents and dark themes",
  ];

  return (
    <main className="min-h-screen animated-bg">
      {/* Navbar-like header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 glass-dark border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors"
            >
              <FiArrowLeft size={24} />
              <span>Back</span>
            </motion.button>
            <Link href="/">
              <h1 className="text-xl font-bold neon-cyan">Web3 Delight</h1>
            </Link>
            <div className="w-20" /> {/* Spacer */}
          </div>
        </div>
      </motion.nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="neon-cyan">About</span>{" "}
            <span className="text-white">Web3 Delight</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A futuristic YouTube-like platform built with passion and modern web
            technologies
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 mb-12 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiHeart className="text-neon-pink" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Story
            </h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Creating Web3 Delight was an exciting journey into building a
            modern, futuristic video streaming platform. We wanted to combine
            the familiar YouTube-like interface with cutting-edge design
            principles and Web3 aesthetics.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            What made this project special was the opportunity to experiment
            with glassmorphism effects, creating beautiful see-through elements
            that give the application its unique, futuristic look. Every
            component was carefully crafted to maintain visual consistency while
            providing an immersive user experience.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The combination of smooth animations, interactive hover effects, and
            a cohesive design system resulted in a platform that feels both
            familiar and innovative. We're proud of how the glassmorphism
            effects, neon accents, and dark theme come together to create
            something truly special.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="glass rounded-xl p-6 border border-white/10 hover:border-neon-cyan/50 transition-all"
            >
              {(() => {
                const IconComponent = feature.icon;
                return <IconComponent className={`${feature.color} mb-4`} size={32} />;
              })()}
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass rounded-2xl p-8 md:p-12 mb-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What We Loved Creating
          </h2>
          <ul className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="text-neon-cyan mt-1">▸</span>
                <span className="text-lg">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="glass rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Next.js 14",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Framer Motion",
              "Express.js",
              "JWT",
              "Node.js",
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="glass-dark px-4 py-3 rounded-lg text-center border border-white/10 hover:border-neon-cyan/50 transition-all"
              >
                <span className="text-white font-semibold">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
            >
              Start Exploring
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

