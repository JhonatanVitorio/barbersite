// src/routes/appointmentRoutes.ts
import { Router } from 'express'
import { createAppointment } from '../controllers/appointmentController'
import { prisma } from '..'
const router = Router()
router.post('/', createAppointment)
export default router


router.get('/appointments/user/:userId', async (req, res) => {
  const userId = Number(req.params.userId)

  try {
    const appointments = await prisma.appointment.findMany({
      where: { userId },
      orderBy: { datetime: 'asc' }
    })
    res.json(appointments)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos.' })
  }
})
