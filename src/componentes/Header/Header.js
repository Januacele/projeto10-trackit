import styled from "styled-components";

import TrackIt from '../../assets/img/TrackIt.svg';

export default function Header({userimg}){
    return (
        <ContainerHeader>
            <img className="logo" src={TrackIt} alt="TrackIt"/>
            <img src={userimg} alt='user' />
        </ContainerHeader>
    )
}

const ContainerHeader = styled.form`
    postion: relative;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
    img {
        width: 60px;
        height: 60px;
        background: url(userimg);
        border-radius: 100px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .logo {
        width: 100px;
        margin-left: 20px;
    }
`
