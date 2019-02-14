import React from "react";
import CatContainer from "./CatContainer";

class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcatHidden: false
    };
  }

  handleCategoryClick(e) {
    //this.state.subcatHidden =
    e.stopPropagation();

    // If Subcategories present, then we just need to toggle visibility
    if(this.props.category.subCatList) {
        let b = this.state.subcatHidden;
        this.setState({ subcatHidden: !b });
    }
    // else we need to filter according to this category
    else {
        this.props.filterOnCategory(this.props.category.filterTerm);
    }

    
  }

  render() {
    return (
      <li onClick={e => this.handleCategoryClick(e, this.props.category)} className="cat-item">        
        {(this.props.category.subCatList && !this.state.subcatHidden) &&
            <i className="fas fa-chevron-down arrow-icon"></i>
        }
        {(this.props.category.subCatList && this.state.subcatHidden) &&
            <i className="fas fa-chevron-up arrow-icon"></i>
        }
        {' ' + this.props.category.name}
        <CatContainer
          list={this.props.category.subCatList || []}
          subcatHidden={this.state.subcatHidden}
          filterOnCategory={this.props.filterOnCategory}
        />
      </li>
    );
  }
}

export default Cat;
