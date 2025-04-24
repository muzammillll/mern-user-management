import express from "express"
import mongoose, { Mongoose } from "mongoose"
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"


const app = express();

//connecting with the mongodb cluster
mongoose.set("strictQuery", false);

//Please replace your URL here, this is dummy 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
  })

  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5050, ()=> console.log("Server is up and running "))