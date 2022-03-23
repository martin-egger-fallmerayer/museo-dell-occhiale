db.createUser({
  user: "mongo",
  pwd: "mongo",
  roles: [{ role: "readWrite", db: "museo-db" }],
});
