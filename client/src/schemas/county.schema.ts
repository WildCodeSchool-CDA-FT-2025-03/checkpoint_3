import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      id
      code
      emoji
      name
    }
  }
`;

export const ADD_COUNTRY_MUTATION = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
    }
  }
`;
