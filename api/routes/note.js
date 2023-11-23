import express from "express"
import {createNote} from "../controllers/note.js"
import {verifyUser} from "../utils/verifyUser.js"

const router = express.Router()

router.post("/create", verifyUser, createNote)

export default router