import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import LogoTelaInicial from '../../assets/img/logo.svg';
import CadastroLogin from './estiloCadastroLogin';

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
                setDadosCadastro({ ...dadosCadastro, error: 'Erro ao fazer o cadastro. Aparentemente já existe uma conta com esse usuário.'})
            }).catch(err => {
                setDadosCadastro({ ...dadosCadastro, error: 'Erro ao fazer o cadastro'})
                console.log(err.response)
                console.log(dadosCadastro)
            })
        }         

        function refreshPage(){ 
            window.location.reload(); 
        }


    return (

         <CadastroLogin>
            <img src={LogoTelaInicial} alt="Logo-trackit" />    

             <form onSubmit={HandleSubmit}>                

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
                type="url"
                placeholder="foto"
                onChange={e => setDadosCadastro({ ...dadosCadastro, foto: e.target.value })}
                />

                <div className="select-auto-image">
                    <input className="checkbox" type="checkbox" id="userAvatar" name="usarAvatar" value="image" onClick={definirImagemPadrao}/>
                    <label htmlFor="userAvatar">Usar imagem padrão</label>
                </div>

                <div>
                    <button onClick={HandleSubmit}> Cadastrar </button>
                </div>

                <Link to={`/`}>
                    <p> Já tem uma conta? Faça Login! </p>                     
                </Link>

                {dadosCadastro.success !== undefined ? <h2>{dadosCadastro.success}</h2> : null}
                {dadosCadastro.error !== null ? <h3 onClick={refreshPage}>{dadosCadastro.error}</h3>: null}
             </form> 
        </CadastroLogin>

    )
}
