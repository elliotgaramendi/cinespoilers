interface MovieCardProps {
  movie: {
    title: string;
    poster_path: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, poster_path } = movie;

  return (
    <article className="card d-flex f-direction-column">
      <img
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={title}
        width={180}
        height={320}
        loading="lazy"
        className="card__image"
      />
      <div className="card__body f-1">
        <h3 className="title tile--2xs">{title}</h3>
      </div>
    </article>
  );
}

export default MovieCard;
