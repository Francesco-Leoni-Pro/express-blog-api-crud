const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// Show
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Mostra il post ${id}`);
});

// Create
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

// Update (sostituzione completa)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Aggiornamento completo del post ${id}`);
});

// Modify (aggiornamento parziale)
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Modifica parziale del post ${id}`);
});

// Delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Cancellazione del post ${id}`);
});

module.exports = router;