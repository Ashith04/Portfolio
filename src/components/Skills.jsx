const skillCategories = [
    {
        title: 'Frontend',
        icon: '🎨',
        skills: ['JavaScript', 'React', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: ['Node.js', 'Python', 'Firebase', 'MongoDB', 'REST APIs', 'Express.js'],
    },
    {
        title: 'Tools & More',
        icon: '🧰',
        skills: ['Git', 'VS Code', 'Figma', 'Vercel', 'UI/UX Design', 'Problem Solving'],
    },
];

const Skills = () => {
    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Technical Stack<span className="accent-dot">.</span></h2>
                    <p>Technologies and tools I use to craft digital experiences.</p>
                </div>
                <div className="skills-categories">
                    {skillCategories.map((cat, index) => (
                        <div className="skill-category reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <h3>
                                <span className="cat-icon">{cat.icon}</span>
                                {cat.title}
                            </h3>
                            <div className="skill-tags">
                                {cat.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
