import { useState, useRef, useEffect } from 'react';

const verifiedSkills = [
    {
        title: 'Machine Learning Foundations',
        issuer: 'Simplilearn',
        description: 'Mastery of supervised & unsupervised learning paradigms, feature engineering, and model evaluation — building intelligent systems from the ground up.',
        skills: ['Neural Networks', 'Regression', 'Classification', 'Data Pipelines'],
        icon: '🧠',
    },
    {
        title: 'Prompt Engineering & AI Systems',
        issuer: 'Simplilearn',
        description: 'Advanced expertise in crafting precision prompts for large language models — optimizing AI output, token efficiency, and chain-of-thought reasoning.',
        skills: ['LLM Architecture', 'Chain-of-Thought', 'Few-Shot Learning', 'RAG'],
        icon: '⚡',
    },
    {
        title: 'Java Software Engineering',
        issuer: 'Simplilearn',
        description: 'Comprehensive mastery of object-oriented design principles, multithreading patterns, and enterprise-grade application architecture in Java.',
        skills: ['OOP', 'Collections', 'Multithreading', 'Design Patterns'],
        icon: '☕',
    },
    {
        title: 'Structured Query Language & Data Architecture',
        issuer: 'Simplilearn',
        description: 'Deep proficiency in relational database design, complex query optimization, and data modeling for scalable backend systems.',
        skills: ['Query Optimization', 'Schema Design', 'Joins & Indexing', 'Data Modeling'],
        icon: '🗃️',
    },
    {
        title: 'Systems Programming in C',
        issuer: 'Simplilearn',
        description: 'Advanced understanding of memory management, pointer arithmetic, and low-level system architecture — the bedrock of performant software engineering.',
        skills: ['Memory Management', 'Pointers', 'Data Structures', 'System Calls'],
        icon: '⚙️',
    },
];

const milestones = [
    {
        title: 'IIT Bombay Techfest — GamesDen',
        org: 'Indian Institute of Technology, Bombay',
        date: '2025',
        badge: 'National',
        description: 'Competed at India\'s premier technology festival in the GamesDen challenge, demonstrating real-time game development and interactive system design.',
        icon: '🏆',
    },
    {
        title: 'IIT Kanpur Techkriti — Pitch Fiesta',
        org: 'Indian Institute of Technology, Kanpur',
        date: '2025',
        badge: 'National',
        description: 'Pitched innovative product concepts at one of India\'s most competitive innovation stages, evaluated by industry leaders and venture panels.',
        icon: '🎤',
    },
    {
        title: 'NIT Surathkal — Victory Coders',
        org: 'National Institute of Technology Karnataka',
        date: '2024',
        badge: 'Achievement',
        description: 'Earned Certificate of Achievement as part of Team Victory Coders at NIT Karnataka\'s flagship coding competition, showcasing algorithmic excellence.',
        icon: '🥇',
    },
    {
        title: 'HealthHacks 3.0',
        org: 'St. Joseph Engineering College, Mangalore',
        date: '2024',
        badge: 'Hackathon',
        description: 'Built a healthcare solution during a 24-hour intensive hackathon, integrating AI-driven diagnostics with user-centric interface design.',
        icon: '💊',
    },
    {
        title: 'Google Developer Group Event',
        org: 'GDG & GDSC Community',
        date: '2025',
        badge: 'Community',
        description: 'Active participant in Google\'s developer ecosystem, engaging with cutting-edge GCP technologies and collaborative open-source development.',
        icon: '🌐',
    },
    {
        title: 'Karnataka State Police Run 2025',
        org: 'Karnataka State Police',
        date: '2025',
        badge: 'Community',
        description: 'Participated in the state-level community engagement initiative promoting fitness and civic responsibility alongside law enforcement.',
        icon: '🏃',
    },
];

const CertModal = ({ cert, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const handleBackdrop = (e) => {
        if (e.target === modalRef.current) onClose();
    };

    return (
        <div className="cert-modal-overlay" ref={modalRef} onClick={handleBackdrop}>
            <div className="cert-modal-glass">
                <button className="cert-modal-close" onClick={onClose} aria-label="Close">✕</button>
                <div className="cert-modal-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <span className="cert-modal-issuer">{cert.issuer || cert.org}</span>
                {cert.date && <span className="cert-modal-date">📅 {cert.date}</span>}
                <p className="cert-modal-desc">{cert.description}</p>
                {cert.skills && (
                    <div className="cert-modal-skills">
                        <span className="cert-modal-skills-label">Verified Skills</span>
                        <div className="cert-modal-skill-tags">
                            {cert.skills.map((s, i) => (
                                <span key={i} className="cert-modal-skill-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                )}
                {cert.badge && (
                    <span className={`cert-badge cert-badge-${cert.badge.toLowerCase()}`}>
                        {cert.badge}
                    </span>
                )}
            </div>
        </div>
    );
};

const Certifications = () => {
    const [modalCert, setModalCert] = useState(null);

    return (
        <>
            <section className="certifications section-padding" id="certifications">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Professional Growth<span className="accent-dot">.</span></h2>
                        <p>Validated skills and competitive milestones that define my journey.</p>
                    </div>

                    <div className="cert-section-label">🎓 Verified Skills</div>
                    <div className="cert-masonry">
                        {verifiedSkills.map((cert, index) => (
                            <div
                                className="cert-card-v2 reveal-scale"
                                key={index}
                                style={{ transitionDelay: `${index * 0.08}s` }}
                                onClick={() => setModalCert(cert)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setModalCert(cert)}
                            >
                                <div className="cert-card-v2-header">
                                    <div className="cert-card-v2-icon">{cert.icon}</div>
                                    <span className="cert-card-v2-issuer">{cert.issuer}</span>
                                </div>
                                <h3>{cert.title}</h3>
                                <p>{cert.description}</p>
                                <div className="cert-card-v2-skills">
                                    {cert.skills.slice(0, 3).map((s, i) => (
                                        <span key={i} className="cert-skill-chip">{s}</span>
                                    ))}
                                    {cert.skills.length > 3 && (
                                        <span className="cert-skill-chip cert-skill-more">+{cert.skills.length - 3}</span>
                                    )}
                                </div>
                                <span className="cert-card-v2-cta">View Details →</span>
                            </div>
                        ))}
                    </div>

                    <div className="cert-section-label" style={{ marginTop: '64px' }}>🏅 Milestones & Competitions</div>
                    <div className="cert-milestone-grid">
                        {milestones.map((cert, index) => (
                            <div
                                className="cert-milestone-card reveal"
                                key={index}
                                style={{ transitionDelay: `${index * 0.08}s` }}
                                onClick={() => setModalCert(cert)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setModalCert(cert)}
                            >
                                <div className="cert-milestone-top">
                                    <div className="cert-milestone-icon">{cert.icon}</div>
                                    <span className={`cert-badge cert-badge-${cert.badge.toLowerCase()}`}>
                                        {cert.badge}
                                    </span>
                                </div>
                                <h3>{cert.title}</h3>
                                <span className="cert-milestone-org">{cert.org}</span>
                                <p>{cert.description}</p>
                                <span className="cert-card-v2-cta">View Details →</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {modalCert && <CertModal cert={modalCert} onClose={() => setModalCert(null)} />}
        </>
    );
};

export default Certifications;
