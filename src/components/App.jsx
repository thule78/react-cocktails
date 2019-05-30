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
    const render = this.state.cocktails.map(cocktail => <CocktailList key={cocktail.idDrink} name={cocktail.strDrink} photo={cocktail.strDrinkThumb}/>)
    return(
       <React.Fragment>
        <div className="container">
          <h1>Hello Cocktails</h1>
          <SearchBar onThisChange={this.handleSubmitChange}/>
          <div className="row">{render}</div>
        </div>

       </React.Fragment>

      )
  }
}

export default App
