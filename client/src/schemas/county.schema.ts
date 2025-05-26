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
