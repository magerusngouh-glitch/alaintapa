import { motion } from 'framer-motion';
import './Access.css';

const Access = () => {
    return (
        <section id="access" className="final-cta">
            <div className="final-cta-content container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Rejoignez XMEV.AI
                </motion.h2>
                <p style={{ fontSize: '1.4rem', margin: '2rem auto 3rem', maxWidth: '700px' }}>
                    Commencez à faire fructifier votre capital avec XMEV.AI, la plateforme d'arbitrage MEV automatisée par IA.
                    Utilisez le code privilège d'Alain pour bénéficier d'un accompagnement personnalisé.
                </p>

                <motion.div
                    className="registration-direct"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '4rem 2rem',
                        borderRadius: '24px',
                        border: '1px solid var(--primary)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'Syne, sans-serif' }}>Prêt à transformer votre capital ?</h3>
                    <p style={{ marginBottom: '2.5rem', opacity: 0.8, fontSize: '1.1rem' }}>
                        Cliquez ci-dessous pour rejoindre XMEV.AI avec le code privilège d'Alain Tapa (2CZHNWWA).
                    </p>
                    <a
                        href="https://xmev.ai?inviteCode=2CZHNWWA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        style={{
                            fontSize: '1.4rem',
                            padding: '1.5rem 4rem',
                            display: 'inline-block',
                            background: 'var(--primary)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: 800,
                            boxShadow: '0 10px 25px rgba(216, 67, 21, 0.4)'
                        }}
                    >
                        S'inscrire sur XMEV.AI
                    </a>
                </motion.div>

                <p style={{ marginTop: '3rem', opacity: 0.8, fontSize: '1.1rem' }}>
                    ✅ Inscription gratuite • ✅ Accès XMEV AI • ✅ Retraits Instantanés
                </p>
            </div>
        </section>
    );
};

export default Access;
