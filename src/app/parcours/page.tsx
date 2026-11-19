import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { etapes, filRouge } from "@/data/site";
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
          label="Fil rouge"
          backgroundColor="#a9dcd6"
          textColor="#111111"
          align="haut"
          padded
          className={styles.stat}
        >
          <h2 className={typo.h3}>Ma reconversion</h2>
          <p className={typo.p}>{filRouge.reconversion}</p>

          <h2 className={typo.h3}>Ce que je cherche</h2>
          <ul className={styles.recherche}>
            {filRouge.recherche.map((ligne) => (
              <li key={ligne.libelle}>
                <span className={styles.libelle}>{ligne.libelle}</span>
                <span>{ligne.valeur}</span>
              </li>
            ))}
          </ul>

          <div className={typo.tags}>
            <Link href="/contact" className={typo.tag}>
              {filRouge.contactLabel}
            </Link>
          </div>
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