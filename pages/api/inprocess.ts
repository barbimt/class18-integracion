import type { NextApiRequest, NextApiResponse } from 'next'
import { students } from './db'

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    const studentsFiltered = students.filter(student => parseInt(student.calificaciones.PrimerCuatr) < 6 || parseInt(student.calificaciones.SegundoCuatr) < 6 )
    console.log(studentsFiltered)
    res.status(200).json(studentsFiltered)
}
