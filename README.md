# drissfarji.github.io — Portfolio Personnel

Site vitrine personnel de Driss Farji, hébergé sur GitHub Pages.  
Construit avec Vite + React + TypeScript + Tailwind CSS + Framer Motion.

**URL live :** https://drissfarji.github.io

---

## Prérequis

- Node.js 20+
- npm 10+
- Un compte GitHub avec un repo nommé `drissfarji.github.io`

---

## Lancer le projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev
```

Le site est disponible sur **http://localhost:5173**

```bash
# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview
# → http://localhost:4173
```

---

## Structure du projet

```
drissfarji.github.io/
├── public/
│   ├── cv-fr.pdf            ← CV en français (déjà présent)
│   ├── cv-en.pdf            ← ⚠️ CV en anglais (À AJOUTER — voir ci-dessous)
│   ├── photot-profil.jpeg   ← Photo de profil (déjà présente)
│   └── favicon.svg          ← Icône du site
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       — Barre de navigation + toggle FR/EN + bouton CV
│   │   ├── Hero.tsx         — Section d'accueil (nom, photo, badges)
│   │   ├── About.tsx        — Profil, stats, formation, langues
│   │   ├── Experience.tsx   — Timeline des 10 expériences
│   │   ├── Skills.tsx       — Compétences par catégorie
│   │   ├── Hobbies.tsx      — Loisirs (voyage, Factorio, randonnée)
│   │   ├── Contact.tsx      — LinkedIn, Email, WhatsApp
│   │   ├── Footer.tsx       — Pied de page
│   │   └── SectionTitle.tsx — Composant titre réutilisable
│   │
│   ├── data/
│   │   ├── experiences.ts   — Données des 10 expériences (FR + EN)
│   │   └── skills.ts        — Données des compétences par catégorie
│   │
│   ├── i18n/
│   │   ├── index.ts         — Configuration i18next
│   │   ├── fr.ts            — Traductions françaises
│   │   └── en.ts            — Traductions anglaises
│   │
│   ├── App.tsx              — Racine de l'application
│   ├── main.tsx             — Point d'entrée React
│   └── index.css            — Styles globaux + classes Tailwind custom
│
├── .github/
│   └── workflows/
│       └── deploy.yml       — Pipeline CI/CD GitHub Actions (auto-deploy)
│
├── index.html               — Template HTML + meta tags
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Étapes avant de déployer

### 1. Ajouter le CV en anglais

Copier votre CV traduit en anglais dans le dossier `public/` :

```
public/cv-en.pdf
```

Le bouton "Download CV" dans la navbar et le hero pointent automatiquement vers :
- `cv-fr.pdf` quand la langue est FR
- `cv-en.pdf` quand la langue est EN

### 2. Vérifier la photo de profil

La photo doit être présente dans `public/` sous le nom `photot-profil.jpeg`.  
Si vous changez de photo, mettez à jour la référence dans `src/components/Hero.tsx` (ligne `src="/photot-profil.jpeg"`).

### 3. Vérifier le contenu

- **Expériences** : éditer `src/data/experiences.ts`
- **Compétences** : éditer `src/data/skills.ts`
- **Textes et traductions** : éditer `src/i18n/fr.ts` et `src/i18n/en.ts`

### 4. Tester le build en local

```bash
npm run build
npm run preview
```

Ouvrir http://localhost:4173 et vérifier :
- [ ] La photo de profil s'affiche correctement
- [ ] Le toggle FR/EN fonctionne sur toutes les sections
- [ ] Le téléchargement du CV FR fonctionne
- [ ] Le téléchargement du CV EN fonctionne (nécessite `public/cv-en.pdf`)
- [ ] Les liens LinkedIn, Email et WhatsApp sont corrects
- [ ] Le site est lisible sur mobile (réduire la fenêtre)

---

## Déployer sur GitHub Pages

### Première mise en ligne

```bash
# Initialiser git (si pas encore fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial portfolio"

# Connecter au repo GitHub
git remote add origin https://github.com/drissfarji/drissfarji.github.io.git

# Pousser sur main
git push -u origin main
```

GitHub Actions va automatiquement :
1. Installer les dépendances
2. Builder le site (`npm run build`)
3. Publier le dossier `dist/` sur la branche `gh-pages`

**Le site sera live sur https://drissfarji.github.io dans 1-2 minutes.**

### Activer GitHub Pages (une seule fois)

Sur GitHub, aller dans **Settings → Pages** du repo `drissfarji.github.io` :
- Source : **Deploy from a branch**
- Branch : `gh-pages` / `/ (root)`
- Sauvegarder

### Mises à jour futures

```bash
git add .
git commit -m "Update portfolio"
git push
```

Le déploiement se déclenche automatiquement à chaque push sur `main`.

---

## Personnalisation rapide

| Ce que vous voulez changer | Fichier à éditer |
|---|---|
| Textes FR (bio, titres, etc.) | `src/i18n/fr.ts` |
| Textes EN | `src/i18n/en.ts` |
| Expériences professionnelles | `src/data/experiences.ts` |
| Compétences techniques | `src/data/skills.ts` |
| Photo de profil | Remplacer `public/photot-profil.jpeg` |
| CV français | Remplacer `public/cv-fr.pdf` |
| CV anglais | Ajouter/remplacer `public/cv-en.pdf` |
| Couleur d'accent | `tailwind.config.ts` → `colors.accent` |
| Liens de contact | `src/i18n/fr.ts` et `src/i18n/en.ts` → `contact.items` |

---

## Stack technique

| Outil | Rôle |
|---|---|
| [Vite](https://vitejs.dev) | Bundler & dev server |
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Typage statique |
| [Tailwind CSS v3](https://tailwindcss.com) | Styles utilitaires |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [react-i18next](https://react.i18next.com) | Internationalisation FR/EN |
| [GitHub Pages](https://pages.github.com) | Hébergement statique gratuit |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automatique |
