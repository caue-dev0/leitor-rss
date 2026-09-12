import type { FastifyInstance } from 'fastify'
import { listUsers } from '@/functions/list-users.js'
import { createUser } from '@/functions/create-user.js'

export async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    try {
      const users = await listUsers()
      return reply.code(200).send(users)
    } catch (err) {
      console.error(err)
    }
  })

  fastify.post('/users', async (request, reply) => {
    try {
      const users = await createUser(request.body)

      return reply.code(201).send(users)
    } catch (err) {
      console.error(err)
    }
  })
}

export default routes
