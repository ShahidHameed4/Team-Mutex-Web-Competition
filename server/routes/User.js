
import express from 'express'
import { registerUser,
    loginUser,
    getMe,profile} from '../controllers/UserController.js'

import protect from "../middleware/authMiddlewareUser.js"
const router = express.Router()

// Residents
router.post('/create', registerUser)
router.get('/get/',protect, getMe )
router.post('/login', loginUser )
router.get('/profile', profile )







export default router;