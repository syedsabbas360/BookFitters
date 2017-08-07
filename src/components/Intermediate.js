import React, { Component } from 'react';
import '../styles/App.css';
import data from '../data/data'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


 export default class Intermediate extends Component {
  render() {
    return (
      <div className="Intermediate">
        {data[1].items.map((intermediate) => <div className="col-sm-6" key={data[1].name}>


         <Link to={`/ShowItem/${intermediate.id}`} ><h5 className="title">{intermediate.name}</h5></Link>
           <div className="w3-card-4" style={{width:"50%"}}>
         <img src={intermediate.image}/>
         <h5>{intermediate.author}</h5>
         <h6>${intermediate.price}</h6>
         </div>

        </div>)}
      </div>
    );
  }
}
