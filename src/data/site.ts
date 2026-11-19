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
  cvImageUrl: "/cv-arnaud-pereira-da-costa.png",
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
    description: "Projet d'apprentissage en IA mené à trois. Collecter les statistiques des parties professionnelles de Rocket League, entraîner un modèle qui prédit le résultat d'un match, puis présenter les résultats dans un tableau de bord interactif.",
    tags: ["Python", "Pandas", "Néon"],
    couleur: "#020617",
    texteCouleur: "#ffffff",
    imageUrl: "/projet_a.png",
    lien: "https://github.com/arn-cdp/Projet_A_R-sum-_Pro", 
  },
  {
    titre: "HikarCards",
    type: "Python",
    description: "Premier site fictif de vente de cartes en ligne, développé en html & css.",
    tags: ["HTML / CSS"],
    couleur: "#ffc15e",
    lien: "https://github.com/arn-cdp/HikarCards",
  },
  {
    titre: "Ce portfolio",
    type: "Next.js",
    description: "Un site en bento design, pensé comme un projet à part entière.",
    tags: ["React", "Next.js", "TypeScript"],
    couleur: "#8f74c4",
    lien: "https://github.com/arn-cdp/Projet_A_R-sum-_Pro",
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
    texte: "Pars le biais de projets personnels et de ma formation, j'apprends à créer des sites web modernes et interactifs.",
    tags: ["En cours", "HTML / CSS", "React", "Next.js", "TypeScript"],
    couleur: "#8f74c4",
    large: true,
  },
  {
    onglet: "Python",
    titre: "Python",
    texte: "En apprentissage : Scripts et petites applications.",
    tags: ["En cours", "Scripts", "Projets perso"],
    couleur: "#a9dcd6",
  },
  {
    onglet: "Data",
    titre: "Data & IA",
    texte: "En apprentissage : Analyse de données et mise en place d'agents ia.",
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
    texte: "Gestion de sous-traitance, planning et coordination d’équipes.",
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
    texte: "Diplômé d'un BTS Bâtiment en alternance, j'en garde une très bonne expérience, l'entreprise qui m'accueillait m'a embauché à l'obtention de mon diplôme. Mon rôle consistait à suivre la sous-traitance, coordonner les équipes et faire respecter les délais.",
    dates: "2018",
    couleur: "#ffc15e",
  },
  {
    onglet: "2 · Autodidacte",
    titre: "Projets personnels",
    texte: "Passionné d'informatique depuis toujours, j'apprends à travers des projets personnels (Projet en groupe PROJET A : Pyhton, Agents IA; ce portfolio : TypeScript, Next.js, React; site HikariCards : HTML/CSS). Aussi, l'ia m'aide à comprendre des sujets qui me semblaient inaccessibles avant et a changé ma méthode de travail.",
    dates: "2026",
    couleur: "#8f74c4",
  },
  {
    onglet: "3 · ESGI",
    titre: "Bachelor Informatique",
    texte: "Formation à Grenoble, en alternance. Je m'y forme au Développement : algorithmique, langage C, programmation orientée objet (Java), modélisation UML, bases de données & SQL. Systèmes & réseaux : architecture réseaux, administration Linux/Windows, virtualisation. Gestion de projet & entreprise : introduction à la gestion de projet, connaissance de l'entreprise. Versioning : Git/GitHub. Je recherche une entreprise pour mettre ces notions en pratique.",
    dates: "2026",
    couleur: "#7f82d6",
  },
];

// ---------------------------------------------------------------- Fil rouge (page Parcours)
export type FilRouge = {
  reconversion: string;
  recherche: { libelle: string; valeur: string }[];
  contactLabel: string;
};

export const filRouge: FilRouge = {
  reconversion:
    "Après cinq ans dans le BTP, j'ai choisi de me tourner vers l'informatique, un domaine qui me passionne depuis toujours. Mon expérience de terrain m'a appris la rigueur, la gestion des délais et la coordination d'équipes. Des qualités que je veux mettre a votre service.",
  recherche: [
    { libelle: "Contrat : ", valeur: "Alternance (Bachelor Informatique, ESGI)" },
    { libelle: "Lieu : ", valeur: "Grenoble et alentours" },
    { libelle: "Rythme : ", valeur: "3 jours en entreprise / 2 jours à l'école" },
    { libelle: "Début : ", valeur: "2026" },
    { libelle: "Domaines : ", valeur: "Réseau, Data, IA, Dev, Support" },
  ],
  contactLabel: "Me contacter",
};
