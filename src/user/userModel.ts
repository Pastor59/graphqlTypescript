import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  positions: [ {
    date: String,
    coordinate: {
      latitude: Number,
      longitude: Number
    }
  } ]
});

const User = mongoose.model('User', userSchema);
export default User;
