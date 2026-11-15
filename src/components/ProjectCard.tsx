import TabCard from "./TabCard";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  className?: string;
};

export default function ProjectCard({ title, imageUrl, className }: ProjectCardProps) {
  return (
    <TabCard
      label="Projets"
      side="droite"
      href="/projets"
      backgroundColor="#020617"
      className={className}
    >
      <img className={styles.image} src={imageUrl} alt={title} data-zoom="" />
    </TabCard>
  );
}
