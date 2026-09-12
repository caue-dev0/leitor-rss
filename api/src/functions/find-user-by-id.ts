import { db } from '@/db/index.js'
import { usersTable } from '@/db/schemas/schema.js'
import { eq } from 'drizzle-orm'

export async function findUserById(id: number) {
  const user = await db
    .select({
      name: usersTable.name,
      email: usersTable.email,
    })
    .from(usersTable)
    .where(eq(usersTable.id, id))

  return user
}
