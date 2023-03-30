import { motion } from 'framer-motion';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';

const Home = () => {

    const socialLinkz = [
        {
            icon: AiOutlineInstagram,
            href: 'https://www.instagram.com/krbn.rmznv/',
        },
        {
            icon: FiGithub,
            href: 'https://github.com/QQrban',
        },
        {
            icon: BsFacebook,
            href: 'https://www.facebook.com/profile.php?id=100006241362203',
        },
        {
            icon: SlSocialLinkedin,
            href: 'https://www.linkedin.com/in/kurban-ramazanov-2b50b026b/',
        },
    ];

    return (
        <main className="home-page">
            <motion.div
                className="home-motion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    default: {
                        delay: 0.1,
                        duration: 0.9,
                    },
                }}
            >
                <div className="home-page-bg"></div>
                <div className="home-page-photo"></div>
                <div className="home-page-content">
                    <h1>
                        my name is <span>kurban ramazanov</span>
                    </h1>
                    <p>
                        Creative Junior Front-End developer. Passionate about learning new
                        JavaScript and React technologies. I am excited about the prospect
                        of contributing to projects and solving complex problems with the
                        guidance and support of senior developers.
                    </p>
                    <div className="home-page-social">
                        {socialLinkz.map((link, i) => (
                            <a key={i} href={link.href} target="_blank" rel="noreferrer">
                                <link.icon className="social-link" size={24} />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default Home;
