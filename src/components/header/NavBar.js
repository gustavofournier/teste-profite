import React, { Component } from 'react';

class NavBar extends Component {
    render () {
        return (
            <div className="nav-bar">
                <div className="menu-container">
                    <div className="button-menu">
                        <button>
                        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 15.0154H22.5V12.5128H0V15.0154ZM0 8.75904H22.5V6.25647H0V8.75904ZM0 0V2.50257H22.5V0H0Z" fill="#011627"/>
                        </svg>
                        </button>
                    </div>
                    
                    <div className="logo">
                        <a href="./" className="profite-logo" title="Profite">
                            <img src={require('../../assets/images/profite-logo.png')} alt="Profite" />
                        </a>
                    </div>
                    
                    <div className="cart-button">
                        <button>
                            <img className="cart-img" src={require('../../assets/images/cart.svg')} alt="Cart" />
                            <span className="cart-num-bg">
                                <span className="cart-num">0</span>
                            </span>
                        </button>
                    </div>

                    <div className="search-container">
                        <form action="#">
                            <input type="search" placeholder="O que está procurando?"/>
                        </form>
                    </div>

                    <div className="account-container">
                        <button>
                            <img className="user-img" src={require('../../assets/images/user.svg')} alt="Login" />
                            <span>Minha Conta</span>
                        </button>
                    </div>

                    <div className="language-container">
                        <a title="Português">
                            <img src={require('../../assets/images/lang-br.svg')} alt="Português" />
                        </a>

                        <a title="Espanhol">
                            <img src={require('../../assets/images/lang-es.svg')} alt="Espanhol" />
                        </a>

                        <a title="Inglês">
                            <img src={require('../../assets/images/lang-en.svg')} alt="Inglês" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;