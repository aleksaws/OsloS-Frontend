import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    
    <Navbar bg="dark" variant ="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Oslo Satsingen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Kart" id="basic-nav-dropdown">
              <NavDropdown.Item href="/referanser/">Referanser</NavDropdown.Item>
              <NavDropdown.Item href="/statistikk/">Statistikk</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kart" id="basic-nav-dropdown">
              <NavDropdown.Item href="/maps/oversikt/delbydel/">Oversiktskart (delbydel)</NavDropdown.Item>
              <NavDropdown.Item href="/maps/oversikt/grunnkrets/">Oversiktskart (grunnkrets)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tilbudsoversikt" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/oversikt/idrettslag/">Idrett</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/oversikt/organisasjon/">Organisasjoner</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/oversikt/fritid/">Fritid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/oversikt/skole/">Skole</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bydelsoversikt" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/bydel/oversikt/Alna/">Alna</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bydel/oversikt/Grorud/">Grorud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bydel/oversikt/Sondre_Nordstrand/">Søndre Nordstrand</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bydel/oversikt/Stovner/">Stovner</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Område oversikt" id="basic-nav-dropdown">
            <NavDropdown.Header>Alna</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Ellingsrud/">Ellingsrud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Lindeberg/">Lindeberg</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Teisen/">Teisen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Trosterud/">Trosterud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Tveita/">Tveita</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Grorud</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Ammerud/">Ammerud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Grorud/">Grorud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Nordtvet/">Nordtvet</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Romsas/">Romsås</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Rodtvet/">Rødtvet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Søndre Nordstrand</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Bjorndal/">Bjørndal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Holmlia-Nord/">Holmlia-Nord</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Holmlia-Syd/">Holmlia-Sør</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Bjornerud/">Bjornerud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Prinsdal/">Prinsdal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Mortensrud/">Mortensrud</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Stovner</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Fossum/">Fossum</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Furuset/">Furuset</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Hoybraten/">Høybråten</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Hoybraten/">Rommen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Stovner/">Stovner</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/oversikt/Vestli/">Vestli</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Område statistikk" id="basic-nav-dropdown">
            <NavDropdown.Header>Alna</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Ellingsrud/">Ellingsrud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Lindeberg/">Lindeberg</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Teisen/">Teisen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Trosterud/">Trosterud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Tveita/">Tveita</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Grorud</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Ammerud/">Ammerud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Grorud/">Grorud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Nordtvet/">Nordtvet</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Romsas/">Romsås</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Rodtvet/">Rødtvet</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Søndre Nordstrand</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Bjorndal/">Bjørndal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Holmlia/">Holmlia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Hauketo-Prinsdal/">Hauketo-Prinsdal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Mortensrud/">Mortensrud</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Stovner</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Fossum/">Fossum</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Furuset/">Furuset</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Hoybraten/">Høybråten</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Hoybraten/">Rommen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Stovner/">Stovner</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/omrade/statistikk/Vestli/">Vestli</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/admin/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;