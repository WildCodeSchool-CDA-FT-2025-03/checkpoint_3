import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      id
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;
