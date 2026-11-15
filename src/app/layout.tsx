import type { Metadata } from "next";
import { Geist, Unbounded } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import SideNav from "@/components/SideNav";
import { navItems } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-titre",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnaud Pereira Da Costa · Portfolio",
  description:
    "Portfolio d’Arnaud Pereira Da Costa : projets, parcours et compétences en développement web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${unbounded.variable}`}>
      <body>
        <div className={styles.shell}>
          <SideNav items={navItems} />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
