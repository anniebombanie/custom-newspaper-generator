import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: [
      "Rye",
      "cursive",
      "Vollkorn:400, 400i, 700, 700i, 900, 900i",
      "serif",
      "Abril Fatface",
      "cursive",
      "UnifrakturCook",
      "cursive",
    ],
  },
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
