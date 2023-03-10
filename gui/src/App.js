import 'bootstrap/dist/css/bootstrap.css';

import CustomLayout from './container/Layout';
import IdrettslagList from './components/idrettslag/ListView';
import SkoleList from './components/skole/ListView';

function App() {
  return (
    <div className="App">
        <CustomLayout>
          <IdrettslagList />
          <SkoleList />
        </CustomLayout>
    </div>
  );
}

export default App;
