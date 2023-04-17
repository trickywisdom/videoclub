import { useState } from "react";
import axios from "axios";

function Searchresults() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [dataSubmitted, setDataSubmitted] = useState(false);

  let token = localStorage.getItem("token");

  async function fetchMovies(e) {
    e.preventDefault();

    let response = await axios.get(
      `http://localhost:8000/movie?title=${query}`
    );
    console.log(response);
    console.log(response.data.results);

    setDataSubmitted(true);

    if (response.status === 200) {
      setResults(response.data.results);
    } else {
      setResults([]);
    }
  }

  async function getAllNews() {
    let response = await axios.get("http://localhost:8000/saved-articles");
    console.log(`Server response:`, response);
    setSavedArticles(response.data);
  }

  // SAVE BUTTON
  async function saveMovie(movie) {
    try {
      let response = await axios.put(
        "http://localhost:8000/save-movie",
        movie,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      alert("Your movie is saved successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteArticle(_id) {
    try {
      let response = await axios.delete(
        `http://localhost:8000/saved-articles/${_id}`
      );
      console.log("Server response: ", response);
      if (response.status === 200) {
        alert("Article deleted successfully!");
        getAllNews();
      } else {
        alert("Error deleting article");
      }
    } catch (error) {
      console.log("Error deleting article: ", error);
      alert("Error deleting article");
    }
  }

  return (
    <>
      <form className="submitForm" onSubmit={fetchMovies}>
        <label htmlFor="input">Search for a movie title:</label>
        <input
          id="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="buttonSubmit" type="submit">
          Submit
        </button>
        {!dataSubmitted && (
          <img
            src="https://whatthefrance.org/wp-content/uploads/2021/01/Videoclub-300x120.png"
            className="logo"
            alt="logo"
          />
        )}
      </form>
      {results.length > 0 && (
        <div className="searchresults">
          {results.map((result) => (
            <div key={result.id} className="result-container">
              <img src={result.image} className="result-image" alt="poster" />
              <div className="result-info">
                <h2 className="result-title">{result.title}</h2>
                <p className="result-description">{result.description}</p>
                <button
                  className="result-save"
                  onClick={() => saveMovie(result)}
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        {/* <button onClick={getAllNews}>Get all saved news</button> */}
        {savedArticles.length > 0 && (
          <ul>
            {savedArticles.map((savedArticle) => (
              <li key={savedArticle._id}>
                <h2>{savedArticle.title}</h2>
                <p>{savedArticle.description}</p>
                <p>
                  <a
                    href={savedArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {savedArticle.url}
                  </a>
                </p>
                <p>{savedArticle.publishedAt}</p>
                <button onClick={() => deleteArticle(savedArticle._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Searchresults;