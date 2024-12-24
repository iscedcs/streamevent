"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowDownRightSquare } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface HymnModalProps {
  title: string;
  lyrics: string;
}

export function HymnModal({ title, lyrics }: HymnModalProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-blue-700 hover:underline flex items-center gap-1 flex-wrap">
          {title} <ArrowDownRightSquare className="h-4 w-4" />
        </DialogTrigger>
        <DialogContent className="max-w-md max-h-[80svh]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <ScrollArea>
            <div className="mt-4 whitespace-pre-wrap max-h-[60svh]">
              {lyrics}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
