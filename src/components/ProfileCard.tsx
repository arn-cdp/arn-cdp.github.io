import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
    prenom: string;
    nom: string;
    email: string;
    photoUrl: string;
};

export default function ProfileCard({ prenom, nom, email, photoUrl }: ProfileCardProps) {
  return (
    <div className={styles.carte}>
      <div className={styles.carte_onglet}>À propos</div>

      <div className={styles.carte_body}>
        <div className={styles.carte_photo}>
          <img src={photoUrl} alt={`${prenom} ${nom}`} width="250" height="262" />
        </div>

        <div className={styles.carte_text}>
          <p className={styles.prenom}>{prenom}</p>
          <p className={styles.nom}>{nom}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}