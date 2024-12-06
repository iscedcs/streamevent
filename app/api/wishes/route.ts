import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { name, message } = await req.json();
      const wish = await prisma.wish.create({
        data: { name, message },
      });

      await pusherServer.trigger("wishes", "new-wish", wish);

      return NextResponse.json(wish);
    } catch (error) {
      console.error("Error creating wish:", error);
      return NextResponse.json(
        { error: "Error creating wish" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}

export async function GET() {
  try {
    const wishes = await prisma.wish.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json(wishes);
  } catch (error) {
    console.error("Error fetching wishes:", error);
    return NextResponse.json(
      { error: "Error fetching wishes" },
      { status: 500 }
    );
  }
}
