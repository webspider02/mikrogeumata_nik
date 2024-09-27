import React from 'react';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <a href='./Home.js'>
                <img src="../images/nik.png" alt="logo" />    
            </a>

            <ul className="header-flex">
                <a href="./Home.js">
                    <li>
                        <p>Αρχική</p>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <p>Κατάλογος</p>
                    </li>
                </a>
                <a href="./Contact.js">
                    <li>
                        <p>Επικοινωνία</p>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <p>Σχετικά Με Εμάς</p>
                    </li>
                </a>
            </ul>
        </div>
    )
}