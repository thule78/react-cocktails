import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CocktailItem extends Component{
  state={
    activeCocktail: []
  }

  componentDidMount = async() =>{
    const idCall = this.props.match.params.id;
    const req = await axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCall}`)
    this.setState({activeCocktail: req.data.drinks[0]})
  }

  render(){
    const thiscocktail = this.state.activeCocktail ;
    console.log(thiscocktail);
    return (
      <div>
        <h2>{thiscocktail.strDrink}</h2>
        <img src={thiscocktail.strDrinkThumb} />
        <h3>Glass: {thiscocktail.strGlass}</h3>
        <ul>
          <h4>Ingredients:</h4>
          <li>{thiscocktail.strIngredient1}: {thiscocktail.strMeasure1 }</li>
          <li>{thiscocktail.strIngredient2}: {thiscocktail.strMeasure2 }</li>
          <li>{thiscocktail.strIngredient3}: {thiscocktail.strMeasure3 }</li>
          <li>{thiscocktail.strIngredient4}: {thiscocktail.strMeasure4 }</li>
          <li>{thiscocktail.strIngredient5}: {thiscocktail.strMeasure5 }</li>
          <li>{thiscocktail.strIngredient6}: {thiscocktail.strMeasure6 }</li>
          <li>{thiscocktail.strIngredient7}: {thiscocktail.strMeasure7 }</li>
          <li>{thiscocktail.strIngredient8}: {thiscocktail.strMeasure8 }</li>
        </ul>
        <button className="btn btn-outline-secondary">
              <Link to={{
                  pathname: "/"
                }}>Make New Cocktail</Link>
            </button>
      </div>
      )
  }
}

export default CocktailItem
