import React from "react";
import CatContainer from "./CatContainer";

class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcatHidden: false
    };
  }

  toggleVisibilitySubCat(e) {
    //this.state.subcatHidden =
    e.stopPropagation();
    let b = this.state.subcatHidden;
    this.setState({ subcatHidden: !b });
  }

  render() {
    return (
      <li onClick={e => this.toggleVisibilitySubCat(e)}>
        {this.props.val.name + ' '}
        {(this.props.val.catList && !this.state.subcatHidden) &&
            <i class="fas fa-chevron-down"></i>
        }
        {(this.props.val.catList && this.state.subcatHidden) &&
            <i class="fas fa-chevron-up"></i>
        }
        <CatContainer
          list={this.props.val.catList || []}
          subcatHidden={this.state.subcatHidden}
        />
      </li>
    );
  }
}

export default Cat;
