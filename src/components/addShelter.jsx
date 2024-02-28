import React, { useState } from 'react';
import ShelterService from '../services/service';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddShelterForm = () => {
    const initialShelterData = {
        location: '',
        title: '',
        capacity: '',
    };

    const [shelterData, setShelterData] = useState(initialShelterData);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setShelterData({ ...shelterData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ShelterService.addShelter(shelterData);
            console.log('Shelter added successfully!');
            setShelterData(initialShelterData); // Reset form fields
        } catch (error) {
            console.error('Failed to add shelter:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add Shelter</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={shelterData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={shelterData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="capacity"
                        name="capacity"
                        value={shelterData.capacity}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Shelter</button>
            </form>
        </div>
    );
};

export default AddShelterForm;
