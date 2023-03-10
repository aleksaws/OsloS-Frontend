import 'bootstrap/dist/css/bootstrap.css';

import CustomLayout from './container/Layout';
import IdrettslagList from './components/idrettslag/ListView';
import SkoleList from './components/skole/ListView';
import FritidList from './components/fritid/ListView';
import OrganisasjonList from './components/organisasjon/ListView';

function App() {
  return (
    <div className="App">
        <CustomLayout>
          <IdrettslagList />
          <SkoleList />
          <FritidList />
          <OrganisasjonList />
        </CustomLayout>
    </div>
  );
}

export default App;
