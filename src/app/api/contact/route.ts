import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, service, message } = await req.json();

        // Validate basic fields
        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: 'Name, Email, and Message are required.' },
                { status: 400 }
            );
        }

        // SMTP Credentials
        const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || 'info@tecwrites.com';
        const smtpPass = (process.env.SMTP_PASS || process.env.EMAIL_PASS || '').trim();

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpUser,
                pass: smtpPass, // Use an App Password for Gmail
            },
        });

        // Email content for the business owner & team
        const TO_EMAIL = 'info@tecwrites.com';
        const CC_EMAILS = [
            'aliahk.developer@gmail.com',
            'khalid8sharpk@gmail.com',
            'muhammadalisoomr110@gmail.com'
        ];

        const mailOptions = {
            from: `"${firstName} ${lastName}" <${smtpUser}>`,
            to: TO_EMAIL,
            cc: CC_EMAILS,
            replyTo: email,
            subject: `New Contact Request from ${firstName} ${lastName}`,
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Service: ${service}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Request</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Email content for the user (auto-reply)
        const autoReplyOptions = {
            from: smtpUser,
            to: email,
            subject: 'Thank you for contacting TecWrites!',
            text: `Hi ${firstName},\n\nThank you for reaching out to TecWrites. We have received your message regarding "${service}" and our team will get back to you within 24 hours.\n\nBest regards,\nTecWrites Team`,
            html: `
                <h3>Hello ${firstName},</h3>
                <p>Thank you for reaching out to <strong>TecWrites</strong>.</p>
                <p>We have received your message regarding "<strong>${service}</strong>" and our team will get back to you within 24 hours.</p>
                <br>
                <p>Best regards,</p>
                <p><strong>TecWrites Team</strong></p>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(autoReplyOptions)
        ]);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
