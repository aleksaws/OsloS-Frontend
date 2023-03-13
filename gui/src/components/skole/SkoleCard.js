import { Card, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'; 


const SkoleCard =(props) => {
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
              <b>Bydel:</b> {item.bydel} <br />
              <b>Trinn:</b> {item.trinn} <br />
              <b>Rektor:</b> {item.rektor}<br />
            </Card.Text> 
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Row>
  );
}

export default SkoleCard;