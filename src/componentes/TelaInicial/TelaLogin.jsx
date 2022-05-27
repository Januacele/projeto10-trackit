import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import LogoTelaInicial from '../../assets/img/logo.svg';
import CadastroLogin from '../../assets/estiloTelasJs/CadastroLogin';


export default function TelaLogin({ setInfo }) {

    //LOGIC

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
    const [dadosLogin, setDadosLogin] = useState({ email: '', senha: '', error: undefined })
    const navigate = useNavigate();

function HandleSubmit(e) {
    e.preventDefault()

    const usuario = { email: dadosLogin.email, password: dadosLogin.senha }

    axios.post(URL, usuario)
        .then(res => {
            console.log(res)
            setDadosLogin({ ...dadosLogin, error: 'success' })
            setTimeout(() => {
                navigate('/habitos')
                setInfo({ token: res.dadosLogin.token, started: true, foto: res.dadosLogin.image })               
            }, 1500);

        }).catch(err => {
            setDadosLogin({ ...dadosLogin, error: 'email ou senha inválidos' })
            console.log(err.response)
        })
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

            {dadosLogin.error !== undefined && dadosLogin.error !== 'success' ? <h1>{dadosLogin.error}</h1> : null}
            <button onClick={HandleSubmit}>{dadosLogin.error === 'success' ? <ThreeDots color='#FFFFFF' height={13} width={50} /> : 'Entrar'}</button>

            <Link to={`/cadastro`}>
                <p> Não tem uma conta? Cadastre-se! </p>
            </Link>

        </form>
    </CadastroLogin>
);

}
