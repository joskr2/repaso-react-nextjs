import { IContador } from '@/interfaces/IContador'
import React, { FC } from 'react'
const Contador: FC<IContador> = ({ incrementar, decrementar, valor = 0 }) => {
  return (
    <div className="flex flex-col border-solid border-cyan-800 rounded p-2 m-5 justify-center items-center">
      <h1 className="text-4xl text-center  text-gray-800 font-bold p-2 m-5 
 ">
        Contador
      </h1>
      <div className="flex justify-around w-1/2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={incrementar}>
          Incrementar
        </button>
        <p >Valor: {valor}</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decrementar}>
          Decrementar
        </button>
      </div>
    </div>
  )
}

export default Contador