import { FaRegUser } from "react-icons/fa";
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
      <div className={styles.onglet}>
        <FaRegUser className={styles.icone} />
        À propos
      </div>

      <div className={styles.corps}>
        <div className={styles.photo}>
          <img src={photoUrl} alt={`${prenom} ${nom}`} />
        </div>

        <div className={styles.texte}>
          <p className={styles.prenom}>{prenom}</p>
          <p className={styles.nom}>{nom}</p>
          <p className={styles.email}>{email}</p>
        </div>
      </div>
    </div>
  );
}