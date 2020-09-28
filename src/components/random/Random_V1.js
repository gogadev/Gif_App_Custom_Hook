import React, { useState, useEffect } from "react";
import axios from "axios";

import "./random-tag.style.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <div className="main">
        {" "}
        <img className="img" src={gif} alt="Random Gif" />
        <button className="btn" onClick={handleClick}>
          Random Gif
        </button>
      </div>
    </div>
  );
};

export default Random;
