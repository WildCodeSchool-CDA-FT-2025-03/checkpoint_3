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