import axios from "axios";
import { useEffect, useState } from "react";

function Moviequotes() {
const [quote, setQuote] = useState("");
    // const axios = require("axios");

    // const options = {
    //   method: "GET",
    //   url: "https://imdb-top-100-movies.p.rapidapi.com/",
    //   headers: {
    //     "X-RapidAPI-Key": "8d940403a8msh62c448849396f5dp192ad4jsn8a4879774cf9",
    //     "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    async function getQuote() {
      let response = await axios.get("http://localhost:8000/randomquote");
        console.log(response);
        setQuote(response.data)
    }

    useEffect(() => {
        getQuote();
        console.log("i fire once");
    }, []);

    return (
      <div className="quotescontainer">
        <div className="quote">
          <p>{quote.quote}</p>
          <pre>{quote.character}</pre>
        </div>
      </div>
    );
}

export default Moviequotes;