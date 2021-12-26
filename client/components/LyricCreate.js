import React, {Component} from "react";
import { graphql } from "react-apollo";
import { addLyricToSongMutation } from "../mutations";

class LyricCreate extends Component {
    constructor(props){
        super(props)

        this.state = {content:''}
    }

    onSubmit(event){
        event.preventDefault();

        this.props.mutate({
            variables:{
                content:this.state.content,
                id:this.props.songId
            },
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} >
                <label>Add a lyric</label>
                <input 
                    value={this.state.content}
                    onChange={(e) => this.setState({content:e.target.value})}
                />
            </form>
        );
    }
}

export default graphql(addLyricToSongMutation)(LyricCreate);