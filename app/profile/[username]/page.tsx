'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiPlay, FiEye, FiCalendar, FiTwitter, FiGithub, FiGlobe } from 'react-icons/fi'
import { getUserProfile } from '@/lib/userData'
import { getVideosByCreator } from '@/lib/videoData'
import { isSubscribed, toggleSubscription } from '@/lib/subscriptionUtils'
import VideoCard from '@/components/VideoCard'
import Link from 'next/link'

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const username = params.username as string
  const profile = getUserProfile(username)
  const userVideos = profile ? getVideosByCreator(profile.id) : []
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    if (profile) {
      setSubscribed(isSubscribed(profile.id))
    }
  }, [profile])

  const handleSubscribe = () => {
    if (profile) {
      const newState = toggleSubscription(profile.id)
      setSubscribed(newState)
    }
  }

  if (!profile) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">User Not Found</h1>
          <motion.button
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-neon-cyan rounded-lg text-black font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          >
            Go Home
          </motion.button>
        </div>
      </div>
    )
  }

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-xl p-8 border border-white/10 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src={profile.avatar}
                alt={profile.displayName}
                className="w-32 h-32 rounded-full border-4 border-neon-cyan/50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(profile.username)}`;
                }}
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-cyan rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
            </motion.div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{profile.displayName}</h1>
              <p className="text-gray-400 mb-4">@{profile.username}</p>
              <p className="text-gray-300 mb-6 max-w-2xl">{profile.bio}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <FiUsers className="text-neon-cyan" size={20} />
                  <span className="font-semibold">{profile.subscribers}</span>
                  <span className="text-gray-400">subscribers</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FiPlay className="text-neon-purple" size={20} />
                  <span className="font-semibold">{profile.videos}</span>
                  <span className="text-gray-400">videos</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FiEye className="text-neon-pink" size={20} />
                  <span className="font-semibold">{profile.totalViews}</span>
                  <span className="text-gray-400">total views</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FiCalendar className="text-gray-400" size={20} />
                  <span className="text-gray-400">Joined {profile.joinDate}</span>
                </div>
              </div>

              {/* Social Links */}
              {Object.keys(profile.socialLinks).length > 0 && (
                <div className="flex items-center gap-4">
                  {profile.socialLinks.twitter && (
                    <motion.a
                      href={`https://twitter.com/${profile.socialLinks.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="glass p-2 rounded-lg text-white hover:text-neon-cyan transition-colors"
                    >
                      <FiTwitter size={20} />
                    </motion.a>
                  )}
                  {profile.socialLinks.github && (
                    <motion.a
                      href={`https://github.com/${profile.socialLinks.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="glass p-2 rounded-lg text-white hover:text-neon-cyan transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  )}
                  {profile.socialLinks.website && (
                    <motion.a
                      href={`https://${profile.socialLinks.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="glass p-2 rounded-lg text-white hover:text-neon-cyan transition-colors"
                    >
                      <FiGlobe size={20} />
                    </motion.a>
                  )}
                </div>
              )}
            </div>

            <motion.button
              onClick={handleSubscribe}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all ${
                subscribed
                  ? 'bg-gray-600 hover:bg-gray-700'
                  : 'bg-gradient-to-r from-neon-cyan to-neon-purple hover:shadow-neon-cyan/50'
              }`}
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </motion.button>
          </div>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            <span className="neon-cyan">Videos</span> by {profile.displayName}
          </h2>

          {userVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass rounded-xl p-12 text-center border border-white/10">
              <p className="text-gray-400 text-lg">No videos yet</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}

