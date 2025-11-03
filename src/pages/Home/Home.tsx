import { useAppSelector } from "../../store/hooks";
import { contentText } from "../../assets/helpers/languageHelpers";
import "./home.scss";

function Home() {
  const { currentLanguage } = useAppSelector((state) => state.language);
  const { title, tagline, description } = contentText[currentLanguage].home;

  return (
    <section className="section home" id="home">
      <div className="home__heading">
        <img
          className="home__heading-image"
          src="/images/portrait-2.webp"
          srcSet="/images/portrait-2.webp 1x, /images/portrait-2@2x.webp 2x"
          alt="portrait"
          width="200"
          height="374"
          decoding="async"
          fetchPriority="high"
        />
        <div className="home__heading-text">
          <h1>
            Robertas <br /> Tamulionis
          </h1>
          <h2>{title}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: tagline }} />
        </div>
      </div>
      <p
        className="home__about"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
}

export default Home;
