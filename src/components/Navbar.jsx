import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h2>TechWave</h2>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/servicos">Serviços</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
