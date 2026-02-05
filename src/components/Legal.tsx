import { motion } from 'framer-motion';
import './Legal.css';

const Legal = () => {
    return (
        <section id="transparence" className="impact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Transparence & Sécurité
                </motion.h2>

                <div className="impact-highlight">
                    <span className="impact-number">Audit Continu</span>
                    Vérifiez nos performances on-chain 24/7.
                </div>

                <div className="impact-highlight">
                    <span className="impact-number">Sécurité XMEV</span>
                    Infrastructure protégée contre les attaques MEV.
                </div>

                <div className="impact-highlight">
                    <span className="impact-number">Solidarité</span>
                    Une communauté d'entraide pour la réussite de tous.
                </div>

                <p className="legal-disclaimer">
                    Cette page est gérée par Alain Tapa, investisseur indépendant et parrain de XMEV.AI.
                    XMEV.AI est une plateforme d'investissement crypto utilisant l'intelligence artificielle
                    pour l'arbitrage MEV. L'investissement en crypto-monnaies comporte des risques.
                    Investissez de manière responsable et ne misez que ce que vous pouvez vous permettre de perdre.
                </p>
            </div>
        </section>
    );
};

export default Legal;
