import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="container">
            <h1>404</h1>

            <p>Página não encontrada.</p>

            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </section>
    );
}

export default NotFound;
