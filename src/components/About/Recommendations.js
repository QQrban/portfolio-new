import { useRef } from 'react';
import Slider from 'react-slick';
import { useInView } from 'framer-motion';
import maksim from '../../img/photos/maksim.jpg';
import rasim from '../../img/photos/rasim.jpg';
import oleg from '../../img/photos/oleg.png';
import roman from '../../img/photos/roman.png';

const Recommendations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 15000,
    };

    const recz = [
        {
            name: 'Maksim Kolodijev',
            who: 'Head of IT School',
            comment: `"Kurban's dedication to learning and growing as a frontend developer is truly inspiring. He consistently strives to exceed expectations and deliver high-quality work, making him a valuable asset to any team."`,
            photo: maksim,
        },
        {
            name: 'Oleg Stoyanov',
            who: 'Senior Frontend Developer',
            comment: `"I can confidently say that he is one of the most motivated and enthusiastic students I have ever had the pleasure of teaching. His passion for web development is infectious, and he has a keen eye for detail that sets him apart from his peers."`,
            photo: oleg,
        },
        {
            name: 'Roman Kutselepa',
            who: 'Fullstack Developer.',
            comment: `"He is a good and passionate person with a creative eye for design and a strong foundation in HTML, CSS, and JavaScript. I see Kurban as an always seeking new challenges and opportunities to grow as a frontend developer"`,
            photo: roman,
        },
        {
            name: 'Rasim Mehtijev',
            who: 'Senior Frontend Developer.',
            comment: `"As a junior developer, your performance has exceeded expectations. Your ability to quickly learn new technologies and apply them to the projects you are working on is impressive. Your attention to detail and commitment to writing clean, efficient code has not gone unnoticed. Your communication skills and willingness to collaborate with other team members have also been a valuable asset. Keep up the great work, and we look forward to seeing your continued growth and success as a developer."`,
            photo: rasim,
        },
    ];

    return (
        <section
            className="recommend"
            ref={ref}
            style={{
                transform: isInView ? 'none' : 'translatex(200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
        >
            <h2>Recommendations</h2>
            <Slider {...settings}>
                {recz.map((rec, i) => (
                    <div key={i} className="recommend-card">
                        <div className="recommend-head">
                            <div className="recommend-head-img">
                                <img src={rec.photo} alt={rec.name} />
                            </div>
                            <div className="recommend-head-text">
                                <h4>{rec.name}</h4>
                                <p>{rec.who} </p>
                            </div>
                        </div>
                        <p className="recommend-comment">{rec.comment}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Recommendations;
