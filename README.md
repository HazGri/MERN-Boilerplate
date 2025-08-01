# Minimalist MERN Boilerplate

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
   cd M.E.R.N-Boilerplate
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