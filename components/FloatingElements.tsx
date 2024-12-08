"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import LiveStream from "./LiveStream";
import Wishes from "./Wishes";

export default function FloatingElements({
  initialWishes,
}: {
  initialWishes: any[];
}) {
  const [showLivestream, setShowLivestream] = useState(true);
  const [showWishes, setShowWishes] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showLivestream && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: "100%" }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // @ts-expect-error: Classname exists
            className="fixed top-20 right-4 w-80 z-50"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-2 bg-gray-100 flex justify-between items-center">
                <h3 className="text-sm font-semibold">Live Stream</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLivestream(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <LiveStream
                streamUrl="https://youtube.com/live/MVu0Yc6OlaU?feature=share"
                className="w-full h-44"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWishes && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: "100%" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // @ts-expect-error: Classname exists
            className="fixed bottom-4 right-4 w-80 z-50"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-2 bg-gray-100 flex justify-between items-center">
                <h3 className="text-sm font-semibold">Wishes</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowWishes(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <Wishes initialWishes={initialWishes} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 left-4 space-x-2 z-50">
        {!showLivestream && (
          <Button variant="outline" onClick={() => setShowLivestream(true)}>
            Show Livestream
          </Button>
        )}
        {!showWishes && (
          <Button variant="outline" onClick={() => setShowWishes(true)}>
            Show Wishes
          </Button>
        )}
      </div>
    </>
  );
}
