import './App.css';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';


import { Component } from 'react';

import CustomLayout from './container/Layout';
import CustomLayout2 from './container/Layout2';
import IdrettslagList from './container/IdrettslagListView';

function App() {
  return (
    <div className="App">
      <Container>
        <CustomLayout2>
          <IdrettslagList />
        </CustomLayout2>
      </Container>
    </div>
  );
}

export default App;
