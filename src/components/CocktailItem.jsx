import React, {Component} from 'react';

class CocktailItem extends Component {
  handleClick = () => {
    if (this.props.selectedCocktail) {
      this.props.selectedCocktail(this.props.id);
    }
  }

  render() {
    const src = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.id}`;
    return (
      <div className="cocktail" onClick={this.handleClick}>
        <img src={this.props.cocktail} alt="cocktail" />
        <h3>{this.props.id}</h3>

      </div>
    );
  }
}

export default CocktailItem
