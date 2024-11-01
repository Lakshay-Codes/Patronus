import express from "express";
import { authenticationMiddleware } from "../middleware/index.js";
import CampaignModel from "../models/campaign-model.js";
import DonationModel from "../models/donation-model.js";
import UserModel from "../models/user-model.js";

const router = express.Router();

router.get('/admin-reports',authenticationMiddleware, async (req,res) =>{
    try{
        const [totalUsers, totalCampaigns, donations] = await Promise.all([
            UserModel.countDocuments({}),
            CampaignModel.countDocuments({}),
            DonationModel.find({}).sort({createdAt:-1})
        ]);    
        const response = {
            totalUsers,
            totalCampaigns,
            totalDonations: donations.length,
            totalAmount: donations.reduce(
                (acc,donation) => acc + donation.amount,0
            ),
            lastFiveDonations:donations.slice(-5)
        }
        return res.status(200).json({
            success: true,
            message: "Admin reports generated successfully",
            data: response
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message || "Error generating admin reports"
        });
    }
})

router.get('/user-reports/:id',authenticationMiddleware, async (req,res) =>{
    try{
        const [ totalCampaigns, donations] = await Promise.all([
            CampaignModel.countDocuments({organizer: req.params.id}),
            DonationModel.find({user: req.params.id}).populate('campaign').sort({createdAt:-1})
        ]);    
        const response = {
            totalCampaigns,
            totalDonations: donations.length,
            totalAmount: donations.reduce(
                (acc,donation) => acc + donation.amount,0
            ),
            lastFiveDonations:donations.slice(-5)
        }
        return res.status(200).json({
            success: true,
            message: "User reports generated successfully",
            data: response
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message || "Error generating user reports"
        });
    }
})

export default router;