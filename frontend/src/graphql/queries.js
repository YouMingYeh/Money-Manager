import { gql } from '@apollo/client';

export const GET_ITEMS_QUERY = gql
`
query GET_ITEMS_QUERY {
  items{
    id
    name
    description
    date
    # TODO 2.1 Write query GraphQL
    amount
    category
    # TODO 2.1 End
    }
  }
`;

// id: "1",
//     name: "brunch",
//     amount: 1000,
//     date: new Date("2022-12-05T07:00:00.360Z").getTime(),
//     category: "FOOD",
//     description: "Too expensive.",

// export const POSTS_QUERY = gql`
//   query {
//     posts {
//       title
//       body
//       author {
//         name
//       }
//       published
//     }
//   }
// `;

// query {
//   posts {
//     title
//     body
//     author {
//       name
//     }
//     published
//   }
// }
