import gql from "graphql-tag";

export const findAllSongsQuery = gql`
    {
        songs{
            id
            title
        }
    }
`;

export const findSongByIdQuery = gql`
    query FindSongById($id:ID!)
    {
        song(id:$id){
            id
            title
            lyrics{
                id
                content
            }
        }
    }
`;