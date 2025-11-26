import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, generateNewsletterEmailHTML } from "@/lib/email";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const newsletter = await prisma.newsletter.findUnique({
      where: { id },
      include: {
        blogs: {
          include: {
            blog: true,
          },
          orderBy: { order: "asc" },
        },
      },
    });

    if (!newsletter) {
      return NextResponse.json(
        { error: "Newsletter not found" },
        { status: 404 }
      );
    }

    if (newsletter.sent) {
      return NextResponse.json(
        { error: "Newsletter already sent" },
        { status: 400 }
      );
    }

    const subscribers = await prisma.subscriber.findMany({
      where: { active: true },
    });

    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: "No active subscribers found" },
        { status: 400 }
      );
    }

    const blogs = newsletter.blogs.map((nb) => nb.blog);
    const emailHTML = generateNewsletterEmailHTML(newsletter, blogs);

    const results = await Promise.allSettled(
      subscribers.map((subscriber) =>
        sendEmail({
          to: subscriber.email,
          subject: newsletter.title,
          html: emailHTML,
        })
      )
    );

    const successCount = results.filter(
      (r) => r.status === "fulfilled"
    ).length;
    const failureCount = results.filter(
      (r) => r.status === "rejected"
    ).length;

    await prisma.newsletter.update({
      where: { id },
      data: {
        sent: true,
        sentAt: new Date(),
      },
    });

    return NextResponse.json({
      message: "Newsletter sent successfully",
      successCount,
      failureCount,
      totalSubscribers: subscribers.length,
    });
  } catch (error) {
    console.error("Newsletter send error:", error);
    return NextResponse.json(
      { error: "Failed to send newsletter" },
      { status: 500 }
    );
  }
}
