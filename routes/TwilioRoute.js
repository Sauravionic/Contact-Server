import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";
import { TwilioInfo } from "../models/TwilioInfo.js";

const router = express.Router();
dotenv.config();

const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = twilio(accountSid, authToken);

router.post("/", (req, res, next) => {
    client.messages
    .create({
      from: process.env.PHONE,
      to: req.body.phoneNo,
      body: req.body.textMessage
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
})
export default router;