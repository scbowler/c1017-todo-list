import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        }

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(e){
        e.preventDefault();

        console.log('Add Item Form Values:', this.state);

        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render(){
        const { title, details } = this.state;

        return (
            <form onSubmit={this.handleAddItem}>
                <input onChange={ event => this.setState({title: event.target.value}) } type="text" placeholder="Title" value={title} />
                <input onChange={ ({target}) => this.setState({details: target.value}) } type="text" placeholder="Details" value={details}/>
                <button className="btn blue darken-4">Add Item</button>
            </form>
        )
    }
}

export default AddItem;
