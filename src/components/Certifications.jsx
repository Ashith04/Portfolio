const certifications = [
    {
        icon: '🏅',
        title: 'Meta Front-End Developer',
        issuer: 'Meta (Coursera)',
        date: '2025',
        link: '#',
    },
    {
        icon: '☁️',
        title: 'Google Cloud Fundamentals',
        issuer: 'Google Cloud',
        date: '2024',
        link: '#',
    },
    {
        icon: '🐍',
        title: 'Python for Everybody',
        issuer: 'University of Michigan (Coursera)',
        date: '2024',
        link: '#',
    },
    {
        icon: '⚛️',
        title: 'React — The Complete Guide',
        issuer: 'Udemy',
        date: '2024',
        link: '#',
    },
    {
        icon: '🔥',
        title: 'Firebase for Web Developers',
        issuer: 'Google',
        date: '2024',
        link: '#',
    },
    {
        icon: '🧠',
        title: 'Introduction to AI',
        issuer: 'IBM (Coursera)',
        date: '2023',
        link: '#',
    },
];

const Certifications = () => {
    return (
        <section className="certifications section-padding" id="certifications">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Certifications<span className="accent-dot">.</span></h2>
                    <p>Professional certifications and courses that validate my skills.</p>
                </div>
                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div className="cert-card reveal" key={index} style={{ transitionDelay: `${index * 0.08}s` }}>
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <span className="cert-issuer">{cert.issuer}</span>
                                <span className="cert-date">📅 {cert.date}</span>
                                {cert.link !== '#' && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        View Certificate →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
