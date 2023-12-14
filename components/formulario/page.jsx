import React from 'react'

const Formulario = () => {
  return (
    <div className="flex flex-col border-solid border-cyan-800 rounded p-2 m-5 justify-center items-center">
      <h1 className="text-4xl text-center  text-gray-800 font-bold p-2 m-5
  ">
        Formulario
      </h1>
      <form className="flex justify-around w-1/2">
        <label htmlFor='input-nombre' className="text-gray-800 font-bold p-2 m-5">Nombre</label>
        <input name='input-nombre' type="text" className="border-solid border-2 border-gray-800 rounded p-2 m-5" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit' onSubmit={
          ( e ) => {
            handleSubmit( e )
          }
        } >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Formulario