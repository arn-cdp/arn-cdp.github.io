import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ProfileCard from "@/components/ProfileCard";
import TabCard from "@/components/TabCard";
import typo from "@/components/Typo.module.css";
import { profil } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "À propos · Arnaud Pereira Da Costa",
};

export default function AProposPage() {
  return (
    <>
      <PageTitle>À propos</PageTitle>

      <div className={styles.grille}>
        <ProfileCard
          className={styles.profil}
          prenom={profil.prenom}
          nom={profil.nom}
          email={profil.email}
          photoUrl={profil.photoUrl}
        />

        <TabCard
          label="Présentation"
          backgroundColor="#e4e5f8"
          textColor="#111111"
          align="haut"
          padded
        >
          <h2 className={typo.h2}>Du chantier au code</h2>
          <p className={typo.p}>
            Après cinq ans comme conducteur de travaux dans le BTP, je me reconvertis dans
            l’informatique. J’apprends le développement web et Python, avec un vrai intérêt pour la
            data, l’IA, le réseau et la cybersécurité.
          </p>
          <p className={typo.p}>
            Je prépare un Bachelor Informatique à l’ESGI et je cherche une alternance à Grenoble pour
            apprendre sur des projets concrets.
          </p>
        </TabCard>

        <div className={styles.trio}>
          <TabCard label="Formation" backgroundColor="#a9dcd6" textColor="#111111" padded>
            <h3 className={typo.h3}>Bachelor Informatique</h3>
            <p className={typo.p}>ESGI · Grenoble</p>
          </TabCard>

          <TabCard label="Objectif" backgroundColor="#ffc15e" textColor="#111111" padded>
            <h3 className={typo.h3}>Alternance</h3>
            <p className={typo.p}>Informatique · Data</p>
          </TabCard>

          <TabCard label="Localisation" backgroundColor="#5a5a5a" textColor="#ffffff" padded>
            <h3 className={typo.h3}>Grenoble</h3>
            <p className={typo.p}>Isère (38)</p>
          </TabCard>
        </div>
      </div>
    </>
  );
}
