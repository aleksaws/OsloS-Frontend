import React from "react";
import { useParams } from "react-router-dom";
import {config} from '../config.js';
import { Container, Row } from 'react-bootstrap'; 

import BydelOversiktContainer from '../container/BydelOversikt'
import SkoleCards from "../components/skole/SkoleCards.js";
import FritidCards from "../components/fritid/FritidCards.js";
import OrganisasjonCards from "../components/organisasjon/OrganisasjonCards.js";
import IdrettslagCards from "../components/idrettslag/IdrettslagCards.js";


const BydelOversikt = () => {
    const {id } = useParams();
    console.log(id)
    return (
    <>
    <Container >
    <Row><h2>Skoler</h2></Row>
    <SkoleCards apiurl={config.API_ENDPOINT+"bydel/" + id + "/skole/get/"} bgcolor = {'Dark'}/>
    <br />
    </Container>
    <Container >
    <Row><h2>Idrettslag</h2></Row>
    <IdrettslagCards apiurl={config.API_ENDPOINT+"bydel/" + id + "/idrettslag/get/"} bgcolor = {'Dark'}/>
    <br />
    </Container>
    <Container >
    <Row><h2>Fritid</h2></Row>
    <FritidCards apiurl={config.API_ENDPOINT+"bydel/" + id + "/fritid/get/"} bgcolor = {'Dark'}/>
    <br />
    </Container>
    <Container >
    <Row><h2>Organisasjoner</h2></Row>
    <OrganisasjonCards apiurl={config.API_ENDPOINT+"bydel/" + id + "/organisasjon/get/"} bgcolor = {'Dark'}/>
    </Container>
    </>
    );
  }
  
export default BydelOversikt;
  