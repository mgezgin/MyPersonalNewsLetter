const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Create categories
  const techCategory = await prisma.category.create({
    data: {
      name: 'Technology',
      slug: 'technology',
    },
  });

  const lifestyleCategory = await prisma.category.create({
    data: {
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
  });

  const businessCategory = await prisma.category.create({
    data: {
      name: 'Business',
      slug: 'business',
    },
  });

  console.log('✓ Created categories');

  // Create sample blog posts
  const blog1 = await prisma.blog.create({
    data: {
      title: 'Getting Started with Next.js 15',
      slug: 'getting-started-with-nextjs-15',
      content: `# Introduction to Next.js 15

Next.js 15 brings exciting new features and improvements to the React framework. In this post, we'll explore the key features and how to get started.

## Key Features

- **App Router**: The new paradigm for building Next.js applications
- **Server Components**: Improved performance with React Server Components
- **Turbopack**: Faster build times with the new bundler
- **Enhanced Image Optimization**: Better performance for your images

## Getting Started

To create a new Next.js 15 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

Visit http://localhost:3000 to see your app!

## Conclusion

Next.js 15 is a powerful framework that makes building React applications easier and more performant.`,
      excerpt: 'Learn about the exciting new features in Next.js 15 and how to get started building modern web applications.',
      published: true,
      publishedAt: new Date(),
      categoryId: techCategory.id,
    },
  });

  const blog2 = await prisma.blog.create({
    data: {
      title: 'Building a Newsletter Platform',
      slug: 'building-a-newsletter-platform',
      content: `# How to Build a Newsletter Platform

Creating your own newsletter platform gives you full control over your content and subscribers. Let's explore how to build one.

## Requirements

- Content management system
- Email delivery service
- Subscriber management
- Newsletter composition

## Tech Stack

We'll use:
- Next.js for the frontend and backend
- Prisma for database management
- Nodemailer for email delivery
- Tailwind CSS for styling

## Features to Include

1. **Blog Posts**: Write and publish articles
2. **Categories**: Organize content
3. **Newsletters**: Combine multiple posts
4. **Email Sending**: Deliver to subscribers

This gives you a complete platform for sharing your content!`,
      excerpt: 'A comprehensive guide to building your own newsletter platform from scratch.',
      published: true,
      publishedAt: new Date(Date.now() - 86400000), // 1 day ago
      categoryId: techCategory.id,
    },
  });

  const blog3 = await prisma.blog.create({
    data: {
      title: 'Work-Life Balance in Remote Work',
      slug: 'work-life-balance-remote-work',
      content: `# Achieving Work-Life Balance While Working Remotely

Remote work offers flexibility, but it can blur the lines between work and personal life. Here's how to maintain balance.

## Set Clear Boundaries

- Define specific work hours
- Create a dedicated workspace
- Communicate availability to family

## Take Regular Breaks

Don't forget to:
- Step away from your desk
- Go for walks
- Have a proper lunch break

## Stay Connected

- Regular video calls with colleagues
- Virtual coffee breaks
- Join online communities

Balance is key to long-term success and happiness in remote work!`,
      excerpt: 'Tips and strategies for maintaining a healthy work-life balance when working from home.',
      published: true,
      publishedAt: new Date(Date.now() - 172800000), // 2 days ago
      categoryId: lifestyleCategory.id,
    },
  });

  console.log('✓ Created blog posts');

  // Create sample subscribers
  await prisma.subscriber.createMany({
    data: [
      {
        email: 'subscriber1@example.com',
        name: 'John Doe',
        active: true,
        confirmedAt: new Date(),
      },
      {
        email: 'subscriber2@example.com',
        name: 'Jane Smith',
        active: true,
        confirmedAt: new Date(),
      },
    ],
  });

  console.log('✓ Created sample subscribers');

  // Create a sample newsletter
  const newsletter = await prisma.newsletter.create({
    data: {
      title: 'Weekly Tech Digest - November 2024',
      slug: 'weekly-tech-digest-november-2024',
      description: 'Your weekly dose of technology news and tutorials',
      sent: true,
      sentAt: new Date(),
      blogs: {
        create: [
          {
            blogId: blog1.id,
            order: 0,
          },
          {
            blogId: blog2.id,
            order: 1,
          },
        ],
      },
    },
  });

  console.log('✓ Created sample newsletter');
  console.log('\n✅ Database seeded successfully!');
  console.log('\nYou can now:');
  console.log('- Visit http://localhost:3000 to see the homepage');
  console.log('- Go to http://localhost:3000/admin to access the admin dashboard');
  console.log('- Create more blog posts at http://localhost:3000/admin/blogs/new');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
