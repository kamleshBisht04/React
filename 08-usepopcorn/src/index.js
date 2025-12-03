import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import StarRating from "./StarRating";

// function Test() {
//   const [moveRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSatRating={setMovieRating} />
//       <p>This movie was rated {moveRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bed", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      className="test"
      defaultRating={3}
    />

    <Test /> */}
  </React.StrictMode>
);
