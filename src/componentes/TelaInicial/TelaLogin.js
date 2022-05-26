import { Link } from 'react-router-dom';
// import { useState } from "react";
// import axios from "axios";
import styled from 'styled-components';

import LogoTelaInicial from '../../assets/img/logo.svg';


export default function TelaLogin(){
    
//UI

    return (
        <EstilizacaoTelaLogin>
            <img src={LogoTelaInicial} alt="Logo-trackit" />    
            
            <label htmlFor="inputEmail"></label>
            <input
            type="email"
            //   id="nome"
            //   value={dadosCompra.nome}
            placeholder="email"
            required
            //   onChange={e => setDadosCompra({ ...dadosCompra, nome: e.target.value })}
            />
            <label htmlFor="inputSenha"></label>
            <input
            type="password"
            //   id="cpf"
            //   value={dadosCompra.cpf}
            placeholder="senha"
            required
            //   onChange={e => setDadosCompra({ ...dadosCompra, cpf: e.target.value })}
            />
            <div>
            <button> Entrar </button>
            </div>
            
            <Link to={`/cadastro`}>
                <LinkCadastro>
                    <p> Não tem uma conta? Cadastre-se! </p>   
                </LinkCadastro>
            </Link>

      </EstilizacaoTelaLogin>
    );
  
}



const EstilizacaoTelaLogin = styled.form`
width: 100%;
height: 100vh;  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: start;

@media (min-width: 768px) {
    width: 50%;
    margin-left: 25%;
}
 
    * {
        margin: 5px 0;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img{
       margin-bottom: 5%;
    }
    input {
        width: 300px;
        height: 45px;
        background: #FFFFFF;
        padding: 10px 5px;
        border: 0;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size: 20px;
        color: #DBDBDB;
    }
    
    button {
        background-color: #52B6FF;
        width: 300px;
        height: 45px;
        color: white;
        padding: 10px 5px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const LinkCadastro = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: start;
    p{
        font-family: 'Lexend Deca';
        font-size: 14px;
        color: #52B6FF;
        text-decoration-line: underline;
    }
  `


 