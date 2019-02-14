import React from "react";
import Cat from "./Cat";
 
class CatContainer extends React.Component {
  returnCat(c) {
    return <Cat category={c} key={c.name} filterOnCategory={this.props.filterOnCategory}/>;
  }

  render () {
    return (
      <ul className={this.props.subcatHidden ? "hidden" : ""}>
        {this.props.list.map(c => this.returnCat(c))}
      </ul>
    );
  }  
}

export default CatContainer;