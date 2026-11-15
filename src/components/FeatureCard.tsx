import TabCard from "./TabCard";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  onglet: string;
  value: string;
  label: string;
  href: string;
  backgroundColor: string;
  textColor?: string;
  className?: string;
};

export default function FeatureCard({
  onglet,
  value,
  label,
  href,
  backgroundColor,
  textColor = "#000000",
  className,
}: FeatureCardProps) {
  return (
    <TabCard
      label={onglet}
      href={href}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={className}
    >
      <p className={styles.valeur}>{value}</p>
      <p className={styles.label}>{label}</p>
    </TabCard>
  );
}
