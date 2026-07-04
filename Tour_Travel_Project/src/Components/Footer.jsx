import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="logo">
                    <h1>My Tour</h1>
                    <p>Your trusted travel partner</p>
                </div>
                <div className="links-icons">
                    <a className="icons" href="https://github.com/MehmoodCoder" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a className="icons" href="https://www.linkedin.com/in/mehmood-hassan-7604a03b1" target="_blank" rel="noopener noreferrer">
                        <i className ="fa-brands fa-linkedin"></i>
                    </a>
                    <a className="icons" href="https://x.com/MehmoodHassan56" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a className="icons" href="/" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="" rel="noopener noreferrer">Changelog</a>
                    <a href="" rel="noopener noreferrer">Status</a>
                    <a href="" rel="noopener noreferrer">License</a>
                    <a href="" rel="noopener noreferrer">All Versions</a>
                </div>
                <div>
                    <h4>Cummunity</h4>
                    <a href="https://github.com/MehmoodCoder" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://github.com/issues/assigned" target="_blank" rel="noopener noreferrer">Issues</a>
                    <a href="https://github.com/projects" target="_blank" rel="noopener noreferrer">Projects</a>
                    <a href="https://x.com/MehmoodHassan56" target="_blank" rel="noopener noreferrer">X</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="" rel="noopener noreferrer">Support</a>
                    <a href="" rel="noopener noreferrer">Troubling</a>
                    <a href="" rel="noopener noreferrer">Contact Us</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="" rel="noopener noreferrer">Terms of Service</a>
                    <a href="" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="" rel="noopener noreferrer">License</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
