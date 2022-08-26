import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 23, '2'),
    new Cliente('Carlos', 32, '3'),
    new Cliente('Pedro', 27, '4'),
  ]

  function clienteSelected(cliente: Cliente) {
    return console.log('Selecionado' + cliente.id)
  }
  function clienteExcluded(cliente: Cliente) {
    return console.log('Excluido')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Tabela clientes={clientes} 
        clienteSelected={clienteSelected}
        clienteExcluded={clienteExcluded}
        ></Tabela>
      </Layout>
    </div>
  )
}
