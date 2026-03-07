const projects = [
    {
        title: 'Smart Budget Tracker',
        description:
            'A comprehensive budget tracking application with real-time analytics, category-based expense management, and interactive charts for financial insights.',
        tags: ['React', 'Firebase', 'Chart.js', 'CSS'],
        link: 'https://github.com/',
    },
    {
        title: 'AI Chat Application',
        description:
            'An AI-powered chat application with real-time voice and text support, multilingual capabilities, and a modern responsive interface.',
        tags: ['React', 'Node.js', 'WebSocket', 'AI API'],
        link: 'https://github.com/',
    },
    {
        title: 'Civic Issue Reporter',
        description:
            'A civic issue reporting platform with image analysis, geolocation, admin dashboard, and community validation features.',
        tags: ['Next.js', 'MongoDB', 'Gemini AI', 'Tailwind'],
        link: 'https://github.com/',
    },
    {
        title: 'Movie Discovery Platform',
        description:
            'A feature-rich movie discovery app with search, filtering, favorites, and detailed movie information powered by external APIs.',
        tags: ['React', 'REST API', 'CSS', 'JavaScript'],
        link: 'https://github.com/',
    },
];

const Projects = () => {
    return (
        <section className="projects section-padding" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Selected Works<span className="accent-dot">.</span></h2>
                    <p>A collection of projects built with passion and precision.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            className="project-card reveal-scale"
                            key={index}
                            style={{ transitionDelay: `${index * 0.12}s` }}
                        >
                            <span className="project-number">0{index + 1}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span className="project-tag" key={i}>{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
