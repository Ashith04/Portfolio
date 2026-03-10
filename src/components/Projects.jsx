const currentlyBuilding = [
    {
        title: 'Vora',
        description:
            'An AI-powered voice-to-game engine that translates natural speech into real-time game logic. Built with the Gemini Multimodal Live API for low-latency voice interaction and WebSocket-based audio processing.',
        tags: ['TypeScript', 'Gemini AI', 'WebSocket', 'AudioWorklet'],
        link: '#',
        status: 'beta',
    },
    {
        title: 'Galactic Archives',
        description:
            'An immersive space exploration data platform. Designed to render vast astronomical datasets with optimized memory management and performant C++ rendering pipelines.',
        tags: ['C++', 'Data Structures', 'Memory Optimization'],
        link: '#',
        status: 'dev',
    },
];

const featuredProjects = [
    {
        title: 'EcoCharge MS',
        description:
            'A full-stack EV charging management system built with a high-performance C++ backend. Features optimized data structures for station routing, real-time availability tracking, and memory-efficient session management.',
        tags: ['C++', 'JavaScript', 'HTML/CSS', 'Systems Design'],
        link: 'https://github.com/Ashith04/EcoChargeMS-system',
        status: 'live',
    },
    {
        title: 'Smart Task Manager',
        description:
            'An AI-powered task management platform with intelligent productivity insights, pattern recognition, and smart prioritization. Features analytics dashboards and completion tracking.',
        tags: ['Python', 'Flask', 'SQLite', 'AI/ML'],
        link: 'https://github.com/Ashith04/Ai-financial-Assistance',
        status: 'live',
    },
    {
        title: 'Movie Discovery Platform',
        description:
            'A feature-rich movie search and discovery app with real-time OMDB API integration, favorites, dark mode, and language filtering. Deployed live on Vercel.',
        tags: ['React', 'OMDB API', 'CSS', 'Vercel'],
        link: 'https://github.com/Ashith04/Movie_Website',
        status: 'live',
    },
];

const StatusBadge = ({ status }) => {
    const labels = { live: '● Live', beta: '◉ Beta', dev: '◌ In Development' };
    return (
        <span className={`project-status ${status}`}>
            <span className="pulse-dot"></span>
            {labels[status]}
        </span>
    );
};

const ProjectCard = ({ project, index, showNumber }) => (
    <div
        className="project-card reveal-scale"
        style={{ transitionDelay: `${index * 0.12}s` }}
    >
        {showNumber && <span className="project-number">0{index + 1}</span>}
        <StatusBadge status={project.status} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
            {project.tags.map((tag, i) => (
                <span className="project-tag" key={i}>{tag}</span>
            ))}
        </div>
        {project.link !== '#' ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
            </a>
        ) : (
            <span className="project-link" style={{ opacity: 0.5, cursor: 'default' }}>
                Coming Soon →
            </span>
        )}
    </div>
);

const Projects = () => {
    return (
        <section className="projects section-padding" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Selected Works<span className="accent-dot">.</span></h2>
                    <p>Projects built with passion, precision, and a focus on performance.</p>
                </div>

                <div className="projects-section-label">🚀 Currently Building</div>
                <div className="projects-grid" style={{ marginBottom: '48px' }}>
                    {currentlyBuilding.map((project, index) => (
                        <ProjectCard project={project} index={index} key={index} />
                    ))}
                </div>

                <div className="projects-section-label">⚡ Featured Projects</div>
                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard project={project} index={index} showNumber key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
