'use client'
import React, { useState, useEffect, useRef } from 'react'
import Contador from '../components/contador/page'
import Formulario from '../components/formulario/page'

const Home = () => {

  const [ contador, setContador ] = useState( 0 )

  const incrementar = () => {
    setContador( contador + 1 )
  }

  const decrementar = () => {
    setContador( contador - 1 )
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Contador incrementar={incrementar} decrementar={decrementar} valor={contador} />
      <Formulario />
    </div>
  )
}

export default Home