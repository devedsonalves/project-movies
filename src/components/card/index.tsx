import "./styles.css";

const imageUrl = "https://image.tmdb.org/t/p/w500/";

export default function Card({ movie }: Object | any) {
  return (
    <>
      <div className="card-container">
        <img
          src={imageUrl + (movie.poster_path || movie.parts?.poster_path)}
          alt="movie image"
          className="card-image"
        />
        <h1 className="card-title">{movie.title || movie.name}</h1>
        <p className="card-avaliation">
          Nota: {movie.vote_average || movie.partsvote_average}
        </p>
        <a className="card-details" href={`/movie/${movie.id}`}>
          Ver mais
        </a>
      </div>
    </>
  );
}
