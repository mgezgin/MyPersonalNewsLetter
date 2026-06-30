-- DropForeignKey
ALTER TABLE "blog"."NewsletterBlog" DROP CONSTRAINT "NewsletterBlog_blogId_fkey";

-- DropForeignKey
ALTER TABLE "blog"."NewsletterBlog" DROP CONSTRAINT "NewsletterBlog_newsletterId_fkey";

-- DropTable
DROP TABLE "blog"."NewsletterBlog";

-- DropTable
DROP TABLE "blog"."Newsletter";
