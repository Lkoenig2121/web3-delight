'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiThumbsUp, FiShare2, FiMoreVertical } from 'react-icons/fi'
import { getVideoById, videos } from '@/lib/videoData'
import VideoPlayer from '@/components/VideoPlayer'
import VideoCard from '@/components/VideoCard'
import Link from 'next/link'

export default function VideoPage() {
  const params = useParams()
  const videoId = parseInt(params.id as string)
  const video = getVideoById(videoId)

  if (!video) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Video Not Found</h1>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-neon-cyan rounded-lg text-black font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
            >
              Go Home
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  // Get related videos (excluding current video)
  const relatedVideos = videos.filter(v => v.id !== video.id).slice(0, 4)

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
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W3</span>
                </div>
                <span className="text-white font-bold text-xl neon-cyan">
                  Web3 Delight
                </span>
              </motion.div>
            </Link>
            <div className="w-20" /> {/* Spacer */}
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VideoPlayer
                videoUrl={video.videoUrl}
                thumbnail={video.thumbnail}
                title={video.title}
              />
            </motion.div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-xl p-6 border border-white/10"
            >
              <h1 className="text-3xl font-bold text-white mb-4">{video.title}</h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-white hover:text-neon-cyan transition-colors"
                  >
                    <FiThumbsUp size={20} />
                    <span>{video.likes}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 glass px-4 py-2 rounded-lg text-white hover:text-neon-cyan transition-colors"
                  >
                    <FiShare2 size={20} />
                    <span>Share</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-2 rounded-lg text-white hover:text-neon-cyan transition-colors"
                  >
                    <FiMoreVertical size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Creator Info */}
              <Link href={`/profile/${video.creatorId}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 glass p-4 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all cursor-pointer"
                >
                  <img
                    src={video.avatar}
                    alt={video.creator}
                    className="w-16 h-16 rounded-full border-2 border-neon-cyan/50"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(video.creator)}`;
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{video.creator}</h3>
                    <p className="text-gray-400 text-sm">Web3 Content Creator</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-neon-cyan rounded-lg text-black font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </Link>

              {/* Description */}
              <div className="mt-6 glass p-4 rounded-lg border border-white/10">
                <p className="text-white leading-relaxed">{video.description}</p>
              </div>
            </motion.div>
          </div>

          {/* Related Videos Sidebar */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Related Videos</h2>
            {relatedVideos.map((relatedVideo) => (
              <motion.div
                key={relatedVideo.id}
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VideoCard video={relatedVideo} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

