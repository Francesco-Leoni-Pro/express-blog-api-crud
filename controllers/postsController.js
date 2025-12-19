// Index
function index(req, res) {
  res.send("Lista dei post");
}

// Show
function show(req, res) {
  const { id } = req.params;
  res.send(`Mostra il post ${id}`);
}

// Create
function store(req, res) {
  res.send("Creazione nuovo post");
}

// Update (PUT)
function update(req, res) {
  const { id } = req.params;
  res.send(`Aggiornamento completo del post ${id}`);
}

// Modify (PATCH)
function modify(req, res) {
  const { id } = req.params;
  res.send(`Modifica parziale del post ${id}`);
}

// Delete
function destroy(req, res) {
  const { id } = req.params;
  res.send(`Cancellazione del post ${id}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};