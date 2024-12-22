const AboutMe = () => {
    return (
        <section id="about" className="about-me">
            <h1>About Me</h1>
            <div className="taylor-approximation">
                <div className="approximation-step">
                    <h2>1st Order</h2>
                    <p>I am a physicist passionate about exploring the mysteries of the universe.</p>
                </div>
                <div className="approximation-step">
                    <h2>2nd Order</h2>
                    <p>I have a deep interest in entrepreneurship and innovation.</p>
                </div>
                <div className="approximation-step">
                    <h2>3rd Order</h2>
                    <p>I aspire to build impactful solutions in academia and beyond.</p>
                </div>
            </div>
            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
            </div>
        </section>
    );
};

export default AboutMe;