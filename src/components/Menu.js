import react from 'react';
// import '../styles/Menu.css';

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}