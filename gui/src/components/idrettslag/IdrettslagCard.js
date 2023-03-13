import { Card, Col, Row} from 'react-bootstrap'; 
import { Fragment } from 'react';

const IdrettslagCard =(props) => {
  return (
      <Row xs={1} md={4} className="g-4">
      {props.data.map(item => (
        <Col key={item.id}>
        <Card border ="light" bg ="light">
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title><a href={item.nettside} rel="noreferrer" target="_blank">{item.navn}</a></Card.Title>
            <Card.Text>
              <b>Delbydel: </b> {item.delbydel} <br />
              <b>Bydel: </b> {item.bydel} <br />
              <b>Tilbud: </b>
              {item.idretter.map(i=> (
                <Fragment key={i}>{i}, </Fragment>
              ))}
            </Card.Text> 
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Row>
  );
}

export default IdrettslagCard;