import {
  CloudIcon,
  HandshakeIcon,
  IntegrationIcon,
  SettingsIcon,
  SupportIcon,
} from "@/common/icons";
import type { Service } from "./services.types";

const placeholder =
  "Lorem ipsum dolor sit amet consectetur. Vulputate neque lectus egestas et aliquet.";

export const services: Service[] = [
  {
    title: "Consulting Expert guidance",
    description: placeholder,
    href: "/services/consulting",
    icon: <HandshakeIcon />,
  },
  {
    title: "Integration",
    description: placeholder,
    href: "/services/integration",
    icon: <IntegrationIcon />,
  },
  {
    title: "Migration",
    description: placeholder,
    href: "/services/migration",
    icon: <CloudIcon />,
  },
  {
    title: "Support",
    description: placeholder,
    href: "/services/support",
    icon: <SupportIcon />,
  },
  {
    title: "Manage Services",
    description: placeholder,
    href: "/services/managed",
    icon: <SettingsIcon />,
  },
];
