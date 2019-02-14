import React from 'react';

function ContentItem (props) {
    return (
        <div className="col s12 m6 l4 content-item">
            <div className="card">
                <div className="card-image">
                    <img src={props.item.imgUrl} alt="product" className="item-img"/>
                    <span className="card-title"></span>
                    <a href="/" className="btn-floating halfway-fab waves-effect waves-light red">
                        {/* <i className="material-icons">add</i> */}
                        <i className="fas fa-heart"></i>
                    </a>
                </div>
                <div className="card-content">                        
                    <span>{props.item.name.substr(0,100)}</span>
                    { props.item.name.length > 100 &&
                        <strong title={props.item.name}> ...</strong>
                    }
                </div>
            </div>
        </div>
    )
}

export default ContentItem;