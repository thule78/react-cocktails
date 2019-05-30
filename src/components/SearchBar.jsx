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
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.term} onChange={this.handleChange}/>
        </form>
      </div>
      )
  }
}

export default SearchBar
