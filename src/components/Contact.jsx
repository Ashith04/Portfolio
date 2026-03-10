import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Let's start a conversation<span className="accent-dot">.</span></h2>
                    <p>Have a project in mind or just want to say hi? I'm all ears.</p>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info reveal">
                        <div className="contact-info-text">
                            <h3>Get in touch</h3>
                            <p>
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to collaborate. Feel free to reach out!
                            </p>
                        </div>
                        <div className="contact-cards">
                            <a href="https://mail.google.com/mail/?view=cm&to=ashith04.eagle@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                                <div className="contact-card-icon">✉️</div>
                                <div className="contact-card-text">
                                    <span>Email</span>
                                    <span>ashith04.eagle@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://github.com/Ashith04" target="_blank" rel="noopener noreferrer" className="contact-card">
                                <div className="contact-card-icon">💻</div>
                                <div className="contact-card-text">
                                    <span>GitHub</span>
                                    <span>github.com/Ashith04</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/ashith-cherian-618620365" target="_blank" rel="noopener noreferrer" className="contact-card">
                                <div className="contact-card-icon">🔗</div>
                                <div className="contact-card-text">
                                    <span>LinkedIn</span>
                                    <span>Ashith Cherian</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <form className="contact-form reveal" onSubmit={handleSubmit} style={{ transitionDelay: '0.15s' }}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            {submitted ? '✓ Message Sent!' : 'Send Message →'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
