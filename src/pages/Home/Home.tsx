
import './home.scss';
import Portrait2 from '../../assets/images/photos/portrait-2.png';

function Home() {
  return (
    <section className='section home' id="home">
      <div className='home__heading'>
        <img className='home__heading-image' src={Portrait2} alt=""/>
        <div className='home__heading-text'>
          <h1>Robertas <br/> Tamulionis</h1>
          <h2>Web-Developer</h2>
          <h3>I create, build and improve <br/> your online experience.</h3>
        </div>
      </div>
      <p className='home__about'>Hi, I’m Rob(ertas) Tamulionis, a web developer with 6+ years of experience, specializing in ReactJS and its ecosystem. I’ve worked in both fast-moving startups and large corporate environments, gaining a solid foundation in building scalable, user-friendly applications.
      <br/>
      Along the way, I’ve also worked extensively with PHP/Laravel and VueJS, giving me a versatile toolkit to adapt to different projects. I’m always eager to explore new technologies and push my skills further.
      <br/>
      I’m eager to take the next step in my career—tackling new challenges and delivering value as part of an ambitious team.
      </p>
    </section>
  )
}

export default Home;