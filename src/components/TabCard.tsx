"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "./TabCard.module.css";

type TabCardProps = {
  label: string;
  icon?: ReactNode;
  side?: "gauche" | "droite";
  backgroundColor: string;
  textColor?: string;
  href?: string; // page du site, fichier, lien externe, mailto: ou tel:
  align?: "centre" | "haut" | "bas"; // place du contenu dans la carte
  padded?: boolean; // marges intérieures (pour les cartes avec du texte)
  className?: string; // pour placer la carte dans une grille
  children: ReactNode;
};

// Le lien invisible qui recouvre toute la carte
function CarteLien({ href, label }: { href: string; label: string }) {
  const estUnePage = href.startsWith("/") && !/\.\w+$/.test(href);

  if (estUnePage) {
    return <Link className={styles.lien} href={href} aria-label={label} />;
  }

  const nouvelOnglet = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <a
      className={styles.lien}
      href={href}
      aria-label={label}
      target={nouvelOnglet ? "_blank" : undefined}
      rel={nouvelOnglet ? "noopener noreferrer" : undefined}
    />
  );
}

export default function TabCard({
  label,
  icon,
  side = "gauche",
  backgroundColor,
  textColor = "#ffffff",
  href,
  align = "centre",
  padded = false,
  className = "",
  children,
}: TabCardProps) {
  const carteRef = useRef<HTMLDivElement>(null);
  const ongletRef = useRef<HTMLDivElement>(null);

  // Mesure la largeur réelle de l'onglet et la donne au CSS
  useLayoutEffect(() => {
    const carte = carteRef.current;
    const onglet = ongletRef.current;
    if (!carte || !onglet) return;

    const mesurer = () => {
      carte.style.setProperty("--boite", `${onglet.offsetWidth}px`);
    };
    mesurer();

    const observateur = new ResizeObserver(mesurer);
    observateur.observe(onglet);
    return () => observateur.disconnect();
  }, []);

  const classes = [
    styles.carte,
    side === "droite" ? styles.droite : styles.gauche,
    href ? styles.cliquable : "",
    align === "haut" ? styles.haut : "",
    align === "bas" ? styles.bas : "",
    padded ? styles.rembourre : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} ref={carteRef}>
      <div className={styles.onglet} ref={ongletRef}>
        {icon}
        {label}
      </div>

      <div className={styles.corps} style={{ backgroundColor, color: textColor }}>
        {children}
      </div>

      {href && <CarteLien href={href} label={label} />}
    </div>
  );
}
