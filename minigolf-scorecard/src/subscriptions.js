import { gql } from '@apollo/client'

export const GET_USER_SUBSCRIPTION = gql`
  subscription GetUser($id: uuid!) {
    user(id: $id) {
      id
      email
      displayName
      metadata
      avatarUrl
    }
  }
`