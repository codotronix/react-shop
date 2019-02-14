import React from 'react';

function ContentItem (props) {
    return (
        <div className="col s12 m6 l4 content-item">
            <div className="card">
                <div className="card-image">
                    <img src={props.item.imgUrl} alt="product" className="item-img"/>
                    <span className="card-title"></span>
                    <button className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
                <div className="card-content">                        
                    <span>{props.item.name.substr(0,100)}</span>
                    { props.item.name.length > 100 &&
                        <strong title={props.item.name}> ...</strong>
                    }
                </div>
                <div className="card-action">
                    <a href={props.item.url} target="_blank" rel="noopener noreferrer">
                        Buy from Amazon &nbsp;
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContentItem;