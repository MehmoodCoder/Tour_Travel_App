import "./NavBar.css";
import { Component } from "react";
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItem";

class NavBar extends Component {
    state = { clicked : false}
    handleClick =  () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="navbar-logo">MyTour</h1>

                <div className = "nav-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}><br /><br /><br /><br />
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.url} className ="link">
                                        <i className={item.icon}></i> {item.title}
                                    </Link>
                                </li>
                            );
                        })      
                    }
                    <button>Sign Up</button>
                </ul>
            </nav>
        );
    }
}

export default NavBar;