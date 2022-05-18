import { useQuery } from "@apollo/client";
import INFO_EPISODE from "./querys/index";
import './styles/style.css';

function App() {
  const { loading, error, data } = useQuery(INFO_EPISODE);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Aconteceu um erro...</p>;
  }

  return (
    <>
      <section className="parent">
        {data.episodes.results.map((episode, characters) => (
          <div className="card" key={episode.name}>   
            <div className="container">
              <h4>
                <b>{episode.name}</b>
              </h4>
              <p>
                <b>Número do episódio:</b> {episode.episode}
              </p>
              <p>
                <b>Estreia:</b> {episode.air_date}
              </p>
              <p>
                <b>Personagens:</b> {episode.characters.name}
              </p>
            </div>
          </div>
        ))}
      </section>
      
    </>
  );
}

export default App;
