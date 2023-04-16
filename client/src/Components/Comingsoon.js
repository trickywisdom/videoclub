import { useState, useEffect } from "react";
import axios from "axios";

function Comingsoon() {
    const [randomcomingsoon, setRandomcomingsoon] = useState({});

    async function getComingSoon() {
        let response = await axios.get("http://localhost:8000/comingsoon");
        // console.log(response);
        setRandomcomingsoon(response.data);
    }

    useEffect(() => {
        getComingSoon();
        // console.log("i fire once");
    }, []);
    
    return (
      <div key={randomcomingsoon.id} className="comingsooncontainer">
        <h2>Coming Soon</h2>
        <div className="comingsoon">
          <h1>{randomcomingsoon.title}</h1>
          <img src={randomcomingsoon.image} alt="poster" />
        </div>
      </div>
    );
}

export default Comingsoon;