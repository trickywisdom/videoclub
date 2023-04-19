// This code imports the axios library and the useEffect and useState hooks from the react library. It defines a functional component called Moviequotes that returns a JSX element.

// The component has a state variable called quote that is initialized to an empty string using the useState hook. It also has an asynchronous function called getQuote that uses axios to make a GET request to a local server at http://localhost:8000/randomquote. When the response is received, the quote state variable is updated with the response data using the setQuote function.

// The useEffect hook is used to call the getQuote function when the component mounts, indicated by the empty dependency array [].

// The component returns a JSX element that displays the quote and character properties of the quote state variable in a div element with class quotescontainer. The quote property is displayed in a p element and the character property is displayed in a pre element.

import axios from "axios";
import { useEffect, useState } from "react";

function Moviequotes() {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    let response = await axios.get(
      "https://videoclub-server.vercel.app/randomquote"
    );

    setQuote(response.data);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className='quotescontainer'>
      <div className='quote'>
        <p>{quote.quote}</p>
        <pre>{quote.character}</pre>
      </div>
    </div>
  );
}

export default Moviequotes;
