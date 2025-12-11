import React, { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

const AllJobPosition = () => {
    const [position, setPosition] = useState('');
    const [area_of_interest, setArea_of_interest] = useState('');
    const [description, setDescription] = useState('');
    const [experience, setExperience] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');

        try {
            const response = await axios.post(`${BaseUrl}/postJobPosition`, {
                position,
                area_of_interest,
                description,
                experience,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response.data);  
            setSuccess('Job posted successfully!');
            setPosition('');
            setArea_of_interest('');
            setDescription('');
            setExperience('');
        } catch (err) {
            console.error('Error posting job:', err.response ? err.response.data : err.message);
            if (err.response) {
                setError(err.response.data.message || 'Failed to post job. Please check your input.');
            } else if (err.request) {
                setError('No response from server. Please try again later.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
          <div className='flex justify-center '>
          <div className="absolute top-0 left-0 md:left-[100px] mt-24 md:mt-0 p-6 w-full flex justify-center">
            <div className="flex flex-col w-full sm:w-[60vw] sm:mt-6 mt-6  ">
                <h2 className="text-2xl font-semibold mb-4 text-[#1B3D68] font-[Montserrat]">Post a New Job</h2>
                <form onSubmit={handleSubmit} className="w-full bg-white p-6 shadow-md rounded-lg">
                    <div className="mb-4">
                        <label htmlFor="position" className="block text-sm font-medium font-[Montserrat]  text-gray-700">Position</label>
                        <input
                            type="text"
                            id="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  focus:border-[#1B3D68] focus:ring focus:ring-[#1B3D68] focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="areaOfInterest" className="block text-sm font-medium font-[Montserrat]  text-gray-700">Area of Interest</label>
                        <input
                            type="text"
                            id="areaOfInterest"
                            value={area_of_interest}
                            onChange={(e) => setArea_of_interest(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#1B3D68] focus:ring focus:ring-[#1B3D68] focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium font-[Montserrat]  text-gray-700">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#1B3D68] focus:ring focus:ring-[#1B3D68] focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-sm font-medium font-[Montserrat]  text-gray-700">Experience Required</label>
                        <input
                            type="text"
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#1B3D68] focus:ring focus:ring-[#1B3D68] focus:ring-opacity-50"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-[#1B3D68] font-[Montserrat]  hover:bg-[#139898] text-white font-bold py-2 px-4 rounded"
                            disabled={loading}
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </button>
                    </div>
                    {success && <div className="mt-4 text-green-600">{success}</div>}
                    {error && <div className="mt-4 text-red-600">{error}</div>}
                </form>
            </div>
        </div>
        </div>
    );
};

export default AllJobPosition;
