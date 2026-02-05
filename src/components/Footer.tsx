import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h4>XMEV.AI</h4>
                    <p>Plateforme d'investissement crypto automatisée par intelligence artificielle. Arbitrage MEV pour générer des revenus passifs.</p>
                    <p style={{ marginTop: '1rem', fontStyle: italic, opacity: 0.7 }}>Code parrain : Alain Tapa (2CZHNWWA)</p>
                </div>

                <div className="footer-section">
                    <h4>Liens Rapides</h4>
                    <a href="#home">Accueil</a>
                    <a href="#investir">Investir</a>
                    <a href="#xmev">XMEV AI</a>
                    <a href="https://xmev.ai?inviteCode=2CZHNWWA" target="_blank" rel="noopener noreferrer">S'inscrire</a>
                    <a href="#comment">Comment ça marche</a>
                    <a href="#faq">FAQ</a>
                </div>

                <div className="footer-section">
                    <h4>Légal</h4>
                    <a href="#transparence">Transparence</a>
                    <a href="#mentions">Mentions Légales</a>
                    <a href="#confidentialite">Confidentialité</a>
                    <a href="#cgv">Conditions Générales</a>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <a href="mailto:contact@alaininvest.site">contact@alaininvest.site</a>
                    <a href="tel:+237651117697">+237 651 117 697</a>
                    <div className="social-links" style={{ marginTop: '1rem' }}>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; 2026 XMEV.AI. Page de prospection d'Alain Tapa, investisseur indépendant.</p>
            </div>
        </footer>
    );
};

const italic = "italic";

export default Footer;
