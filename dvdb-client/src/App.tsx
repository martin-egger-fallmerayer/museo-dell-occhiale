import React, { useEffect, useState } from "react";
import "./App.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

type Project = {
  name: string;
};

const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("http://localhost:4000/projects");
      setProjects(await res.json());
    };
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <h1>Projects</h1>

      <Container>
        {projects.map((project) => (
          <Card>
            <Card.Title>{project.name}</Card.Title>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default App;
