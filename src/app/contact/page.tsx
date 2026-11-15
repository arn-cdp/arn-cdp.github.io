import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { profil } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact · Arnaud Pereira Da Costa",
};

const cartes = [
  {
    label: "E-mail",
    valeur: profil.email,
    action: "Écrire un e-mail",
    href: `mailto:${profil.email}`,
    couleur: "#5a5a5a",
    texte: "#ffffff",
  },
  {
    label: "LinkedIn",
    valeur: profil.linkedinNom,
    action: "Voir mon profil",
    href: profil.linkedinUrl,
    couleur: "#8f74c4",
    texte: "#111111",
  },
  {
    label: "GitHub",
    valeur: profil.githubNom,
    action: "Voir mes dépôts",
    href: profil.githubUrl,
    couleur: "#020617",
    texte: "#ffffff",
  },
  {
    label: "Téléphone",
    valeur: profil.telAffiche,
    action: "Appeler",
    href: `tel:${profil.tel}`,
    couleur: "#ffc15e",
    texte: "#111111",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <p className={styles.intro}>Une alternance, un projet, une question ? Écris-moi.</p>

      <div className={styles.grille}>
        {cartes.map((carte) => (
          <TabCard
            key={carte.label}
            label={carte.label}
            href={carte.href}
            backgroundColor={carte.couleur}
            textColor={carte.texte}
            align="bas"
            padded
          >
            <h2 className={styles.valeur}>{carte.valeur}</h2>
            <p className={typo.p}>{carte.action}</p>
          </TabCard>
        ))}
      </div>
    </>
  );
}
