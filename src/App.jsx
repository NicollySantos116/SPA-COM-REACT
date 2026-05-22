import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Servicos from './pages/Servicos/Servicos';
import Contato from './pages/Contato/Contato';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/sobre" element={<Sobre />} />

                <Route path="/servicos" element={<Servicos />} />

                <Route path="/contato" element={<Contato />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
