import React from 'react';

const CocktailList = props =>{
  return(
    <div className="col-sm-3">
      <a href="#">
        <div className="card">
          <img className="card-img-top"
            alt={props.name}
            src={props.photo} />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
      </a>
    </div>
    )
}
export default CocktailList
