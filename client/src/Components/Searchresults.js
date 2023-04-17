import { useState } from "react";
import axios from "axios";

function Searchresults() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
    const [savedArticles, setSavedArticles] = useState([]);
    let token = localStorage.getItem("token");

  async function fetchNews(e) {
    e.preventDefault();

    let response = await axios.get(
      `http://localhost:8000/movie?title=${query}`
    );
      console.log(response);
      console.log(response.data.results);

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
        alert("Your movie is saved successfully")
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
      <form onSubmit={fetchNews}>
        <label htmlFor="input">Let's fetch some news:</label>
        <input
          id="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {results.length > 0 && (
        <div className="searchresults">
          {results.map((result) => (
            <div key={result.id}>
              <h2>{result.title}</h2>
              <img
                src={result.image}
                      style={{ width: "auto", height: 150, padding: 10 }}
                      alt="poster"
              />
              <p>{result.description}</p>
              {/* <p>
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  {result.url}
                </a>
              </p> */}
              {/* <p>{result.publishedAt}</p> */}
              <button onClick={() => saveMovie(result)}>Save</button>
            </div>
          ))}
        </div>
      )}
      <div>
        <button onClick={getAllNews}>Get all saved news</button>
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
