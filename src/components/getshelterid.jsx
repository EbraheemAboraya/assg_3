import React, { useState, useEffect } from 'react';
import ShelterService from '../services/service';

const ShelterById = ({ shelterId }) => {
    const [shelter, setShelter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getShelter = async () => {
            setLoading(true);
            try {
                const data = await ShelterService.fetchShelterById(shelterId);
                setShelter(data);
            } catch (error) {
                setError(`Failed to fetch shelter: ${error.message || error.toString()}`);
            } finally {
                setLoading(false);
            }
        };

        if (shelterId) {
            getShelter();
        }
    }, [shelterId]);

    if (loading) return <div>Loading shelter data...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!shelter) return <div>No shelter found</div>;

    return (
        <div>
            <h2>Shelter Details</h2>
            <p><strong>Location:</strong> {shelter.location}</p>
            <p><strong>Title:</strong> {shelter.title}</p>
            <p><strong>Capacity:</strong> {shelter.capacity}</p>
        </div>
    );
};

export default ShelterById;
