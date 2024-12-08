"use client";

import { useState, useRef } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

interface LiveStreamProps {
  streamUrl: string;
  className?: string;
}

export default function LiveStream({
  streamUrl,
  className = "",
}: LiveStreamProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const streamRef = useRef<HTMLDivElement>(null);

  const getYouTubeVideoId = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|live\/|watch\?v=|watch\?.+&v=))([^&?]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(streamUrl);

  if (!videoId) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 ${className}`}
      >
        Invalid YouTube URL
      </div>
    );
  }

  return (
    <motion.div
      ref={streamRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // @ts-expect-error: Classname exists
      className={`w-full h-full relative bg-black overflow-hidden ${className}`}
    >
      <div className="absolute inset-0">
        <YouTube
          videoId={videoId}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
            },
          }}
          className="absolute top-0 left-0 w-full h-full"
          iframeClassName="w-full h-full"
          onReady={() => setIsLoaded(true)}
        />
      </div>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          // @ts-expect-error: Classname exists
          className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white"
        >
          Loading live stream...
        </motion.div>
      )}
    </motion.div>
  );
}
