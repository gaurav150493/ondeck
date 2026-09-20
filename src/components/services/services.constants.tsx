import {
  ChartIcon,
  GiftIcon,
  IntegrationIcon,
  SettingsIcon,
  ShieldIcon,
  WalletIcon,
} from "@/common/icons";
import type { Service } from "./services.types";

export const services: Service[] = [
  {
    title: "Fraud, Risk & KYC",
    description:
      "Protect your platform with intelligent fraud detection, risk management, and KYC solutions. We build secure systems that help identify suspicious activity, automate compliance checks, and verify user identities in real time.",
    href: "/services/fraud-risk-kyc",
    icon: <ShieldIcon />,
  },
  {
    title: "Payments",
    description:
      "Our payment solutions enable fast, secure, and reliable transactions across multiple payment methods and currencies. We build scalable payment infrastructures that ensure seamless deposits, withdrawals, and transaction processing while maintaining the highest security standards.",
    href: "/services/payments",
    icon: <WalletIcon />,
  },
  {
    title: "Promotion Engines",
    description:
      "Our Promo Engine solutions are designed to help businesses create, manage, and optimize engaging promotional campaigns at scale. From bonuses, rewards, and cashback offers to loyalty programs and personalized incentives, we build high-performance systems that deliver seamless experiences while driving user engagement and retention.",
    href: "/services/promo-engine",
    icon: <GiftIcon />,
  },
  {
    title: "Prediction Market",
    description:
      "Prediction markets require speed, accuracy, and reliability to deliver a seamless user experience. We build high-performance platforms that enable real-time market updates, secure transactions, and intuitive interfaces, ensuring users can engage with confidence while accessing the latest market insights.",
    href: "/products/prediction-markets",
    icon: <ChartIcon />,
  },
  {
    title: "Sportsbook Solutions",
    description:
      "We empower operators to build and run high-performance sportsbook platforms with advanced technology, real-time data, and seamless integrations. Our solutions are designed to deliver fast, reliable, and engaging betting experiences, ensuring users stay connected with live events and dynamic odds across all devices.",
    href: "/services/sportsbook",
    icon: <IntegrationIcon />,
  },
  {
    title: "Casino Solutions",
    description:
      "We enable operators to build and manage high-performance online casino platforms with advanced technology, seamless integrations, and engaging user experiences. Our solutions are designed to deliver smooth gameplay, secure transactions, and high retention across all devices.",
    href: "/services/casino",
    icon: <SettingsIcon />,
  },
];
