import { db } from '@/db/index.js'
import { usersTable } from '@/db/schemas/schema.js'
import { eq } from 'drizzle-orm'

export async function updateUserAll(data, id: number) {
  const { name, email, password } = data
  const userUpdated = await db
    .update(usersTable)
    .set({
      name,
      email,
      password,
    })
    .where(eq(usersTable.id, id))
    .returning({
      name: usersTable.name,
      email: usersTable.email,
    })

  return userUpdated
}

export async function updateUser(data, id: number) {
  const { name, email, password } = data
  const userUpdated = await db
    .update(usersTable)
    .set({
      ...(name !== undefined && { name }),
      ...(email !== undefined && { email }),
      ...(password !== undefined && { password }),
    })
    .where(eq(usersTable.id, id))
    .returning({
      name: usersTable.name,
      email: usersTable.email,
    })

  return userUpdated
}
