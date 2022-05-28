import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import LogoTelaInicial from '../../assets/img/logo.svg';
import CadastroLogin from './estiloCadastroLogin';
import UserImageContext from '../../contexts/UserImageContext';
import NameContext from '../../contexts/NameContext';
import TokenContext from '../../contexts/TokenContext';


export default function TelaLogin() {

    //LOGIC
    const { setToken } = useContext(TokenContext);
    const { setUserImage } = useContext(UserImageContext);
    const { setName } = useContext(NameContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;


    function fazerLogin(event) {
        event.preventDefault()
        setCarregando(true);

        const usuario = { 
            email: email, 
            password: senha }

        axios.post(URL, usuario)
            .then((response) => {
                const { data } = response;
                console.log(data);
                setToken(data.token);
                setName(data.name);
                setUserImage(data.image);
                mudarPagina();
                
                })
            .catch(err => {
                window.alert('email ou senha inválidos');
                console.log(err.status)
                setCarregando(false);
            });
    }

    let navigate = useNavigate();

    function mudarPagina(){
        navigate("/habitos");
    }

//UI

return (
    <CadastroLogin>
        <form onSubmit={fazerLogin}>

            <img src={LogoTelaInicial} alt="Logo-trackit" />

            <input
                type="email"
                placeholder="email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="senha"
                value={senha}
                required
                onChange={e => setSenha(e.target.value)}
            />
        </form>

            <button onClick={fazerLogin}>                
                Entrar
            </button>

            <Link to={`/cadastro`}>
                <p> Não tem uma conta? Cadastre-se! </p>
            </Link>
        
    </CadastroLogin>
);

}
