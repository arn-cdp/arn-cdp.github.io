"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/site";
import styles from "./SideNav.module.css";

type SideNavProps = {
  items: NavItem[];
};

export default function SideNav({ items }: SideNavProps) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      <ul className={styles.liste}>
        {items.map((item) => {
          const actif = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                className={`${styles.lien} ${actif ? styles.actif : ""}`}
                href={item.href}
                aria-current={actif ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
