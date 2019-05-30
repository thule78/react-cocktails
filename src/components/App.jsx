import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import CocktailList from './CocktailList';
import CocktailItem from './CocktailItem';

class App extends Component {
  state = {
    cocktails:[],
    cocktailId: "16995"
  }

  componentDidMount(){
    this.handleSubmitChange('rum');
  }

  handleSubmitChange = term => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`)
    .then(response => this.setState({cocktails: response.data.drinks}))
  };

  coctailItem = (id) => {
    this.setState({cocktailId: id});
  }

  render(){
    console.log(this.state.cocktails);
    return(
       <React.Fragment>
        <div className="container">
          <h1>Hello Cocktails</h1>
          <SearchBar onThisChange={this.handleSubmitChange}/>
          <CocktailItem id={this.state.cocktailId}/>
          <div className="row">
            <CocktailList
              list={this.state.cocktails}
              selectedCocktail={this.coctailItem}
            />
          </div>
        </div>

       </React.Fragment>

      )
  }
}

export default App
