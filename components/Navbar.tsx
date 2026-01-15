"use client";

import { motion } from "framer-motion";
import { FiSearch, FiMenu, FiUser, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

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

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-1 max-w-xl mx-8"
          >
            <div className="relative w-full group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Web3 content..."
                className="w-full px-4 py-2 pl-10 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all duration-300"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-neon-cyan transition-colors" />
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-full mt-2 w-full glass-dark rounded-lg p-2 border border-white/10"
                >
                  <p className="text-white text-sm">
                    Search results for "{searchQuery}"
                  </p>
                </motion.div>
              )}
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
                whileHover={{ scale: 1.05 }}
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
              className="md:hidden p-2 glass rounded-lg text-white"
            >
              <FiMenu size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
