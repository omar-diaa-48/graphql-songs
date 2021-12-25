import React, { Component } from "react";
import gql from "graphql-tag";

class SongCreate extends Component {

    constructor(props){
        super(props)

        this.state = {
            title : ''
        }
    }

    handleTitleChange(title){
        this.setState({
            title
        })
    }

    onSubmit(event){
        event.preventDefault();

    }

    render(){
        return (
            <div>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>  
                    <label>Song title:</label>
                    <input onChange={e => this.handleTitleChange(e.target.value)} value={this.state.title} />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation {
        addSong(title:"Dog call"){
            id
            title
        }
    }
`;

export default SongCreate