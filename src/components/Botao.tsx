import React from 'react';

// import { Container } from './styles';

interface BotaoProps {
    className?: string
    children: any
    onClick?: () => void
}

const Botao = (props: BotaoProps ) => {

    return (
        <button 
            onClick={props.onClick}
            className={`
                px-4 py-2 rounded-md text-white 
                ${props.className}`}>
                {props.children}
        </button>
    );
}

export default Botao;