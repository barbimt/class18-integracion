import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { Student } from './api/create';

interface IForm {
    id: string,
    nombre: string,
    curso: string,
    calificaciones: {
        PrimerCuatr: string,
        SegundoCuatr: string
    }
  }
  

function FormularioNuevoEstudiante() {
  const { register, handleSubmit, formState: {errors}, getValues } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async () => {
    //getValues para obtener todos los datos y hacer el post
    const values = getValues();
    console.log(values)

   await fetch("http://localhost:3000/api/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(values => {
            console.log(values)      
        })
      .catch(error => {
        // Manejar errores de la API aquí
      });
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" {...register("nombre", {required: true, maxLength: 80})}/>
        {errors.nombre && errors.nombre.type === "required" && (
          <span>Este campo es requerido</span>
        )}
        {errors.nombre && errors.nombre.type === "maxLength" && (
          <span>El nombre no debe tener más de 80 caracteres</span>
        )}
      </div>

      <div>
        <label htmlFor="curso">Curso:</label>
        <input
        type="text" {...register("curso", {required: true})}
        />
        {errors.curso && errors.curso.type === "required" && (
          <span>Este campo es requerido</span>
        )}
      </div>

      <div>
        <label htmlFor="calificaciones.PrimerCuatr">Calificaciones:</label>
        <input
              id='calificaciones.PrimerCuatr'   type="text" {...register("calificaciones.PrimerCuatr", {required: true})}
        />
        {errors.calificaciones?.PrimerCuatr && errors.calificaciones.PrimerCuatr.type === "required" && (
          <span>Este campo es requerido</span>
        )}

      </div>
      
      <div>
        <label htmlFor="calificaciones.SegundoCuatr">Calificaciones:</label>
        <input
              id='calificaciones.SegundoCuatr'   type="text" {...register("calificaciones.SegundoCuatr", {required: true})}

        />
        {errors.calificaciones?.SegundoCuatr && errors.calificaciones?.SegundoCuatr.type === "required" && (
          <span>Este campo es requerido</span>
        )}
    
      </div>
    

      <button type="submit">Agregar Estudiante</button>
    </form>
  );
}

export default FormularioNuevoEstudiante;