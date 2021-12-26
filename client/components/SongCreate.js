import React, { Component } from "react";
import { graphql } from "react-apollo";
import {Link, hashHistory} from "react-router";
import { fetchSongsQuery } from "../queries";
import { addSongMutation } from "../mutations";

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
        this.props.mutate({
            variables:{title:this.state.title},
            refetchQueries:[{ query:fetchSongsQuery }] // to refetch the songs again after adding them
        })
        .then(() => hashHistory.push('/'))
    }

    render(){
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>  
                    <label>Song title:</label>
                    <input onChange={e => this.handleTitleChange(e.target.value)} value={this.state.title} />
                </form>
            </div>
        )
    }
}

export default graphql(addSongMutation)(SongCreate)