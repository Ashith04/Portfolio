import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !counted.current) {
                    counted.current = true;
                    const num = parseInt(target);
                    if (isNaN(num)) { setCount(target); return; }
                    const duration = 1500;
                    const steps = 40;
                    const increment = num / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) { setCount(num); clearInterval(timer); }
                        else setCount(Math.floor(current));
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    const display = typeof count === 'number' ? count + suffix : count;
    return <span className="stat-number" ref={ref}>{display}</span>;
};

const About = () => {
    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="section-header reveal">
                    <h2>About my approach<span className="accent-dot">.</span></h2>
                    <p>Building software that feels as natural as a breath of fresh air.</p>
                </div>
                <div className="about-content">
                    <div className="about-text reveal-left">
                        <h3>My journey in development started with a fascination for how technology can shape experiences.</h3>
                        <p>
                            I believe that software should feel intuitive and effortless. My approach combines
                            clean architecture with thoughtful design — creating solutions that are not just
                            functional, but maintainable, accessible, and empathetic to the end user.
                        </p>
                        <p>
                            Currently pursuing my degree in Computer Science, I'm constantly exploring new
                            technologies and pushing the boundaries of what I can build. From full-stack web
                            applications to AI-powered tools, I love turning complex problems into elegant solutions.
                        </p>
                        <div className="about-stats">
                            <div className="stat-card">
                                <AnimatedCounter target={10} suffix="+" />
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <AnimatedCounter target={5} suffix="+" />
                                <span className="stat-label">Technologies</span>
                            </div>
                            <div className="stat-card">
                                <AnimatedCounter target="∞" />
                                <span className="stat-label">Curiosity</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-cards reveal-right">
                        <div className="about-card">
                            <div className="about-card-icon">🎓</div>
                            <h4>Education</h4>
                            <p>B.Tech in Computer Science — focused on software engineering, data structures, and modern web development.</p>
                        </div>
                        <div className="about-card">
                            <div className="about-card-icon">💡</div>
                            <h4>What Drives Me</h4>
                            <p>Passion for creating beautiful, user-centric interfaces and writing clean, scalable code that solves real problems.</p>
                        </div>
                        <div className="about-card">
                            <div className="about-card-icon">🎯</div>
                            <h4>Current Focus</h4>
                            <p>Full-stack development with React, exploring AI/ML integrations, and building production-ready applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
