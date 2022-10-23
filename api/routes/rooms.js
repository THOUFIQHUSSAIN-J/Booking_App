import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

const router = express.Router();

//Create
router.post("/:hotelid", verifyAdmin, createRoom);

//Update
router.put("/:id", verifyAdmin, updateRoom);

//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//Get a specific item 
router.get("/:id", getRoom); 

//Get all 
router.get("/", getAllRoom);


export default router