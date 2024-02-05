import React, { Component }  from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() { 
    super();

    this.state = { 
    monsters:[],
    searchField:''
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') //getting data from some site
    .then((response) => response.json())   //transforming this data into JSON (readable data)
    .then((users) => this.setState(() => {  //setting our current State to the new State as feched data
      return {monsters: users}
    }, 
    () => {console.log(this.state)}  // optional if we want to see in console our feched data
    ));
  }

  onSearchChange = (event) => {console.log(event.target.value); //listenning changes what we type in input field
    const searchField=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
    return {searchField};
    });

  }
  
  render() {
  
  const {monsters,searchField} = this.state;
  const {onSearchChange} = this;

  const filteredMonsters=monsters.filter((monster) => {  //filtering monsters name that are included what we type in input
   return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
  
  <div className="App"> 
  <input 
  className='serach-box' 
  type='search' 
  placeholder='search monsters' 
  onChange={onSearchChange} 
  />
    
    { filteredMonsters.map((monster) => {   //getting our monster mapping throug the array one by one
      return <div key={monster.id}><h1 > {monster.name} </h1></div>
      })
    }
    </div>
  );
  }
}

export default App;
