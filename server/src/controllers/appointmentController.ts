import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, clientName, clientPhone, service, datetime } = req.body

    // Validação: verifica se o userId existe
    const userExists = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!userExists) {
      return res.status(400).json({ error: 'Usuário não encontrado' })
    }

    // Se usuário existe, cria o agendamento
    const appointment = await prisma.appointment.create({
      data: { userId, clientName, clientPhone, service, datetime: new Date(datetime) }
    })

    res.status(201).json(appointment)
  } catch (err) {
    next(err)
  }
}
