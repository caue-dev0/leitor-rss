import { db } from '@/db/index.js'
import { usersTable } from '@/db/schemas/schema.js'

export async function listUsers() {
  const users = await db
    .select({ name: usersTable.name, email: usersTable.email })
    .from(usersTable)

  return users
}
