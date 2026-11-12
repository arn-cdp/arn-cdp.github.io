import styles from "./page.module.css";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import ContactCard from "../components/ContactCard";
import FeatureCard from "../components/FeatureCard";
import CvCard from "../components/CvCard";
import SideNav from "../components/SideNav";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Projets", href: "/projets" },
  { label: "CV", href: "/cv-arnaud-pereira-da-costa.pdf", fichier: true },
  { label: "Parcours", href: "/parcours" },
  { label: "Compétences", href: "/competences" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.sidenav}>
            <SideNav items={navItems} />
          </div>

          <h1 className={styles.titre}>Portfolio</h1>

          <div className={styles.profil}>
            <ProfileCard
              prenom="Arnaud"
              nom="Pereira Da Costa"
              email="dcarnaudpro@gmail.com"
              photoUrl="/photo_profil-removebg-preview.png"
            />
          </div>

          <div className={styles.projets}>
            <ProjectCard title="PROJETS" imageUrl="/projet_a.png" />
          </div>

          <div className={styles.contact}>
            <ContactCard
              linkedinUrl="https://www.linkedin.com/in/pdc-arnaud/"
              githubUrl="https://github.com/arn-cdp"
              tel="0770777821"
              email="dcarnaudpro@gmail.com"
            />
          </div>

          <div className={styles.duo}>
            <FeatureCard
              value="Python"
              label="React · Next.js · TypeScript"
              href="/competences"
              backgroundColor="#8f74c4"
              textColor="#ffffff"
            />
            <FeatureCard
              value="5 ans"
              label="dans le BTP"
              href="/parcours"
              backgroundColor="#a9dcd6"
            />
          </div>

          <div className={styles.cv}>
            <CvCard href="/cv-arnaud-pereira-da-costa.pdf" />
          </div>
        </div>
      </main>
    </div>
  );
}