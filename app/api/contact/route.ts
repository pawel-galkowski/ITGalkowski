import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const validateBodyElements = (body: Record<string, unknown>, key: string): string | null => {
  const value = body[key];
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = validateBodyElements(body, "name");
    const email = validateBodyElements(body, "email");
    const message = validateBodyElements(body, "message");
    const recaptchaToken = validateBodyElements(body, "recaptchaToken");

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Verify reCAPTCHA
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${encodeURIComponent(recaptchaToken)}`,
    });
    const recaptchaData = (await recaptchaRes.json()) as { success?: boolean };
    if (!recaptchaData.success) {
      return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECIPIENT,
      subject: `Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in contact form submission:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
