const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">My Website</div>
            <nav className="navbar-links">
                <a href="#about">About Me</a>
                <a href="#resume">Resume</a>
                <a href="#blog">Blog</a>
                <a href="#garden">Digital Garden</a>
                <a href="#resources">Resources</a>
            </nav>
        </header>
    );
};

export default Navbar;