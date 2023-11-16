"use server";

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
      from: "onboarding@resend.dev",
      to: "m.jason.2018@gmail.com",
      subject: "Contact Form - Portfolio",
      text: message,
      reply_to: senderEmail,
    });
  } catch (e: any) {
    console.log(e);
  }
};

export default sendMessage;
