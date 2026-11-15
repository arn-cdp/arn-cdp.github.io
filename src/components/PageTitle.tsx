import type { ReactNode } from "react";
import styles from "./PageTitle.module.css";

type PageTitleProps = {
  children: ReactNode;
  grand?: boolean; // version géante, pour l'accueil
  className?: string;
};

export default function PageTitle({ children, grand = false, className = "" }: PageTitleProps) {
  const classes = [styles.titre, grand ? styles.grand : "", className].filter(Boolean).join(" ");
  return <h1 className={classes}>{children}</h1>;
}
