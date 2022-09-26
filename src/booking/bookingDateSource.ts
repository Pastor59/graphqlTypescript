import { DataSource } from 'apollo-datasource';
import Booking from './bookingModel';
import Database from '../database';
import { DataSourceConfig } from '../types';

const database = Database.getInstance();

const isdateReserved = async (spot: number, date: string): Promise<boolean> => {
  const bookingQuery = Booking.where({ spot, date });
  const booking = await bookingQuery.findOne(bookingQuery).select([ 'spot', 'date' ]);
  return !!booking;
};

class BookingDataSource extends DataSource {
  store: any;
  context: any;

  constructor() {
    super();
  };

  initialize(config: DataSourceConfig) {
    this.context = config.context;
  };

  displayAllBookings = async () => await Booking.find({}) || [];

  displayMyBookings = async (user: string) => { 
    const bookingQuery = Booking.where({ user });
    return await Booking.find(bookingQuery).select(['spot', 'date']) || [];
  };

  makeBooking = async (user: string, spot: number, date: string) => {
    const createNewBooking = !(await isdateReserved(spot, date));
    if(createNewBooking) {
      const booking = new Booking({ user, spot, date, cancelled: false });
      return (await database.save(booking))._id;
    }
    throw new Error("This spot is already booked for this date");
  };
}

export default BookingDataSource;
