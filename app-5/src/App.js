// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Image from '../src/Image';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Image link={"https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13669157_10210278477626522_4320445552332360970_n.jpg?_nc_cat=109&_nc_oc=AQn35eX4ak1Hk_Xo0G-1PdFyZv_aA9ZSo9Vzds428KtYOeAIFKiw35WLmVqwRTXFt88&_nc_ht=scontent-lax3-2.xx&oh=52435355d5ae2a9ec2158f0977cd9fae&oe=5E3BFF7E"} />
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react'
import Image from './Image'

const App = () => {
  return(
    <div>
      <Image link={"https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13669157_10210278477626522_4320445552332360970_n.jpg?_nc_cat=109&_nc_oc=AQn35eX4ak1Hk_Xo0G-1PdFyZv_aA9ZSo9Vzds428KtYOeAIFKiw35WLmVqwRTXFt88&_nc_ht=scontent-lax3-2.xx&oh=52435355d5ae2a9ec2158f0977cd9fae&oe=5E3BFF7E"} />
    </div>
  )
}

export default App;