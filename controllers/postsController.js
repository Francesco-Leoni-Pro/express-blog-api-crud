const posts = require("../posts");

// Index → restituisce la lista dei post in JSON
function index(req, res) {
  res.json(posts);
}

// Show → restituisce un singolo post in JSON
function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts[id];

  res.json(post);
}

// Create (ancora solo messaggio)
function store(req, res) {
  res.send("Creazione nuovo post");
}

// Update (PUT) (ancora solo messaggio)
function update(req, res) {
  const { id } = req.params;
  res.send(`Aggiornamento completo del post ${id}`);
}

// Modify (PATCH) (ancora solo messaggio)
function modify(req, res) {
  const { id } = req.params;
  res.send(`Modifica parziale del post ${id}`);
}

// Delete → elimina il post, stampa lista aggiornata, status 204
function destroy(req, res) {
  const id = parseInt(req.params.id);

  posts.splice(id, 1);

  console.log(posts);

  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};