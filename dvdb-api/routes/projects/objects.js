const Router = require("express").Router;
const { PrismaClient } = require("@prisma/client");
const projectsRouter = Router();

const prisma = new PrismaClient();

// [GET] all objects
projectsRouter.get("/", async (req, res) => {
  const { projectName } = req.params;
  const objects = await prisma.object.findMany({
    where: { projectName },
  });
  res.json(objects);
});

// [POST] an object
projectsRouter.post("/", async (req, res) => {
  const newObject = await prisma.object.create({ data: req.body });
  res.json(newObject);
});
// [UPDATE/PUT] an object
projectsRouter.put("/:name", async (req, res) => {
  const { name } = req.params;
  const updatedObject = await prisma.object.update({
    where: { name },
    data: req.body,
  });
  res.json(updatedObject);
});

// [DELETE] an object
projectsRouter.delete("/:name", async (req, res) => {
  const { name } = req.params;
  const deletedObject = await prisma.object.delete({
    where: { name },
  });
  res.json(deletedObject);
});

module.exports = projectsRouter;
