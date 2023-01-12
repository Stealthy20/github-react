import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: '',
      }
    }

    handleNameChange = (event) => {
        let newValue = event.target.value;
        this.setState({
            name: newValue
          });
    }
    handleCategory = (event) => {
        let newCategory = event.target.value;
        this.setState ({
            category: newCategory
        });
    }

    handleComments = (event) => {
        let newComments = event.target.value;
        this.setState ({
            comments: newComments
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <h2>Please fill out the form below</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="id-name">You Name:</label>
                <input 
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    type="text" id="id-name" 
                    name="name"
                />
            </div>
            <div>
                <label htmlFor="id-category">Query category</label>
                <select  
                    value={this.state.category} 
                    onChange={this.handleCategory}
                    id="id-category" 
                    name="category">
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea 
                value={this.state.comments}
                onChange={this.handleComments}
                id="id-comments" 
                name="comments"/>
            </div>
            <input type="submit" value="Submit"/>

        </form>
      </div>
    )
  }
}

export default ControlledForm