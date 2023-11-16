"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  resend.emails.send({
    from: senderEmail,
    to: "m.jason.2018@gmail.com",
    subject: "Contact Form - Portfolio",
    text: message,
  });
};

export default sendMessage;
