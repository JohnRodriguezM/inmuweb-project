import React, { useState } from 'react';
import MyImage from '../Atoms/Image/Image';
import './Menu.css'
import { MenuLista } from './MenuLista';
import logo from '/src/assets/icons/logo.png';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top nav-scrolled" id="navbar">
            <section className="container-fluid ">
                <a className="navbar-brand" href="#">
                <MyImage
                    image={{
                        src: logo,
                        alt: 'logo',
                        height: '50px',
                        width: '85px'
                    }}
                />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse " id="navbarNavDropdown">
                    <MenuLista />
                </section>

            </section>
        </nav>
    );
}

export default Menu;
