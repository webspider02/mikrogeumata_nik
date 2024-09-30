import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="page-container">
            <div className="home">
                <div className="img-cards">
                    <img src="../images/magazi.jpg" alt="magazi.png" />
                </div>
                <div className="img-cards">
                    <img src="../images/gyros.jpg" alt="mikrogeumata.png" />
                </div>
                <div id="home-button">
                    <Link to="/menu">
                        <button>Κατάλογος</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}