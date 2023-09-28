import Image1 from '../../assets/netflixclone.jpg'
import Image2 from '../../assets/wixsite.jpg'
import Image3 from '../../assets/facts.jpg'
//import Image4 from '../../assets/project4.jpg'
//import Image5 from '../../assets/project5.jpg'
//import Image6 from '../../assets/project6.jpg'
//import Image7 from '../../assets/project7.jpg'
//import Image8 from '../../assets/project8.jpg'
//import Image9 from '../../assets/project9.jpg'

const data = [
    {
        id: 1,
        category: 'frontend',
        image: Image1,
        title: "Netflix Clone using React (Frontend - Responsive)",
        desc: "Experience the magic of a Netflix clone project brought to life through React.js on the frontend, seamlessly integrated with API calls to the TMDb database. Explore an immersive user interface, discover trending content, and watch trailers, all designed to deliver an authentic streaming experience.",
        demo: 'https://netflix-clone-fidha.netlify.app',
        github: 'https://github.com/fidhahadi/Netflix-clone-React'
    },
    {
        id: 2,
        category: 'frontend',
        image: Image2,
        title: "Static website using Wix (Frontend)",
        desc: "Explore the exquisite world of Sona Crockery through our Wix-powered static website. Immerse yourself in the beauty of our carefully curated collection of elegant crockery and dining essentials. From fine china to contemporary tableware, our site offers a glimpse into the art of dining with style. ",
        demo: 'https://fidhahadi.wixsite.com/sona-crockery'
    },
    {
        id: 3,
        category: 'backend',
        image: Image3,
        title: "Facts from the World (Fullstack)",
        desc: "Welcome to 'Facts from the World,' your one-stop destination for fascinating insights and knowledge. This fullstack application is a testament to the power of React.js on the frontend and Supabase as our trusty database backend. 'Facts from the World' is where learning and discovery converge.",
        demo: 'https://today-i-learned-facts-fidha.netlify.app',
        github: 'https://github.com/fidhahadi/today-i-learned'
    }
]


export default data