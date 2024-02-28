/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import ShelterService from '../services/service';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const GetAllShelters = () => {
    const [shelterList, setShelterList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchShelters = async () => {
            try {
                const data = await ShelterService.fetchSheltersData();
                setShelterList(data);
                console.log('Fetched data:', data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError('Failed to fetch shelter data.');
            }
        };

        fetchShelters();
    }, []);

    const handleDelete = async (shelterId) => {
        try {
            await ShelterService.deleteShelter(shelterId);
            const updatedShelters = shelterList.filter(shelter => shelter._id !== shelterId);
            setShelterList(updatedShelters);
            console.log(`Shelter with ID ${shelterId} deleted.`);
        } catch (error) {
            console.error('Failed to delete shelter:', error);
            setError('Failed to delete shelter.');
        }
    };

    return (
        <div className="shelter-container">
            <h1 className="shelter-title">Shelters</h1>
            <div className="shelter-list">
                {shelterList.map((shelter) => (
                    <Card className="shelter-card" key={shelter._id}>
                        <Card.Body>
                            <div className="shelter-info">
                                <h2>{shelter.title}</h2>
                                <p><strong>Location:</strong> {shelter.location}</p>
                                <p><strong>Capacity:</strong> {shelter.capacity}</p>
                            </div>
                            <div className="action-buttons">
                                <Link to={`/update-shelter/${shelter._id}`}>
                                    <Button variant="primary">Update</Button>
                                </Link>
                                <Button variant="danger" onClick={() => handleDelete(shelter._id)}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GetAllShelters;
