import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { createUser } from '@/functions/create-user.js'

export const userSchemaInput = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(4),
})

export async function register(fastify: FastifyInstance) {
  fastify.post(
    '/register',
    { schema: { body: userSchemaInput } },
    async (request, reply) => {
      try {
        const user = await createUser(request.body)
        return reply.code(201).send(user)
      } catch (error) {
        return reply.send(error)
      }
    },
  )
}
