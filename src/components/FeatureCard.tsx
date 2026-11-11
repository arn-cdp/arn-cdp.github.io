import Link from "next/link";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  value: string;
  label: string;
  href: string;
  backgroundColor: string;
  textColor?: string;
};

export default function FeatureCard({
  value,
  label,
  href,
  backgroundColor,
  textColor = "#111111",
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={styles.carte}
      style={{ backgroundColor, color: textColor }}
    >
      <p className={styles.valeur}>{value}</p>
      <p className={styles.label}>{label}</p>
    </Link>
  );
}