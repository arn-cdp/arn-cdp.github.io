import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { etapes } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Parcours · Arnaud Pereira Da Costa",
};

export default function ParcoursPage() {
  return (
    <>
      <PageTitle>Parcours</PageTitle>

      <div className={styles.grille}>
        <TabCard
          label="En chiffres"
          backgroundColor="#a9dcd6"
          textColor="#111111"
          align="bas"
          padded
          className={styles.stat}
        >
          <p className={styles.chiffre}>5 ans</p>
          <p className={styles.legende}>dans le BTP</p>
          <p className={typo.p}>Conducteur de travaux avant la reconversion.</p>
        </TabCard>

        <div className={styles.etapes}>
          {etapes.map((etape) => (
            <TabCard
              key={etape.onglet}
              label={etape.onglet}
              backgroundColor={etape.couleur}
              textColor="#111111"
              align="haut"
              padded
            >
              <h2 className={typo.h3}>{etape.titre}</h2>
              <p className={typo.p}>{etape.texte}</p>
              <div className={typo.tags}>
                <span className={typo.tag}>{etape.dates}</span>
              </div>
            </TabCard>
          ))}
        </div>
      </div>
    </>
  );
}
