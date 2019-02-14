import React from 'react';
import ContentsContainer from './ContentsContainer';
import LeftBar from './LeftBar';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: []
        };
    }
    componentDidMount () {
        fetch('data/items.json')
        .then(data => data.json())
        .then(data => {
            this.setState({
                contents: data
            })
        });
    }

    render () {
        return (
            <div className="main-container">
                <LeftBar />
                <ContentsContainer contents={this.state.contents} />
            </div>
        );
    }
}

export default MainContainer;