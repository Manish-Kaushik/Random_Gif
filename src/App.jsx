import Random from "./components/Random";
// import Tag from "./components/Tag";
import { Toast,ToastContainer } from "react-toastify";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
console.log("API KEY:", process.env.REACT_APP_GIPHY_API_KEY);
}, []);
  return (
    
    <div>
     <Random/>
    </div>
    
  );
}
