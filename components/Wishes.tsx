"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Wish } from "@prisma/client";

interface WishesProps {
  initialWishes: Wish[];
}

export default function Wishes({ initialWishes }: WishesProps) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [newWish, setNewWish] = useState({ name: "", message: "" });
  const wishesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    wishesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [wishes]);

  // useEffect(() => {
  //   const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  //     cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  //   });

  //   console.log({ pusher });

  //   const channel = pusher.subscribe("wishes");
  //   channel.bind("new-wish", (data: Wish) => {
  //     setWishes((prev) => [data, ...prev]);
  //     toast(`New wish from ${data.name}`);
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //     pusher.unsubscribe("wishes");
  //   };
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.name && newWish.message) {
      try {
        const response = await fetch("/api/wishes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWish),
        });
        if (!response.ok) {
          throw new Error("Failed to submit wish");
        }
        setNewWish({ name: "", message: "" });
      } catch (error) {
        console.error("Error submitting wish:", error);
        toast.error("Failed to submit wish. Please try again.");
      }
    }
  };

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Condolences and Wishes</h3>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          value={newWish.name}
          onChange={(e) =>
            setNewWish((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
        <Textarea
          placeholder="Your Message"
          value={newWish.message}
          onChange={(e) =>
            setNewWish((prev) => ({ ...prev, message: e.target.value }))
          }
          required
        />
        <Button type="submit" className="w-full">
          Send Wish
        </Button>
      </form>
      <ScrollArea className="h-[300px]">
        <div ref={wishesEndRef} />
        <AnimatePresence>
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-4">
                <CardContent className="pt-4">
                  <p className="font-semibold">{wish.name}</p>
                  <p className="text-gray-600">{wish.message}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
    </section>
  );
}
