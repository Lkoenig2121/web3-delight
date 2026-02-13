"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import VideoGrid from "@/components/VideoGrid";
import Hero from "@/components/Hero";
import ShortsSection from "@/components/ShortsSection";
import LoginModal from "@/components/LoginModal";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Less aggressive fade on mobile - fade slower and less
  const opacity = isMobile
    ? useTransform(scrollY, [0, 500], [1, 0.7])
    : useTransform(scrollY, [0, 300], [1, 0]);
  const y = isMobile
    ? useTransform(scrollY, [0, 500], [0, -30])
    : useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            setIsLoggedIn(true);
            setUser(data);
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  const handleLogin = (token: string, userData: any) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <main className="min-h-screen animated-bg relative overflow-hidden">
      {/* Animated background particles */}
      {isMounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full"
              initial={{
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1920),
                y:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1080),
              }}
              animate={{
                y: [
                  null,
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 1080),
                ],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
      />

      <motion.div style={{ opacity, y }}>
        <Hero />
      </motion.div>

      <ShortsSection />

      <VideoGrid />

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </main>
  );
}
