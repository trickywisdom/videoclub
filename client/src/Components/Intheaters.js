import { useState, useEffect } from "react";
import axios from "axios";

function Intheaters() {
  const [randomintheaters, setRandomintheaters] = useState({});

  async function getintheaters() {
    let response = await axios.get("http://localhost:8000/intheaters");
    // console.log(response);
    setRandomintheaters(response.data);
  }

  useEffect(() => {
      getintheaters();
      console.log("i fire once");
  }, []);

  return (
    <div key={randomintheaters.id} className="intheaterscontainer">
      <h2>Coming Soon</h2>
      <div className="intheaters">
        <h1>{randomintheaters.title}</h1>
        <img src={randomintheaters.image} alt="poster" />
      </div>
    </div>
  );
}

export default Intheaters;
