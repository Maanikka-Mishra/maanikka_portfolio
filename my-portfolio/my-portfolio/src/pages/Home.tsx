import React from 'react';
import Header from '../components/Header';
import './main.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <section className="projects">
                <h2>Projects</h2>
                {/* Add project details here */}
            </section>
            <section className="contact">
                <h2>Contact</h2>
                {/* Add contact information here */}
            </section>
        </div>
    );
};

export default Home;