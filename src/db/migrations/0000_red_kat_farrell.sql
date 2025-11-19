CREATE TABLE "clinica" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"crmv" varchar(15) NOT NULL,
	"telefone" varchar(20) NOT NULL,
	"estado" text NOT NULL,
	"cidade" text NOT NULL,
	CONSTRAINT "clinica_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "clinica_email_unique" UNIQUE("email"),
	CONSTRAINT "clinica_crmv_unique" UNIQUE("crmv")
);
--> statement-breakpoint
CREATE TABLE "ong" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"cnpj" varchar(18) NOT NULL,
	"cnae" varchar(10),
	"telefone" varchar(20) NOT NULL,
	"estado" text NOT NULL,
	"cidade" text NOT NULL,
	CONSTRAINT "ong_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "ong_email_unique" UNIQUE("email"),
	CONSTRAINT "ong_cnpj_unique" UNIQUE("cnpj")
);
--> statement-breakpoint
CREATE TABLE "tutor" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"telefone" varchar(20) NOT NULL,
	"estado" text NOT NULL,
	"cidade" text NOT NULL,
	CONSTRAINT "tutor_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "tutor_email_unique" UNIQUE("email")
);
