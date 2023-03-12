import 'bootstrap/dist/css/bootstrap.css';
import {config} from './config.js';
//import CustomLayout from './container/Layout';
//import DataOversiktPerType from './pages/DataOversiktPerType';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import DataOversiktPerType from './pages/DataOversiktPerType';
import FritidList from './components/fritid/ListView';
import IdrettslagList from './components/idrettslag/ListView';
import SkoleList from './components/skole/ListView';
import OrganisasjonList from './components/organisasjon/ListView';
//import IdrettslagList from './components/idrettslag/ListView';
//import SkoleList from './components/skole/ListView';
//import FritidList from './components/fritid/ListView';
//import OrganisasjonList from './components/organisasjon/ListView';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/oversikt/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="idrett/" element={<IdrettslagList          apiurl={config.API_ENDPOINT+"idrettslag/list/get/"} />} />
            <Route path="fritid/" element={<FritidList              apiurl={config.API_ENDPOINT+"fritid/list/get/"} />} />
            <Route path="skole/" element={<SkoleList                apiurl={config.API_ENDPOINT+"skole/list/get/"} />} />
            <Route path="organisasjon/" element={<OrganisasjonList  apiurl={config.API_ENDPOINT+"organisasjon/list/get/"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
