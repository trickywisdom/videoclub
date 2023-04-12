import { useState } from "react";
import axios from "axios";

function MoviesForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  async function fetchNews(e) {
    e.preventDefault();

    let response = await axios.get(
      `http://localhost:8000/articles?query=${query}`
    );
    console.log("Data from server:", response);

    if (response.status === 200) {
      setResults(response.data);
    } else {
      setResults([]);
    }
  }

  async function getAllNews() {
    let response = await axios.get("http://localhost:8000/saved-articles");
    console.log(`Server response:`, response);
    setSavedArticles(response.data);
  }

  async function saveArticle(article) {
    try {
      let response = await axios.post(
        "http://localhost:8000/post-articles",
        article
      );
      console.log(response.data);
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
        <label htmlFor='input'>Let's fetch some news:</label>
        <input
          id='input'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.title}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
              <p>
                <a href={result.url} target='_blank' rel='noopener noreferrer'>
                  {result.url}
                </a>
              </p>
              <p>{result.publishedAt}</p>
              <button onClick={() => saveArticle(result)}>Save</button>
            </li>
          ))}
        </ul>
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
                    target='_blank'
                    rel='noopener noreferrer'
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

export default MoviesForm;