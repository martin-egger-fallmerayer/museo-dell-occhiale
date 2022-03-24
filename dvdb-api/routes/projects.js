const Router = require("express").Router;
const { PrismaClient } = require("@prisma/client");
const projectsRouter = Router();

const prisma = new PrismaClient();

// [GET] all projects
projectsRouter.get("/", async (req, res) => {
  // all names
  if ("names" in req.query) {
    const names = await prisma.project.findMany({ select: { name: true } });
    res.json(names.map((obj) => obj.name));
  }
  // all projects
  else {
    const projects = await prisma.project.findMany();
    res.json(projects);
  }
});

// [GET] one project by name
projectsRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  const projects = await prisma.project.findUnique({
    where: { name },
  });
  res.json(projects);
});

// [GET] objects of project by projectName
projectsRouter.get("/:name/objects", async (req, res) => {
  const { name } = req.params;

  // search objects
  if ("search" in req.query) {
    const searchObjects = await prisma.object.findMany({
      where: {
        name: { contains: req.query.search },
      },
    });
    res.json(searchObjects);
  }

  // all objects
  else {
    const objects = await prisma.object.findMany({
      where: { projectName: name },
    });
    res.json(objects);
  }
});

// [GET] one object of project by name
projectsRouter.get("/:projectName/objects/:name", async (req, res) => {
  const { projectName, name } = req.params;
  const objects = await prisma.object.findMany({
    where: { projectName },
  });
  const object = objects.filter((obj) => obj.name === name);
  res.json(object);
});

// [GET] project names
projectsRouter.get("/names", async (_, res) => {
  const names = await prisma.project.findMany();
  res.json(names);
});

// [POST] a project
projectsRouter.post("/", async (req, res) => {
  const newProject = await prisma.project.create({ data: req.body });
  res.json(newProject);
});

// [UPDATE/PUT] a project
projectsRouter.put("/:name", async (req, res) => {
  const { name } = req.params;
  const updatedProject = await prisma.project.update({
    where: { name },
    data: req.body,
  });
  res.json(updatedProject);
});

// [DELETE] a project
projectsRouter.delete("/:name", async (req, res) => {
  const { name } = req.params;
  const deletedProject = await prisma.project.delete({
    where: { name },
  });
  res.json(deletedProject);
});

module.exports = projectsRouter;
