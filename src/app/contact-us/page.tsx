import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRightIcon } from "@/common/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { IconCard } from "@/components/page-sections/IconCard";
import { SectionIntro } from "@/components/page-sections/SectionIntro";
import containerStyles from "@/styles/container.module.scss";
import styles from "@/components/contact/Contact.module.scss";
import { directContact, faq, hero, teams } from "@/components/contact/contact.constants";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact-us" },
  description:
    "Have a question, partnership idea or want to learn more about our iGaming solutions? Our team is here to help.",
};

export default function ContactPage() {
  return (
    <main className={containerStyles.page}>
      <section className={styles.top}>
        <div className={styles.topArt}>
          <Image
            className={styles.topImage}
            src="/images/pages/contact-banner.webp"
            alt=""
            width={1600}
            height={768}
            priority
          />
        </div>

        <div className={`${containerStyles.container} ${styles.topInner}`}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 className={styles.title}>
              {hero.title}
              <span className={styles.titleAccent}>{hero.titleAccent}</span>
            </h1>
            <p className={styles.subhead}>{hero.subhead}</p>

            <div className={styles.direct}>
              <h2 className={styles.directTitle}>{directContact.title}</h2>
              <p className={styles.directSubtitle}>{directContact.subtitle}</p>
              <ul className={styles.channels}>
                {directContact.channels.map((channel) => (
                  <li key={channel.id} className={styles.channel}>
                    <span className={styles.channelIcon}>{channel.icon}</span>
                    <span className={styles.channelLabel}>{channel.label}</span>
                    <a className={styles.channelValue} href={channel.href}>
                      {channel.value}
                      <ArrowRightIcon size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <CtaBanner />

      <section className={styles.teams}>
        <div className={containerStyles.container}>
          <SectionIntro
            eyebrow={teams.eyebrow}
            title={teams.title}
            titleAccent={teams.titleAccent}
          />
          <ul className={styles.teamGrid}>
            {teams.items.map((team) => (
              <IconCard
                key={team.title}
                icon={team.icon}
                title={team.title}
                body={team.body}
                href={team.href}
              />
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion {...faq} />
    </main>
  );
}
