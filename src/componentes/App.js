import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import TelaLogin from './TelaInicial/TelaLogin';
import TelaCadastro from './TelaInicial/TelaCadastro';
import TelaHabitos from './TelaHabitos/TelaHabitos';
import TelaHoje from './TelaHoje/TelaHoje';
import TelaHistorico from './TelaHistorico/TelaHistorico';
import NameContext from '../contexts/NameContext';
import TokenContext from '../contexts/TokenContext';
import UserImageContext from '../contexts/UserImageContext';

export default function App() {
    const [name, setName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [token, setToken] = useState("");

    return (
        <div>
            <TokenContext.Provider value={{ token, setToken }}>
                <NameContext.Provider value={{ name, setName }}>
                    <UserImageContext.Provider value={{ userImage, setUserImage }}>

                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<TelaLogin />}></Route>
                                <Route path="/cadastro" element={<TelaCadastro />}></Route>
                                <Route path="/habitos" element={<TelaHabitos />}></Route>
                                <Route path="/hoje" element={<TelaHoje />}></Route>
                                <Route path="/historico" element={<TelaHistorico />}></Route>
                            </Routes>
                        </BrowserRouter>

                    </UserImageContext.Provider>
                </NameContext.Provider>
            </TokenContext.Provider>
        </div >
    );
}