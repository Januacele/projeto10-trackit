import styled from "styled-components";

import Header from "../Header/Header";
import Menu from "../TelaHabitos/Menu";


export default function TelaHistorico() {    

    return (
        <>
            <Header />
            <Div>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Div>
            <Menu />
        </>
    );
}

const Div = styled.div`

    width: 100%;
    height: 100vh;
    font-family: 'Lexend Deca';
    padding: 28px 20px 0px 20px;
   

    h1 {
        margin-top: 70px;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

`;