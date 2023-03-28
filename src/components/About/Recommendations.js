import Slider from "react-slick";
import maksim from "../../img/photos/maksim.jpg"
import rasim from "../../img/photos/rasim.jpg"
import oleg from "../../img/photos/oleg.png"
import roman from "../../img/photos/roman.png"

const Recommendations = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
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
            comment: `"He consistently demonstrates a strong work ethic, attention to detail, and a passion for developing innovative and engaging user experiences. His positive attitude and dedication to excellence are truly inspiring and make him an asset to any organization."`,
            photo: rasim,
        },

    ]

    return (
        <section className="recommend">
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
    )
}

export default Recommendations;