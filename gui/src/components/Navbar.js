import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = (props) => {
  return (
    
    <Navbar bg="dark" variant ="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Oslo Satsingen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Kart" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Oversiktskart (delbydel)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Oversiktskart (grunnkrets)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tilbudsoversikt" id="basic-nav-dropdown">
              <NavDropdown.Item href="/oversikt/idrett/">Idrett</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/organisasjon/">Organisasjoner</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/fritid/">Fritid</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/skole/">Skole</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bydelsoversikt" id="basic-nav-dropdown">
              <NavDropdown.Item href="/oversikt/idrett/">Idrett</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/organisasjon/">Organisasjoner</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/fritid/">Fritid</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/skole/">Skole</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Område oversikt" id="basic-nav-dropdown">
              <NavDropdown.Item href="/oversikt/idrett/">Idrett</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/organisasjon/">Organisasjoner</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/fritid/">Fritid</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/skole/">Skole</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Område oversikt" id="basic-nav-dropdown">
              <NavDropdown.Item href="/oversikt/idrett/">Idrett</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/organisasjon/">Organisasjoner</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/fritid/">Fritid</NavDropdown.Item>
              <NavDropdown.Item href="/oversikt/skole/">Skole</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/admin/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;