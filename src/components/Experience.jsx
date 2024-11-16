import { motion } from "framer-motion";

const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Software Engineer",
        company: "Tech Solutions Inc.",
        description: "Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to design and implement new features, improving overall system performance by 30%.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB"]
    },
    {
        year: "2021 - 2023",
        role: "Frontend Developer",
        company: "Creative Minds Studio",
        description: "Led the frontend development team, creating responsive and visually appealing websites. Integrated third-party APIs and improved user experience by optimizing UI components.",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"]
    },
    {
        year: "2019 - 2021",
        role: "Junior Developer",
        company: "Innovate Labs",
        description: "Assisted in the development of web applications, focusing on frontend design and backend API integration. Participated in code reviews and contributed to improving code quality.",
        technologies: ["JavaScript", "React", "Node.js", "MySQL"]
    }
];

function Experiences() {
    return (
        <>
            <div className="pb-4">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Experiences</motion.h2>
                <div>
                    {EXPERIENCES.map((experience, index) => {
                        return (
                            <div
                                key={index}
                                className="mb-8 flex flex-wrap lg:justify-center"
                             
                                
                            >
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className="w-full lg:w-1/4">
                                    <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
                                </motion.div>
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    className="w-full max-w-xl lg:w-3/4">
                                    <h3 className="mb-2 font-semibold">
                                        {experience.role} -{" "}
                                        <span className="text-sm text-stone-500">
                                            {experience.company}
                                        </span>
                                    </h3>
                                    <p className="mb-4 text-stone-400">
                                        {experience.description}
                                    </p>
                                    <div>
                                        {experience.technologies.map((tech, index) => (
                                            <span
                                                className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium"
                                                key={index}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Experiences;
