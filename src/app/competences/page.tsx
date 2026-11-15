import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { competences } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Compétences · Arnaud Pereira Da Costa",
};

export default function CompetencesPage() {
  return (
    <>
      <PageTitle>Compétences</PageTitle>

      <div className={styles.grille}>
        {competences.map((competence) => (
          <TabCard
            key={competence.titre}
            label={competence.onglet}
            backgroundColor={competence.couleur}
            textColor={competence.texteCouleur ?? "#111111"}
            align="haut"
            padded
            className={competence.large ? styles.large : ""}
          >
            <h2 className={typo.h2}>{competence.titre}</h2>
            <p className={typo.p}>{competence.texte}</p>
            <div className={typo.tags}>
              {competence.tags.map((tag) => (
                <span key={tag} className={typo.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </TabCard>
        ))}
      </div>
    </>
  );
}
