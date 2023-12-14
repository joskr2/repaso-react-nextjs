'use client'

import React, { FC, useState } from 'react'
import { IFormulario } from '../../interfaces/IFormulario';

const Formulario: FC<IFormulario> = ({ handleChange, handleSubmit,info }) => {

  return (
    <div className="flex flex-col border-solid border-cyan-800 rounded p-2 m-5 justify-center items-center">
      <h1 className="text-4xl text-center  text-gray-800 font-bold p-2 m-5
  ">
        Formulario
      </h1>
      <form className="flex flex-col  justify-around w-1/2">
        <div className='flex justify-between my-2'>
          <label htmlFor='nombre' className="text-gray-800 font-bold p-2 m-5">Nombre</label>
          <input name='nombre' type="text" className="border-solid border-2 border-gray-800 rounded p-2 m-5" placeholder='nombre'
            onChange={
              handleChange}
          />
        </div>
        <div className='flex justify-between my-2 w-[300px]'>
          <label htmlFor='cumple' className="text-gray-800 font-bold p-2 m-5">Cumple</label>
          <input name='cumple' type="date" className="border-solid border-2 border-gray-800 rounded p-2 m-5" placeholder='nombre' onChange={
            handleChange} />
        </div>
        <div className='flex justify-between my-2 w-full'>
          <label htmlFor='edad' className="text-gray-800 font-bold p-2 m-5">Edad</label>
          <input name='edad' type="number" className=" w-full border-solid border-2 border-gray-800 rounded p-2 m-5" placeholder='nombre' onChange={
            handleChange} />
        </div>
        <button className=" flex justify-center m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit' onSubmit={
          handleSubmit
        } >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Formulario