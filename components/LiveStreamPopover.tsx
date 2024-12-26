"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LiveStream from "@/components/LiveStream";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function LiveStreamPopover() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const streamElement = document.getElementById("main-live-stream");
      if (streamElement) {
        const rect = streamElement.getBoundingClientRect();
        setIsVisible(rect.bottom < 0 || rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="fixed bottom-4 right-4 z-50" variant="default">
          Watch Live Stream
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <LiveStream streamUrl="https://m.youtube.com/watch?v=O0ENfzdp3PU&pp=0AUB" />
      </PopoverContent>
    </Popover>
  );
}
