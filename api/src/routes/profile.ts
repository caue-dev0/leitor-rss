import type { FastifyInstance } from 'fastify'
import { findUserById } from '@/functions/find-user-by-id.js'
import { updateUserAll, updateUser } from '@/functions/update-users.js'
import { z } from 'zod'

import { userSchemaInput } from './register.js'

const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.email().optional(),
  password: z.string().min(4).optional(),
})

export async function profile(fastify: FastifyInstance) {
  fastify.get('/profile/:id', async (request, reply) => {
    try {
      const { id } = request.params
      const userProfile = await findUserById(id)

      return reply.code(200).send(userProfile)
    } catch (error) {
      return reply.send(error)
    }
  })

  fastify.put(
    '/profile/:id',
    { schema: { body: updateUserSchema } },
    async (request, reply) => {
      try {
        const { id } = request.params
        const userUpdated = await updateUserAll(request.body, id)

        return reply.code(200).send(userUpdated)
      } catch (error) {
        return reply.send(error)
      }
    },
  )

  fastify.patch(
    '/profile/:id',
    { schema: { body: updateUserSchema } },
    async (request, reply) => {
      try {
        const { id } = request.params
        const userUpdated = await updateUser(request.body, id)

        return reply.code(200).send(userUpdated)
      } catch (error) {
        return reply.send(error)
      }
    },
  )
}
