
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

function Notes() {

  return (
    <div className="my-8">
        <Stack className="my-8">
      <Row>
      <Col>
      <h1> Notes</h1>
      </Col>
      <Col>
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Link to="./new">
      <Button type="submit" variant="primary" >
              Create
            </Button>
            </Link>
            <Button type="submit" variant="secondary" >
              Edit
            </Button>
        </Stack>
        </Col>  
      </Row>
      <Stack direction="horizontal" gap={2} className="mt-4">
      <Col>
              <Form.Group className="mb-3" controlId="ControlInputTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="ControlInputTags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect
                  isMulti
                  placeholder="Select or create tags"
              
                />
              </Form.Group>
              </Col>
      </Stack>
      </Stack>
    </div>
  );
}

export default Notes;
