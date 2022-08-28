import React from 'react';

// import { Container } from './styles';

interface BotaoProps {
    cor?: 'green' | 'gray' | 'blue'
    className?: string
    children: any
}

const Botao = (props: BotaoProps ) => {
    const cor = props.cor ?? 'gray'

    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            px-4 py-2 rounded-md text-white 
            ${props.className}`}>
            {props.children}
        </button>
    );
}

export default Botao;