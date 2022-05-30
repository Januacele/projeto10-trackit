import styled from "styled-components";
import { useContext } from "react";

import UserImageContext from "../../contexts/UserImageContext";
import TrackIt from '../../assets/img/TrackIt.svg';

export default function Header(){

    const { userImage } = useContext(UserImageContext);

    return (
        <ContainerHeader>
            <img className="logo" src={TrackIt} alt="TrackIt"/>

            <div className="user-infos-container">
                <img className="user-image" src={userImage} alt="Sua foto" />
            </div>

        </ContainerHeader>
    )
}

const ContainerHeader = styled.form`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    height: 70px;
    width: 100%;
    padding-left: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;

    .logo {
        width: 97px;
        height: auto;
        margin-left: 18px;
    }

    .user-infos-container {
        display: flex;
        align-items: center;
        margin-right: 18px;

        
        img {
            width: 51px;
            height: 51px;
            border-radius: 100px;
            margin-left: 20px;
            background-image: inherit;
        }
    }

    

    
   
`
