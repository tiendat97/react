import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               >
     
               <h1>My Element...</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}
export default App;