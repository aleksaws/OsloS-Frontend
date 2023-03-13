import {Table} from 'react-bootstrap';
import React from 'react';
import { ArrowUpRightSquare } from 'react-bootstrap-icons';

const AktivitetOversiktTabell= (props) => {
  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Navn</th>
        <th>Bydel</th>
        <th>Delbydel</th>
        <th>Nettside</th>
      </tr>
    </thead>
    <tbody>
    {props.data.map(item => (
      <tr key={item.id}>
        <td>{item.navn}</td>
        <td>{item.bydel}</td>
        <td>{item.delbydel}</td>
        <td><a href={item.nettside === '' ? "#" :item.nettside} rel="noreferrer" target="_blank"><ArrowUpRightSquare color={item.nettside === '' ? "grey" :"black" }/></a></td>
      </tr>
        ))}
    </tbody>
  </Table>
  
  );
}

export default AktivitetOversiktTabell;
