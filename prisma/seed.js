require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcryptjs');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting database seed...');

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env before seeding.');
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword },
    create: {
      email: adminEmail,
      name: "Admin",
      password: hashedPassword,
    },
  });
  console.log('✓ Created/Updated admin user:', adminEmail);

  // Create sample blog post
  await prisma.blog.upsert({
    where: { slug: 'getting-started-with-nextjs-15' },
    update: {},
    create: {
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
      tags: ['programming', 'advance'],
      published: true,
      publishedAt: new Date(),
    },
  });

  console.log('✓ Created/Updated blog posts');
  console.log('\n✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
