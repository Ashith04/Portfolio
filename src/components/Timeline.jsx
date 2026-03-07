const timelineData = [
    {
        date: 'Present',
        title: 'Full-Stack Web Development',
        description: 'Building end-to-end web applications using React, Node.js, and modern cloud services. Focused on production-ready projects.',
    },
    {
        date: '2025',
        title: 'AI & Machine Learning',
        description: 'Exploring AI-powered applications, integrating APIs like Gemini and OpenAI into web projects for intelligent features.',
    },
    {
        date: '2024',
        title: 'React & Modern Frontend',
        description: 'Deep-diving into React ecosystem, component architecture, state management, and responsive UIs with modern CSS.',
    },
    {
        date: '2023',
        title: 'Programming Foundations',
        description: 'Started my journey with HTML, CSS, JavaScript, and Python. Built foundational understanding of DSA.',
    },
];

const Timeline = () => {
    return (
        <section className="timeline-section section-padding" id="learning">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Learning Journey<span className="accent-dot">.</span></h2>
                    <p>My ongoing exploration of technologies that shape my growth.</p>
                </div>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div className="timeline-item reveal" key={index} style={{ transitionDelay: `${index * 0.15}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
