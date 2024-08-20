import { Stack, Form, Row, Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import ReactSelect from "react-select";
import { Link } from "react-router-dom";

function Notes({ notes }) {
  return (
    <div className="my-8">
      <Stack className="my-8">
        <Row>
          <Col>
            <h1>Notes</h1>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={2} className="justify-content-end">
              <Link to="./new">
                <Button type="button" variant="primary">
                  Create
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={2} className="mt-4">
          <Col>
            <Form.Group className="mb-3" controlId="ControlInputTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="ControlInputTags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                isMulti
                placeholder="Select.."
              />
            </Form.Group>
          </Col>
        </Stack>
      </Stack>

      {/* Render the NoteCard component with notes */}
      <NoteCard notes={notes} />
    </div>
  );
}

function NoteCard({ notes }) {
  return (
    <Row className="text-center">
      {notes.map((note) => (
        <Col key={note.id} md={4} className="mb-4">
          <BootstrapCard>
            <BootstrapCard.Body>
              <BootstrapCard.Title>{note.title}</BootstrapCard.Title>
              <BootstrapCard.Text>{note.textArea}</BootstrapCard.Text>
              <div className="text-blue">
                <strong>Tags:</strong> {note.category.join(", ")}
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
      ))}
    </Row>
  );
}

export default Notes;
