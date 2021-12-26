import React, {Component} from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import { findSongByIdQuery } from "../queries";
import LyricCreate from "./LyricCreate";

class SongDetail extends Component {
    

    render(){
        const {song} = this.props.data;

        if(!song){
            return <div>Loading...</div>
        }
        return(
            <div>
                <Link to="/">Back</Link>
                <h3>Song Detail</h3>
                <p>{song.title}</p>
                <LyricCreate songId={this.props.params.id} />
            </div>
        )
    }
}

// export default SongDetail;
export default graphql(findSongByIdQuery, {
    options:(props) => ({variables:{id:props.params.id}}) // there is no this.props.mutate
})(SongDetail);