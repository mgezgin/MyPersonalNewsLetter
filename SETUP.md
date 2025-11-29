# Quick Setup Guide

## Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Generate Prisma Client**
```bash
npm run db:generate
```

If you encounter a 403 Forbidden error when downloading Prisma engines, try:
```bash
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npm run db:generate
```

3. **Initialize the Database**
```bash
npm run db:push
```

4. **Seed the Database (Optional but Recommended)**
```bash
npm run db:seed
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Vercel Blob Storage (for image uploads)
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
```

### Database Setup

You have several options for PostgreSQL:

1. **Vercel Postgres** (Recommended for production):
   - Go to your Vercel project → Storage → Create Database → Postgres
   - Copy the `DATABASE_URL` connection string
   
2. **Local PostgreSQL**:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/newsletter"
   ```

3. **Managed Services** (Neon, Supabase, Railway):
   - Create a PostgreSQL database
   - Copy the connection string

### Vercel Blob Storage Setup

1. Create a Vercel account at https://vercel.com
2. Go to Storage → Create Blob Store
3. Copy your `BLOB_READ_WRITE_TOKEN`
4. Add it to your `.env` file

**Note**: For local development, you can skip Vercel Blob setup initially. The app will show errors when uploading images, but other features will work.

5. **Start the Development Server**
```bash
npm run dev
```

Visit http://localhost:3000 to see your application!

## First Steps

1. **Create Categories** at `/admin/categories`
   - Example: Technology, Lifestyle, Business, etc.

2. **Create Blog Posts** at `/admin/blogs/new`
   - Write your first blog post
   - Assign it to a category
   - Publish it

3. **Create a Newsletter** at `/admin/newsletters/new`
   - Select multiple blog posts
   - Give it a title and description
   - Send it to subscribers

4. **Test Subscription** on the homepage
   - Subscribe with your email
   - Verify the subscription works

## Troubleshooting

### Prisma Engine Download Issues

If you're unable to download Prisma engines due to network restrictions:

1. Try using a VPN or different network
2. Set the environment variable: `PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1`
3. Check your proxy settings
4. Ensure you have internet access to binaries.prisma.sh

### Email Not Sending

1. Verify your SMTP credentials are correct
2. For Gmail: Enable 2FA and create an App Password
3. Check that EMAIL_HOST, EMAIL_PORT match your provider
4. Test your SMTP connection independently

### Database Issues

If database isn't working:
```bash
rm prisma/dev.db
npm run db:push
```

This will recreate the database from scratch.

## Production Deployment

For production, consider:

1. **Switch to PostgreSQL** instead of SQLite
   - Update `prisma/schema.prisma` datasource
   - Update `DATABASE_URL` in production environment

2. **Set up proper authentication** for admin routes
   - Use NextAuth.js or similar

3. **Configure a proper email service**
   - Use SendGrid, AWS SES, or similar
   - Better than SMTP for production

4. **Add rate limiting** to API routes

5. **Set up monitoring and logging**

## Support

For issues, check:
- README.md for complete documentation
- Next.js docs: https://nextjs.org/docs
- Prisma docs: https://www.prisma.io/docs
