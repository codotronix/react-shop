import React from 'react';
import ContentsContainer from './ContentsContainer';
import LeftBar from './LeftBar';
// import Headbar from './Headbar';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.contents = [];
        this.state.leftbarCollapsed = (window.innerWidth < 600) ? true : false;

        this.filterOnCategory = this.filterOnCategory.bind(this);
    }

    allContents = [];

    componentDidMount () {
        fetch('data/items.json')
        .then(data => data.json())
        .then(data => {
            this.contentData = data;
            let stateObj = this.state;
            stateObj.contents = data;
            this.setState(stateObj);

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

    toggleLeftbar (e) {
        e.stopPropagation();
        let stateObj = this.state;
        stateObj.leftbarCollapsed = !stateObj.leftbarCollapsed;
        this.setState(stateObj);
    }

    render () {        
        return (
            <div className={'main-container ' + (this.state.leftbarCollapsed ? 'leftbar-collapsed': '')}>
                <i className="fas fa-filter leftbar-collapser light-blue lighten-1" onClick={e=>this.toggleLeftbar(e)}></i>

                {/* <Headbar /> */}
                <LeftBar filterOnCategory={this.filterOnCategory}/>
                <ContentsContainer contents={this.state.contents} />
            </div>
        );
    }
}

export default MainContainer;