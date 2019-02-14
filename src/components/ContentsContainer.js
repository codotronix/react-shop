import React from 'react';
import ContentItem from './ContentItem';

function ContentsContainer (props) {
    let contents = props.contents.map(c => {
        return (
            <ContentItem key={c.name} item={c}/>
        );
    })
    return (
    <ul className="row contents-container">
        {props.contents.length <= 0 && 
            <h2>Sorry! no content available :( </h2>
        }
        {contents}
    </ul>);
}

export default ContentsContainer;