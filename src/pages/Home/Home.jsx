import Card from '../../components/Card';

function Home() {
    const cards = [
        {
            titulo: 'Desenvolvimento Web',
            texto: 'Criamos sites modernos.',
        },
        {
            titulo: 'Apps Mobile',
            texto: 'Aplicativos Android e iOS.',
        },
        {
            titulo: 'UI/UX',
            texto: 'Interfaces bonitas e intuitivas.',
        },
    ];

    return (
        <section className="container">
            <h1>Bem-vindo à TechWave</h1>

            <p>Soluções digitais para transformar seu negócio.</p>

            <div className="cards">
                {cards.map((card, index) => (
                    <Card key={index} titulo={card.titulo} texto={card.texto} />
                ))}
            </div>
        </section>
    );
}

export default Home;
