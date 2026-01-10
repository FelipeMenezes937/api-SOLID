import type { FastifyRequest, FastifyReply } from 'fastify' 
import { z } from 'zod'
import {prisma} from "@/lib/prisma.js"
import { hash } from 'bcryptjs'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string().min(6)
    })
    const {name, email, password} = registerBodySchema.parse(request.body)
    const password_hash = await hash(password, 6)// o segundo parametro é o numero de vezes que ele tira o hash, no caso seriam 6 vezes

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email,
        }
    })
    if (userWithSameEmail){
        return reply.status(409).send()
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash
        }
    })
    return reply.status(201).send()
}