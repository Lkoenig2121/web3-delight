"use client";

import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import Link from "next/link";
import { shorts } from "@/lib/shortsData";

export default function ShortsSection() {
  return (
    <section
      className="relative py-8 md:py-12 px-4 md:px-8"
      aria-label="Shorts"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-neon-cyan">Shorts</span>
        </h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="flex gap-4 pb-2 min-w-0">
            {shorts.map((short, index) => (
              <motion.div
                key={short.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex-shrink-0 w-[160px] md:w-[180px]"
              >
                <Link href={`/shorts/${short.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
                  >
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src={short.thumbnail}
                        alt={short.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes("placeholder")) {
                            target.src = `https://via.placeholder.com/400/1a0033/00f0ff?text=${encodeURIComponent(short.title)}`;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center shadow-lg shadow-neon-cyan/50"
                        >
                          <FiPlay className="text-black ml-0.5" size={20} />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-white text-xs font-medium line-clamp-2">
                          {short.title}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 flex items-center gap-2 bg-white/5">
                      <img
                        src={short.avatar}
                        alt=""
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="text-white/90 text-xs truncate">
                        {short.views} views
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
