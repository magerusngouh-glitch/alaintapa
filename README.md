# 🚀 XMEV.AI - Site de Prospection

Site web moderne pour promouvoir XMEV.AI, plateforme d'investissement crypto automatisée par intelligence artificielle.

**Code de parrainage** : `2CZHNWWA` (Alain Tapa)

---

## 📋 À Propos

Ce site sert de page de prospection pour **XMEV.AI**, permettant à Alain Tapa de partager son code de parrainage et générer des inscriptions.

### Objectif
- Présenter XMEV.AI comme opportunité d'investissement crypto
- Positionner Alain Tapa comme parrain/investisseur
- Générer des prospects via le code de parrainage

---

## 🎨 Caractéristiques

### Design Moderne
✅ Palette de couleurs tech (Indigo/Pink/Amber)  
✅ Typographie premium (Inter + Syne)  
✅ Glassmorphism et effets visuels  
✅ Animations fluides  
✅ Responsive design  

### SEO Optimisé
✅ Meta tags complets  
✅ Schema.org structuré  
✅ Open Graph pour réseaux sociaux  
✅ URLs optimisées  

### Performance
✅ Build optimisé avec Vite  
✅ Code splitting automatique  
✅ Images optimisées  
✅ CDN ready  

---

## 🛠️ Technologies

- **Framework** : React 18 + TypeScript
- **Build Tool** : Vite 7
- **Styling** : CSS moderne avec variables
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Fonts** : Google Fonts (Inter + Syne)

---

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/VOTRE_USERNAME/xmev-site.git

# Installer les dépendances
cd xmev-site
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:5173
```

---

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)

```bash
# Build du projet
npm run build

# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Production
vercel --prod
```

### Option 2 : Netlify

```bash
# Build
npm run build

# Le dossier dist/ est prêt à être déployé
```

### Option 3 : GitHub Pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Déployer
npm run deploy
```

**Voir [GUIDE_HEBERGEMENT.md](./GUIDE_HEBERGEMENT.md) pour plus de détails**

---

## 📁 Structure du Projet

```
xmev-site/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Methodology.tsx
│   │   ├── Research.tsx
│   │   ├── Education.tsx
│   │   ├── Access.tsx
│   │   ├── Legal.tsx
│   │   ├── Footer.tsx
│   │   └── *.css       # Styles des composants
│   ├── assets/          # Images, fonts
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux + Design System
├── index.html           # Template HTML
├── package.json         # Dépendances
├── vite.config.ts       # Configuration Vite
├── vercel.json          # Configuration Vercel
└── README.md            # Ce fichier
```

---

## 🎯 Scripts Disponibles

```bash
# Développement
npm run dev              # Serveur de dev (http://localhost:5173)

# Build
npm run build            # Build de production dans dist/

# Preview
npm run preview          # Prévisualiser le build

# Lint
npm run lint             # Vérifier le code
```

---

## 🎨 Design System

### Couleurs Principales
```css
--primary: #6366F1      /* Indigo - Tech */
--secondary: #EC4899    /* Pink - Énergie */
--accent: #F59E0B       /* Amber - CTA */
```

### Espacements
```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */
```

**Voir [GUIDE_CHARTE_RAPIDE.md](./GUIDE_CHARTE_RAPIDE.md) pour plus de détails**

---

## 📝 Contenu du Site

### Sections
1. **Hero** - Présentation XMEV.AI
2. **Méthodologie** - Réalité de l'investissement crypto
3. **XMEV** - Explication de la plateforme + Histoire d'Alain
4. **Comment ça marche** - Processus d'inscription
5. **Access** - Call-to-action principal
6. **Transparence** - Sécurité et légal
7. **Footer** - Liens et informations

### Code de Parrainage
Le code `2CZHNWWA` est présent dans tous les liens vers XMEV.AI :
- `https://xmev.ai?inviteCode=2CZHNWWA`

---

## 🔄 Mises à Jour

Pour mettre à jour le site :

```bash
# 1. Faire vos modifications
# Éditer les fichiers dans src/

# 2. Tester localement
npm run dev

# 3. Build
npm run build

# 4. Commit et push
git add .
git commit -m "Description des changements"
git push

# 5. Déploiement automatique sur Vercel ✅
```

---

## 📊 SEO

### Meta Tags
- Title optimisé pour "XMEV.AI" et "Alain Tapa"
- Description claire de la plateforme
- Keywords ciblés (crypto, Cameroun, MEV, etc.)
- Open Graph pour partages sociaux
- Schema.org structuré

### Performance
- Score Lighthouse : 90+ (objectif)
- First Contentful Paint : < 1.5s
- Time to Interactive : < 3s

---

## 🆘 Support

### Documentation
- [Guide d'hébergement](./GUIDE_HEBERGEMENT.md)
- [Déploiement rapide](./DEPLOIEMENT_RAPIDE.md)
- [Modernisation charte](./MODERNISATION_CHARTE.md)
- [Guide charte rapide](./GUIDE_CHARTE_RAPIDE.md)
- [Réorganisation SEO](./SEO_REORGANISATION.md)

### Problèmes Courants
- Build failed : Vérifier `npm run build` localement
- 404 : Vérifier `vercel.json` (rewrites)
- Images manquantes : Vérifier les chemins dans `src/assets/`

---

## 📄 Licence

Ce projet est privé et destiné à la prospection pour XMEV.AI.

---

## 👤 Auteur

**Alain Tapa**
- Investisseur XMEV.AI
- Code de parrainage : 2CZHNWWA
- Délégué médical au Cameroun

---

## 🎉 Remerciements

- XMEV.AI pour la plateforme
- Google Fonts (Inter, Syne)
- Lucide Icons
- Framer Motion
- Vite & React

---

**Version** : 2.0  
**Dernière mise à jour** : 2026-02-05  
**Status** : ✅ Prêt pour déploiement
