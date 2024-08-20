import { useState } from 'react';
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

function NewNotes({ onAddItems }) {
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { 
      title, 
      textArea, 
      category: category.map(tag => tag.value), // Extract the values from the category
      id: Date.now() 
    };
    onAddItems(newNote); // Add the new note
    navigate("/"); // Redirect to the home page after adding the note
  }

  return (
    <>
      <h1 className="my-4">New Note</h1>
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="ControlInputTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="ControlInputTags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect
                  isMulti
                  placeholder="Select or create tags"
                  value={category}
                  onChange={(selectedOptions) => setCategory(selectedOptions)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={15}
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
          </Form.Group>

          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Button type="button" variant="outline-secondary" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Form>
    </>
  );
}

export default NewNotes;
