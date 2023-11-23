import express from "express"
import {showNotes} from "../controllers/user.js"
import {verifyUser} from "../utils/verifyUser.js"

const router = express.Router()

router.get("/showNotes", verifyUser, showNotes)

export default router