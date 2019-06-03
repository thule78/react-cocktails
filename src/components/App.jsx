import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import CocktailList from './CocktailList';

class App extends Component{
  state = {
    cocktails:[]
  }



  handleSubmitChange = async query => {
    const response = await axios
      .get(`https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=${query}`)
      this.setState({cocktails: response.data.drinks})
  }

  componentDidMount = () => {
    const json = localStorage.getItem("cocktails");
    const jsonCocktails = JSON.parse(json);
    this.setState({cocktails: jsonCocktails});
  }

  componentDidUpdate = () =>{
    const cocktails = JSON.stringify(this.state.cocktails);
    localStorage.setItem("cocktails", cocktails);
  }

  render(){
    return(
      <div className="container">
        <h1>Hello Coctails</h1>
        <SearchBar changeSubmit={this.handleSubmitChange}/>
        <div>
          <CocktailList listCocktails={this.state.cocktails} />
        </div>
      </div>
      )
  }
}

export default App
