import React from 'react';
import FilterCategory from './filters/category-filter/FilterCategory'

class Leftbar extends React.Component {

    render () {
        return (
            <div className="leftbar">
                <FilterCategory filterOnCategory={this.props.filterOnCategory}/>
            </div>
        )
    }
}

export default Leftbar;