import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import TabCard from "./TabCard";
import styles from "./ContactCard.module.css";

type ContactCardProps = {
  linkedinUrl: string;
  githubUrl: string;
  tel: string;
  email: string;
  className?: string;
};

export default function ContactCard({
  linkedinUrl,
  githubUrl,
  tel,
  email,
  className,
}: ContactCardProps) {
  return (
    <TabCard label="Contact" backgroundColor="#5a5a5a" href="/contact" className={className}>
      <div className={styles.liens}>
        <a
          className={styles.lien}
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          className={styles.lien}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a className={styles.lien} href={`tel:${tel}`} aria-label="Téléphone">
          <FaPhoneAlt />
        </a>
        <a className={styles.lien} href={`mailto:${email}`} aria-label="E-mail">
          <FaEnvelope />
        </a>
      </div>
    </TabCard>
  );
}
