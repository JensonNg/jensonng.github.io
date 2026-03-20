import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e38e5d51/health", (c) => {
  return c.json({ status: "ok" });
});

// Simplified contact form endpoint (no database dependency)
app.post("/make-server-e38e5d51/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Send email using Resend (no database storage for now)
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.log('RESEND_API_KEY not found, contact form disabled');
      return c.json({ 
        success: false, 
        error: "Contact form is temporarily unavailable. Please email directly to sonngoc.nguyen@hyperisland.se"
      }, 503);
    }

    const emailData = {
      from: 'onboarding@resend.dev', // Using Resend's default domain to avoid verification issues
      to: ['sonngoc.nguyen@hyperisland.se'],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">New Portfolio Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>Received:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `New Portfolio Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Received: ${new Date().toLocaleString()}`
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.log('Resend API error:', errorData);
      
      return c.json({ 
        success: false, 
        error: "Failed to send email. Please email directly to sonngoc.nguyen@hyperisland.se"
      }, 500);
    }

    const emailResult = await response.json();
    console.log('Email sent successfully:', emailResult);

    return c.json({ 
      success: true, 
      message: "Message sent successfully! I'll get back to you soon."
    });

  } catch (error) {
    console.log('Contact form error:', error);
    return c.json({ 
      success: false,
      error: "Contact form temporarily unavailable. Please email directly to sonngoc.nguyen@hyperisland.se"
    }, 500);
  }
});

Deno.serve(app.fetch);