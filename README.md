# Personal Newsletter & Blog Platform

A full-featured newsletter and blog platform built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## Features

- **Blog Management**: Create and publish blog posts with categories
- **Category System**: Organize blog posts by categories
- **Newsletter Creation**: Combine multiple blog posts into newsletters
- **Email Subscriptions**: Manage subscribers and send newsletters via email
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Markdown Support**: Write blog posts in Markdown format
- **Admin Dashboard**: Comprehensive admin interface for content management

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: SQLite with Prisma ORM (easily switchable to PostgreSQL)
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Markdown**: react-markdown

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyPersonalNewsLetter
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your settings:
- `DATABASE_URL`: Database connection string (default: SQLite)
- `EMAIL_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP port (default: 587)
- `EMAIL_USER`: Your email address
- `EMAIL_PASSWORD`: Your email password or app-specific password
- `EMAIL_FROM`: Sender email address
- `NEXT_PUBLIC_APP_URL`: Your app URL (default: http://localhost:3000)

### Database Setup

1. Generate Prisma client:
```bash
npx prisma generate
```

2. Run database migrations:
```bash
npx prisma db push
```

3. (Optional) Seed the database with sample data:
```bash
npx prisma studio
```

### Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Creating Categories

1. Navigate to `/admin/categories`
2. Enter a category name and click "Create"

### Creating Blog Posts

1. Navigate to `/admin/blogs`
2. Click "Create New Blog"
3. Fill in the title, select a category, add content (Markdown supported)
4. Optionally add an excerpt
5. Check "Publish immediately" to make it public
6. Click "Create Blog Post"

### Creating Newsletters

1. Navigate to `/admin/newsletters`
2. Click "Create New Newsletter"
3. Enter a title and optional description
4. Select blog posts to include
5. Click "Create Newsletter"

### Sending Newsletters

1. Navigate to `/admin/newsletters`
2. Find the newsletter you want to send
3. Click "Send Now"
4. Confirm the action
5. The newsletter will be sent to all active subscribers

### Managing Subscribers

- Navigate to `/admin/subscribers` to view all subscribers
- Subscribers can sign up via the homepage subscription form

## Project Structure

```
MyPersonalNewsLetter/
├── app/
│   ├── admin/              # Admin pages
│   │   ├── blogs/          # Blog management
│   │   ├── categories/     # Category management
│   │   ├── newsletters/    # Newsletter management
│   │   └── subscribers/    # Subscriber management
│   ├── api/                # API routes
│   │   ├── blogs/          # Blog API
│   │   ├── categories/     # Category API
│   │   ├── newsletters/    # Newsletter API
│   │   └── subscribers/    # Subscriber API
│   ├── blog/               # Public blog pages
│   │   └── [slug]/         # Individual blog post
│   ├── newsletters/        # Newsletter archive
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   └── SubscribeForm.tsx
├── lib/                    # Utility functions
│   ├── prisma.ts           # Prisma client
│   └── email.ts            # Email utilities
├── prisma/
│   └── schema.prisma       # Database schema
├── .env                    # Environment variables
└── package.json
```

## Email Configuration

### Using Gmail

1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password: https://myaccount.google.com/apppasswords
3. Use the app password in your `.env` file

### Using Other Email Providers

Update the SMTP settings in `.env` according to your provider's documentation.

## Database Migration (SQLite to PostgreSQL)

To switch from SQLite to PostgreSQL:

1. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Update `.env` with PostgreSQL connection string:
```
DATABASE_URL="postgresql://user:password@localhost:5432/newsletter"
```

3. Run migrations:
```bash
npx prisma db push
```

## API Routes

### Blogs
- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create a new blog

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a new category

### Newsletters
- `GET /api/newsletters` - Get all newsletters
- `POST /api/newsletters` - Create a new newsletter
- `POST /api/newsletters/[id]/send` - Send a newsletter

### Subscribers
- `GET /api/subscribers` - Get all subscribers
- `POST /api/subscribers` - Subscribe an email

## Contributing

Feel free to submit issues and pull requests!

## License

MIT

## Future Improvements

- [ ] Add authentication for admin pages
- [ ] Implement blog post editing and deletion
- [ ] Add image upload support
- [ ] Implement email templates customization
- [ ] Add analytics and tracking
- [ ] Implement draft scheduling
- [ ] Add search functionality
- [ ] SEO optimization with metadata
- [ ] RSS feed generation
- [ ] Email confirmation for new subscribers
- [ ] Unsubscribe functionality
