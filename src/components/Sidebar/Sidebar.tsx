import Nav from "../Nav/Nav";
import Logo from '../Logo/Logo';
import './sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
        <Logo/>
        <Nav/>
        <span className="side-line"/>
    </div>
  )
}

export default Sidebar;