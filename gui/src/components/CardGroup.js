import { Card, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'; 

//bg={props.bgcolor.toLowerCase()} text={props.bgcolor.toLowerCase() === 'light' ? 'dark' : 'white'}
const GroupedCards =(props) => {
  return (
      <Row xs={1} md={4} className="g-4">
      {props.data.map(item => (
        <Col key={item.id}>
        <Card border ="light" bg ="light">
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title><a href={item.nettside} rel="noreferrer" target="_blank">{item.navn}</a></Card.Title>
            <Card.Text>
              <b>Delbydel:</b> {item.delbydel} <br />
              <b>Bydel:</b> {item.bydel}
            </Card.Text> 
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Row>
  );
}

export default GroupedCards;