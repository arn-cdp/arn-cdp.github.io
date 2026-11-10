import styles from "./page.module.css";
import ProfileCard from "../components/ProfileCard";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <ProfileCard prenom="Arnaud" nom="Pereira Da Costa" email="dcarnaudpro@gmail.com" photoUrl="/photo_profil-removebg-preview.png" />
          <h1>
            Bonjour, Je suis Arnaud
          </h1>
          <p>
            Étudiant en 1re année du Bachelor Informatique de l'ESGI Grenoble, en reconversion après plusieurs années dans le BTP. Je
              développe des projets web et Python en équipe, dont des agents IA qui analysent des statistiques collectées par un script Python.
              Habitué à comprendre un besoin de terrain et à vérifier ce que je livre. Disponible immédiatement : plein temps jusqu'à janvier, puis 3
              jours entreprise / 2 jours école.
          </p>
        </div>
      </main>
    </div>
  );
}

