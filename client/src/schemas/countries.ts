import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
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

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
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
