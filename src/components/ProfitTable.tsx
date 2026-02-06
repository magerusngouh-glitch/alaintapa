import { motion } from 'framer-motion';
import './ProfitTable.css';

const ProfitTable = () => {
    const data = [
        { cpi: 100, daily: '101', weekly: '107.21', monthly: '134.78', months3: '270.48', months6: '599.58', year1: '3,740.93' },
        { cpi: 200, daily: '202', weekly: '214.43', monthly: '269.57', months3: '540.96', months6: '1,199.16', year1: '7,481.87' },
        { cpi: 300, daily: '303', weekly: '321.64', monthly: '404.35', months3: '811.44', months6: '1,798.74', year1: '11,222.80' },
        { cpi: 500, daily: '505', weekly: '536.07', monthly: '673.92', months3: '1,352.41', months6: '2,997.90', year1: '18,704.67' },
        { cpi: 1000, daily: '1,010', weekly: '1,072.14', monthly: '1,347.85', months3: '2,704.81', months6: '5,995.80', year1: '37,409.34' },
        { cpi: 2000, daily: '2,020', weekly: '2,144.27', monthly: '2,695.70', months3: '5,409.63', months6: '11,991.60', year1: '74,818.68' },
        { cpi: 5000, daily: '5,050', weekly: '5,360.68', monthly: '6,739.24', months3: '13,524.07', months6: '29,979.01', year1: '187,046.70' },
        { cpi: 10000, daily: '10,100', weekly: '10,721.35', monthly: '13,478.49', months3: '27,048.14', months6: '59,958.02', year1: '374,093.41' },
        { cpi: 20000, daily: '20,200', weekly: '21,442.71', monthly: '26,965.98', months3: '54,096.28', months6: '119,916.04', year1: '748,186.82' },
        { cpi: 50000, daily: '50,500', weekly: '53,606.77', monthly: '67,392.45', months3: '135,240.69', months6: '299,790.10', year1: '1,870,467.05' },
        { cpi: 100000, daily: '101,000', weekly: '107,213.54', monthly: '134,784.89', months3: '270,481.38', months6: '599,580.20', year1: '3,740,934.09' },
    ];

    return (
        <section id="table" className="profit-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <span className="badge badge-success">Simulateur de Gains</span>
                    <h2 className="section-title">La Puissance des Intérêts Composés</h2>
                    <p className="section-description">
                        Estimation basée sur un rendement de 1% par jour avec réinvestissement automatique.
                        Découvrez comment votre capital peut croître exponentiellement.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="table-wrapper glass-card"
                >
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Investissement (USDT)</th>
                                    <th>Jour 1 <br /><span>(1%)</span></th>
                                    <th>1 Semaine <br /><span>(7.21%)</span></th>
                                    <th>1 Mois <br /><span>(34.78%)</span></th>
                                    <th>3 Mois <br /><span>(170.48%)</span></th>
                                    <th>6 Mois <br /><span>(499.58%)</span></th>
                                    <th>1 An <br /><span>(3640.93%)</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        <td className="cpi-col">${row.cpi.toLocaleString()}</td>
                                        <td>${row.daily}</td>
                                        <td>${row.weekly}</td>
                                        <td>${row.monthly}</td>
                                        <td>${row.months3}</td>
                                        <td>${row.months6}</td>
                                        <td className="year-col">${row.year1}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="table-disclaimer">
                        * Ce tableau est basé sur une estimation composée de 1% quotidien. Les rendements réels varient entre 0,3% et 2%, les résultats réels peuvent donc différer. À titre de référence seulement.
                    </div>
                </motion.div>

                <div className="text-center mt-xl">
                    <a href="https://xmev.ai?inviteCode=2CZHNWWA" target="_blank" rel="noopener noreferrer" className="cta-button">
                        Commencer mon investissement
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProfitTable;
