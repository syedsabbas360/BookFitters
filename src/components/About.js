import React, { Component } from 'react';
import data from '../data/data'
import '../styles/App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


 export default class About extends Component {
   render() {
     return (

         <div className="About">
           <h1>About Us</h1>


<p>
  Founded in 2017 by Syed Abbas, Coding BookFitters has come a long way from its beginnings at The Iron Yard in Houston, TX. When Syed Abbas first started out, his passion for helping others drove him to build an online resource hub that gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the galaxy, and are thrilled to be bringing you amazing resources to help with YOUR journey in coding.
</p>

<p>
  We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
</p>

<p>
  Sincerely,

  Syed, CEO/Founder
</p>


         </div>
     )
   }
 }
