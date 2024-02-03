import React, { Component }  from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() { 
    super();

    this.state = { 
    monsters:
    
    [ 
    {name:'Linda',id:1},
    {name:'Bella',id:2},
    {name:'Jack',id:3},
    {name:'Samson',id:4},
    {name:'Regan',id:5}
    ]
   
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  }
  
  render() {
     
  return <div className="App"> 
    {
      this.state.monsters.map((monster)=>{
      return <div key={monster.id}><h1 > {monster.name} </h1></div>
      })
    }

    </div>
  }
}

export default App;
