const express = require("express");
const projectsRouter = require("./routes/projects");
const objectsRouter = require("./routes/projects/objects");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/projects", projectsRouter);
app.use("/projects/:projectName/objects", objectsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
