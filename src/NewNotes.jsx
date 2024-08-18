import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Creatable } from 'react-select';  // Corrected import

function NewNotes() {
  return (
    <>
      <h1 className="my-4">New Note</h1>
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="ControlInputTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="ControlInputTags">
                <Form.Label>Tags</Form.Label>
                <Creatable isMulti placeholder="Select or create tags" />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={15}
            />
          </Form.Group>
          
          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Link to="..">
              <Button type="button" variant="outline-secondary">
                Cancel
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </>
  );
}

export default NewNotes;
