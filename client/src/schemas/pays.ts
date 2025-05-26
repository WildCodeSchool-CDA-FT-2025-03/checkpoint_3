import { gql } from '@apollo/client';
export const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      code
      emoji
      id
      name
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      emoji
      id
      name
    }
  }
`;

export const ADD_COUNTRY_MUTATION = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      emoji
      id
      name
    }
  }
`;
