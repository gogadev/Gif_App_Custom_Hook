import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("cat");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="container">
      <div className="main">
        <img className="img" src={gif} alt="Random Gif" />
        <input value={tag} onChange={handleChange} placeholder="e.g.Cat" />
        <button className="btn" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Tag;
