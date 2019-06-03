import React from 'react';
import {Link} from 'react-router-dom';

const CocktailList = props =>(

  <div className="row ">
  {props.listCocktails.map((cocktail) => {
    return(
      <div  className="col-sm-6 col-12 col-md-3" key={cocktail.idDrink}>
        <div className="card mb-5">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="card-img-top"
            />
          <div className="card-body">
            <h5 className="card-title">{cocktail.strDrink.length < 10 ? `${cocktail.strDrink}`: `${cocktail.strDrink.substring(0, 9)}...`}</h5>
            <button className="btn btn-outline-secondary">
              <Link to={{
                  pathname: `/cocktail/${cocktail.idDrink}`,
                  state: { cocktail: cocktail.strDrink }
                }}>View Ingredients</Link>
            </button>
          </div>
        </div>
      </div>
      )
  })}

  </div>
);
export default CocktailList
