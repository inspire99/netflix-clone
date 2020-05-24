import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import './index.css';


class Main extends React.Component{


  render(){

    return[
   
    <h1>Movie 1</h1>    ,
    <h1>Movie 2</h1>    ,
    <h1>Movie 3</h1>    ,
    <h1>Movie 4</h1>    ,
    <h1>Movie 5</h1>    
  ]
            

  }


}

ReactDOM.render(<Main/>, document.getElementById('root'));
