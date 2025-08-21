
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { gsap } from 'gsap'
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import './app.scss';
import NavMobile from './components/NavMobile/NavMobile';

function App() {
    // register plugin
gsap.registerPlugin(MorphSVGPlugin);
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
