import React, { Component } from 'react'
import {Link} from 'gatsby'
import {FaCartArrowDown} from 'react-icons/fa'
export default class Navbar extends Component {

    state ={
        navbarOpen: false,
        style: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/about/',
                text: 'about'
            },
            {
                id: 3,
                path: '/faq/',
                text: 'FAQ'
            }
        ]
    }
    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({ navbarOpen:false, style:
        "collapse navbar-collapse"})
        : this.setState({
            navbarOpen: true,
            style: "collapse navbar-collapse show"
        });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={this.state.style}>
                    <ul className="navbar-nav mx-auto">
                        {this.state.links.map(link =>{
                                return (
                                <li key={link.id} className="nav-item">
                                    <Link to={link.path} className="nav-link text-capitalize">
                                        {link.text}
                                    </Link>
                                </li>
                                );
                        })}
                        <li className="nav-item ml-sm-5">
                            <FaCartArrowDown className="cart-icon snipcart-checkout"/>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
