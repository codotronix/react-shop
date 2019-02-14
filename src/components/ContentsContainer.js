import React from 'react';

function ContentsContainer (props) {
    let contents = props.contents.map(c => {
        return (
            <li key={c.name} className="col s12 m4">
                {c.name}
            </li>
        );
    })
    return (
    <ul className="row contents-container">
        {contents}
    </ul>);
}

export default ContentsContainer;