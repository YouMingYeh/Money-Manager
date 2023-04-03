import { gql } from '@apollo/client';

// TODO 3.1 Mutation - Update item
// export const CREATE_POST_MUTATION = gql`
//   mutation updateItem(
//     $title: String!
//     $body: String!
//     $published: Boolean!
//     $authorId: ID!
//   ) {
//     createPost(
//       data: {
//         title: $title
//         body: $body
//         published: $published
//         author: $authorId
//       }
//     ) {
//       title
//       body
//       author {
//         name
//       }
//       published
//     }
//   }
// `;
// TODO 3.1 End
export const CREATE_ITEM_MUTATION = gql`
mutation CreateItem($input: CreateItemInput!) {
    createItem(input: $input) 
      {
        id
      }
    
  }
`
// items: {
//   id: $id, name: $name, description: $description, date: $date, amount: $amount, category: $category
// }
export const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItem($input: UpdateItemInput!) {
    updateItem(input: $input) {
      id
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id)
  }
`;
