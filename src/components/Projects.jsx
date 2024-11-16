import { motion } from "framer-motion";
import project1Image from '../assets/projects/netflix.webp';
import project2Image from '../assets/projects/myntra.png';
import project3Image from '../assets/projects/todo.jpg';
import project4Image from '../assets/projects/portfolio.png';

const projectData = [
    {
        title: "Netflix Clone",
        description: "This is the description of project 1.",
        image: project1Image,
        technologies: ["React", "Node.js", "Tailwind CSS"]
    },
    {
        title: "Myntra Clone",
        description: "This is the description of project 2.",
        image: project2Image,
        technologies: ["JavaScript", "Express.js", "MongoDB"]
    },
    
    {
        title: "Personal Portfolio",
        description: "This is the description of project 2.",
        image: project4Image,
        technologies: ["JavaScript", "Express.js", "MongoDB"]
    },
    {
        title: "Todo App",
        description: "This is the description of project 1.",
        image: project3Image,
        technologies: ["React", "Node.js", "Tailwind CSS"]
    }
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const projectCardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

function Projects() {
    return (
        <div className="pb-4">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Projects</motion.h2>
            
            {/* Animated container for projects */}
            <div>
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        variants={projectCardVariants} // Animation for each project card
                    >
                        <motion.div 
                         whileInView={{opacity:1,x:0}}
                         initial={{opacity:0,x:-100}}
                         transition={{duration:1}}
                            className="w-full lg:w-1/4"
                            variants={imageVariants} // Animation for images
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                width={250}
                                height={250}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        
                        <motion.div 
                         whileInView={{opacity:1,x:0}}
                         initial={{opacity:0,x:100}}
                         transition={{duration:1}}
                        
                        className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            <div>
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                        variants={projectCardVariants} // Animating tech tags with a subtle effect
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
