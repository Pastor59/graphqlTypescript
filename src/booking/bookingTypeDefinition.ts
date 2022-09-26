import { gql } from 'apollo-server-express';

const bookingTypeDefinition = gql`
  type Booking {
    spot: Int
    date: String
  }

  type Query {
    displayAllBookings: [Booking]!
    displayMyBookings: [Booking]!
  }

  type Mutation {
    makeBooking(spot: Int!, date: String!): String!
  }
`;

export default bookingTypeDefinition;
