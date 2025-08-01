# Minimalist MERN Boilerplate

<div align="center">
  <img src="./assets/screenshot.png" alt="MERN App Screenshot" width="800">
</div>

## Description

Minimalist boilerplate for a MERN (MongoDB, Express, React, Node.js) application with frontend/backend separation.

- **Backend**: Express + Mongoose + dotenv + CORS  
- **Frontend**: React with Vite + Tailwind CSS + React Router Dom + Axios

---

## Project Structure

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

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HazGri/MERN-Boilerplate.git
   cd MERN-Boilerplate
   ```

2. **Start the backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Start the frontend:**
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
MONGODB_URI=your-mongodb-db-url
CORS_ORIGIN=http://localhost:5173
```

### VS Code Tailwind CSS IntelliSense

For better Tailwind CSS autocomplete support in VS Code, add this configuration to your `settings.json`:

```json
{
  "tailwindCSS.experimental.configFile": {
    "src/index.css": "src/**",
    "frontend/src/index.css": "frontend/src/**",
    "backend/src/index.css": "backend/src/**"
  }
}
```

**How to add this configuration:**

1. Open VS Code Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Preferences: Open Settings (JSON)"
3. Add the configuration above to your `settings.json`

**What this does:**
- Maps Tailwind config files to their respective file patterns
- Enables IntelliSense autocomplete for Tailwind classes
- Supports both classic project structure and mono-repo setups
- Provides hover documentation and class validation

**Supported structures:**
- `src/index.css` → Classic React project
- `frontend/src/index.css` → Frontend in mono-repo
- `backend/src/index.css` → Backend with Tailwind (if needed)

---

## Usage

1. Backend will be accessible at `http://localhost:3000`
2. Frontend will be accessible at `http://localhost:5173`

---

## Available Scripts

### Backend
- `npm start`: Starts the server
- `npm run dev`: Starts the server in development mode with nodemon

### Frontend
- `npm run dev`: Starts the Vite development server
- `npm run build`: Builds the application for production
- `npm run preview`: Previews the production build

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (environment variables)
- CORS

### Frontend
- React 18
- Vite (bundler)
- Tailwind CSS
- React Router Dom
- Axios (HTTP requests)

---

## License

MIT