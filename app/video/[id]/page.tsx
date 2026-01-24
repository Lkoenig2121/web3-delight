'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiThumbsUp, FiShare2, FiMoreVertical, FiLogOut } from 'react-icons/fi'
import { getVideoById, videos } from '@/lib/videoData'
import { isSubscribed, toggleSubscription } from '@/lib/subscriptionUtils'
import VideoPlayer from '@/components/VideoPlayer'
import VideoCard from '@/components/VideoCard'
import Comments from '@/components/Comments'
import LoginModal from '@/components/LoginModal'
import Link from 'next/link'

export default function VideoPage() {
  const params = useParams()
  const videoId = parseInt(params.id as string)
  const video = getVideoById(videoId)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            setIsLoggedIn(true)
            setUser(data)
          }
        })
        .catch(() => {
          localStorage.removeItem('token')
        })
    }
  }, [])

  const handleLogin = (token: string, userData: any) => {
    localStorage.setItem('token', token)
    setIsLoggedIn(true)
    setUser(userData)
    setShowLogin(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUser(null)
  }

  useEffect(() => {
    if (video) {
      setSubscribed(isSubscribed(video.creatorId))
    }
  }, [video])

  const handleSubscribe = () => {
    if (video) {
      const newState = toggleSubscription(video.creatorId)
      setSubscribed(newState)
    }
  }

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
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Link
                    href={`/profile/${user?.username?.toLowerCase() || "user"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 cursor-pointer glass px-4 py-2 rounded-lg"
                    >
                      <img
                        src={
                          user?.avatar ||
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=default"
                        }
                        alt={user?.username}
                        className="w-8 h-8 rounded-full border-2 border-neon-cyan"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
                            user?.username || "default"
                          )}`;
                        }}
                      />
                      <span className="text-white hidden sm:block">
                        {user?.username}
                      </span>
                    </motion.div>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="p-2 glass rounded-lg text-white hover:text-neon-cyan transition-colors"
                  >
                    <FiLogOut size={20} />
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLogin(true)}
                  className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
                >
                  Sign In
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
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
              <div className="flex items-center gap-4 glass p-4 rounded-lg border border-white/10">
                <Link href={`/profile/${video.creatorId}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 cursor-pointer"
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
                      <h3 className="text-white font-semibold text-lg hover:text-neon-cyan transition-colors">{video.creator}</h3>
                      <p className="text-gray-400 text-sm">Web3 Content Creator</p>
                    </div>
                  </motion.div>
                </Link>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleSubscribe()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all ml-auto ${
                    subscribed
                      ? 'bg-gray-600 text-white hover:bg-gray-700'
                      : 'bg-neon-cyan text-black hover:shadow-neon-cyan/50'
                  }`}
                >
                  {subscribed ? 'Subscribed' : 'Subscribe'}
                </motion.button>
              </div>

              {/* Description */}
              <div className="mt-6 glass p-4 rounded-lg border border-white/10">
                <p className="text-white leading-relaxed">{video.description}</p>
              </div>

              {/* Comments Section */}
              <Comments videoId={video.id} videoTitle={video.title} />
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

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </main>
  )
}

