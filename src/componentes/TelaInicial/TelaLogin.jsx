import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


import LogoTelaInicial from '../../assets/img/logo.svg';
import CadastroLogin from '../../assets/estiloTelasJs/CadastroLogin';


export default function TelaLogin(){

//LOGIC
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const [dadosLogin, setDadosLogin] = useState({ 
        email: '', senha: '', nome: '', foto: '', error: undefined,
        keep: false}); 
    const navigate = useNavigate();

    useEffect(() => {

    })

    function HandleSubmit(e) {

    }

//UI

    return (
        <CadastroLogin>
            <form onSubmit={HandleSubmit}>

                <img src={LogoTelaInicial} alt="Logo-trackit" />    
                
                <input
                type="email"
                placeholder="email"
                required
                onChange={e => setDadosLogin({ ...dadosLogin, email: e.target.value })}
                />
                
                <input
                type="password"
                placeholder="senha"
                required
                onChange={e => setDadosLogin({ ...dadosLogin, senha: e.target.value })}
                />

                <div>
                    <button onClick={HandleSubmit}> Entrar </button>
                </div>
                
                <Link to={`/cadastro`}>
                    <p> Não tem uma conta? Cadastre-se! </p>   
                </Link>
            </form>
      </CadastroLogin>
    );
  
}



 