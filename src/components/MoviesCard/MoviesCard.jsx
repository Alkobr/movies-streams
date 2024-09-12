
import "./MoviesCard.css";
import { IoPlayOutline } from "react-icons/io5";
function MoviesCard({movie}) {
  return (
    <div className="moviesCardDesign">
      <img src={movie.image} className="imgClass" alt="image" />
      <div className="container">
<div className="container-1">
    <h4>{movie.title} {movie.year}</h4>
</div>
<IoPlayOutline className="playIcon"/>
      </div>
    </div>
  );
}

export default MoviesCard;
