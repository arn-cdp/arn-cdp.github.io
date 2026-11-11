import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import styles from "./ContactCard.module.css";

type ContactCardProps = {
  linkedinUrl: string;
  githubUrl: string;
  tel: string;
  email: string;
};

export default function ContactCard({ linkedinUrl, githubUrl, tel, email }: ContactCardProps) {
  return (
    <div className={styles.carte}>
      <p className={styles.titre}>Me contacter</p>

      <div className={styles.liens}>
        <a
          className={styles.lien}
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className={styles.icone} />
        </a>
        <a
          className={styles.lien}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={styles.icone} />
        </a>
        <a className={styles.lien} href={`tel:${tel}`} aria-label="Téléphone">
          <FaPhoneAlt className={styles.icone} />
        </a>
        <a
          className={styles.lien}
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope className={styles.icone} />
        </a>
      </div>
    </div>
  );
}