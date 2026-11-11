import styles from "./CvCard.module.css";

type CvCardProps = {
  href: string;
  previewUrl: string;
};

export default function CvCard({ href, previewUrl }: CvCardProps) {
  return (
    <a
      className={styles.carte}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={styles.titre}>Mon CV</p>
      <p className={styles.sousTitre}>Ouvrir le PDF</p>
      <img className={styles.apercu} src={previewUrl} alt="Aperçu de mon CV" />
    </a>
  );
}