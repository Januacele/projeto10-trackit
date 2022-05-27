import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import TelaLogin from './TelaInicial/TelaLogin';
import TelaCadastro from './TelaInicial/TelaCadastro';
import TelaHabitos from './TelaHabitos/TelaHabitos';
import TelaHoje from './TelaHoje/TelaHoje';
import TelaHistorico from './TelaHistorico/TelaHistorico';
import Header from './Header/Header';

export default function App(){

    const [info, setInfo] = useState({
        token: null,
        started: true,
        image: undefined
    })

        return (
            <BrowserRouter>
                {info.started ? <Header userimg={info.image} /> : null}
                    <Routes>
                            <Route path='/' element={<TelaLogin setInfo= {(info) => setInfo(info)} />} />
                            <Route path='/cadastro' element={<TelaCadastro />} />
                            <Route path='/habitos' element={<TelaHabitos />} />
                            <Route path='/hoje' element={<TelaHoje />} />
                            <Route path='/historico' element={<TelaHistorico />} />
                        </Routes>              
            </BrowserRouter>
        )
}
