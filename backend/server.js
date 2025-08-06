import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";

// Charger les variables d'environnement du fichier .env
dotenv.config();

const app = express();

// Récupérer les variables d'environnement ou mettre des valeurs par défaut
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;
const corsOrigin = process.env.CORS_ORIGIN;

// Middleware pour parser le JSON dans les requêtes HTTP
app.use(express.json());

// Middleware pour parser les données URL-encoded (formulaires HTML)
app.use(express.urlencoded({ extended: false }));

// Configuration CORS dynamique via variable d'env
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

// Routes
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World from API NODE SERVER!");
});

async function main() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connexion à MongoDB réussie");

    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  } catch (error) {
    console.error("Connexion à MongoDB échouée :", error);
  }
}

main();
