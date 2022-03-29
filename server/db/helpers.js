import mongoose from "mongoose";

// ? Function connects to the database
export async function connectToDb() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  // ? Mongoose connect returns a promise.
  return mongoose.connect("mongodb://127.0.0.1:27017/companies", opts);
}

export async function disconnectDb() {
  // ? This will check the database is ready to be disconnected, then disconnect.
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}

// ! Added drop database
export async function dropDatabase() {
  mongoose.connection.db.dropDatabase();
}
