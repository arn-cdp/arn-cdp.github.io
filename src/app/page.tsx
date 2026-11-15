import styles from "./page.module.css";
import PageTitle from "@/components/PageTitle";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import ContactCard from "@/components/ContactCard";
import FeatureCard from "@/components/FeatureCard";
import CvCard from "@/components/CvCard";
import { profil } from "@/data/site";

export default function Home() {
  return (
    <div className={styles.grid}>
      <PageTitle grand className={styles.titre}>
        Portfolio
      </PageTitle>

      <ProfileCard
        className={styles.profil}
        prenom={profil.prenom}
        nom={profil.nom}
        email={profil.email}
        photoUrl={profil.photoUrl}
        href="/a-propos"
      />

      <ProjectCard className={styles.projets} title="Projet A" imageUrl="/projet_a.png" />

      <CvCard className={styles.cv} href="/cv" pdfUrl={profil.cvUrl} />

      <ContactCard
        className={styles.contact}
        linkedinUrl={profil.linkedinUrl}
        githubUrl={profil.githubUrl}
        tel={profil.tel}
        email={profil.email}
      />

      <div className={styles.duo}>
        <FeatureCard
          onglet="Compétences"
          value="Python"
          label="React · Next.js · TypeScript"
          href="/competences"
          backgroundColor="#8f74c4"
          textColor="#ffffff"
        />
        <FeatureCard
          onglet="Parcours"
          value="5 ans"
          label="dans le BTP"
          href="/parcours"
          backgroundColor="#a9dcd6"
        />
      </div>
    </div>
  );
}
