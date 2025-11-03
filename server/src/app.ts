import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import { errorHandler } from './middlewares/errorHandler'
import appointmentRoutes from './routes/appointmentRoutes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use(errorHandler)
app.use('/appointments', appointmentRoutes)

export default app
