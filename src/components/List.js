import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render () {
    let items = [
      {id: 1, "name": "Apple"},
      {id: 2, "name": "Mango"},
      {id: 3, "name": "Orange"}
    ];

    let itemList = items.map(x => {
      return (
        <ListItem key={x.id} item={x.name}/>
      );
    });

    return (
      <ul>{itemList}</ul>
    );
  }
}

export default List;
