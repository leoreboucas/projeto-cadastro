import React, { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';

// import { Container } from './styles';

const useClientes = () => {
    const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelected(cliente: Cliente) {
    setCliente(cliente)
    return setVisivel('form')
  }
  async function clienteExcluded(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function clienteNovo() {
    setCliente(Cliente.vazio())
    return setVisivel('form')
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    visivel,
    cliente,
    clientes,
    clienteSelected,
    clienteExcluded, 
    clienteNovo,
    salvarCliente,
    setVisivel
  }
  
}

export default useClientes;