"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiMenu, FiUser, FiLogOut, FiX, FiPlay } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { allVideos as videos } from "@/lib/videoData";
import { searchVideos, getMatchScore } from "@/lib/searchUtils";
import VideoCard from "./VideoCard";

interface NavbarProps {
  isLoggedIn: boolean;
  user: any;
  onLoginClick: () => void;
  onLogout: () => void;
}

export default function Navbar({
  isLoggedIn,
  user,
  onLoginClick,
  onLogout,
}: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchVideos(searchQuery, videos);
      // Sort by match score
      const sortedResults = results
        .map(video => ({
          video,
          score: getMatchScore(searchQuery, video)
        }))
        .sort((a, b) => b.score - a.score)
        .map(item => item.video);
      setSearchResults(sortedResults);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Navigation Links - Desktop Only */}
          {isLoggedIn && (
            <Link href="/subscriptions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hidden md:block ml-6 px-4 py-2 glass rounded-lg text-white hover:text-neon-cyan transition-colors text-sm font-semibold"
              >
                Subscriptions
              </motion.button>
            </Link>
          )}

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-1 max-w-xl mx-8"
          >
            <div ref={searchRef} className="relative w-full group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
                placeholder="Search Web3 content..."
                className="w-full px-4 py-2 pl-10 pr-10 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all duration-300"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-neon-cyan transition-colors" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setShowResults(false);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiX size={18} />
                </button>
              )}
              
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-full glass-dark rounded-lg border border-white/10 overflow-hidden max-h-96 overflow-y-auto z-50"
                  >
                    <div className="p-2">
                      <div className="text-neon-cyan text-xs font-semibold mb-2 px-2">
                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                      </div>
                      <div className="space-y-2">
                        {searchResults.slice(0, 5).map((video) => (
                          <Link
                            key={video.id}
                            href={`/video/${video.id}`}
                            onClick={() => {
                              setSearchQuery("");
                              setShowResults(false);
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-16 h-10 object-cover rounded"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://via.placeholder.com/160x90/1a0033/00f0ff?text=${encodeURIComponent(video.title)}`;
                                }}
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-semibold truncate">
                                  {video.title}
                                </p>
                                <p className="text-gray-400 text-xs">
                                  {video.creator} • {video.views} views
                                </p>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                {showResults && searchQuery && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-full glass-dark rounded-lg border border-white/10 p-4 z-50"
                  >
                    <p className="text-gray-400 text-sm text-center">
                      No results found for "{searchQuery}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

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
                  onClick={onLogout}
                  className="p-2 glass rounded-lg text-white hover:text-neon-cyan transition-colors"
                >
                  <FiLogOut size={20} />
                </motion.button>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick}
                className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
              >
                Sign In
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 glass rounded-lg text-white"
            >
              {showMobileMenu ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {isLoggedIn && (
                  <Link href="/subscriptions" onClick={() => setShowMobileMenu(false)}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 glass p-3 rounded-lg text-white hover:text-neon-cyan transition-colors cursor-pointer"
                    >
                      <FiPlay size={20} />
                      <span className="font-semibold">Subscriptions</span>
                    </motion.div>
                  </Link>
                )}
                {isLoggedIn && (
                  <Link
                    href={`/profile/${user?.username?.toLowerCase() || "user"}`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 glass p-3 rounded-lg text-white hover:text-neon-cyan transition-colors cursor-pointer"
                    >
                      <FiUser size={20} />
                      <span className="font-semibold">My Profile</span>
                    </motion.div>
                  </Link>
                )}
                {isLoggedIn && (
                  <motion.button
                    onClick={() => {
                      onLogout();
                      setShowMobileMenu(false);
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full flex items-center gap-3 glass p-3 rounded-lg text-white hover:text-neon-cyan transition-colors"
                  >
                    <FiLogOut size={20} />
                    <span className="font-semibold">Sign Out</span>
                  </motion.button>
                )}
                {!isLoggedIn && (
                  <motion.button
                    onClick={() => {
                      onLoginClick();
                      setShowMobileMenu(false);
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
                  >
                    Sign In
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
