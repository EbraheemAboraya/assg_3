import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ShelterManagement() {
    return (
        <div>
            <header>
                <h1>Shelter Management</h1>
                <div>
                    <Link to="/shelter">
                        <button className="shelter-button">View List of Shelters</button>
                    </Link>
                    <Link to="/add-shelter">
                        <button className="shelter-button">Add Shelter</button>
                    </Link>
                </div>
            </header>

            <div className="container">
                <h2>Welcome to Emergency Shelter Management</h2>
                <p>Here you can find and manage emergency shelters for people in need during crises or disasters.</p>
            </div>
        </div>
    );
}

export default ShelterManagement;
