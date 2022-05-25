import styled from 'styled-components';

import LogoTelaInicial from '../../assets/img/LogoTelaInicial.jpeg';


export default function TelaLogin(){
    
    return (
        <ContainerLogin>
            <img src = {LogoTelaInicial} alt = "Logo-Trackit" />
        </ContainerLogin>
    );


}

const ContainerLogin = styled.div`
    width: 100vw; 
    height: 100vh;
    background-color: #e5e5e5;        

        img{
            width: 180px;
            height: 178.38px;
            left: 97px;
            top: 68px;
        }
`




