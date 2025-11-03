import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body

    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) return res.status(400).json({ message: 'E-mail já cadastrado' })

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password // Ideal: usar bcrypt para criptografar
      }
    })

    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}
