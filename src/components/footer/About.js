import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div className="about-container">
                <div className="about">
                    <h2 className="title-bar">Localização</h2>
                    <div className="about-aux">
                        <div className="location-container">
                            <div className="adresses">
                                <div className="sp">
                                    <p><b>São Paulo</b></p>
                                    <p>Rua do Rócio, 423/1801 Vila Olímpia - SP 04552-000</p>
                                    <p>+55 11  3333 3333</p>
                                </div>
                                <div className="rj">
                                    <p><b>Rio de Janeiro</b></p>
                                    <p>Vol. da Pátria, 301/702 Botafogo - RJ 22270-000</p>
                                    <p>+55 21  3333 3333</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-container">
                            <button className="btn-contact">
                                <img src={require('../../assets/images/message.svg')} alt="Enviar mensagem" />
                                <span>Entre em contato</span>
                            </button>
                            <button className="btn-contact-online">
                                <img src={require('../../assets/images/contact.svg')} alt="Entrar em contato online" />
                                <span>Fale com o nosso consultor online</span>
                            </button>
                        </div>

                        <div className="creation-container">
                            <div>
                                <p className="createdby">Created by</p>
                                <img src={require('../../assets/images/profite-mono-logo.svg')} alt="Profite" />
                            </div>
                            <div>
                                <p className="createdby">Powered by</p>
                                <img src={require('../../assets/images/vtex-mono-logo.svg')} alt="Vtex" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;