"use server";

import ContactFormEmail from "@/components/ContactFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!message || typeof message !== "string" || message.length > 500) {
    return {
      error: "Invalid message",
    };
  }

  if (
    !senderEmail ||
    typeof senderEmail !== "string" ||
    senderEmail.length > 100
  ) {
    return {
      error: "Invalid email",
    };
  }

  try {
    resend.emails.send({
      from: "Portfolio Contact Form - <onboarding@resend.dev>",
      to: "m.jason.2018@gmail.com",
      subject: "Contact Form - Portfolio",
      reply_to: senderEmail,
      react: <ContactFormEmail message={message} email={senderEmail} />,
    });
    return "Successful";
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};

export default sendMessage;
