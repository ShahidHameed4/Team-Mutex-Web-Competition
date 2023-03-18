
import express from 'express'
import {create,
  get,
  getAll,
  update,
  del,
login} from '../controllers/ResidentController.js'
import jwt from "jsonwebtoken"
import protect from "../middleware/authMiddleware.js"
const router = express.Router()

// Residents
router.post('/create', create)
router.get('/get/',protect, get )
router.post('/login', login )
router.get('/getAll', getAll)
router.put('/update/',update)
router.delete('/delete/', del)




export default router
// module.exports = router;
