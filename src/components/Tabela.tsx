import React from 'react';
import Cliente from '../core/Cliente';
import { EditIcon, TrashIcon } from './Icons';

// import { Container } from './styles';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelected?: (cliente: Cliente) => void
    clienteExcluded?: (cliente: Cliente) => void
}

const Tabela = (props: TabelaProps) => {

    const exibirAcoes = props.clienteExcluded || props.clienteSelected;

    function rederizarCabecalho() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes ? <th className='text-center p-4'>Ações</th> : false} 
            </tr>     
        )
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelected ? (
                    <button 
                    onClick={() => props.clienteSelected?.(cliente)}
                    className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1 transition all-ease delay-50
                    hover:bg-purple-50 
                `}>
                    {TrashIcon}
                </button>
                ): false}
                {props.clienteExcluded ? (
                    <button 
                    onClick={() => props.clienteExcluded?.(cliente)}
                    className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1  transition-all
                    hover:bg-purple-50 
                `}>
                    {EditIcon}
                </button>
                ): false}
                
            </td>
        )
    } 

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`
                    ${i % 2 === 0 ? 'bg-purple-200' :
                    'bg-purple-100'
                }
                `}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {rederizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    );
}

export default Tabela;