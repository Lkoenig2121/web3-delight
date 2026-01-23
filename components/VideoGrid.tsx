"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { getVideosByCategory, type VideoCategory } from "@/lib/videoData";

const categories: VideoCategory[] = ['All', 'Solidity', 'DeFi', 'NFTs', 'Security', 'Layer 2', 'Tools', 'Advanced'];

export default function VideoGrid() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All');
  const [videosToShow, setVideosToShow] = useState(20);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const categoryVideos = getVideosByCategory(selectedCategory);
  const displayedVideos = categoryVideos.slice(0, videosToShow);

  // Reset videos to show when category changes
  const handleCategoryChange = (category: VideoCategory) => {
    setSelectedCategory(category);
    setVideosToShow(20);
  };

  const handleLoadMore = () => {
    setVideosToShow(prev => {
      const next = prev + 20;
      return Math.min(next, categoryVideos.length);
    });
  };

  const remainingVideos = categoryVideos.length - videosToShow;

  return (
    <motion.section
      id="trending-videos"
      style={{ opacity, y }}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          <span className="neon-cyan">Trending</span> Videos
        </motion.h2>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/50'
                    : 'glass text-gray-300 hover:text-white hover:border-neon-cyan/50 border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Video Count */}
        <motion.p
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 mb-6"
        >
          Showing {displayedVideos.length} of {categoryVideos.length} videos in {selectedCategory}
        </motion.p>

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {displayedVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button if there are more videos */}
        {remainingVideos > 0 && (
          <motion.div
            key={`load-more-${selectedCategory}-${videosToShow}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass rounded-lg text-white font-semibold border border-white/20 hover:border-neon-cyan/50 transition-all"
            >
              Load 20 More ({remainingVideos} remaining)
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
