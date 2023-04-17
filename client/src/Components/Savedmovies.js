import { useState, useEffect } from "react";
import axios from "axios";

function Savedmovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  let token = localStorage.getItem("token");

  async function getAllMovies() {
    let response = await axios.get("http://localhost:8000/saved-movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    setSavedMovies(response.data);
  }

  useEffect(() => {
    getAllMovies();
    console.log("i fire once");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function deleteMovie(movie_id) {
    try {
      console.log("movie_id", movie_id);
      let response = await axios.delete(
        `http://localhost:8000/delete-movie/${movie_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Server response: ", response);
      if (response.status === 200) {
        alert("Movie deleted successfully!");
        getAllMovies();
      } else {
        alert("Error deleting movie");
      }
    } catch (error) {
      console.log("Error deleting movie: ", error);
      alert("Error deleting movie");
    }
  }

  return (
    <div>

      {savedMovies.length > 0 && (
        <ul className="saved-movies">
          {savedMovies.map((savedMovie) => (
            <li key={savedMovie.id} className="saved-movie-container">
              <img
                src={savedMovie.image}
                className="saved-movie-image"
                alt="poster"
              />
              <div className="saved-movie-info">
                <h2 className="saved-movie-title">{savedMovie.title}</h2>
                <p className="saved-movie-description">
                  {savedMovie.description}
                </p>

                <button
                  className="saved-movie-delete"
                  onClick={() => deleteMovie(savedMovie.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Savedmovies;
