import { gql } from "@apollo/client";

export const GET_ONE_COUNTRY = gql`
  query OneCountries($code: String!) {
    country(code: $code) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;
