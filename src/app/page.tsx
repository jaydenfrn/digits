import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Container>
        <Row className="align-middle text-center">
          <Col>
            <PeopleFill size="100" />
            <br />
            <strong>
              Multiple Users
              <br />
            </strong>
            <text>
              This address book enables any number of users to register and save their business contacts.
              You can only see the contacts you have created.
            </text>
          </Col>

          <Col>
            <FileEarmarkTextFill size="100" />
            <br />
            <strong>
              Contact Details
              <br />
            </strong>
            <text>
              For each contact, you can save their name, address, and phone number.
            </text>
          </Col>

          <Col>
            <Calendar2CheckFill size="100" />
            <br />
            <strong>
              Timestamped Details
              <br />
            </strong>
            <text>
              Each time you make contact with a contact, you can write a note that summarizes the conversation.
              This note is saved along with a timestamp with the contact.
            </text>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
