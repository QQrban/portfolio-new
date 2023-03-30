import { motion } from 'framer-motion';
import Education from './Education';
import Specialized from './Specialized';
import Recommendations from './Recommendations';

const About = () => {

    return (
        <main className="about-page">
            <div className="about-page-header page-header">
                <h1>
                    about <span>me</span>
                </h1>
                <span className="title-bg">Resume</span>
            </div>
            <div className="about-page-container container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        default: {
                            delay: 0.1,
                            duration: 0.9,
                        },
                    }}
                >
                    <section className="about-page-personal">
                        <div className="personal-info">
                            <h4>personal infos</h4>
                            <div className="personal-info-block">
                                <div className="personal-info-left info-text">
                                    <p>
                                        First Name: <span>Kurban</span>
                                    </p>
                                    <p>
                                        Age: <span>29 Years</span>
                                    </p>
                                    <p>
                                        Phone: <span>+37258444846</span>
                                    </p>
                                    <p>
                                        Email: <span>kurban.ramazanovv@gmail.com</span>
                                    </p>
                                </div>
                                <div className="personal-info-right info-text">
                                    <p>
                                        Last Name: <span>Ramazanov</span>
                                    </p>
                                    <p>
                                        Location: <span>Estonia, Tallinn</span>
                                    </p>
                                    <p>
                                        Telegram: <span>@kurbanramazanovv</span>
                                    </p>
                                    <p>
                                        Languages: <span>English, Estonian, Russian</span>
                                    </p>
                                </div>
                            </div>
                            <a
                                className="watch-cv"
                                href="https://www.cvkeskus.ee/cvs.php?op=view&cv_id=2406163/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Watch CV
                            </a>
                        </div>
                        <Specialized />
                    </section>
                </motion.div>
                <Education />
                <Recommendations />
            </div>
        </main>
    );
};

export default About;
