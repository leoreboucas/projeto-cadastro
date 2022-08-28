import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const [clientes, setClientes] =useState([
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Carlos', 32, '3'),
    new Cliente('Pedro', 27, '4'),
  ])

  function clienteSelected(cliente: Cliente) {
    return console.log('Selecionado' + cliente.id)
  }
  function clienteExcluded(cliente: Cliente) {
    return setClientes(clientes.filter((element) => element.id !== cliente.id))
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className='flex justify-end'>
          <Botao cor="blue" className='mb-4' >
            Novo Cliente
          </Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelected={clienteSelected}
        clienteExcluded={clienteExcluded}
        ></Tabela>

        <Formulario cliente={clientes[1]} />
      </Layout>
    </div>
  )
}
