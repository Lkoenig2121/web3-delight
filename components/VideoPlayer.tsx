"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiMaximize,
  FiSettings,
} from "react-icons/fi";

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnail: string;
  title: string;
  /** Use vertical (9:16) aspect for shorts */
  vertical?: boolean;
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Check if URL is a YouTube URL
function isYouTubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url);
}

export default function VideoPlayer({
  videoUrl,
  thumbnail,
  title,
  vertical,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(120); // Simulated duration for preview (2 min)
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const previewTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isYouTube = videoUrl && isYouTubeUrl(videoUrl);
  const youtubeVideoId =
    videoUrl && isYouTube ? getYouTubeVideoId(videoUrl) : null;
  const embedUrl = youtubeVideoId
    ? `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}`
    : null;

  // Web3 platform: use thumbnail-only "preview" for non-YouTube so we never show off-brand cartoon clips
  const isPreviewMode = !isYouTube;

  useEffect(() => {
    if (!isPreviewMode) return;
    if (isPlaying) {
      previewTimerRef.current = setInterval(() => {
        setCurrentTime((t) => {
          if (t >= duration - 0.5) {
            if (previewTimerRef.current) clearInterval(previewTimerRef.current);
            previewTimerRef.current = null;
            setIsPlaying(false);
            return duration;
          }
          return t + 0.5;
        });
      }, 500);
    } else {
      if (previewTimerRef.current) {
        clearInterval(previewTimerRef.current);
        previewTimerRef.current = null;
      }
    }
    return () => {
      if (previewTimerRef.current) clearInterval(previewTimerRef.current);
    };
  }, [isPlaying, duration]);

  const togglePlay = () => {
    if (isPreviewMode) {
      if (!isPlaying && currentTime >= duration - 0.5) setCurrentTime(0);
      setIsPlaying((p) => !p);
    } else {
      const video = videoRef.current;
      if (video) {
        if (isPlaying) video.pause();
        else video.play().catch(() => {});
      }
    }
  };

  const toggleMute = () => setIsMuted((m) => !m);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPreviewMode) {
      setCurrentTime(parseFloat(e.target.value));
    } else {
      const video = videoRef.current;
      if (video) {
        const newTime = parseFloat(e.target.value);
        video.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const aspectClass = vertical ? "aspect-[9/16]" : "aspect-video";

  // If YouTube URL, use iframe embed
  if (isYouTube && embedUrl) {
    return (
      <div className="relative w-full aspect-video glass rounded-xl overflow-hidden border border-white/10">
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectClass} glass rounded-xl overflow-hidden border border-white/10 group`}
    >
      {isPreviewMode ? (
        <div
          className="relative w-full h-full bg-black cursor-pointer"
          onClick={togglePlay}
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          )}
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          className="w-full h-full object-cover"
          onClick={togglePlay}
          playsInline
          preload="auto"
        />
      )}

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 bg-neon-cyan rounded-full flex items-center justify-center shadow-lg shadow-neon-cyan/50"
          >
            <FiPlay className="text-black ml-1" size={32} />
          </motion.div>
        </motion.div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
            style={{
              background: `linear-gradient(to right, #00f0ff 0%, #00f0ff ${duration ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.2) ${duration ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.2) 100%)`,
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="text-white hover:text-neon-cyan transition-colors"
            >
              {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
            </motion.button>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="text-white hover:text-neon-cyan transition-colors"
              >
                {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
              </motion.button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                  const newVolume = parseFloat(e.target.value);
                  setVolume(newVolume);
                  if (!isPreviewMode && videoRef.current) {
                    videoRef.current.volume = newVolume;
                  }
                }}
                className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
              />
            </div>

            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-neon-cyan transition-colors"
            >
              <FiSettings size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-neon-cyan transition-colors"
            >
              <FiMaximize size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
