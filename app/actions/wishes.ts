"use server";

import { prisma } from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export const sendWish = async ({
  name,
  message,
}: {
  name: string;
  message: string;
}) => {
  try {
    const wish = await prisma.wish.create({
      data: { name, message },
    });

    await pusherServer.trigger("wishes", "new-wish", wish);
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
};
