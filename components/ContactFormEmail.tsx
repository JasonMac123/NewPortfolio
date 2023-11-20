import React from "react";

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  email: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  message,
  email,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New message from Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You got a message!</Heading>
              <Text>{message}</Text>
              <Hr /> <Text>The Sender is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
