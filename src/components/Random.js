import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Random = () => {
  const [tag, setTag] = useState("car");

  // Random gif (no tag)
  const {
    gif: randomGif,
    loading: loadingRandom,
    fetchData: fetchRandomGif,
  } = useGif("");

  // Tagged gif
  const {
    gif: taggedGif,
    loading: loadingTagged,
    fetchData: fetchTaggedGif,
  } = useGif(tag);

  return (
    <div className="Gifpage">
        <ToastContainer position="top-center" autoClose={3000} />
      <h1>Random GIFS</h1>

      {/* Section 1: Completely random gif */}
      <div className="Gif">
        <h2>A Random Gif</h2>
        {loadingRandom ? <Spinner /> : <img src={randomGif} alt="Random Gif" width="200px" />}
        <button onClick={fetchRandomGif}>Generate Random</button>
      </div>

      {/* Section 2: Tagged gif */}
      <div className="Gif2">
        <h2>Tagged Gif</h2>
        {loadingTagged ? <Spinner /> : <img src={taggedGif} alt="Tagged Gif" width="200px" />}
        <input
          type="text"
          placeholder="Enter tag"
          onChange={(e) => setTag(e.target.value)}
          value={tag}
        />
        <button onClick={fetchTaggedGif}>Generate</button>
      </div>
    </div>
  );
};

export default Random;
