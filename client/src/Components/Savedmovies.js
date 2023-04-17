import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Savedmovies() {
<<<<<<< HEAD
    const [savedMovies, setSavedMovies] = useState([]);
    let token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" />;
    }
=======
  const [savedMovies, setSavedMovies] = useState([]);
  let token = localStorage.getItem("token");
>>>>>>> 36b066e5ff43894c9dfd52a585da8735eea1dd73

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
  }, []);

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
      {/* <button onClick={getAllMovies}>Get all saved movies</button> */}
      {savedMovies.length > 0 && (
        <ul className='saved-movies'>
          {savedMovies.map((savedMovie) => (
            <li key={savedMovie.id} className='saved-movie-container'>
              <img
                src={savedMovie.image}
                className='saved-movie-image'
                alt='poster'
              />
              <div className='saved-movie-info'>
                <h2 className='saved-movie-title'>{savedMovie.title}</h2>
                <p className='saved-movie-description'>
                  {savedMovie.description}
                </p>
                {/* <p>
                  <a
                    href={savedMovie.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {savedMovie.url}
                  </a>
                </p> */}
                {/* <p>{savedMovie.publishedAt}</p> */}
                <button
                  className='saved-movie-delete'
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
