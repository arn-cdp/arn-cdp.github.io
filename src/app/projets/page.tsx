import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { projets } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projets · Arnaud Pereira Da Costa",
};

export default function ProjetsPage() {
  return (
    <>
      <PageTitle>Projets</PageTitle>

      <div className={styles.grille}>
        {projets.map((projet, index) => {
          const texte = (
            <>
              <h2 className={typo.h2}>{projet.titre}</h2>
              <p className={typo.p}>{projet.description}</p>
              <div className={typo.tags}>
                {projet.tags.map((tag) => (
                  <span key={tag} className={typo.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          return (
            <TabCard
              key={projet.titre}
              label={projet.type}
              side={index === 0 ? "droite" : "gauche"}
              href={projet.lien}
              backgroundColor={projet.couleur}
              textColor={projet.texteCouleur ?? "#111111"}
              align="haut"
              padded
              className={index === 0 ? styles.vedette : styles.projet}
            >
              {projet.imageUrl ? (
                <>
                  <img className={styles.image} src={projet.imageUrl} alt="" data-zoom="" />
                  <div className={styles.panneau}>{texte}</div>
                </>
              ) : (
                texte
              )}
            </TabCard>
          );
        })}
      </div>
    </>
  );
}
