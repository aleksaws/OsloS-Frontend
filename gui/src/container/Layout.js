import Container from 'react-bootstrap/Container';
import CustomNavbar from '../components/Navbar';


const CustomLayout = (props) => {
  return (
    <>
      <CustomNavbar />
      <Container>
        {props.children}
      </Container>
    </>
  );
}

export default CustomLayout;