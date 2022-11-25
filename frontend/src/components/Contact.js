import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="success" type="submit">
        Submit
      </Button>

      <div>
        <p>HELLO THERE</p>
      </div>
    </div>
  );
}
export default Contact;
