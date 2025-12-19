const express = require("express");
const app = express();
const port = 3000;

// Middleware per leggere JSON nel body (utile per POST/PUT/PATCH)
app.use(express.json());

// Import del router dei post
const postsRouter = require("./routers/posts");

// Rotta base
app.get("/", (req, res) => {
  res.send("Server del blog Routing");
});

// Registrazione router con prefisso /posts
app.use("/posts", postsRouter);

// Avvio server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});