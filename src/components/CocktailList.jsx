import React from 'react';

const CocktailList = props =>{
  return(
    <div>
      <img src={props.strDrinkThumb} />
      <h3>{props.strDrink}</h3>
    </div>
    )
}
export default CocktailList
