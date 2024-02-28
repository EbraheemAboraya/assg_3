import React, { useState } from 'react';
import addShelter from '../services/service';

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
            await addShelter(shelterData);
            console.log('Shelter added successfully!');
            setShelterData(initialShelterData); // Reset form fields
        } catch (error) {
            console.error('Failed to add shelter:', error);
        }
    };

    return (
        <div>
            <h2>Add Shelter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={shelterData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={shelterData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        value={shelterData.capacity}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Shelter</button>
            </form>
        </div>
    );
};

export default AddShelterForm;