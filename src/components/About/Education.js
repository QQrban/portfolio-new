import { useRef } from 'react'
import { useInView } from 'framer-motion';
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaSass, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiRedux, SiMui } from "react-icons/si";

const Education = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const learningPlaces = [
        {
            school: 'FoxmindEd',
            descr: 'Learning Frontend Development at one of the best programming schools in Ukraine',
            years: '2022-2023'
        },
        {
            school: 'Gamma Intelligence OÜ',
            descr: 'Intensive course for beginner Frontend Developers based on ReactJS',
            years: '2022-2023'
        },
        {
            school: 'Self-Study',
            descr: 'Udemy, Relevant Books, Personal Mentoring',
            years: 'Never ending'
        },
    ]

    return (
        <section className="education">
            <h2><span>IT</span>-Education</h2>
            <div className="education-container" ref={ref} style={{
                transform: isInView ? 'none' : "translatex(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}>
                <div className="education-left-bar">
                    {learningPlaces.map((place, i) => (

                        <div key={i} className="learning-item">
                            <h5>{place.school}</h5>
                            <p className="learning-descr">{place.descr}</p>
                            <p className="learning-years">{place.years}</p>
                        </div>
                    ))}
                </div>
                <div className="education-right-bar">
                    <AiFillHtml5 className="edu-icon html" />
                    <div className="second">
                        <FaCss3Alt className="edu-icon css" />
                        <FaSass className="edu-icon sass" />
                    </div>
                    <div className="third">
                        <FaReact className="edu-icon react" />
                        <SiJavascript className="edu-icon js" />
                    </div>
                    <div className="second">
                        <FaBootstrap className="edu-icon trap" />
                        <SiMui className="edu-icon mui" />
                    </div>
                    <SiRedux className="edu-icon redux" />
                </div>
            </div>
        </section >
    )
}

export default Education;