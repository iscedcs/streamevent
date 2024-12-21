"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Book, Loader2 } from "lucide-react";
import {
  addGuestbookEntry,
  getGuestbookEntries,
} from "../actions/guestbookEntries";
import { toast } from "sonner";

type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
};

type GuestbookProps = {
  initialEntries: {
    entries: GuestbookEntry[];
    nextCursor: string | undefined;
  };
};

export default function Guestbook({ initialEntries }: GuestbookProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>(
    initialEntries.entries
  );
  const [nextCursor, setNextCursor] = useState<string | undefined>(
    initialEntries.nextCursor
  );
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && nextCursor) {
      loadMoreEntries();
    }
  }, [inView, nextCursor]);

  const loadMoreEntries = async () => {
    if (loading) return;
    setLoading(true);
    const newEntries = await getGuestbookEntries(nextCursor, 10);
    setEntries([...entries, ...newEntries.entries]);
    setNextCursor(newEntries.nextCursor);
    setLoading(false);
  };

  const handleSubmit = async (formData: FormData) => {
    const result = await addGuestbookEntry(formData);
    if (result.error) {
      toast.error("Error", {
        description: result.error,
      });
    } else {
      toast.success("Success", {
        description: "Your message has been added to the guestbook.",
      });
      formRef.current?.reset();
      const newEntries = await getGuestbookEntries(undefined, 10);
      setEntries(newEntries.entries);
      setNextCursor(newEntries.nextCursor);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-purple-800">
          Guestbook
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Share your thoughts and memories of Elder David Okoobo Ovienria JP
        </p>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="mt-1"
              placeholder="Share your thoughts or a favorite memory"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Sign Guestbook
          </Button>
        </form>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-purple-700 flex items-center">
            <Book className="w-6 h-6 mr-2" />
            Guestbook Entries
          </h3>
          {entries.map((entry) => (
            <Card key={entry.id} className="bg-pink-50">
              <CardContent className="p-4">
                <p className="text-gray-800">{entry.message}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-600">- {entry.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
          {nextCursor && (
            <div ref={ref} className="flex justify-center">
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <Button onClick={loadMoreEntries} variant="ghost">
                  Load More
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
