function Servicos() {
    const servicos = [
        {
            titulo: 'Sites Responsivos',
            descricao: 'Sites adaptados para celular.',
        },
        {
            titulo: 'E-commerce',
            descricao: 'Lojas virtuais modernas.',
        },
        {
            titulo: 'SEO',
            descricao: 'Melhore seu posicionamento no Google.',
        },
        {
            titulo: 'Suporte Técnico',
            descricao: 'Atendimento especializado.',
        },
    ];

    return (
        <section className="container">
            <h1>Nossos Serviços</h1>

            <div className="cards">
                {servicos.map((servico, index) => (
                    <div className="card" key={index}>
                        <h3>{servico.titulo}</h3>
                        <p>{servico.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Servicos;
