import { gql } from "@apollo/client";

const INFO_EPISODE = gql`
    query {
        episodes {
          info {
            count
            pages
            next
            prev
          }
          results {
            episode
            name
            air_date
            characters {
              image
              name
              species
              status
            }
          }
        }
      }
`;

export default INFO_EPISODE;