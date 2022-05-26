import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaLogin from './TelaInicial/TelaLogin';
import TelaCadastro from './TelaInicial/TelaCadastro';
import TelaHabitos from './TelaHabitos/TelaHabitos';
import TelaHoje from './TelaHoje/TelaHoje';
import TelaHistorico from './TelaHistorico/TelaHistorico';

export default function App(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TelaLogin />} />
                    <Route path='/cadastro' element={<TelaCadastro />} />
                    <Route path='/habitos' element={<TelaHabitos />} />
                    <Route path='/hoje' element={<TelaHoje />} />
                    <Route path='/historico' element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter>
        )
}
