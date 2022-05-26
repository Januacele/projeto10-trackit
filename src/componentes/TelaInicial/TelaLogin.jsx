import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import axios from "axios";


import LogoTelaInicial from '../../assets/img/logo.svg';
import CadastroLogin from '../../assets/estiloTelasJs/CadastroLogin';


export default function TelaLogin(){

//LOGIC
    // const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    // const [dadosLogin, setDadosLogin] = useState({ 
    //     email: '', senha: '', nome: '', foto: '', error: undefined,
    //     keep: false}); 
    
    // useEffect(() => {

    // })

//UI

    return (
        <CadastroLogin>
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
                <p> Não tem uma conta? Cadastre-se! </p>   
            </Link>

      </CadastroLogin>
    );
  
}



 