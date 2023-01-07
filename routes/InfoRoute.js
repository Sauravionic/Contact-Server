import express from "express";
import Info from "../models/Info.js";

const router = express.Router();

//Add Info
router.post("/", async (req, res, next) => {
    const newInfo = new Info(req.body);
     const query = { $text: { $search: req.body.phoneNo } };
    try {
        const savedInfo = await newInfo.save();
        res.status(200).json(savedInfo);
    } catch (err) {
        console.log(err);
        res.status(404).json();
    }
})

//Get Info
router.get("/", async (req, res, next) => {
    try {
        const info = await Info.find().sort('-createdAt');
        res.status(200).json(info);
    } catch (err) {
        res.status(404).json();
    }
})


export default router;