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
            id: 'comment creer un compte smart.mp4',
            title: 'Étape 1 : Créer son compte',
            description: 'Guide complet pour créer et configurer votre compte Smart MEV en quelques minutes.'
        },
        {
            id: 'comment activer votre compte mev.mp4',
            title: 'Étape 2 : Activer le Bot',
            description: 'Apprenez comment activer votre robot d\'arbitrage pour lancer vos premiers profits.'
        },
        {
            id: 'ACTIVER GOOGLE AUTH.mp4',
            title: 'Sécurité : Activer Google Authy',
            description: 'Sécurisez votre compte et vos retraits en activant la double authentification (2FA).'
        },
        {
            id: 'retrait instantanee de 1000$.mp4',
            title: 'Preuve de Retrait (1000$)',
            description: 'Démonstration de la rapidité et de la fiabilité des retraits instantanés.'
        },
        {
            id: 'retrait de 7000$.mp4',
            title: 'Retrait Réussi (7000$)',
            description: 'Preuve de paiement de gains importants effectués sur la plateforme XMEV.'
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
                                {video.id.endsWith('.mp4') ? (
                                    <video
                                        src={`/videos/${video.id}`}
                                        controls
                                        className="local-video"
                                        poster="/assets/video-placeholder.jpg"
                                    >
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                ) : (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                )}
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
