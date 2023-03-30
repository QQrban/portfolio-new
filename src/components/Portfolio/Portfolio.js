import { motion } from 'framer-motion';
import PortfolioGrid from './PortfolioGrid';

const Portfolio = () => {

    return (
        <section className="portfolio-page">
            <motion.div
                className="home-motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    default: {
                        delay: 0.1,
                        duration: 1.2,
                    },
                }}
            >
                <div className="portfolio-page-header page-header">
                    <h1>
                        my <span>portfolio</span>
                    </h1>
                    <span className="portfolio-page-title title-bg">projects</span>
                </div>

                <div className="portfolio-page-container container">
                    <h3>
                        As a Junior Frontend Developer, my portfolio may not be extensive,
                        but I am constantly working on updating it. With every project I
                        complete, I strive to improve my skills and showcase my abilities to
                        the fullest. While I may not have as many projects as some more
                        experienced developers, I am confident in the quality of the work I
                        have produced and the potential that lies ahead.
                    </h3>

                    <PortfolioGrid />
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
