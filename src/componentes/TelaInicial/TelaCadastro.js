import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import LogoTelaInicial from '../../assets/img/logo.svg';


export default function TelaCadastro(){

    const navigate = useNavigate();
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
    const [dadosCadastro, setDadosCadastro] = useState({ 
        email: '', senha: '', nome: '', foto: '', error: undefined,
        success: undefined}); 


        function HandleSubmit(e) {
            e.preventDefault()
            const usuario = { email: dadosCadastro.email, name: dadosCadastro.nome, image: dadosCadastro.foto, password: dadosCadastro.senha }

            axios.post(URL, usuario).then(res => {
                console.log(res)
                setTimeout(() => {
                    navigate("/")
                }, 1500)
                setDadosCadastro({ ...dadosCadastro, success: 'Conta cadastrada com sucesso!', error: null })
            }).catch(err => {
                setDadosCadastro({ ...dadosCadastro, error: 'Erro ao fazer o cadastro. Aparentemente já existe uma conta com esse usuário.'})
                console.log(err.response)
                console.log(dadosCadastro)
            })
        }   

        function refreshPage(){ 
            window.location.reload(); 
        }

    return (
        
         <EstilizacaoTelaCadastro>
             <form onSubmit={HandleSubmit}> 
           
                <img src={LogoTelaInicial} alt="Logo-trackit" />    
                     
                <input
                type="email"
                placeholder="email"
                required
                onChange={e => setDadosCadastro({ ...dadosCadastro, email: e.target.value })}
                />
                
                <input
                type="password"
                placeholder="senha"
                required
                onChange={e => setDadosCadastro({ ...dadosCadastro, senha: e.target.value })}
                />
                               
                <input
                type="text"
                placeholder="nome"
                required
                onChange={e => setDadosCadastro({ ...dadosCadastro, nome: e.target.value })}
                />
              
                <input
                type="texto"
                placeholder="foto"
                required
                onChange={e => setDadosCadastro({ ...dadosCadastro, foto: e.target.value })}
                />

                <div>
                    <button onClick={HandleSubmit}> Cadastrar </button>
                </div>
                
                <Link to={`/`}>
                    <LinkLogin>
                        <p> Já tem uma conta? Faça Login! </p>   
                    </LinkLogin>
                </Link>
                {dadosCadastro.success !== undefined ? <h2>{dadosCadastro.success}</h2> : null}
                {dadosCadastro.error !== null ? <h3 onClick={refreshPage}>{dadosCadastro.error}</h3>: null}
             </form> 
        </EstilizacaoTelaCadastro>
    )
}

const EstilizacaoTelaCadastro = styled.form`
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;
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

    h2 {
        margin-top: 10%;
        font-family: 'Lexend Deca';
        font-size: 22px;
        color: green;
    }
    h3 {
        margin-top: 20px;
        margin-left: 2%;
        margin-right: 2%;
        text-align: center;
        font-family: 'Lexend Deca';
        font-size: 15px;
        color: blue;
        cursor: pointer;
    }
    h4 {
        margin-top: 10%;
        font-family: 'Lexend Deca';
        font-size: 12px;
        font-weight: bold;
        color: orange;
    }
`
const LinkLogin = styled.form`
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