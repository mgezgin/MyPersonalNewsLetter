import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const series = await prisma.series.findMany({
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { blogs: true } } },
    });
    return NextResponse.json(series);
  } catch {
    return NextResponse.json({ error: "Failed to fetch series" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const series = await prisma.series.create({
      data: { title, slug, description: description || null },
    });

    return NextResponse.json(series, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create series" }, { status: 500 });
  }
}
