import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import CocktailList from './CocktailList';


class App extends Component {
  state = {
    cocktails:[]
  }

  componentDidMount(){
    this.handleSubmitChange('rum');
  }

  handleSubmitChange = term => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${term}`)
    .then(response => this.setState({cocktails: response.data.drinks}))
  };

  render(){
    const render = this.state.cocktails.map(cocktail => <CocktailList key={cocktail.idDrink} cocktail={cocktail}/>)
    return(
       <React.Fragment>
        <h1>Hello Cocktails</h1>
        <SearchBar onThisChange={this.handleSubmitChange}/>
        <CocktailList />
        {render}
       </React.Fragment>

      )
  }
}

export default App
