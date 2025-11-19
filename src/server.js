import express from 'express';
import { ENV } from './config/env.js';

import {db} from "./config/db.js";

import {tutorTable, ongTable, clinicaTable} from './db/schema.js';

import { eq } from 'drizzle-orm';

const app = express();
const PORT = ENV.PORT || 5001;

app.use(express.json());


app.get("/api/health", (req, res) => {
  res.status(200).json({sucess:false})
});

//criar tutor
app.post("/api/tutor", async (req, res) => {
  try {
    const { clerkId, name, email, telefone, estado, cidade } = req.body;

    if(!clerkId || !name || !email || !telefone || !estado || !cidade) {
      return res.status(400).json({ error: "Campos obrigatorios faltando" });
    }

    const newTutor = await db
      .insert(tutorTable)
      .values({
        clerkId,
        name,
        email,
        telefone,
        estado,
        cidade
      })
      .returning(); 
      
      res.status(201).json(newTutor[0]);
  } catch (error) {
    console.error("Erro ao criar tutor:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


//criar ong
app.post("/api/ong", async (req, res) => {
  try {
    const { clerkId, name, email, telefone, estado, cidade, cnpj, cnae } = req.body;

    if(!clerkId || !name || !email || !telefone || !estado || !cidade) {
      return res.status(400).json({ error: "Campos obrigatorios faltando" });
    }

    const newOng = await db
      .insert(ongTable)
      .values({
        clerkId,
        name,
        email,
        telefone,
        estado,
        cidade,
        cnpj,
        cnae
      })
      .returning(); 
      
      res.status(201).json(newOng[0]);
  } catch (error) {
    console.error("Erro ao criar Ong:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


//criar clinica
app.post("/api/clinica", async (req, res) => {
  try {
    const { clerkId, name, email, telefone, estado, cidade,crmv } = req.body;

    if(!clerkId || !name || !email || !telefone || !estado || !cidade) {
      return res.status(400).json({ error: "Campos obrigatorios faltando" });
    }

    const newClinica = await db
      .insert(clinicaTable)
      .values({
        clerkId,
        name,
        email,
        telefone,
        estado,
        cidade,
        crmv
      })
      .returning(); 
      
      res.status(201).json(newClinica[0]);
  } catch (error) {
    console.error("Erro ao criar tutor:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});



// mostrar tutor
app.get("/api/tutor/:clerkId", async (req, res) => {
  try{
    const { clerkId} = req.params;

    const viewTutor = await db
      .select()
      .from(tutorTable)
      .where(eq(tutorTable.clerkId, clerkId));
      
      res.status(200).json(viewTutor);
  }catch (error) {
    console.error("Erro ao buscar tutor:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


// mostrar ong
app.get("/api/ong/:clerkId", async (req, res) => {
  try{
    const { clerkId} = req.params;

    const viewOng = await db
      .select()
      .from(ongTable)
      .where(eq(ongTable.clerkId, clerkId));
      
      res.status(200).json(viewOng);
  }catch (error) {
    console.error("Erro ao buscar tutor:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});


// mostrar clinica
app.get("/api/clinica/:clerkId", async (req, res) => {
  try{
    const { clerkId} = req.params;

    const viewClinica = await db
      .select()
      .from(clinicaTable)
      .where(eq(clinicaTable.clerkId, clerkId));
      
      res.status(200).json(viewClinica);
  }catch (error) {
    console.error("Erro ao buscar tutor:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});





app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});