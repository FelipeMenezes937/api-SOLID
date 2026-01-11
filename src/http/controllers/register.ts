import type { FastifyRequest, FastifyReply } from 'fastify' 
import { z } from 'zod'
import {prisma} from "@/lib/prisma.js"

import { RegisterUseCase } from '@/use-cases/register.js'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.js'
import { UserAlredyExistsError } from '@/use-cases/errors/user-alredy-exists-error.js'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string().min(6)
    })
    const {name, email, password} = registerBodySchema.parse(request.body)
  try{
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)
    await registerUseCase.execute({
        name, 
        email,
        password
    })  
  }catch(err){
    if(err instanceof UserAlredyExistsError){
      return reply.status(409).send()
    }
    return reply.status(500).send() // TODO fix
  }
    return reply.status(201).send()
}