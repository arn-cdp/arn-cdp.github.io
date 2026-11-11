import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
};

export default function ProjectCard({ title, imageUrl }: ProjectCardProps) {
  return (
    <div className={styles.carte}>
      <div className={styles.onglet}>Projets</div>

      <div className={styles.corps}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
    </div>
  );
}