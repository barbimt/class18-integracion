import { NextApiRequest, NextApiResponse } from "next";
import { students } from './db'

export interface Student  {
    id: string,
    nombre: string,
    curso: string,
    calificaciones: {
        PrimerCuatr: string,
        SegundoCuatr: string
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const body = req.body
      
        const newStudent: Student = {
            id: Math.round(Math.random() * (10000 - 1000) + 1000).toString(),
            nombre: body.nombre,
            curso: body.curso,
            calificaciones: {
                PrimerCuatr: body.calificaciones.PrimerCuatr,
                SegundoCuatr: body.calificaciones.SegundoCuatr
            }
        }
        students.push(newStudent)
        console.log(newStudent)
        res.status(200)
    } else {
        // Manipula cualquier otro método HTTP
    }
}