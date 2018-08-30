import React, { Component } from 'react';
import Slider from "react-slick";

class Produtos extends Component {
    render () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll  : 2,
            autoplay: true,
            arrows: false
        };
        
        return (
            <div className="produtos">
                <div className="produtos-h2">
                    <h2 className="title-bar">Produtos</h2>
                </div>

                {/* <div className="slider-shoes"> */}
                    <Slider {...settings}>
                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>
                            
                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>
                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>

                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>
                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>

                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>

                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>

                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>

                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>
                            
                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>
                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>

                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>
                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>

                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>

                        <div className="shoes">
                            <div className="shoe-image">
                                <img src={require('../../assets/images/shoes.png')} alt="Shoes" />
                            </div>
                            <p>TÊNIS COURO PUMA R698 Q4 V2</p>

                            <div className="rating-list">
                                <ul>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="star__path star__path--filled" fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z" transform="translate(0 0.648987)" fill="#FF9F1C"></path>
                                        </svg>
                                    </li>
                                    <li className="rating-list-item">
                                        <svg width="15" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z" fill="#FF9F1C"/>
                                        </svg>
                                    </li>
                                </ul>
                            </div>

                            <p className="preco-antigo">de R$ 299,00</p>
                            <p className="preco-novo">por R$ 399,00</p>
                            <p>ou em 3x de R$ 133,00</p>
                            <button className="button-comprar">
                                <img src={require('../../assets/images/add-kart.svg')} alt="Shoes" />
                                <span>Comprar</span>
                            </button>
                        </div>
                    </Slider>
                {/* </div> */}
            </div>
        );
    }
}

export default Produtos;