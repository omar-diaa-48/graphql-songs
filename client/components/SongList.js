import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { fetchSongsQuery } from "../queries";
import { deleteSongMutation } from "../mutations";

class SongList extends Component {
    handleSongDelete(songId){
        this.props.mutate({
            variables:{songId}
        })
        .then(() => this.props.data.refetch())
    }

    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li className="collection-item" key={song.id}>
                    {song.title}
                    <i 
                        className="material-icons"
                        style={{cursor:'pointer'}}
                        onClick={() => this.handleSongDelete(song.id)}
                        >delete</i>
                </li>
            )
        })
    }

    render() {
        if(this.props.data.loading){
            return <div>Loading...</div>
        }

        return (
                <div>
                    <ul className="collection">
                        {this.renderSongs()}
                    </ul>
                    <Link 
                        to="/songs/new"
                        className="btn-floating btn-large red light"
                        >
                            <i className="material-icons" >add</i>
                    </Link>
                </div>
            )
    }
}

export default
    graphql(deleteSongMutation)(
    graphql(fetchSongsQuery)(SongList)
)