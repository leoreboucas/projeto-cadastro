import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'

import useClientes from '../hooks/useClientes'

export default function Home() {

  const { 
    cliente,
    clienteExcluded,
    clienteNovo,
    clienteSelected,
    clientes,
    salvarCliente,
    setVisivel,
    visivel 
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao 
              cor='green'
              onClick={clienteNovo}
              className={`mb-4`} >
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelected={clienteSelected}
            clienteExcluded={clienteExcluded} />
        </>
        ) : <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')} />}
          
      </Layout>
    </div>
  )
}
