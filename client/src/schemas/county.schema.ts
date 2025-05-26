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

export const DELETE_COUNTRY_MUTATION = gql`
  mutation DeleteCountry($id: Float!) {
    deleteCountry(id: $id) {
      id
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;
