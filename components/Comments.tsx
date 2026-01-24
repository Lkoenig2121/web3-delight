'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiThumbsUp, FiThumbsDown, FiMoreVertical, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { getCommentsForVideo, type Comment } from '@/lib/commentsData'
import Link from 'next/link'

interface CommentsProps {
  videoId: number
  videoTitle: string
}

const COMMENTS_PER_PAGE = 20

export default function Comments({ videoId, videoTitle }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalComments, setTotalComments] = useState(0)
  const [hasMore, setHasMore] = useState(false)
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'top' | 'newest'>('top')

  useEffect(() => {
    // Reset to page 1 when sort or video changes
    setCurrentPage(1)
    setComments([])
    setExpandedReplies(new Set())
    loadComments(1, sortBy)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, sortBy])

  useEffect(() => {
    // Load more comments when page changes (but not on initial load or sort change)
    if (currentPage > 1) {
      loadComments(currentPage, sortBy, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const loadComments = (page: number, sort: 'top' | 'newest' = 'top', append: boolean = false) => {
    setLoading(true)
    // Simulate API delay
    setTimeout(() => {
      const data = getCommentsForVideo(videoId, videoTitle, page, COMMENTS_PER_PAGE, sort)
      if (page === 1 || !append) {
        setComments(data.comments)
      } else {
        setComments(prev => [...prev, ...data.comments])
      }
      setTotalComments(data.total)
      setHasMore(data.hasMore)
      setLoading(false)
    }, 300)
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const toggleReplies = (commentId: string) => {
    setExpandedReplies(prev => {
      const newSet = new Set(prev)
      if (newSet.has(commentId)) {
        newSet.delete(commentId)
      } else {
        newSet.add(commentId)
      }
      return newSet
    })
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="mt-8">
      {/* Comments Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          {formatNumber(totalComments)} Comments
        </h2>
        <div className="flex items-center gap-2">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'top' | 'newest')}
            className="glass px-4 py-2 rounded-lg text-white text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-cyan cursor-pointer"
          >
            <option value="top">Top comments</option>
            <option value="newest">Newest first</option>
          </select>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        <AnimatePresence>
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass rounded-lg p-4 border border-white/10"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <Link href={`/profile/${comment.authorId}`}>
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full border-2 border-neon-cyan/50 flex-shrink-0 hover:border-neon-cyan transition-colors cursor-pointer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(comment.author)}`
                    }}
                  />
                </Link>

                {/* Comment Content */}
                <div className="flex-1 min-w-0">
                  {/* Author and Timestamp */}
                  <div className="flex items-center gap-2 mb-1">
                    <Link href={`/profile/${comment.authorId}`}>
                      <span className="text-white font-semibold hover:text-neon-cyan transition-colors cursor-pointer">
                        {comment.author}
                      </span>
                    </Link>
                    {comment.isPinned && (
                      <span className="text-xs px-2 py-0.5 bg-neon-cyan/20 text-neon-cyan rounded">
                        PINNED
                      </span>
                    )}
                    <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                  </div>

                  {/* Comment Text */}
                  <p className="text-white mb-3 leading-relaxed">{comment.text}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <FiThumbsUp size={18} />
                      <span className="text-sm">{formatNumber(comment.likes)}</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <FiThumbsDown size={18} />
                    </motion.button>
                    <button className="text-gray-400 hover:text-white transition-colors text-sm">
                      Reply
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors ml-auto"
                    >
                      <FiMoreVertical size={18} />
                    </motion.button>
                  </div>

                  {/* Replies */}
                  {comment.replies > 0 && (
                    <div className="mt-4">
                      <motion.button
                        onClick={() => toggleReplies(comment.id)}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors text-sm font-semibold mb-3"
                      >
                        {expandedReplies.has(comment.id) ? (
                          <>
                            <FiChevronUp size={16} />
                            Hide {comment.replies} replies
                          </>
                        ) : (
                          <>
                            <FiChevronDown size={16} />
                            View {comment.replies} replies
                          </>
                        )}
                      </motion.button>

                      <AnimatePresence>
                        {expandedReplies.has(comment.id) && comment.repliesList && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 ml-6 pl-4 border-l-2 border-white/10"
                          >
                            {comment.repliesList.map((reply) => (
                              <div key={reply.id} className="flex gap-3">
                                <Link href={`/profile/${reply.authorId}`}>
                                  <img
                                    src={reply.avatar}
                                    alt={reply.author}
                                    className="w-8 h-8 rounded-full border-2 border-neon-cyan/50 flex-shrink-0 hover:border-neon-cyan transition-colors cursor-pointer"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(reply.author)}`
                                    }}
                                  />
                                </Link>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Link href={`/profile/${reply.authorId}`}>
                                      <span className="text-white font-semibold text-sm hover:text-neon-cyan transition-colors cursor-pointer">
                                        {reply.author}
                                      </span>
                                    </Link>
                                    <span className="text-gray-400 text-xs">{reply.timestamp}</span>
                                  </div>
                                  <p className="text-white text-sm mb-2">{reply.text}</p>
                                  <div className="flex items-center gap-4">
                                    <motion.button
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="flex items-center gap-1 text-gray-400 hover:text-neon-cyan transition-colors text-xs"
                                    >
                                      <FiThumbsUp size={14} />
                                      <span>{formatNumber(reply.likes)}</span>
                                    </motion.button>
                                    <button className="text-gray-400 hover:text-white transition-colors text-xs">
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={loadMore}
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass rounded-lg text-white font-semibold border border-white/20 hover:border-neon-cyan/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : `Load More Comments (${formatNumber(totalComments - comments.length)} remaining)`}
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

