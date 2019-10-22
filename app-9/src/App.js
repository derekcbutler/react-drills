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

import React from 'react';
import {Link} from "react-router-dom";
import router from './Component/router';



const App = () => {
return(
  <div>
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/details'>details</Link>
    </ul>

    {router}

  </div>
)
}
export default App;