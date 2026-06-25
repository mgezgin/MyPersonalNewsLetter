-- CreateTable
CREATE TABLE "blog"."Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "excerpt" TEXT,
    "tags" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog"."Newsletter" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3),
    "scheduledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog"."NewsletterBlog" (
    "id" TEXT NOT NULL,
    "newsletterId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsletterBlog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog"."Subscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "confirmedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "blog"."Blog"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_slug_key" ON "blog"."Newsletter"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterBlog_newsletterId_blogId_key" ON "blog"."NewsletterBlog"("newsletterId", "blogId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_email_key" ON "blog"."Subscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "blog"."User"("email");

-- AddForeignKey
ALTER TABLE "blog"."NewsletterBlog" ADD CONSTRAINT "NewsletterBlog_newsletterId_fkey" FOREIGN KEY ("newsletterId") REFERENCES "blog"."Newsletter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog"."NewsletterBlog" ADD CONSTRAINT "NewsletterBlog_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog"."Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
