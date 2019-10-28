// import React, { Component } from "react";
// import "./App.css";
// import Login from '../src/Login'

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Login />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
      <input onChange={e => setName(e.target.value)} />
      <input onChange={e => setPassword(e.target.value)} />
      <button onClick={() => alert(`Username: ${name} Password: ${password}`)}>Login</button>
    </div>
  );
};

export default App;
