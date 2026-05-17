import { Resend } from 'resend';
import config from '../config';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to,
        subject,
        html
    });
}
