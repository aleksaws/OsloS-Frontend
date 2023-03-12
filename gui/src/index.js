import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import config from './config';

import IdrettslagList from './components/idrettslag/ListView';
import SkoleList from './components/skole/ListView';
import FritidList from './components/fritid/ListView';
import OrganisasjonList from './components/organisasjon/ListView';


import Layout from "./pages/Layout"
import Home from "./pages/Home"
import DataOversiktPerType from './pages/DataOversiktPerType';
import CustomNavbar from './components/Navbar';
import Container from 'react-bootstrap/Container';



import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//<Route path ="/" element={<Layout />}>
//</Route>
//<Route path="/oversikt/organisasjon/" element={<DataOversiktPerType apiurl={API_ENDPOINT +"organisasjon/list/get/"} />} />

/*
export default function App() {
  return (
      <BrowserRouter>
      <CustomNavbar />
      <Container>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/oversikt/idrett/" element={<IdrettslagList          apiurl={config.API_ENDPOINT+"idrettslag/list/get/"}   />} />
            <Route path="/oversikt/fritid/" element={<FritidList              apiurl={config.API_ENDPOINT+"fritid/list/get/"}       />} />
            <Route path="/oversikt/skole/"  element={<SkoleList               apiurl={config.API_ENDPOINT+"skole/list/get/"}        />} />
            <Route path="/oversikt/organisasjon/" element={<OrganisasjonList  apiurl={config.API_ENDPOINT+"organisasjon/list/get/"} />} />

        </Routes>
        </Container>
      </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

*/