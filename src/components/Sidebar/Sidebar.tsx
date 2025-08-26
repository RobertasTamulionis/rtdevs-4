import Nav from "../Nav/Nav";
import Logo from '../Logo/Logo';
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import './sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
        <Logo/>
        <Nav/>
        <span className="side-line"/>
        <LanguageToggle/>
    </div>
  )
}

export default Sidebar;