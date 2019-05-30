import React from 'react';

const CocktailList = props =>{
  console.log(props.cocktail)
  return(
    <div>
      <img
      alt={props.strDrink}
      src={props.photo} />
      <h3>{props.name}</h3>
    </div>
    )
}
export default CocktailList
