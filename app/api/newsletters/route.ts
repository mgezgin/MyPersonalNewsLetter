import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const newsletters = await prisma.newsletter.findMany({
      include: {
        blogs: {
          include: {
            blog: {
              include: {
                category: true,
              },
            },
          },
          orderBy: { order: "asc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(newsletters);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch newsletters" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, blogIds } = body;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newsletter = await prisma.newsletter.create({
      data: {
        title,
        slug,
        description: description || null,
        blogs: {
          create: blogIds?.map((blogId: string, index: number) => ({
            blogId,
            order: index,
          })) || [],
        },
      },
      include: {
        blogs: {
          include: {
            blog: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(newsletter, { status: 201 });
  } catch (error) {
    console.error("Newsletter creation error:", error);
    return NextResponse.json(
      { error: "Failed to create newsletter" },
      { status: 500 }
    );
  }
}
