-- CreateTable
CREATE TABLE "blog"."Series" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Series_slug_key" ON "blog"."Series"("slug");

-- AlterTable
ALTER TABLE "blog"."Blog" ADD COLUMN "seriesId" TEXT,
ADD COLUMN "seriesOrder" INTEGER;

-- AddForeignKey
ALTER TABLE "blog"."Blog" ADD CONSTRAINT "Blog_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "blog"."Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
