import React, { Component }  from 'react';
import CardList from './components/card-list/card-list.component'; //importing our CardList component to App.js
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component { //Class component

  constructor() { //always using constructor function for Class component
    super();

    this.state = {  //defining our initial state
    monsters:[],
    searchField:''
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  }

  componentDidMount(){  //life cycle component 
    fetch('https://jsonplaceholder.typicode.com/users') //getting data from some site
    .then((response) => response.json())   //transforming this data into JSON (readable data)
    .then((users) => this.setState(() => {  //setting our current State to the new State as feched data
      return {monsters: users}
    } 
    ));
  }

  onSearchChange = (event) => { //listenning changes what we type in input field
    const searchField=event.target.value.toLocaleLowerCase();//making input in searchfield key insensitive making them all lower case.
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
    <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/> 
    <CardList monsters = {filteredMonsters} />
    </div>
  );
  }
}

export default App;
