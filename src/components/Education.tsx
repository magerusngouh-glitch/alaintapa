import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const steps = [
        {
            number: "1",
            title: "Inscription",
            desc: "Créez votre compte investisseur en quelques clics. Simple et sécurisé."
        },
        {
            number: "2",
            title: "Dépôt",
            desc: "Alimentez votre portefeuille via Mobile Money (Orange, MTN, Wave) ou Crypto."
        },
        {
            number: "3",
            title: "Activation XMEV",
            desc: "Nos algorithmes d'IA commencent à analyser les opportunités de marché pour vous."
        },
        {
            number: "4",
            title: "Génération",
            desc: "Les profits sont générés automatiquement par arbitrage et exécution on-chain."
        },
        {
            number: "5",
            title: "Retrait",
            desc: "Récupérez vos gains à tout moment sur votre compte Mobile Money préféré."
        }
    ];

    return (
        <section id="comment" className="how-it-works">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Comment ça marche ?
                </motion.h2>

                <div className="steps">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="step"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
