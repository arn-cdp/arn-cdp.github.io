import styles from "./CvCard.module.css";

type CvCardProps = {
  href: string;
};

export default function CvCard({ href }: CvCardProps) {
  return (
    <div className={styles.carte}>
      <p className={styles.titre}>Mon CV</p>
      <p className={styles.sousTitre}>Ouvrir le PDF</p>

      <iframe
        className={styles.apercu}
        src={`${href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        title="Aperçu de mon CV"
        loading="lazy"
        tabIndex={-1}
      />

      <a
        className={styles.lien}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ouvrir mon CV en PDF"
      />
    </div>
  );
}