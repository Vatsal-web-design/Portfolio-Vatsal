import React from 'react'
import { useRef, useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact, faJs } from '@fortawesome/free-solid-svg-icons'



const Scroll = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect after component mount
        setFadeIn(true);
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const [isFocused, setIsFocused] = useState(false);


    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div><div>
            <nav className="bg-black p-4">
                <div className="container mx-auto">
                    <div className={`container mx-auto  ${fadeIn ? 'animate-fade-in' : ''}`}>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-bold text-xl">Vatsal Patel</div>
                            <ul className="flex">
                                <li className="mx-2">
                                    <a href="#" className="text-white hover:text-blue-800"  >Home</a>
                                </li>
                                <li className="mx-2">
                                    <button className="text-white hover:text-blue-800" onClick={() => scrollToSection(projectsRef)}>Projects</button>
                                </li>
                                <li className="mx-2">
                                    <button className="text-white hover:text-blue-800" onClick={() => scrollToSection(skillsRef)}>Skills</button>
                                </li>
                                <li className="mx-2">
                                    <button className="text-white hover:text-blue-800" onClick={() => scrollToSection(aboutRef)}>About</button>
                                </li>
                                <li className="mx-2">
                                    <button className="text-white hover:text-blue-800" onClick={() => scrollToSection(contactRef)}>Contact</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Clock component or any other component */}



            {/* Home Section */}
            <section className="bg-orange-500 text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
                    {/* Left Column */}
                    <div className="w-1/2 text-center md:text-left mb-5 md:mb-0 lg:pl-28">
                        <h2 className="text-4xl font-bold mb-3 animate-slide-in-left ">Welcome to My Portfolio</h2>
                        <p className="text-xl typewriter mb-4 ">
                            Passionate about building amazing web designs.
                        </p>
                    </div>
                    {/* Right Column */}
                    {/* <div className="md:w-1/2 lg:mr-36  ">
                    <img src={props.img} alt="Profile" className=" mx-auto md:mx-0 md:ml-auto w-80 h-96 rounded-lg  object-cover " />
                </div> */}
                    <div className="md:w-1/2 lg:mr-36 flex items-center justify-center">
                        <img src={props.img} alt="Your Image" className="mx-auto md:mx-0 md:ml-auto w-80 h-96 rounded-lg  object-cover animate-slide-in" />
                    </div>
                </div>
            </section>
            {/* Home Projects */}

            <div ref={projectsRef} className="bg-blue-800 ">
                <div className=" py-8">
                    <h1 className="text-3xl font-bold text-center text-white mb-8">My Portfolio</h1>
                    <div className="scrolling-container1 overflow-hidden relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5  mx-5 justify-center">
                            {/* Portfolio Item 1 */}
                            <div className={`bg-white rounded-lg  p-6 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105  ${isHovered ? 'scale' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                <img src={props.port1} alt="Project 1" className="w-full h-auto rounded mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Netflix UI clone</h2>
                                <p className="text-gray-700 mb-4">Build a Netflix UI clone using HTML,CSS and JavaScript  to understand the core concept of web design. Implementing it as a responsive design to learn css concepts in detail particularly  flex and grid. Also include some  JavaScript to make the website functional.
                                </p>
                                <a href='https://github.com/Vatsal-web-design/Netflix_clone_by_Vatsal.git' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div>
                            {/* Portfolio Item 2 */}
                            <div className="bg-white rounded-lg  p-6  overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                                <img src={props.port2} alt="Project 2" className="w-full h-auto rounded mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Image search gallary</h2>
                                <p className="text-gray-700 mb-4">Create a search image app which gives images according to user input.
                                    This app uses image API to get data from a database and display the result based on input.
                                    Tailwind CSS is used for better user interface and web experience.
                                </p>
                                <a href='https://github.com/Vatsal-web-design/Image-gallery.git' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div>
                            {/* Portfolio Item 3 */}
                            <div className="bg-white rounded-lg p-6 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                                <img src={props.port3} alt="Project 3" className="w-full h-auto rounded mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Weather App</h2>
                                <p className="text-gray-700 mb-4">Develop a weather app which gives you  weather information of different cities.
                                    The app is built by using weather API to understand how to get data from an API and add a search term to find weather of any city.
                                    Implement Tailwind CSS in React.js to enhance user experience.
                                </p>
                                <a href='https://github.com/Vatsal-web-design/Weather-App.git' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="scrolling-container2 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-15 mx-5 gap-4">
                            <div className={`bg-white rounded-lg p-6 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 `}>
                                <img src={props.port4} alt="Project 3" className="w-full h-auto rounded mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Uber UI clone</h2>
                                <p className="text-gray-700 mb-4">Create Uber clone by Tailwind utility classes to reduce code complexity and fast development process.
                                    Using Tailwind CSS  is a powerful approach to build responsive and animated websites.
                                </p>
                                <a href='https://github.com/Vatsal-web-design/Uber_clone_Tailwind.git' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div>
                            <div className="bg-white rounded-lg p-6 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                                <img src={props.port5} alt="Project 3" className="w-full h-auto rounded mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Note App</h2>
                                <p className="text-gray-700 mb-4">Develop a Note app by using HTML,CSS and JS to understand the DOM manipulation and javascript concepts in depth.Also create a good UI for users so they enjoy the app while they use it.  </p>
                                <a href='https://github.com/Vatsal-web-design/Note-App.git' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div>
                            <div className="bg-white rounded-lg p-6 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                                <img src={props.port6} alt="Project 3" className="w-full h-auto rounded mb-4" />
                                <h2 className="text-xl font-semibold mb-2">Calculater</h2>
                                <p className="text-gray-700 mb-4">This Calculator app is fully functional and accurate.The app is built by using HTML,CSS and JS to learn basics of JavaScript DOM and CSS flex and grid Properties.</p>
                                <a href='https://github.com/Vatsal-web-design/Calculater-by-HTML-CSS-JS.git' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more portfolio items here */}
            </div>
            {/* Home skills */}

            <div>
                <section ref={skillsRef} className="py-12 bg-pink-500 px-5">
                    <div className="container mx-auto ">
                        <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Skill Card - HTML */}
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : 'transition duration-500'} ${isFocused ? 'focus:border-blue-500 ' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                {/* <FontAwesomeIcon icon={faReact} /> */}
                                <span className="text-lg font-semibold">React</span>
                            </div>
                            {/* Skill Card - CSS */}
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : ' transition duration-500'} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">JavaScript</span>
                            </div>
                            {/* Skill Card - JavaScript */}
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : ' transition duration-500'} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">Tailwind CSS</span>
                            </div>
                            {/* Skill Card - React */}
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : ''} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">Node.js</span>
                            </div>
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500 ' : 'transition duration-500'} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">HTML</span>
                            </div>
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : ' transition duration-500'} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">CSS</span>
                            </div>
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : ' transition duration-500'} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">Express.js</span>
                            </div>
                            <div className={`px-4 py-2 flex items-center justify-center p-4 bg-white rounded-lg shadow-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isHovered ? 'hover:bg-black hover:text-white transition duration-500' : ' transition duration-500'} ${isFocused ? 'focus:border-blue-500' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}>
                                <span className="text-lg font-semibold">Handle API</span>
                            </div>
                            {/* Add more skill cards as needed */}
                        </div>
                    </div>
                </section>
            </div>

            {/* About Section */}
            <section ref={aboutRef} className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
                            <img
                                src={props.about} // Replace with your own image
                                alt="Profile"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-lg leading-relaxed">
                                As a Front End Web Developer,I am able to create good web design and interface to give a smooth web experience for users of all sizes of screen and working closely with UI/UX designers and Backend Developers.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                Apart from that I like to do physical activities such as doing yoga,cardio and weight training.It keeps me physical and mentally active.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="https://docs.google.com/document/d/1nD31rL9vSMpSjYTktt2qt-m8r1SWbINr2z-MfxN919I/edit?usp=sharing" // Replace with link to your resume
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div>  <footer ref={contactRef} className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
                            <ul className="flex flex-col">
                                <li className="mb-2">
                                    <a href="" className="hover:underline">
                                        Vatsalonnet7@gmail.com
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="tel:+1234567890" className="hover:underline">
                                        (+44) 7879147964
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
                            <ul className="flex">
                                <li className="mr-4">
                                    <a href="www.linkedin.com/in/vatsal-patel-a68444232" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Vatsal-web-design?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p>&copy; {new Date().getFullYear()} Vatsal Patel. All Rights Reserved.</p>
                    </div>
                </div>
            </footer></div>

        </div></div>
    )
}

export default Scroll