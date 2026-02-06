import React from 'react';
import { motion } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
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
                    <span className="badge badge-accent">Présentation Vidéo</span>
                    <h2 className="section-title">Découvrez XMEV.AI en Action</h2>
                    <p className="section-description">
                        Regardez cette vidéo pour comprendre comment l'intelligence artificielle révolutionne l'investissement crypto et comment vous pouvez en bénéficier.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="video-container glass-card"
                >
                    <div className="iframe-wrapper">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/AZFmgojP1WI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="video-info">
                        <h3>Comprendre le MEV Arbitrage</h3>
                        <p>
                            Cette présentation vous explique les fondements techniques et les opportunités de revenus passifs offertes par la plateforme XMEV.AI.
                        </p>
                        <div className="video-cta">
                            <a href="https://xmev.ai?inviteCode=2CZHNWWA" target="_blank" rel="noopener noreferrer" className="cta-button">
                                Commencer maintenant
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
