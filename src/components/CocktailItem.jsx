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
    return (
    <div className="container">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-4 mt-3">
          <img className="card-img" src={thiscocktail.strDrinkThumb} alt={thiscocktail.strDrink}/>
          <button className="btn btn-outline-secondary mt-3 col-md-12">
            <Link to="/" >Back to the list</Link>
          </button>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2>{thiscocktail.strDrink}</h2>
          <h4>Glass: {thiscocktail.strGlass}</h4>
          <strong>Ingredients:</strong>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{thiscocktail.strIngredient1}: {thiscocktail.strMeasure1 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient2}: {thiscocktail.strMeasure2 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient3}: {thiscocktail.strMeasure3 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient4}: {thiscocktail.strMeasure4 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient5}: {thiscocktail.strMeasure5 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient6}: {thiscocktail.strMeasure6 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient7}: {thiscocktail.strMeasure7 }</li>
            <li className="list-group-item">{thiscocktail.strIngredient8}: {thiscocktail.strMeasure8 }</li>
          </ul>
          <p>{thiscocktail.strInstructions}</p>

          </div>

        </div>
        </div>

      </div>

    </div>

      )
  }
}

export default CocktailItem
