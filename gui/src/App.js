import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import {config} from './config.js';
//import CustomLayout from './container/Layout';
//import DataOversiktPerType from './pages/DataOversiktPerType';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import BydelOversikt from './pages/BydelOversikt'
import DelbydelOversikt from './pages/DelbydelOversikt'
import AktivitetOversikt from './pages/AktivitetOversikt';


function App() { 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/oversikt/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/oversikt/:id" element={<AktivitetOversikt />} />
          </Route>
          <Route path="/delbydel/" element={<Layout />}>
            <Route path="oversikt/:id" element={<DelbydelOversikt />} />
            <Route path="statistikk/:id" element={<DelbydelOversikt />} />
          </Route>
          <Route path="/bydel/" element={<Layout />}>
            <Route path="oversikt/:id" element={<BydelOversikt />} />
            <Route path="statistikk/:id" element={<BydelOversikt />} />
          </Route>
          <Route path="/omrade/" element={<Layout />}>
            <Route path="oversikt/:id" element={<DelbydelOversikt />} />
            <Route path="statistikk/:id" element={<DelbydelOversikt />} />
          </Route>
          <Route path="/" element={<Layout />}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
