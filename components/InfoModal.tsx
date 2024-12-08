"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InfoModalProps {
  trigger: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  isExternalLink?: boolean;
  href?: string;
}

export default function InfoModal({
  trigger,
  title,
  content,
  isExternalLink,
  href,
}: InfoModalProps) {
  const [open, setOpen] = useState(false);

  const handleExternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isExternalLink ? (
          <a href={href} onClick={handleExternalLink}>
            {trigger}
          </a>
        ) : (
          trigger
        )}
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          <DialogContent forceMount className="sm:max-w-[625px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="mt-2 max-h-[60vh]">
                <div className="pr-4">
                  {typeof content === "string" ? (
                    <p className="text-sm text-gray-500">{content}</p>
                  ) : (
                    content
                  )}
                </div>
              </ScrollArea>
              {isExternalLink && (
                <div className="mt-4">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Open in new tab
                  </a>
                </div>
              )}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
