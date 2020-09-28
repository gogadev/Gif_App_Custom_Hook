import React, { useState } from "react";

import useGif from "../../useGif";

import "../random/random-tag.style.css";

const Tag = () => {
  const [tag, setTag] = useState("cat");
  const { gif, fetchGif } = useGif(tag);

  const handleClick = () => fetchGif(tag);

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
