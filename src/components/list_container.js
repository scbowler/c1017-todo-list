import React, { Component } from 'react';
import ListItem from './list_item';

class ListContainer extends Component {
    render(){
        console.log('Data:', this.props.list);

        const list = this.props.list.map((item, index) => {
            return <ListItem key={index} index={index} item={item} delete={this.props.delete} complete={this.props.toggleComplete}/>
        })

        return (
            <div>
                <ul className="collection">
                    {list.length ? list : <li className="collection-item center-align">No To Do Items</li>}
                </ul>
            </div>
        )
    }
}

export default ListContainer;
