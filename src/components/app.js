import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import todo_data from '../todo_data';
import ListContainer from './list_container';
import AddItem from './add_item';

// TODO: finish to do list
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: todo_data
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    deleteItem(index){
        const tempData = this.state.todoData.slice();

        tempData.splice(index, 1);

        this.setState({
            todoData: tempData
        });
    }

    addItem(item){
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData]
        });
    }

    toggleComplete(index){
        const tempData = this.state.todoData.slice();

        tempData[index].complete = !tempData[index].complete;

        this.setState({
            todoData: tempData
        });
    }
    
    render(){
        const { todoData } = this.state;

        return (
            <div className="container">
                <h1 className="center-align">To Do List</h1>
                <AddItem add={this.addItem}/>
                <ListContainer delete={this.deleteItem} list={todoData} toggleComplete={this.toggleComplete}/>
            </div>
        );
    }
}

export default App;
