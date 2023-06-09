const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    polls: [MoviePoll!]!
    comments: [Comment!]!
    votes: [Vote!]!
  }

  type MoviePoll {
    _id: ID!
    user_id: ID!
    username: String!
    title: String!
    description: String
    genre: String
    options: [movieOption!]!
    comments: [Comment!]!
  }

  input MoviePollInput {
    title: String!
    description: String
    genre: String
    options: [movieOptionInput!]!
  }

  type Comment {
    _id: ID!
    user_id: ID!
    poll_id: ID!
    username: String!
    title: String!
    option: movieOption!
    content: String!
  }

  type movieOption {
    _id: ID!
    title: String!
    summary: String
    stars: String
    imdb_id: String
    rating: String
    trailer: String
    wikipedia: String
    image: String
    genres: [String]!
    votes: Int!
    rank_votes: [Int!]
  }

  input movieOptionInput {
    title: String!
    summary: String
    stars: String
    imdb_id: String
    rating: String
    trailer: String
    wikipedia: String
    image: String
    genres: [String]!
  }

  type Vote {
    poll_id: String!
    option: movieOption!
    comment: String
  }

  input VoteInput {
    poll_id: String!
    option: ID!
    comment: String
  }

  type Query {
    me: User
    user(id: ID!): User
    moviePoll(id: ID!): MoviePoll
    pollList(genre: String, user: ID): [MoviePoll]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addPoll(user_id: ID!, username: String!, input: MoviePollInput): MoviePoll
    addVote(user_id: ID!, input: VoteInput): MoviePoll
    login(username: String!, password: String!): Auth
  }
`;
