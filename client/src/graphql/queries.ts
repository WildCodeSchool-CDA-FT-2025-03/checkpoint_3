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

export const GET_ALL_CONTINENTS = gql`
  query GetAllContinents {
    continents {
      id
      name
    }
  }
`;

export const CREATE_COUNTRY = gql`
  mutation CreateCountry($data: NewCountryInput!) {
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
