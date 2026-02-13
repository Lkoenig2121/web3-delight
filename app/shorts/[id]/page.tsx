"use client";

import { useParams } from "next/navigation";
import { shorts } from "@/lib/shortsData";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import VideoPlayer from "@/components/VideoPlayer";

export default function ShortPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const short = shorts.find((s) => s.id === id);

  if (!short) {
    return (
      <main className="min-h-screen animated-bg flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xl mb-4">Short not found</p>
          <Link href="/" className="text-neon-cyan hover:underline">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen animated-bg flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-neon-cyan mb-6 transition-colors"
        >
          <FiArrowLeft size={20} />
          Back
        </Link>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-4"
        >
          <VideoPlayer
            videoUrl={short.videoUrl}
            thumbnail={short.thumbnail}
            title={short.title}
            vertical
          />
          <div className="glass rounded-xl p-4 border border-white/10 flex items-center gap-3">
            <h1 className="text-white font-semibold text-lg flex-1 truncate">
              {short.title}
            </h1>
            <span className="text-white/70 text-sm flex-shrink-0">
              {short.views} views
            </span>
          </div>
          <div className="glass rounded-xl p-4 border border-white/10">
            <Link
              href={`/profile/${short.creatorId}`}
              className="flex items-center gap-3 min-w-0"
            >
              <img
                src={short.avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <span className="text-white font-medium truncate">
                {short.creator}
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
