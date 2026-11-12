import Link from "next/link";
import styles from "./SideNav.module.css";

type NavItem = {
  label: string;
  href: string;
  fichier?: boolean;
};

type SideNavProps = {
  items: NavItem[];
};

export default function SideNav({ items }: SideNavProps) {
  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      <ul className={styles.liste}>
        {items.map((item) => (
          <li key={item.href}>
            {item.fichier ? (
              <a
                className={styles.lien}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link className={styles.lien} href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}