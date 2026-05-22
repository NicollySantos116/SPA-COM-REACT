function Contato() {
    return (
        <section className="container">
            <h1>Contato</h1>

            <p>Email: contato@techwave.com</p>
            <p>Telefone: (11) 99999-9999</p>

            <form className="formulario">
                <input type="text" placeholder="Seu nome" />

                <input type="email" placeholder="Seu email" />

                <textarea placeholder="Digite sua mensagem"></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contato;
