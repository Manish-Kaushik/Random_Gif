import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { ToastContainer,Bounce } from "react-toastify";
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
    <div>
      <h1>Random GIFS</h1>
      <div className="Gifpage">

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

        <div className="Gif">
          <h2>A Random Gif</h2>
          <div className="gif-img-wrapper">
            {loadingRandom ? <Spinner /> : <img src={randomGif} alt="Random Gif" className="gif-img" />}
          </div>
          <button onClick={fetchRandomGif}>Generate Random</button>
        </div>

        <div className="Gif2">
          <h2>Search Gif</h2>
          <div className="gif-img-wrapper">
            {loadingTagged ? <Spinner /> : <img src={taggedGif} alt="Tagged Gif" className="gif-img" />}
          </div>
          <input
            type="text"
            placeholder="Enter tag"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          />
          <button onClick={() => fetchTaggedGif(tag)}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Random;
