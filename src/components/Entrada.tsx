import React from 'react';

// import { Container } from './styles';

interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    onChange?: (valor: any) => void
}

const Entrada= (props: EntradaProps ) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
        <label htmlFor="" className='mb-2'>
            {props.texto}
        </label>
        <input 
            type={props.tipo ?? 'text'} 
            value={props.valor}
            readOnly={props.somenteLeitura}
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-100 px-4 py-2
                ${props.somenteLeitura ? 'cursor-default': 'focus:bg-white'}
            `}
            onChange={(e) => props.onChange?.(e.target.value)}
        />
    </div>
  );
}

export default Entrada;