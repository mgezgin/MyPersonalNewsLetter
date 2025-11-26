const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const user = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin User",
      password: hashedPassword,
    },
  });
  console.log('✓ Created/Updated admin user');

  // Create categories
  const techCategory = await prisma.category.upsert({
    where: { slug: 'technology' },
    update: {},
    create: {
      name: 'Technology',
      slug: 'technology',
    },
  });

  const lifestyleCategory = await prisma.category.upsert({
    where: { slug: 'lifestyle' },
    update: {},
    create: {
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
  });

  const businessCategory = await prisma.category.upsert({
    where: { slug: 'business' },
    update: {},
    create: {
      name: 'Business',
      slug: 'business',
    },
  });

  console.log('✓ Created/Updated categories');

  // Create sample blog posts
  // Using upsert to avoid duplicates
  const blog1 = await prisma.blog.upsert({
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
      published: true,
      publishedAt: new Date(),
      categoryId: techCategory.id,
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
