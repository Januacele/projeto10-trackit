import { useContext } from "react";
import styled from "styled-components";


import Header from "../Header/Header";
import TokenContext from "../../contexts/TokenContext";


export default function TelaHabitos() {


    const { token } = useContext(TokenContext);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }


    return (
        <>
            <Header />
            <Div>
                <header>
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </header>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Div>
        </>
    )
}

const Div = styled.div`
    margin-top: 30px;
    font-family: 'Lexend Deca';
    padding: 22px 18px 110px 18px;
    height: auto;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }

    header h1 {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    header button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border-style: none;
        color: white;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
    }

    p {
        color: #666666;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }


    
`;