"use client";

import { useState } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

interface LiveStreamProps {
  streamUrl: string;
}

export default function LiveStream({ streamUrl }: LiveStreamProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getYouTubeVideoId = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|live\/|watch\?v=|watch\?.+&v=))([^&?]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(streamUrl);

  if (!videoId) {
    return (
      <div className="w-full h-0 pb-[56.25%] relative bg-black rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          Invalid YouTube URL
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
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
        >
          Loading live stream...
        </motion.div>
      )}
    </motion.div>
  );
}
