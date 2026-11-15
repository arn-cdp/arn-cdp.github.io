import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { profil } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV · Arnaud Pereira Da Costa",
};

export default function CvPage() {
  return (
    <>
      <PageTitle>CV</PageTitle>

      <div className={styles.grille}>
        <div className={styles.actions}>
          <TabCard
            label="Ouvrir"
            href={profil.cvUrl}
            backgroundColor="#020617"
            textColor="#ffffff"
            align="bas"
            padded
          >
            <h2 className={typo.h2}>Ouvrir le PDF</h2>
            <p className={typo.p}>cv-arnaud-pereira-da-costa.pdf</p>
          </TabCard>

          <TabCard
            label="Mise à jour"
            backgroundColor="#a9dcd6"
            textColor="#111111"
            align="bas"
            padded
          >
            <p className={typo.p}>Dernière mise à jour</p>
            <h2 className={typo.h3}>[Date]</h2>
          </TabCard>

          <TabCard
            label="Recherche"
            backgroundColor="#7f82d6"
            textColor="#111111"
            align="bas"
            padded
          >
            <h2 className={typo.h3}>Alternance</h2>
            <p className={typo.p}>Informatique · Data · Réseau</p>
          </TabCard>
        </div>

        {/* L'aperçu est masqué sur téléphone : les mobiles affichent mal les PDF intégrés */}
        <TabCard
          label="CV"
          backgroundColor="#ffc15e"
          textColor="#111111"
          className={styles.apercu}
        >
          <iframe
            className={styles.pdf}
            src={`${profil.cvUrl}#toolbar=0&navpanes=0&view=FitH`}
            title="Aperçu de mon CV"
          />
        </TabCard>
      </div>
    </>
  );
}
