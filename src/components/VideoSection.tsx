import { motion } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
    const videos = [
        {
            id: 'SWcKafD--Ck',
            title: 'Présentation XMEV.AI',
            description: 'Découvrez les bases de la plateforme et comment commencer à générer des revenus.'
        },
        {
            id: 'wJ3ms3JHLEQ',
            title: 'Stratégie de Trading AI',
            description: 'Comment notre intelligence artificielle optimise les opportunités de MEV en temps réel.'
        },
        {
            id: 'csTTGkZd7mM',
            title: 'Preuves de Retrait & Gains',
            description: 'Témoignages et démonstration de la transparence des profits générés.'
        },
        {
            id: 'AgJ13hLV9wg',
            title: 'Analyse & Résultats XMEV',
            description: 'Une analyse détaillée des performances récentes et des résultats obtenus par le bot.'
        }
    ];

    return (
        <section id="videos" className="video-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <span className="badge badge-accent">Vidéothèque XMEV</span>
                    <h2 className="section-title">Comprendre XMEV.AI en détail</h2>
                    <p className="section-description">
                        Plongez dans l'univers de l'arbitrage MEV à travers nos guides vidéos et démonstrations en direct.
                    </p>
                </motion.div>

                <div className="video-grid">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="video-item glass-card"
                        >
                            <div className="iframe-wrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-item-info">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-xl"
                >
                    <a href="https://xmev.ai?inviteCode=2CZHNWWA" target="_blank" rel="noopener noreferrer" className="cta-button">
                        Ouvrir mon compte maintenant
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
