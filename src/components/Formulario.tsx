import React, { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

// import { Container } from './styles';

interface FormularioProps {
    cliente?: Cliente
    cancelado?: () => void
    clienteMudou?:(cliente: Cliente) => void
}

const Formulario= (props: FormularioProps ) => {
    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
        {id ? (
            <Entrada 
                texto='Código' 
                valor={id}
                className='mb-4'
                somenteLeitura
            />
        ): false}
        
        <Entrada 
            texto='Nome' 
            valor={nome} 
            className='mb-4'
            onChange={setNome} />

        <Entrada 
            texto='Idade' 
            tipo="number" 
            valor={idade} 
            onChange={setIdade}/>

        <div className='flex justify-end mt-7'>
            <Botao 
                onClick={() => props.clienteMudou?.( new Cliente(nome, +idade, id))}
                className={`mr-2 bg-gradient-to-r from-blue-400 to-blue-700
            `} >
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao 
                onClick={props.cancelado}
                className={`mr-2 bg-gradient-to-r from-gray-400 to-gray-700
            `} >
                Cancelar
            </Botao>
        </div>
    </div>
  );
}

export default Formulario;