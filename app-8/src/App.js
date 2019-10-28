// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [text, setText] = useState([]);
  

  useEffect(() => {
    axios
      .get("https:swapi.co/api/people/1")
      .then(res => setText(res.data))
      .catch(err => console.log(err));
  });

  return (
    <div>
      <h1>Name: {text.name} </h1>
      <h1>Birth Year: {text.birth_year} </h1>
      <h1>Height: {text.height} </h1>
      <h1>Eye Color: {text.eye_color} </h1>
    </div>
  );
};

export default App;
