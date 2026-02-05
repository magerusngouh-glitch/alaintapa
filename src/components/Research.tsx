import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import alainPhoto from '../assets/alain.jpg';
import './Research.css';

const Research = () => {
    return (
        <section id="xmev" className="xmev-explanation-section">
            <div className="container">
                <div className="xmev-grid">
                    <motion.div
                        className="xmev-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', color: 'var(--primary)' }}>C'est quoi XMEV.AI ?</h2>
                        <p className="explanation-text">
                            <strong>XMEV.AI</strong> est un moteur d'intelligence artificielle de pointe conçu pour capturer la
                            <em> Maximal Extractible Value</em> (MEV) sur la blockchain.
                        </p>
                        <div className="feature-list">
                            <div className="feature-item">
                                <h4>🤖 Scan Intelligent</h4>
                                <p>Analyse des milliers de transactions par seconde pour identifier des inefficacités de prix.</p>
                            </div>
                            <div className="feature-item">
                                <h4>⚡ Exécution Éclair</h4>
                                <p>Exécute des arbitrages atomiques en millisecondes avant le reste du marché.</p>
                            </div>
                            <div className="feature-item">
                                <h4>🛡️ Sécurité Totale</h4>
                                <p>Utilise des mempools privés pour éviter d'être soi-même victime d'attaques.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="alain-story-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="alain-photo-wrapper">
                            <img src={alainPhoto} alt="Alain - Délégué Médical" className="alain-photo" />
                            <div className="alain-badge">Délégué Médical</div>
                        </div>
                        <div className="story-content">
                            <h3>Comment Alain Génère des Revenus Passifs</h3>
                            <p className="quote">
                                "En tant que délégué médical, mes journées sont chargées entre les cliniques et les pharmacies.
                                Je n'ai pas le temps de surveiller les graphiques toute la journée."
                            </p>
                            <p className="story-text">
                                Alain a découvert <strong>XMEV.AI</strong>, une plateforme d'investissement crypto qui utilise
                                l'intelligence artificielle pour faire de l'arbitrage MEV automatiquement.
                                Aujourd'hui, il génère des revenus passifs stables qui complètent son salaire,
                                tout en continuant d'exceller dans sa carrière médicale.
                            </p>
                            <div className="result-tag">Revenus passifs automatiques 24/7</div>
                            <div style={{ marginTop: '2.5rem' }}>
                                <a href="https://xmev.ai?inviteCode=2CZHNWWA" target="_blank" rel="noopener noreferrer" className="result-tag" style={{ background: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    S'inscrire comme Alain <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Research;
