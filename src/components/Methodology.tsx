import { motion } from 'framer-motion';
import './Methodology.css';

const Methodology = () => {
    const stats = [
        {
            number: "95%",
            label: "Échecs en Trading Solo",
            desc: "La majorité des investisseurs individuels perdent leur capital face aux algorithmes institutionnels par manque d'outils adaptés."
        },
        {
            number: "XMEV AI",
            label: "Technologie de Pointe",
            desc: "Notre moteur MEV identifie les inefficacités de marché en millisecondes pour sécuriser vos positions."
        },
        {
            number: "100%",
            label: "Transparence On-chain",
            desc: "Chaque transaction est vérifiable sur la blockchain. Zéro opacité, totale confiance."
        },
        {
            number: "Cameroun",
            label: "Hub Technologique",
            desc: "Nous bâtissons le futur de la finance décentralisée depuis l'Afrique, pour le monde."
        }
    ];

    return (
        <section id="investir" className="crisis-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    La Réalité de l'Investissement Crypto
                </motion.h2>
                <p className="section-intro">
                    Le monde de la finance change. Ne restez pas spectateur des opportunités qui vous échappent.
                    XMEV.AI vous donne les clés de l'économie on-chain avec l'arbitrage MEV automatisé.
                </p>

                <div className="crisis-stats">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                            <p className="stat-description">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
