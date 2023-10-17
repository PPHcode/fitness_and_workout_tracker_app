import mongoose from 'mongoose';

// -name
//   -weight
//   -height
//   -Age
//   -Phone
//   -password
//   -email
//   -image
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    /*image: {
        type: String,
        required: true,
      },*/
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', UserSchema);