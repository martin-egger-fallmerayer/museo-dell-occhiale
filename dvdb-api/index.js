const express = require("express");
const cors = require("cors")
const projectsRouter = require("./routes/projects");


const app = express();
const port = 4000;

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use("/projects", projectsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
