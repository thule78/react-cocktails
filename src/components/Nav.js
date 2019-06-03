import React from 'react';
import  { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App';
import CocktailItem from './CocktailItem';

const Nav = () =>{
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/cocktail/:id" component={CocktailItem}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
}
export default Nav
