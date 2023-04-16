import { useState } from "react";
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
        <button onClick={getAllMovies}>Get all saved movies</button>
        {savedMovies.length > 0 && (
          <ul>
            {savedMovies.map((savedMovie) => (
              <li key={savedMovie.id}>
                <h2>{savedMovie.title}</h2>
                <img
                  src={savedMovie.image}
                  style={{ width: "auto", height: 150, padding: 10 }}
                  alt="poster"
                />
                <p>{savedMovie.description}</p>
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
                <button onClick={() => deleteMovie(savedMovie.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default Savedmovies;