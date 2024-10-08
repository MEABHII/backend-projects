// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()


/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
  } catch (error) {
    console.error("Error: ", error)
    throw err
  }
})();
*/
