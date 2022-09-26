import { dataSourcesType } from '../types';

const bookingResolvers = {
  Query: {
    displayAllBookings: async(
      parent: any,
      {},
      { dataSources, user }: { dataSources : dataSourcesType, user : any }) => {
      return await dataSources.booking.displayAllBookings();
    },
    displayMyBookings: async(
      parent: any,
      {},
      { dataSources, user }: { dataSources : dataSourcesType, user : any }) => {
      return await dataSources.booking.displayMyBookings(user);
    },
  },
  Mutation: {
    makeBooking: async(
      parent: any,
      { spot, date }: { spot: number, date: string },
      { dataSources, user }: { dataSources : dataSourcesType, user : any }) => {
      return await dataSources.booking.makeBooking(user, spot, date);
    }
  }
};

export default bookingResolvers;
