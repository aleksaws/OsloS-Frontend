import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CustomNavbar from '../components/Navbar';


const Layout = () => {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
};

export default Layout;
