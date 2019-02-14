import React from 'react';
import CatContainer from './CatContainer';

class FilterCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catList: []
        };
    }
    componentDidMount () {
        fetch('data/categories.json')
        .then(data => data.json())
        .then(data => {
            this.setState({
                catList: data
            })
        });
    }

    render () {
        return (
            <div className="category-filter no-select">
                <label className="left-bar-title">Category filter</label>
                <CatContainer list={this.state.catList} filterOnCategory={this.props.filterOnCategory}/>
            </div>
        );
    }
}

export default FilterCategory;