// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor(){
//     super();
//     this.state ={
//       input: ''

//     }
//   }
//     handleInput(val) {
//       this.setState({input: val });
//     }

//   render() {
//     return (
//       <div className="App">
//         <input onChange={e => this.handleInput(e.target.value)} />
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('');


  return (
    <div>
      <input  onChange={e => setName(e.target.value) } />
      {name}
    </div>
  );
};

export default App;
