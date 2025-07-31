import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Définition du schéma Mongoose pour un utilisateur (User)
const userSchema = new Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  dateCreation: { type: Date, default: Date.now },
});

// Création du modèle Mongoose "User"
// Le 3e argument ("users") est le nom explicite de la collection MongoDB
// Si la collection existe, elle sera utilisée, sinon elle sera créée automatiquement
const User = model("User", userSchema, "users");

export default User;
