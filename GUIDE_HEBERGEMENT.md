# 🚀 GUIDE D'HÉBERGEMENT - XMEV.AI

## 📋 Options d'Hébergement Recommandées

### 🥇 OPTION 1 : Vercel (RECOMMANDÉ)
**Pourquoi Vercel ?**
✅ Gratuit pour les projets personnels
✅ Déploiement automatique depuis GitHub
✅ HTTPS gratuit
✅ CDN mondial ultra-rapide
✅ Domaine personnalisé gratuit (.vercel.app)
✅ Support React/Vite natif

**Étapes de déploiement :**

#### 1. Préparer le projet
```bash
# Build du projet
npm run build
```

#### 2. Créer un compte Vercel
- Aller sur https://vercel.com
- S'inscrire avec GitHub (recommandé)

#### 3. Déployer
**Option A : Via GitHub (Recommandé)**
```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit - XMEV.AI"

# Créer un repo sur GitHub
# Puis pousser le code
git remote add origin https://github.com/VOTRE_USERNAME/xmev-site.git
git branch -M main
git push -u origin main
```

Ensuite sur Vercel :
1. Cliquer sur "New Project"
2. Importer votre repo GitHub
3. Vercel détecte automatiquement Vite
4. Cliquer sur "Deploy"
5. ✅ Site en ligne en 2 minutes !

**Option B : Via CLI Vercel**
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

**Domaine personnalisé :**
- Votre site sera sur : `https://votre-projet.vercel.app`
- Vous pouvez ajouter un domaine personnalisé dans les settings

---

### 🥈 OPTION 2 : Netlify
**Pourquoi Netlify ?**
✅ Gratuit pour les projets personnels
✅ Déploiement drag & drop
✅ HTTPS gratuit
✅ Formulaires gratuits
✅ Fonctions serverless

**Étapes de déploiement :**

#### 1. Build du projet
```bash
npm run build
```

#### 2. Créer un compte Netlify
- Aller sur https://netlify.com
- S'inscrire (GitHub recommandé)

#### 3. Déployer
**Option A : Drag & Drop**
1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer le dossier `dist`
3. ✅ Site en ligne instantanément !

**Option B : Via GitHub**
1. Pousser le code sur GitHub
2. Sur Netlify : "New site from Git"
3. Connecter le repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy !

**Option C : Via CLI**
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy

# Pour la production
netlify deploy --prod
```

---

### 🥉 OPTION 3 : GitHub Pages
**Pourquoi GitHub Pages ?**
✅ Totalement gratuit
✅ Intégré à GitHub
✅ Simple pour les sites statiques

**Étapes de déploiement :**

#### 1. Installer gh-pages
```bash
npm install --save-dev gh-pages
```

#### 2. Modifier package.json
Ajouter ces lignes :
```json
{
  "homepage": "https://VOTRE_USERNAME.github.io/xmev-site",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. Modifier vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/xmev-site/' // Nom de votre repo
})
```

#### 4. Déployer
```bash
# Pousser sur GitHub d'abord
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USERNAME/xmev-site.git
git push -u origin main

# Déployer sur GitHub Pages
npm run deploy
```

#### 5. Activer GitHub Pages
1. Aller dans Settings > Pages
2. Source : gh-pages branch
3. ✅ Site disponible sur https://VOTRE_USERNAME.github.io/xmev-site

---

### 🎯 OPTION 4 : Cloudflare Pages
**Pourquoi Cloudflare Pages ?**
✅ Gratuit illimité
✅ CDN ultra-rapide
✅ HTTPS automatique
✅ Builds illimités

**Étapes de déploiement :**

#### 1. Créer un compte
- Aller sur https://pages.cloudflare.com
- S'inscrire

#### 2. Connecter GitHub
1. "Create a project"
2. Connecter GitHub
3. Sélectionner le repo

#### 3. Configuration
- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: Vite

#### 4. Deploy
- Cliquer sur "Save and Deploy"
- ✅ Site en ligne !

---

## 🎯 COMPARAISON RAPIDE

| Critère | Vercel | Netlify | GitHub Pages | Cloudflare |
|---------|--------|---------|--------------|------------|
| **Gratuit** | ✅ | ✅ | ✅ | ✅ |
| **Vitesse** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Domaine** | .vercel.app | .netlify.app | .github.io | .pages.dev |
| **Build auto** | ✅ | ✅ | ❌ | ✅ |

**🏆 Recommandation : VERCEL**
- Le plus simple
- Le plus rapide
- Parfait pour React/Vite
- Déploiement automatique

---

## 📝 ÉTAPES DÉTAILLÉES POUR VERCEL (RECOMMANDÉ)

### Étape 1 : Préparer le projet

```bash
# Vérifier que tout fonctionne
npm run dev

# Build du projet
npm run build

# Tester le build localement
npm run preview
```

### Étape 2 : Créer un repo GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Site XMEV.AI modernisé"

# Créer un repo sur GitHub
# Aller sur https://github.com/new
# Nom : xmev-site (ou autre)
# Public ou Private

# Lier le repo local au repo GitHub
git remote add origin https://github.com/VOTRE_USERNAME/xmev-site.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. **Aller sur https://vercel.com**
2. **Cliquer sur "Sign Up" ou "Login"**
   - Choisir "Continue with GitHub"
   - Autoriser Vercel à accéder à GitHub

3. **Créer un nouveau projet**
   - Cliquer sur "Add New..." > "Project"
   - Sélectionner votre repo `xmev-site`
   - Cliquer sur "Import"

4. **Configuration (automatique)**
   - Framework Preset : Vite ✅ (détecté auto)
   - Build Command : `npm run build` ✅
   - Output Directory : `dist` ✅
   - Install Command : `npm install` ✅

5. **Déployer**
   - Cliquer sur "Deploy"
   - ⏳ Attendre 1-2 minutes
   - ✅ Site en ligne !

6. **Récupérer l'URL**
   - Votre site sera sur : `https://xmev-site.vercel.app`
   - Vous pouvez personnaliser le nom dans Settings

### Étape 4 : Configurer un domaine personnalisé (Optionnel)

#### Option A : Domaine gratuit Vercel
- Votre site est déjà sur : `https://votre-projet.vercel.app`
- Vous pouvez changer le nom dans Settings > Domains

#### Option B : Domaine personnalisé (ex: alaintapa.xyz)
1. Acheter un domaine (Namecheap, GoDaddy, etc.)
2. Dans Vercel : Settings > Domains
3. Ajouter votre domaine
4. Configurer les DNS chez votre registrar :
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. ✅ Attendre la propagation DNS (5-30 min)

---

## 🔄 DÉPLOIEMENT AUTOMATIQUE

Une fois configuré sur Vercel :

```bash
# Faire des modifications
# Éditer vos fichiers...

# Commit et push
git add .
git commit -m "Mise à jour du contenu"
git push

# ✅ Vercel déploie automatiquement !
# Vous recevez un email quand c'est prêt
```

---

## 🛠️ FICHIERS DE CONFIGURATION

### .gitignore (à créer si absent)
```
# Dependencies
node_modules/

# Build
dist/
build/

# Logs
*.log

# Environment
.env
.env.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

### vercel.json (optionnel)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📊 APRÈS LE DÉPLOIEMENT

### 1. Vérifier le site
- Ouvrir l'URL fournie par Vercel
- Tester sur mobile et desktop
- Vérifier tous les liens

### 2. Configurer Analytics (Optionnel)
```bash
# Installer Vercel Analytics
npm install @vercel/analytics
```

Dans `src/main.tsx` :
```typescript
import { inject } from '@vercel/analytics';

inject();
```

### 3. Optimiser les performances
- Vercel optimise automatiquement :
  - Compression Gzip/Brotli
  - CDN mondial
  - Cache intelligent
  - Images optimisées

### 4. Partager le site
- URL : `https://votre-projet.vercel.app`
- Partager sur les réseaux sociaux
- Ajouter dans la bio Instagram/Facebook

---

## 🎯 CHECKLIST FINALE

Avant de déployer :
- [ ] `npm run build` fonctionne sans erreur
- [ ] `npm run preview` affiche le site correctement
- [ ] Tous les liens XMEV.AI contiennent le code 2CZHNWWA
- [ ] Les images s'affichent correctement
- [ ] Le site est responsive (tester sur mobile)
- [ ] Les meta tags SEO sont corrects
- [ ] Le fichier .gitignore est configuré

Après le déploiement :
- [ ] Le site est accessible via l'URL
- [ ] Tous les liens fonctionnent
- [ ] Les images se chargent
- [ ] Le site est rapide
- [ ] HTTPS est actif (cadenas vert)
- [ ] Le site est responsive

---

## 🆘 DÉPANNAGE

### Erreur : "Build failed"
```bash
# Vérifier localement
npm run build

# Si erreur, corriger et recommit
git add .
git commit -m "Fix build error"
git push
```

### Erreur : "404 Not Found"
- Vérifier que `dist` est bien le output directory
- Vérifier le fichier `vercel.json` (rewrites)

### Le site ne se met pas à jour
```bash
# Forcer un nouveau déploiement
git commit --allow-empty -m "Force redeploy"
git push
```

---

## 💰 COÛTS

### Vercel Free Plan
✅ Bande passante : 100 GB/mois
✅ Builds : Illimités
✅ Domaines : Illimités
✅ HTTPS : Gratuit
✅ CDN : Gratuit
✅ Analytics : Gratuit (basique)

**Largement suffisant pour un site de prospection !**

---

## 📞 SUPPORT

- **Documentation Vercel** : https://vercel.com/docs
- **Discord Vercel** : https://vercel.com/discord
- **Status** : https://vercel-status.com

---

**Prêt à déployer ? Suivez les étapes ci-dessus ! 🚀**
