# MERN Boilerplate Minimaliste

## Description

Boilerplate minimaliste pour une application MERN (MongoDB, Express, React, Node.js) avec séparation frontend/backend.

- **Backend** : Express + Mongoose + dotenv + CORS  
- **Frontend** : React avec Vite + Tailwind CSS + React Router Dom + Axios

---

## Structure du projet

```
/backend
├─ server.js
├─ controllers/
├─ models/
├─ routes/
└─ .env

/frontend
├─ src/
├─ public/
├─ vite.config.js
└─ .env
```

---

## Installation

1. **Cloner le dépôt :**
   ```bash
   git clone <URL_DU_REPO>
   cd nom-du-projet
   ```

2. **Démarrer le backend :**
   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Démarrer le frontend :**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## Configuration

### Backend (.env)
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/votre-db
CORS_ORIGIN=http://localhost:5173
```

---


## Scripts disponibles

### Backend
- `npm start` : Démarre le serveur
- `npm run dev` : Démarre le serveur en mode développement avec nodemon

### Frontend
- `npm run dev` : Démarre le serveur de développement Vite
- `npm run build` : Construit l'application pour la production
- `npm run preview` : Prévisualise la version de production

---

## Technologies utilisées

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (variables d'environnement)
- CORS

### Frontend
- React 18
- Vite (bundler)
- Tailwind CSS
- React Router Dom
- Axios (requêtes HTTP)

---

## Licence

MIT