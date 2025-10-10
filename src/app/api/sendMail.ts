import { IMail } from '@/src/components/interface/mail.interface';
import nodemailer from 'nodemailer'

// Create a test account or replace with real credentials.
 const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "thulungtufan16@gmail.com",
    pass: process.env.Pass?? "",
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
})();

export const NewMail = async (data: IMail) => {
    try{
        const response = await transporter.sendMail({
            from: data.email,
            to: "thulungtufan16@gmail.com",
            subject: `Query message by ${data.full_name}`,
            text: data.message
        })
        return response.messageId;
    } catch (err: any) {
        return err;
    }
}