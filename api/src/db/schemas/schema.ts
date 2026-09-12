import { pgTable, integer, text, varchar } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 256 }).notNull(),
  email: varchar({ length: 256 }).notNull().unique(),
  password: varchar({ length: 256 }).notNull(),
})

export const feedTable = pgTable('feed', {
  userId: integer()
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 256 }).notNull(),
  link: text().notNull(),
  description: text().notNull(),
})
