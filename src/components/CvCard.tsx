import TabCard from "./TabCard";
import styles from "./CvCard.module.css";

type CvCardProps = {
  href: string; // où mène la carte
  pdfUrl: string; // le PDF utilisé pour l'aperçu
  apercuImage?: string; // une image du CV (plus fiable que le PDF, surtout sur téléphone)
  className?: string;
};

export default function CvCard({ href, pdfUrl, apercuImage, className }: CvCardProps) {
  return (
    <TabCard
      label="CV"
      href={href}
      backgroundColor="#ffc15e"
      textColor="#000000"
      className={className}
    >
      <div className={styles.texte}>
        <p className={styles.titre}>Mon CV</p>
        <p className={styles.sousTitre}>Voir le détail</p>
      </div>

      {apercuImage ? (
        <img className={styles.apercu} src={apercuImage} alt="" />
      ) : (
        <iframe
          className={styles.apercu}
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="Aperçu de mon CV"
          loading="lazy"
          tabIndex={-1}
        />
      )}
    </TabCard>
  );
}
