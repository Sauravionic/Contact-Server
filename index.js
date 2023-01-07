import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import InfoRoutes from "./routes/InfoRoute.js";
import TwilioRoutes from "./routes/TwilioRoute.js";

const app = express();
const PORT = process.env.PORT || 8800;
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo!");
    } catch(err) {
        throw err;
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});
  
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/info", InfoRoutes);
app.use("/api/send-text", TwilioRoutes);

app.listen(PORT, () => {
    connect();
    console.log("connected to backend");
})