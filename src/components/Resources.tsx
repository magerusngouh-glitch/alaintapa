import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import './Resources.css';

const Resources = () => {
    const documents = [
        {
            title: "Présentation XMEV 2026",
            filename: "SMARTS MEV BOT 2026 PPT_FR.pdf",
            size: "2.4 MB",
            desc: "Document complet présentant la vision 2026 et les opportunités du marché.",
            type: "PDF - Français"
        },
        {
            title: "Smart MEV Bot 3.0",
            filename: "SMARTS MEV BOT 3.0 2026.pdf",
            size: "16.4 MB",
            desc: "Guide technique approfondi sur la version 3.0 de notre bot d'arbitrage AI.",
            type: "PDF - Version 3.0"
        },
        {
            title: "Introduction XMEV AI",
            filename: "SMARTS MEV BOT INTRO PPT 2026.pdf",
            size: "2.2 MB",
            desc: "Présentation simplifiée pour découvrir rapidement le concept et les gains.",
            type: "PDF - Intro"
        }
    ];

    return (
        <section id="ressources" className="resources-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-header text-center"
                >
                    <span className="badge badge-accent">Espace Documentation</span>
                    <h2 className="section-title">Ressources & Présentations</h2>
                    <p className="section-description">
                        Téléchargez nos supports officiels pour approfondir vos connaissances sur la technologie XMEV.AI et partager l'opportunité.
                    </p>
                </motion.div>

                <div className="resources-grid">
                    {documents.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="resource-card glass-card"
                        >
                            <div className="resource-icon-wrapper">
                                <FileText size={32} className="resource-icon" />
                                <span className="resource-type">{doc.type}</span>
                            </div>

                            <div className="resource-content">
                                <h3>{doc.title}</h3>
                                <p>{doc.desc}</p>
                                <div className="resource-meta">
                                    <span className="file-size">{doc.size}</span>
                                </div>
                            </div>

                            <div className="resource-actions">
                                <a
                                    href={`/${doc.filename}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-link outline"
                                >
                                    <ExternalLink size={18} />
                                    Lire
                                </a>
                                <a
                                    href={`/${doc.filename}`}
                                    download={doc.filename}
                                    className="action-link primary"
                                >
                                    <Download size={18} />
                                    Télécharger
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
