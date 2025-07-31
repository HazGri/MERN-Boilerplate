import express from "express";
import { getUsers, postUser, updateUser, deleteUser } from "../controllers/user.controller.js";
const router = express.Router();

// Récupérer tous les users
router.get("/", getUsers);

// Ajouter un user
router.post("/", postUser);

// Mettre à jour un user par ID
router.put("/:id", updateUser);

// Supprimer un user par ID
router.delete("/:id", deleteUser);

export default router;
