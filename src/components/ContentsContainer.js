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
        {contents}
    </ul>);
}

export default ContentsContainer;