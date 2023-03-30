import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import FormText from './FormText';

const Contact = () => {

    return (
        <section className="contact-page">
            <motion.div
                className="home-motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    default: {
                        delay: 0.1,
                        duration: 0.5,
                    },
                }}
            >
                <div className="contact-page-header page-header">
                    <h1>
                        Write <span>me</span>
                    </h1>
                    <span className="contact-page-title title-bg">Contact</span>
                </div>
            </motion.div>
            <motion.div
                className="home-motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    default: {
                        delay: 0.6,
                        duration: 0.9,
                    },
                }}
            >
                <div className="contact-page-content">
                    <FormText />
                    <div className="contact-page-info">
                        <div className="contact-page-phone contact-page-item">
                            <FiPhoneCall size={55} className="contact-page-logo" />
                            <div className="contact-page-text">
                                <h6>Phone</h6>
                                <a href="tel:+37258444846">(+372)5844-4846</a>
                            </div>
                        </div>
                        <div className="contact-page-email contact-page-item">
                            <AiOutlineMail size={55} className="contact-page-logo" />
                            <div className="contact-page-text">
                                <h6>E-Mail</h6>
                                <a href="mailto:kurban.ramazanovv@gmail.com">
                                    kurban.ramazanovv@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
