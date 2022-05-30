import styled from 'styled-components';

const CadastroLogin = styled.form`
width: 100%;
height: 100vh;  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: start;
background-color: #FFFFFF;

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
    a {
        margin-top: 5%;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        text-decoration-line: underline;
        color: #52B6FF;
    }

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
            }

    h1 {
        margin-top: 2%;
        margin-bottom: 2%;
        color: red;
        font-family: 'Lexend Deca';
        font-size: 16px;
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


export default CadastroLogin