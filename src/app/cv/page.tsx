import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import { profil } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV · Arnaud Pereira Da Costa",
};

export default function CvPage() {
  return (
    <>
      <PageTitle>CV</PageTitle>

      <div className={styles.boutons}>
        <a className={styles.bouton} href={profil.cvUrl} download>
          Télécharger
        </a>
        <Link className={`${styles.bouton} ${styles.contour}`} href="/contact">
          Me contacter
        </Link>
      </div>

      <TabCard
        label="CV"
        backgroundColor="#ffc15e"
        textColor="#111111"
        className={styles.apercu}
      >
        <div className={styles.cadre}>
          {/* Un clic sur l'image l'ouvre en grand (pratique pour zoomer sur téléphone) */}
          <a href={profil.cvImageUrl} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.image}
              src={profil.cvImageUrl}
              alt="Mon CV : Arnaud Pereira Da Costa, recherche d'alternance en informatique"
              width={1653}
              height={2339}
            />
          </a>
        </div>
      </TabCard>
    </>
  );
}