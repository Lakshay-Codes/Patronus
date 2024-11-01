import express from "express";
import { authenticationMiddleware } from "../middleware/index.js";
import campaignModel from "../models/campaign-model.js";
import UserModel from "../models/user-model.js";

const router = express.Router();
 
router.post("/create", authenticationMiddleware, async (req, res) => {
    try {
        req.body.collectedAmount = 0;
        await campaignModel.create(req.body);
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Campaign created successfully"}); 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.put("/update/:id", authenticationMiddleware, async (req, res) => {
    try {
        const {id} = req.params;
        const campaign = await campaignModel.findByIdAndUpdate(id, req.body, {new: true});
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Campaign updated successfully", campaign});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.delete("/delete/:id", authenticationMiddleware, async (req, res) => {
    try {
        const {id} = req.params;
        const campaign = await campaignModel.findByIdAndDelete(id);
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Campaign deleted successfully", campaign});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.get("/get-all", authenticationMiddleware, async (req, res) => {
    try {
        const campaigns = await campaignModel.find().sort({createdAt: -1});
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Campaigns fetched successfully", campaigns});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.get("/get/:id", authenticationMiddleware, async (req, res) => {
    try {
        const {id} = req.params;
        const campaign = await campaignModel.findById(id);
        await UserModel.findByIdAndUpdate(req.user.userId, { updatedAt: new Date() });
        return res.status(200).json({message: "Campaign fetched successfully", campaign});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }   
});

export default router;