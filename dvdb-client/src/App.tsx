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

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

type Project = {
  name: string;
  description: string;
};

const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [corsError, setCorsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    model: "",
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("http://localhost:4000/projects").catch(() =>
        setCorsError(true)
      );
      setProjects(await res?.json());
    };
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <h1>Projects</h1>

      {corsError && <h1>CORS ERROR</h1>}

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
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Desctiption</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
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

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <Container>
        {projects.map((project) => (
          <Card key={project.name} className="mb-3">
            <Card.Title>{project.name}</Card.Title>
            <Card.Body>{project.description}</Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default App;
