import React from 'react';

import CocktailItem from './CocktailItem';

const CocktailList = (props) =>{
  console.log(props.list);
  const renderCocktails = props.list.map(cocktail=>
        <CocktailItem
          key={cocktail.idDrink}
          cocktail={cocktail.strDrinkThumb}
          id={cocktail.idDrink}
          selectCocktail={props.selectedCocktail}

            />)
  console.log(renderCocktails);
  return(
    <div className="col-sm-3">
      {renderCocktails}
    </div>
    )
}
export default CocktailList
