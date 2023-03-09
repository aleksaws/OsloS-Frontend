import './App.css';
import 'antd/dist/reset.css';
import 'antd/dist/antd'
import { Component } from 'react';

import CustomLayout from './container/Layout';
import IdrettslagList from './container/IdrettslagListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <IdrettslagList />
      </CustomLayout>
    </div>
  );
}

export default App;
