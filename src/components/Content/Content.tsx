import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toggleNav } from "../../store/nav-slice";
import About from "../../pages/Home/Home";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import Contacts from "../../pages/Contacts/Contacts";
import './content.scss';

function Content() {
  const dispatch = useAppDispatch();
  const { active } = useAppSelector(state => state.nav);

  useEffect(()=> {
     const handleResize = () => {
      if (active) {
        dispatch(toggleNav()); // set active -> false
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[active, dispatch]);
  
  return (
    <section className={`content ${active ? 'content__overlay' : ''}`}>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
    </section>
  )
}

export default Content;