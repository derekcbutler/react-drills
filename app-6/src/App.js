// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Todo from '../src/Todo';

// class App extends Component {
//   constructor(){
//     super();

//     this.state={
//       list: [],
//       input: ''
//     };

//     this.handleAddChore = this.handleAddChore.bind(this);
//   }
  
//   handleInputChange(text){
//     this.setState({input: text});
//   }

//   handleListChore(){
//     this.setState({
//       list: [...this.state.list, this.state.input],
//       input: "" 
//     });
//   }


//   render() {
//     let list = this.state.list.map((element,index) =>{
//       return <Todo key ={index} task={element} />
//     })

//     return (
//       <div className="App">
//         <h1>To-Do List</h1>
//         <div>
//           <input value={this.state.input}
//           placeholder="New Chores"
//           onChange={ (e) => this.handleInputChange(e.target.value) } />
          
//           <button onClick={this.handleAddChore}>Add</button>
//         </div>

//       </div>
//     );
//   }
// }

// export default App;


import React, {useState} from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);

  const addText = () => {
    setTextList([...textList, text])
    setText("")
  }



  return(
    <div>
      <h1>My To-Do List</h1>
      <input onChange={e => setText(e.target.value)} value={text}/>
      <button onClick={addText} >Add</button>
      {textList.map(word => <div>{word}</div>)}
    </div>
  )
}

export default App;