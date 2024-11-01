import express from "express";
import { authenticationMiddleware } from "../middleware/index.js";
import CampaignModel from "../models/campaign-model.js";
import DonationModel from "../models/donation-model.js";
import UserModel from "../models/user-model.js";

const router = express.Router();
 
router.post("/create", authenticationMiddleware, async (req, res) => {
    try {
        await DonationModel.create(req.body);
        await CampaignModel.findByIdAndUpdate(req.body.campaign, {$inc:{collectedAmount:req.body.amount}});
        await UserModel.findByIdAndUpdate(req.body.user, { updatedAt: new Date() });
        return res.status(201).json({message: "Donation made successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.get("/get-all", authenticationMiddleware, async (req, res) => {
    try {
        const donations = await DonationModel.find()
            .populate('campaign')
            .populate('user')
            .sort({createdAt: -1});
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Donations fetched successfully", donations});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.get("/get-donations-by-campaign/:id", authenticationMiddleware, async (req, res) => {
    try {
        const donations = await DonationModel.find({campaign: req.params.id})
            .populate("campaign")
            .sort({createdAt: -1});
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Donations fetched successfully", donations});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }   
});

router.get("/get-donations-by-user/:id", authenticationMiddleware, async (req, res) => {
    try {
        const donations = await DonationModel.find({user: req.params.id})
            .populate('campaign')
            .sort({createdAt: -1});
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "User donations fetched successfully", donations});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

export default router;