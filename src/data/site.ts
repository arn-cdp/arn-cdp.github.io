// Toutes les informations du site au même endroit.
// Pour ajouter un projet, une compétence ou une étape : ajoute un bloc { ... } dans la liste.

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Projets", href: "/projets" },
  { label: "CV", href: "/cv" },
  { label: "Parcours", href: "/parcours" },
  { label: "Compétences", href: "/competences" },
  { label: "Contact", href: "/contact" },
];

export const profil = {
  prenom: "Arnaud",
  nom: "Pereira Da Costa",
  email: "dcarnaudpro@gmail.com",
  tel: "0770777821",
  telAffiche: "07 70 77 78 21",
  linkedinUrl: "https://www.linkedin.com/in/pdc-arnaud/",
  linkedinNom: "pdc-arnaud",
  githubUrl: "https://github.com/arn-cdp",
  githubNom: "arn-cdp",
  photoUrl: "/photo_profil-removebg-preview.png",
  cvUrl: "/cv-arnaud-pereira-da-costa.pdf",
};

// ---------------------------------------------------------------- Projets
export type Projet = {
  titre: string;
  type: string; // texte de l'onglet
  description: string;
  tags: string[];
  couleur: string;
  texteCouleur?: string;
  imageUrl?: string; // image dans /public (facultatif)
  lien?: string; // lien vers le projet (facultatif)
};

export const projets: Projet[] = [
  {
    titre: "Projet A",
    type: "Application",
    description: "[Description à compléter]",
    tags: ["[Techno]"],
    couleur: "#020617",
    texteCouleur: "#ffffff",
    imageUrl: "/projet_a.png",
  },
  {
    titre: "Gestionnaire de tâches",
    type: "Python",
    description: "Application Python pour organiser et suivre mes tâches du quotidien.",
    tags: ["Python"],
    couleur: "#ffc15e",
  },
  {
    titre: "Ce portfolio",
    type: "Next.js",
    description: "Un site en bento design, pensé comme un projet à part entière.",
    tags: ["React", "Next.js", "TypeScript"],
    couleur: "#8f74c4",
    lien: "https://github.com/arn-cdp/arn-cdp.github.io",
  },
];

// ---------------------------------------------------------------- Compétences
export type Competence = {
  onglet: string;
  titre: string;
  texte: string;
  tags: string[];
  couleur: string;
  texteCouleur?: string;
  large?: boolean; // prend deux colonnes
};

export const competences: Competence[] = [
  {
    onglet: "Web",
    titre: "Développement web",
    texte: "Des interfaces modernes et des sites complets, comme ce portfolio.",
    tags: ["HTML / CSS", "React", "Next.js", "TypeScript"],
    couleur: "#8f74c4",
    large: true,
  },
  {
    onglet: "Python",
    titre: "Python",
    texte: "Scripts et petites applications.",
    tags: ["Scripts", "Projets perso"],
    couleur: "#a9dcd6",
  },
  {
    onglet: "Data",
    titre: "Data & IA",
    texte: "En apprentissage : analyse de données et intelligence artificielle.",
    tags: ["En cours"],
    couleur: "#ffc15e",
  },
  {
    onglet: "Réseau",
    titre: "Réseau & cybersécurité",
    texte: "Un centre d’intérêt que je développe pendant mon Bachelor.",
    tags: ["En cours"],
    couleur: "#5a5a5a",
    texteCouleur: "#ffffff",
  },
  {
    onglet: "BTP",
    titre: "Savoir-faire BTP",
    texte: "Gestion de chantier, planning et coordination d’équipes.",
    tags: ["5 ans"],
    couleur: "#7f82d6",
  },
];

// ---------------------------------------------------------------- Parcours
export type Etape = {
  onglet: string;
  titre: string;
  texte: string;
  dates: string;
  couleur: string;
};

export const etapes: Etape[] = [
  {
    onglet: "1 · BTP",
    titre: "Conducteur de travaux",
    texte: "Suivi de chantiers, coordination des équipes et respect des délais.",
    dates: "[Dates à compléter]",
    couleur: "#ffc15e",
  },
  {
    onglet: "2 · Reconversion",
    titre: "Apprentissage en autonomie",
    texte: "Python, HTML/CSS, React, Next.js et TypeScript à travers des projets personnels.",
    dates: "[Dates à compléter]",
    couleur: "#8f74c4",
  },
  {
    onglet: "3 · ESGI",
    titre: "Bachelor Informatique",
    texte: "Formation à Grenoble, à la recherche d’une alternance.",
    dates: "[Dates à compléter]",
    couleur: "#7f82d6",
  },
];
