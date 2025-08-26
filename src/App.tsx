
import { Provider } from 'react-redux';
import { store } from './store/store';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import NavMobile from './components/NavMobile/NavMobile';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
        <div className="layout">
          <NavMobile/>
          <Sidebar/>
          <Content/>
        </div>
    </Provider>
  )
}

export default App;
