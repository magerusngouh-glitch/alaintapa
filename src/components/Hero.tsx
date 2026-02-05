import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>XMEV.AI</h1>
                    <p className="hero-subtitle">Investissement Crypto Automatisé par Intelligence Artificielle</p>
                    <p className="hero-tagline">
                        Rejoignez la plateforme d'arbitrage MEV avec le code privilège d'Alain Tapa,
                        investisseur camerounais. Générez des revenus passifs 24/7.
                    </p>
                    <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="https://xmev.ai?inviteCode=2CZHNWWA" target="_blank" rel="noopener noreferrer" className="cta-button">Rejoindre XMEV.AI</a>
                        <a href="#xmev" className="cta-secondary" style={{
                            display: 'inline-block',
                            padding: '1.2rem 3rem',
                            border: '2px solid white',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 700,
                            borderRadius: '50px',
                            transition: 'all 0.3s ease'
                        }}>Découvrir la Plateforme</a>
                    </div>
                </motion.div>
            </div>
            <div className="scroll-indicator">
                <ArrowRight size={30} style={{ transform: 'rotate(90deg)' }} />
            </div>
        </section>
    );
};

export default Hero;
