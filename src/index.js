import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Appv1 from "./App-v1";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="orangered" onMovieRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appv1 />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>,
);
