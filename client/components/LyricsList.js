import React, {Component} from "react";
import { graphql } from "react-apollo";
import { likeLyricMutation } from "../mutations";

class LyricsList extends Component {

    handleLikeLyric(lyricId, noOfLikes){
        this.props.mutate({
            variables:{id:lyricId},
            optimisticResponse:{ // we optimistacly consider that the server will respond by success
                __typename: 'Mutation',
                likeLyric:{
                    id:lyricId,
                    __typename:'LyricType',
                    likes:noOfLikes + 1 // the value will always be updated with the truth coming from the backend
                }
            }
        })
    }

    renderLyrics(){
        return this.props.lyrics.map(({id, content, likes}) => {
            return (
                <li className="collection-item" key={id}>
                    {content}
                    <div className="vote-box">
                        <i 
                            className="material-icons"
                            onClick={() => this.handleLikeLyric(id, likes)}
                            >
                                thumb_up
                            </i>
                        {likes}
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(likeLyricMutation)(LyricsList);