import React, {Component} from "react";
import { graphql } from "react-apollo";
import { findSongByIdQuery } from "../queries";

class SongDetail extends Component {
    render(){
        return(
            <div>
                <h3>Song Detail</h3>
            </div>
        )
    }
}

// export default SongDetail;
export default graphql(findSongByIdQuery)(SongDetail);