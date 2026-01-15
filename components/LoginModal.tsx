'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiX, FiMail, FiLock, FiUser } from 'react-icons/fi'

interface LoginModalProps {
  onClose: () => void
  onLogin: (token: string, user: any) => void
}

export default function LoginModal({ onClose, onLogin }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'
      const body = isLogin
        ? { email, password }
        : { email, password, username }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        throw new Error(
          `Server error: ${response.status}. Make sure the Express server is running on port 3001.`
        )
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      onLogin(data.token, data.user)
    } catch (err: any) {
      setError(
        err.message ||
          'Failed to connect to server. Please make sure the backend server is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-dark rounded-2xl p-8 max-w-md w-full border border-white/20 relative"
        >
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </motion.button>

          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-400 mb-6">
            {isLogin
              ? 'Sign in to access Web3 Delight'
              : 'Join the decentralized video revolution'}
          </p>

          {/* Demo Account Info */}
          <div className="mb-6 p-4 glass rounded-lg border border-neon-cyan/30">
            <p className="text-neon-cyan text-sm font-semibold mb-3">Demo Accounts:</p>
            <div className="flex flex-col gap-2">
              <motion.button
                type="button"
                onClick={() => {
                  setEmail('user@web3delight.com')
                  setPassword('web3pass')
                  setError('')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 glass rounded-lg text-white text-sm border border-neon-cyan/50 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all text-left"
              >
                <span className="text-neon-cyan font-semibold">Click to fill:</span> user@web3delight.com
              </motion.button>
              <motion.button
                type="button"
                onClick={() => {
                  setEmail('dev@web3delight.com')
                  setPassword('web3pass')
                  setError('')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 glass rounded-lg text-white text-sm border border-neon-cyan/50 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all text-left"
              >
                <span className="text-neon-cyan font-semibold">Click to fill:</span> dev@web3delight.com
              </motion.button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm mb-2">Username</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                    placeholder="Enter username"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all disabled:opacity-50"
            >
              {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <motion.button
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-neon-cyan hover:text-neon-purple transition-colors text-sm"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

