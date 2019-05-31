import React, {Component} from 'react';

class SearchBar extends Component {
  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({query: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeSubmit(this.state.query);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
           <input className="form-control" type="text" value={this.state.query} onChange={this.handleChange}/>
        </div>
        </form>
      </div>
      )
  }
};

export default SearchBar
