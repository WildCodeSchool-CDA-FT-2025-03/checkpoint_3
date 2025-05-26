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

export const ADD_ONE_COUNTRY = gql`
  mutation Country($data: NewCountryInput!) {
    addCountry(data: $data) {
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
