import React, { useEffect, useState } from "react";
import "./App.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Modal from "react-bootstrap/esm/Modal";
import Form from "react-bootstrap/esm/Form";
import { formCreateProject } from "./controller/Form";

type Project = {
  name: string;
};

const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [corsError, setCorsError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    model: ''
  })

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("http://localhost:4000/projects")
        .catch(() => setCorsError(true))
      setProjects(await res?.json());
    };
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <h1>Projects</h1>

      { corsError && <h1>CORS ERROR</h1> }

      <Container>
        <Button variant="primary" onClick={() => setShowCreateProject(true)}>
          Create project
        </Button>

        <Modal
          show={showCreateProject}
          onHide={() => setShowCreateProject(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Create project
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formProjectName">
                <Form.Label>Project name</Form.Label>
                <Form.Control type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Desctiption</Form.Label>
                <Form.Control as="textarea" rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}/>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Model (wip)</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Button
                variant="primary"
                onClick={() => formCreateProject(formData)}
              >
                Create
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>

      <Container>
        {projects.map((project) => (
          <Card key={project.name}>
            <Card.Title>{project.name}</Card.Title>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default App;
