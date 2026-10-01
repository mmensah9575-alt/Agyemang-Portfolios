import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["mmensah9575@gmail.com"], // <-- Replace with your email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Log error so TypeScript won't complain about an unused 'error' variable
    console.error("Server API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
