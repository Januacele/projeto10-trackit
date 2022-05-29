import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import styled from "styled-components";

import TelaLogin from './TelaInicial/TelaLogin';
import TelaCadastro from './TelaInicial/TelaCadastro';
import TelaHabitos from './TelaHabitos/TelaHabitos';
import TelaHoje from './TelaHoje/TelaHoje';
import TelaHistorico from './TelaHistorico/TelaHistorico';
import NameContext from '../contexts/NameContext';
import TokenContext from '../contexts/TokenContext';
import UserImage from '../contexts/UserImageContext';
import TodayHabitsContext from '../contexts/TodayHabitsContext';
import ProgressContext from '../contexts/ProgressContext';

export default function App() {
    const [name, setName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [token, setToken] = useState("");
    const [todayHabits, setTodayHabits] = useState(null);
    const [progress, setProgress] = useState(0);

    return (
        <div>
            <TokenContext.Provider value={{ token, setToken }}>
                <NameContext.Provider value={{ name, setName }}>
                    <UserImage.Provider value={{ userImage, setUserImage }}>
                        <TodayHabitsContext.Provider value={{ todayHabits, setTodayHabits }}>
                            <ProgressContext.Provider value={{ progress, setProgress }}>

                                <BrowserRouter>
                                    <Routes>
                                        <Route path="/" element={<TelaLogin />}></Route>
                                        <Route path="/cadastro" element={<TelaCadastro />}></Route>
                                        <Route path="/habitos" element={<TelaHabitos />}></Route>
                                        <Route path="/hoje" element={<TelaHoje />}></Route>
                                        <Route path="/historico" element={<TelaHistorico />}></Route>
                                    </Routes>
                                </BrowserRouter>

                            </ProgressContext.Provider>
                        </TodayHabitsContext.Provider>
                    </UserImage.Provider>
                </NameContext.Provider>
            </TokenContext.Provider>
        </div >
    );
}

const Div = styled.div`
    background-color: #F2F2F2;
`;