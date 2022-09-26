import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookingSchema = new Schema({
  userId: String,
  spot: Number,
  date: String,
  cancelled: Boolean
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
