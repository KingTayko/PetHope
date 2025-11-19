
import { pgTable, serial, text, timestamp, integer, varchar } from "drizzle-orm/pg-core";


export const tutorTable = pgTable("tutor", {
    id: serial("id").primaryKey(),
    clerkId: text("clerk_id").notNull().unique(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    telefone: varchar("telefone", { length: 20 }).notNull(),
    estado: text("estado").notNull(),
    cidade: text("cidade").notNull(),
});

//tabela ong
export const ongTable = pgTable("ong", {
    id: serial("id").primaryKey(),
    clerkId: text("clerk_id").notNull().unique(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    cnpj: varchar("cnpj", { length: 18 }).notNull().unique(),
    cnae: varchar("cnae", { length: 10 }),
    telefone: varchar("telefone", { length: 20 }).notNull(),
    estado: text("estado").notNull(),
    cidade: text("cidade").notNull(),
});

//tabela clinica
export const clinicaTable = pgTable("clinica", {
    id: serial("id").primaryKey(),
    clerkId: text("clerk_id").notNull().unique(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    crmv: varchar("crmv", { length: 15 }).notNull().unique(),
    telefone: varchar("telefone", { length: 20 }).notNull(),
    estado: text("estado").notNull(),
    cidade: text("cidade").notNull(),
});