import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export function generateNewsletterEmailHTML(
  newsletter: {
    title: string;
    description?: string | null;
  },
  blogs: Array<{
    title: string;
    excerpt?: string | null;
    slug: string;
  }>
) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${newsletter.title}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; }
          .blog-item { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          .blog-title { font-size: 20px; font-weight: bold; margin-bottom: 10px; color: #1f2937; }
          .blog-excerpt { color: #6b7280; margin-bottom: 15px; }
          .read-more { display: inline-block; background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; }
          .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 14px; border-radius: 0 0 8px 8px; }
          .unsubscribe { color: #60a5fa; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${newsletter.title}</h1>
          ${newsletter.description ? `<p>${newsletter.description}</p>` : ''}
        </div>
        <div class="content">
          ${blogs
            .map(
              (blog) => `
            <div class="blog-item">
              <div class="blog-title">${blog.title}</div>
              ${blog.excerpt ? `<div class="blog-excerpt">${blog.excerpt}</div>` : ''}
              <a href="${appUrl}/blog/${blog.slug}" class="read-more">Read More</a>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="footer">
          <p>You're receiving this email because you subscribed to our newsletter.</p>
          <p><a href="${appUrl}/unsubscribe" class="unsubscribe">Unsubscribe</a></p>
        </div>
      </body>
    </html>
  `;
}
