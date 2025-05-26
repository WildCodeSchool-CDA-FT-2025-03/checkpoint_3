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

export const GET_COUNTRY = gql`
  query GetCountry($code: String!) {
    country(code: $code) {
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
