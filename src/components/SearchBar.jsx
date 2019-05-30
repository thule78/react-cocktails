import React, {Component} from 'react';

class SearchBar extends Component{

  state = {
    term: ""
  }

  handleChange = (event) => {
    this.setState({term: event.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.onThisChange(this.state.term)
  }

  render(){
    console.log(this.state.term);
    return(
      <div>
        <form  onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">Main Ingredient: Rum, Voldka, ect...</small>
          </div>
        </form>
      </div>
      )
  }
}

export default SearchBar
