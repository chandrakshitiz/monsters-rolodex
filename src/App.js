import React,{Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.components'
import {SearchBox} from './components/search-box/search-box.components'
class App extends Component{
  constructor()
  {
    super();
    this.state={
      monster:[],
      search:''
    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{return res.json()})
    .then((j)=>{return this.setState({monster:j})});
  }
  render()
  {
    
    var m=this.state.monster.filter((e)=>{return (e.name.toLowerCase()).includes((this.state.search).toLowerCase())});
    return(
      <div>
        <center><h1>Monsters Rolodex</h1></center>
       <SearchBox placeHolder="Search Monster" handle={(e)=>{this.setState({search:e.target.value})}}/>
        <CardList monster={m}/>
      </div>
      
    );
  }
};


export default App;
