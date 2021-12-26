import React, {Component} from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import { findSongByIdQuery } from "../queries";
import LyricCreate from "./LyricCreate";
import LyricsList from "./LyricsList";

class SongDetail extends Component {
    

    render(){
        const {song} = this.props.data;

        console.log(this.props);
        console.log({song});

        if(!song){
            return <div>Loading...</div>
        }

        return(
            <div>
                <Link to="/">Back</Link>
                <h3>Song Detail</h3>
                <p>{song.title}</p>
                <LyricsList lyrics={song.lyrics}/>
                <LyricCreate songId={this.props.params.id} />
            </div>
        )
    }
}

// export default SongDetail;
export default graphql(findSongByIdQuery, {
    options:(props) => ({variables:{id:props.params.id}}) // there is no this.props.mutate
})(SongDetail);