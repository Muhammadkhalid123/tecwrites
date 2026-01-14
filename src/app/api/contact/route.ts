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

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use an App Password for Gmail
            },
        });

        // Email content for the business owner
        const recipients = process.env.CONTACT_RECIPIENT || process.env.EMAIL_USER || '';
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipients.split(',').map(e => e.trim()).filter(e => e !== ''),
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
            from: process.env.EMAIL_USER,
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
