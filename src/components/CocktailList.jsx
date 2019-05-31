import React from 'react';

const CocktailList = props =>(

  <div className="row ">
  {props.listCocktails.map((cocktail) => {
    return(
      <div  className="col-sm-3" key={cocktail.idDrink}>
        <div className="card mb-5">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="card-img-top"
            />
          <div className="card-body">
            <h5 className="card-title">{cocktail.strDrink.length < 10 ? `${cocktail.strDrink}`: `${cocktail.strDrink.substring(0, 9)}...`}</h5>
            <a href="#" className="btn btn-primary">View Ingredients</a>
          </div>
        </div>
      </div>
      )
  })}

  </div>
);
export default CocktailList
