import React from "react";

import useGif from "../../useGif";

const Tag = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <div className="main">
        <img className="img" src={gif} alt="Random Gif" />
        <button className="btn" onClick={fetchGif}>
          Random Gif
        </button>
      </div>
    </div>
  );
};

export default Tag;
