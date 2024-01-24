import "./Astros.css";
import { useState, useEffect } from "react";

const Astro = ({ name, craft }) => {
  return (
    <div className="card flex">
      <p className="card-name">{name}</p>
      <p className="card-station">{craft}</p>
    </div>
  );
};

const Astros = () => {
  const [astros, setAstros] = useState([]);

  useEffect(() => {
    const fetchAstros = async () => {
      try {
        const resp = await fetch("http://api.open-notify.org/astros.json");
        const data = await resp.json();
        console.log(data.people);
        setAstros(data.people);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAstros();
  }, []);

  return (
    <div className="cards-container">
      {astros.map((astro, index) => (
        <Astro key={index} {...astro}></Astro>
      ))}
    </div>
  );
};

export default Astros;
