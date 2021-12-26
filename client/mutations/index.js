import gql from "graphql-tag";

export const addSongMutation = gql`
    mutation AddSong($title: String){
        addSong(title:$title){
            id
            title
        }
    }
`;


export const deleteSongMutation = gql`
    mutation DeleteSong($songId:ID){
        deleteSong(id:$songId){
            id
        }
    }
`;

export const addLyricToSongMutation = gql`
mutation AddLyricToSong ($content:String, $songId:ID){
    addLyricToSong(songId:$songId, content:$content){
      id
      title
      lyrics {
        id
      }
    }
  }
`