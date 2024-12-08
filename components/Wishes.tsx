"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useStore, Wish } from "@/store/useStore";
import { addWish } from "@/app/actions/wishes";
import { pusherClient } from "@/lib/pusher";

interface WishesProps {
  initialWishes: Wish[];
}

export default function Wishes({ initialWishes }: WishesProps) {
  const {
    user,
    updateUserName,
    wishes,
    setWishes,
    addWish: addWishToStore,
  } = useStore();
  const [newWish, setNewWish] = useState({ message: "" });
  const wishesEndRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setWishes(initialWishes);
  }, [initialWishes, setWishes]);

  const scrollToBottom = () => {
    wishesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [wishes]);

  useEffect(() => {
    const channel = pusherClient.subscribe("wishes");
    channel.bind("new-wish", (data: Wish) => {
      addWishToStore(data);
      toast(`New wish from ${data.name}`);
    });

    return () => {
      pusherClient.unsubscribe("wishes");
    };
  }, [addWishToStore]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user && newWish.message) {
      const formData = new FormData();
      formData.append("userId", user.id);
      formData.append("name", user.name);
      formData.append("image", user.image);
      formData.append("message", newWish.message);

      startTransition(async () => {
        const result = await addWish(formData);
        if (result.success) {
          setNewWish({ message: "" });
        } else {
          toast.error("Failed to submit wish. Please try again.");
        }
      });
    }
  };

  return (
    <div className="space-y-4">
      {user && (
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <Input
            value={user.name}
            onChange={(e) => updateUserName(e.target.value)}
            className="flex-1"
          />
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea
          placeholder="Your Message"
          value={newWish.message}
          onChange={(e) => setNewWish({ message: e.target.value })}
          required
          className="resize-none"
          rows={3}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Sending..." : "Send Wish"}
        </Button>
      </form>
      <ScrollArea className="h-48">
        <AnimatePresence>
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-2">
                <CardContent className="p-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={wish.image} alt={wish.name} />
                      <AvatarFallback>{wish.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold">{wish.name}</p>
                  </div>
                  <p className="text-sm text-gray-600">{wish.message}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={wishesEndRef} />
      </ScrollArea>
    </div>
  );
}
