import { FaRegUser } from "react-icons/fa";
import TabCard from "./TabCard";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  prenom: string;
  nom: string;
  email: string;
  photoUrl: string;
  href?: string;
  className?: string;
};

export default function ProfileCard({
  prenom,
  nom,
  email,
  photoUrl,
  href,
  className,
}: ProfileCardProps) {
  return (
    <TabCard
      label="À propos"
      icon={<FaRegUser />}
      href={href}
      backgroundColor="#7f82d6"
      className={className}
    >
      <div className={styles.photo}>
        <img src={photoUrl} alt={`${prenom} ${nom}`} />
      </div>

      <div className={styles.texte}>
        <p className={styles.prenom}>{prenom}</p>
        <p className={styles.nom}>{nom}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </TabCard>
  );
}
