'use client'

import { motion } from 'framer-motion'
import { FiPlay, FiClock } from 'react-icons/fi'
import Link from 'next/link'
import type { Video } from '@/lib/videoData'

interface VideoCardProps {
  video: Video
  onClick?: () => void
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      className="glass rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
    >
      {/* Thumbnail */}
      <Link href={`/video/${video.id}`} onClick={handleClick}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-neon-cyan rounded-full flex items-center justify-center shadow-lg shadow-neon-cyan/50"
            >
              <FiPlay className="text-black ml-1" size={24} />
            </motion.div>
          </div>
          <div className="absolute bottom-2 right-2 glass-dark px-2 py-1 rounded flex items-center gap-1">
            <FiClock size={12} className="text-white" />
            <span className="text-white text-xs">{video.duration}</span>
          </div>
        </div>
      </Link>

      {/* Video Info */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Link href={`/profile/${video.creatorId}`}>
            <img
              src={video.avatar}
              alt={video.creator}
              className="w-10 h-10 rounded-full border-2 border-neon-cyan/50 flex-shrink-0 hover:border-neon-cyan transition-colors cursor-pointer"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <Link href={`/video/${video.id}`} onClick={handleClick}>
              <h3 className="text-white font-semibold mb-1 line-clamp-2 group-hover:text-neon-cyan transition-colors">
                {video.title}
              </h3>
            </Link>
            <Link href={`/profile/${video.creatorId}`}>
              <motion.p
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 text-sm mb-1 hover:text-neon-cyan transition-colors cursor-pointer inline-block"
              >
                {video.creator}
              </motion.p>
            </Link>
            <motion.p
              whileHover={{ scale: 1.1 }}
              className="text-gray-500 text-xs inline-block cursor-default"
            >
              {video.views} views
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

