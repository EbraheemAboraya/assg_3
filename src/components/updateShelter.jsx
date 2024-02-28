import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShelterService from '../services/service';

const UpdateShelterForm = () => {
    const { shelterId } = useParams();
    const navigate = useNavigate();
    const [shelterData, setShelterData] = useState({
        location: '',
        title: '',
        capacity: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchShelter = async () => {
            try {
                const data = await ShelterService.fetchShelterById(shelterId);
                setShelterData(data);
            } catch (error) {
                console.error('Failed to fetch shelter data:', error);
                setError('Failed to fetch shelter data.');
            }
        };

        fetchShelter();
    }, [shelterId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShelterData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ShelterService.updateShelter(shelterId, shelterData);
            navigate('/shelters'); // Redirect to the shelters list page or wherever you see fit
        } catch (error) {
            console.error('Failed to update shelter:', error);
            setError('Failed to update shelter.');
        }
    };

    return (
        <div>
            <h2>Update Shelter</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        name="title"
                        value={shelterData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        name="location"
                        value={shelterData.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Capacity:</label>
                    <input
                        type="number"
                        name="capacity"
                        value={shelterData.capacity}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Shelter</button>
            </form>
        </div>
    );
};

export default UpdateShelterForm;