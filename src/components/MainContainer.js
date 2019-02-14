import React from 'react';
import ContentsContainer from './ContentsContainer';
import LeftBar from './LeftBar';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullContent: [],
            contents: []
        };

        this.filterOnCategory = this.filterOnCategory.bind(this);
    }

    allContents = [];

    componentDidMount () {
        fetch('data/items.json')
        .then(data => data.json())
        .then(data => {
            this.contentData = data;
            this.setState({
                contents: data
            });

            this.allContents = data;
        });
    }

    filterOnCategory (cat) {
        let filteredContents = [];

        if(!cat || cat === 'showAll') {
            filteredContents = this.allContents;
        }
        else {
            for(let c of this.allContents) {
                if(c.cat === cat) {
                    filteredContents.push(c);
                }
            }
        }
        
        this.setState({
            contents: filteredContents
        })
    }

    render () {
        return (
            <div className="main-container">
                <LeftBar filterOnCategory={this.filterOnCategory}/>
                <ContentsContainer contents={this.state.contents} />
            </div>
        );
    }
}

export default MainContainer;