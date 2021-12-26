import gql from "graphql-tag";

export const fetchAllSongsQuery = gql`
    {
        songs{
            id
            title
        }
    }
`

export const findSongByIdQuery = `
    query findSongById($id:ID!)
    {
        song(id:$id){
            id
            title
            lyrics
        }
    }
`