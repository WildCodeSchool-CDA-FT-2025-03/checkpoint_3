import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String']['input'];
};

export type NewCountryInput = {
  code: Scalars['String']['input'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String']['input'];
};

export type AllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', emoji: string, id: number, name: string, code: string }> };

export type OneCountriesQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type OneCountriesQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };

export type CountryMutationVariables = Exact<{
  data: NewCountryInput;
}>;


export type CountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };


export const AllCountriesDocument = gql`
    query AllCountries {
  countries {
    emoji
    id
    name
    code
  }
}
    `;

/**
 * __useAllCountriesQuery__
 *
 * To run a query within a React component, call `useAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
      }
export function useAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
        }
export function useAllCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
        }
export type AllCountriesQueryHookResult = ReturnType<typeof useAllCountriesQuery>;
export type AllCountriesLazyQueryHookResult = ReturnType<typeof useAllCountriesLazyQuery>;
export type AllCountriesSuspenseQueryHookResult = ReturnType<typeof useAllCountriesSuspenseQuery>;
export type AllCountriesQueryResult = Apollo.QueryResult<AllCountriesQuery, AllCountriesQueryVariables>;
export const OneCountriesDocument = gql`
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

/**
 * __useOneCountriesQuery__
 *
 * To run a query within a React component, call `useOneCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneCountriesQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useOneCountriesQuery(baseOptions: Apollo.QueryHookOptions<OneCountriesQuery, OneCountriesQueryVariables> & ({ variables: OneCountriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OneCountriesQuery, OneCountriesQueryVariables>(OneCountriesDocument, options);
      }
export function useOneCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OneCountriesQuery, OneCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OneCountriesQuery, OneCountriesQueryVariables>(OneCountriesDocument, options);
        }
export function useOneCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OneCountriesQuery, OneCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OneCountriesQuery, OneCountriesQueryVariables>(OneCountriesDocument, options);
        }
export type OneCountriesQueryHookResult = ReturnType<typeof useOneCountriesQuery>;
export type OneCountriesLazyQueryHookResult = ReturnType<typeof useOneCountriesLazyQuery>;
export type OneCountriesSuspenseQueryHookResult = ReturnType<typeof useOneCountriesSuspenseQuery>;
export type OneCountriesQueryResult = Apollo.QueryResult<OneCountriesQuery, OneCountriesQueryVariables>;
export const CountryDocument = gql`
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
export type CountryMutationFn = Apollo.MutationFunction<CountryMutation, CountryMutationVariables>;

/**
 * __useCountryMutation__
 *
 * To run a mutation, you first call `useCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [countryMutation, { data, loading, error }] = useCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCountryMutation(baseOptions?: Apollo.MutationHookOptions<CountryMutation, CountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CountryMutation, CountryMutationVariables>(CountryDocument, options);
      }
export type CountryMutationHookResult = ReturnType<typeof useCountryMutation>;
export type CountryMutationResult = Apollo.MutationResult<CountryMutation>;
export type CountryMutationOptions = Apollo.BaseMutationOptions<CountryMutation, CountryMutationVariables>;