import express from 'express'
import cors from 'cors' // important for recieving api calls

// import AnnoucementRouter from './routes/Annoucement.js'
 import ResidentRouter from './routes/Resident.js'
// import ComplaintRouter from './routes/Complaint.js'
// import PropertyRouter from './routes/Property.js'
// import ContactRouter from './routes/ContactUs.js'
import * as dotenv from 'dotenv';
import userRouter from './routes/User.js'

dotenv.config();
import connectDB from './Database/db.js'
connectDB();
const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.static('public'))
app.use(express.json())


app.use('/api/user', userRouter)
// app.use('/api/Annoucement', AnnoucementRouter)
// app.use('/api/Residents', ResidentRouter)
// app.use('/api/Complaint', ComplaintRouter)
// app.use('/api/Property', PropertyRouter)
// app.use('api/contactus', ContactRouter)





app.listen(3001)
