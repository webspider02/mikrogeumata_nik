import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img src="../images/nik.png" alt="logo" />    
            </Link>

            <ul className="header-flex">
                <Link to="/">
                    <li>
                        <p>Αρχική</p>
                    </li>
                </Link>
                <Link to="/menu">
                    <li>
                        <p>Κατάλογος</p>
                    </li>
                </Link>
                <Link to="/contact">
                    <li>
                        <p>Επικοινωνία</p>
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        <p>Σχετικά Με Εμάς</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}