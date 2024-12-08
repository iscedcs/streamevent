"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import Wishes from "./Wishes";

export default function FloatingElements({
  initialWishes,
}: {
  initialWishes: any[];
}) {
  const [showWishes, setShowWishes] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showWishes && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: "100%" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // @ts-expect-error: Something went wrong
            className="fixed bottom-4 right-4 w-80 z-50"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-2 bg-gray-100 flex justify-between items-center">
                <h3 className="text-sm font-semibold">
                  Send Condolences and Wishes
                </h3>
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

      <div className="fixed bottom-6 right-6 space-x-2 z-50">
        {!showWishes && (
          <Button
            size={"icon"}
            variant="default"
            className="rounded-full"
            onClick={() => setShowWishes(true)}
          >
            <MessageCircle />
          </Button>
        )}
      </div>
    </>
  );
}
