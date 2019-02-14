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
            <div className="category-filter">
                <CatContainer list={this.state.catList} />
            </div>
        );
    }
}

export default FilterCategory;