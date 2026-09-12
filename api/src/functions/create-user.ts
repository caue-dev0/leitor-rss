import { db } from '@/db/index.js'
import { usersTable } from '@/db/schemas/schema.js'

export async function createUser(data) {
  const { name, email, password } = data
  const user: typeof usersTable.$inferInsert = {
    name,
    email,
    password,
  }

  const [userCreated] = await db.insert(usersTable).values(user).returning()

  return userCreated
}
