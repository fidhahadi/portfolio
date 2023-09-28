import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About1 = () => {
    return (
        <section id="about" data-aos="fade-in">
            <h2>About Me</h2>
            <p>
                👋 Hello! I'm Fidha, a passionate software developer with a strong affinity for cutting-edge technologies, particularly in the world of web development. I specialize in crafting delightful and efficient user experiences using the React library and the MERN (MongoDB, Express.js, React, Node.js) stack.</p>

            <p> 🚀 My journey in software development has been an exciting ride, and I'm always on the lookout for new opportunities to collaborate on innovative projects. Whether it's creating dynamic web applications, e-commerce platforms, or content management systems, I thrive on turning ideas into reality through elegant and maintainable code.</p>

            <p>🔧 I am constantly exploring new technologies and best practices in the ever-evolving tech landscape to stay ahead of the curve. I believe in the power of continuous learning and enjoy tackling complex challenges head-on.</p>

            <p>🌟 Let's connect and explore how we can collaborate on exciting projects or opportunities in the world of web development. Feel free to reach out if you're looking for a dedicated and skilled developer with a passion for crafting exceptional digital experiences.</p>


            <div className="header__cta" data-aos="fade-up">
                <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
            </div>
        </section >
    )
}

export default About1