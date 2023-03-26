import { CgDesignmodo } from 'react-icons/cg';
import { SiCreatereactapp } from 'react-icons/si';
import { ImSphere } from 'react-icons/im';

const Specialized = () => {

    const specializedItems = [
        {
            icon: CgDesignmodo,
            name: 'UI/UX Design',
            text: 'Turn what you have in mind of a digital product into reality. For any platform you consider.',
        },
        {
            icon: SiCreatereactapp,
            name: 'Application Development',
            text: 'Standard designing, building, and implementing your applications with documentation.',
        },
        {
            icon: ImSphere,
            name: 'Web Development',
            text: 'Create and maintain your websites and also take care of its performance and traffic capacity.',
        },

    ]

    return (
        <div className="personal-specialized">
            {specializedItems.map((item, i) => (
                <div key={i} className="specialized-item">
                    <item.icon className='icon-item' size={27} />
                    <h5>{item.name}</h5>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Specialized;