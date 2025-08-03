import { useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const baseUrl = "https://api.giphy.com/v1/gifs/random";
    const url = tag
      ? `${baseUrl}?api_key=${API_KEY}&tag=${tag}`
      : `${baseUrl}?api_key=${API_KEY}`;

    setLoading(true);
    try {
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      if (error.response?.status === 429) {
        toast.error("You have hit the Giphy rate limit. Try again later.", {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});


          
      } else {

        toast.error("Something went wrong while fetching the GIF.");

      }
    } finally {
      setLoading(false);
    }
  };


  return { gif, loading, fetchData };
};

export default useGif;
