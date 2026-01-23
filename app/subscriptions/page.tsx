'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiLogOut, FiUser } from 'react-icons/fi'
import { videos } from '@/lib/videoData'
import { getSubscriptions } from '@/lib/subscriptionUtils'
import VideoCard from '@/components/VideoCard'
import LoginModal from '@/components/LoginModal'
import Link from 'next/link'

// Parse upload date to sort by newest
function parseUploadDate(uploadDate: string): number {
  const now = Date.now()
  const lower = uploadDate.toLowerCase()
  
  if (lower.includes('day')) {
    const days = parseInt(lower.match(/\d+/)?.[0] || '0')
    return now - days * 24 * 60 * 60 * 1000
  } else if (lower.includes('week')) {
    const weeks = parseInt(lower.match(/\d+/)?.[0] || '0')
    return now - weeks * 7 * 24 * 60 * 60 * 1000
  } else if (lower.includes('month')) {
    const months = parseInt(lower.match(/\d+/)?.[0] || '0')
    return now - months * 30 * 24 * 60 * 60 * 1000
  }
  return now // Default to now if can't parse
}

export default function SubscriptionsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [subscriptions, setSubscriptions] = useState<string[]>([])
  const [subscriptionVideos, setSubscriptionVideos] = useState<any[]>([])

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

  const refreshSubscriptions = () => {
    const subs = getSubscriptions()
    setSubscriptions(subs)
    
    // Get videos from subscribed creators
    const subVideos = videos
      .filter(video => subs.includes(video.creatorId))
      .sort((a, b) => parseUploadDate(b.uploadDate) - parseUploadDate(a.uploadDate))
    
    setSubscriptionVideos(subVideos)
  }

  useEffect(() => {
    refreshSubscriptions()
    
    // Refresh when page becomes visible (user returns from another tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshSubscriptions()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const handleLogin = (token: string, userData: any) => {
    localStorage.setItem('token', token)
    setIsLoggedIn(true)
    setUser(userData)
    setShowLogin(false)
    // Refresh subscriptions after login
    const subs = getSubscriptions()
    setSubscriptions(subs)
    const subVideos = videos
      .filter(video => subs.includes(video.creatorId))
      .sort((a, b) => parseUploadDate(b.uploadDate) - parseUploadDate(a.uploadDate))
    setSubscriptionVideos(subVideos)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUser(null)
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen animated-bg">
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
              >
                Sign In
              </motion.button>
            </div>
          </div>
        </motion.nav>

        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center glass rounded-xl p-12 border border-white/10">
            <h1 className="text-4xl font-bold text-white mb-4">Sign In Required</h1>
            <p className="text-gray-400 mb-6">Please sign in to view your subscriptions</p>
            <motion.button
              onClick={() => setShowLogin(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
            >
              Sign In
            </motion.button>
          </div>
        </div>

        {showLogin && (
          <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
        )}
      </main>
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

            {/* User Actions */}
            <div className="flex items-center space-x-4">
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
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="neon-cyan">My</span> Subscriptions
          </h1>
          <p className="text-gray-400 mb-8">
            {subscriptions.length} creator{subscriptions.length !== 1 ? 's' : ''} subscribed
          </p>

          {subscriptionVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subscriptionVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass rounded-xl p-12 text-center border border-white/10">
              <p className="text-gray-400 text-lg mb-4">No subscriptions yet</p>
              <p className="text-gray-500 text-sm mb-6">
                Subscribe to creators to see their latest videos here
              </p>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
                >
                  Browse Videos
                </motion.button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </main>
  )
}

