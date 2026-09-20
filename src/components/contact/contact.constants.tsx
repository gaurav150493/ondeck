import {
  CommentsIcon,
  EnvelopeIcon,
  HandshakeIcon,
  LayerGroupIcon,
  SupportIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/common/icons";
import type { FaqContent } from "@/components/page-sections/pageSections.types";

export const hero = {
  eyebrow: "Contact Us",
  title: "Let’s Build",
  titleAccent: "What’s Next.",
  subhead:
    "Have a question, partnership idea or want to learn more about our iGaming solutions? Our team is here to help.",
};

export const form = {
  title: "Send us a message",
  subtitle: "Fill in the form and our team will get back to you shortly.",
  consent: "I agree to the Privacy Policy and consent to being contacted by OnDeck Global.",
  submit: "Send Message",
};

export interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "select" | "textarea";
  half?: boolean;
  options?: string[];
}

export const formFields: FormField[] = [
  { name: "firstName", label: "First Name", placeholder: "Enter first name", type: "text", half: true },
  { name: "lastName", label: "Last Name", placeholder: "Enter last name", type: "text", half: true },
  { name: "workEmail", label: "Work Email", placeholder: "Enter work email id", type: "email", half: true },
  { name: "company", label: "Company Name", placeholder: "Enter company name", type: "text", half: true },
  {
    name: "country",
    label: "Country",
    placeholder: "Select your country",
    type: "select",
    half: true,
    options: [],
  },
  {
    name: "reason",
    label: "Reason for contacting",
    placeholder: "Select a topic",
    type: "select",
    half: true,
    options: [],
  },
  { name: "message", label: "Message", placeholder: "Tell us how we can help...", type: "textarea" },
];

export const directContact = {
  title: "Contact us directly",
  subtitle: "Prefer to reach out another way? Use the options below.",
  channels: [
    { id: "email", icon: <EnvelopeIcon />, label: "Email", value: "sales@ondeckglobal.com", href: "mailto:sales@ondeckglobal.com" },
    { id: "whatsapp", icon: <WhatsAppIcon />, label: "WhatsApp", value: "+44 7520 659717", href: "https://wa.me/447520659717" },
    { id: "telegram", icon: <TelegramIcon />, label: "Telegram", value: "@HARMANS007", href: "https://t.me/HARMANS007" },
  ],
};

export const teams = {
  eyebrow: "Expert Support",
  title: "Talk to the",
  titleAccent: "Right Team",
  items: [
    { icon: <LayerGroupIcon />, title: "Product & Platform", body: "Learn about our products, features and integrations.", href: "/contact-us" },
    { icon: <HandshakeIcon />, title: "Partnerships", body: "Explore business opportunities and strategic collaborations.", href: "/contact-us" },
    { icon: <SupportIcon />, title: "Technical Support", body: "Get help with integration, implementation or existing solutions.", href: "/contact-us" },
    { icon: <CommentsIcon />, title: "Support", body: "Discuss tailored solutions for your business needs.", href: "/contact-us" },
  ],
};

const placeholderAnswer =
  "Lorem ipsum dolor sit amet consectetur. Vulputate neque lectus egestas et aliquet. Sed vitae fermentum lorem, in aliquet nisi. Curabitur euismod, arcu vitae ultricies tincidunt, nibh massa lacinia justo, non vehicula lorem risus vel augue.";

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "How quickly can I expect a response?", answer: placeholderAnswer },
    { question: "Who should I contact for a partnership?", answer: placeholderAnswer },
    { question: "Do you offer custom solutions?", answer: placeholderAnswer },
    { question: "How can I get technical support?", answer: placeholderAnswer },
  ],
};
