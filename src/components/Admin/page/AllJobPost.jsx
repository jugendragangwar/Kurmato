import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BaseUrl } from '../../BaseUrl';

const AllJobPost = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/getAllJobPosts`);
        setData(response.data.data);
      } catch (error) {
        console.error('There was an error fetching the job posts!', error);
        setError('Failed to fetch job posts');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchJobPostById = async (jobpost_id) => {
    try {
      const response = await axios.get(`${BaseUrl}/getJobPostById/${jobpost_id}`);
      setSelectedJob(response.data.data);
    } catch (error) {
      console.error('There was an error fetching the job post by ID!', error);
      alert('Failed to fetch job post details');
    }
  };

  const handleDelete = async (jobpost_id) => {
    try {
      await axios.delete(`${BaseUrl}/deleteJobPost/${jobpost_id}`);
      alert('Job post deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('There was an error deleting the job post!', error);
      alert('Failed to delete job post');
    }
  };

  const handleEditClick = async (jobpost_id) => {
    await fetchJobPostById(jobpost_id);
  };

  const handleUpdate = async () => {
    const updatedData = {
      jobpost_id: selectedJob.jobpost_id,
      position: selectedJob.position,
      area_of_interest: selectedJob.area_of_interest,
      description: selectedJob.description,
      experience: selectedJob.experience,
    };

    try {
      await axios.put(`${BaseUrl}/updateJobPosition/${selectedJob.jobpost_id}`, updatedData);
      alert('Job post updated successfully');
      window.location.reload('/');
    } catch (error) {
      console.error('There was an error updating the job post!', error);
      alert('Failed to update job post');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
       <div className='flex justify-center px-10'>
    <div className="absolute top-0 left-0 md:left-[230px] mt-40 md:mt-0 p-3  w-full flex justify-center">
          <div className='flex flex-col w-full max-w-3xl  mt-4   '>
          <div className="w-full max-w-6xl p-3">
            <h2 className="text-3xl font-semibold mb-6 text-[#1B3D68] font-[Montserrat]">Admin - All Job Posts</h2>
            <div className="overflow-x-auto mx-auto w-full">
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-600">
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">Position</th>
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">Experience</th>
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">Edit</th>
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">{item.position}</td>
                      <td className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">{item.experience}</td>
                      <td className="py-2 px-4 border-b text-left">
                        <button
                          onClick={() => handleEditClick(item.jobpost_id)}
                          className="bg-[#1B3D68] hover:bg-[#139898] text-white font-bold py-1 px-2 rounded"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-left">
                        <button
                          onClick={() => handleDelete(item.jobpost_id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit Form */}
          {selectedJob && (
            <div className="p-6 bg-white shadow-md mt-4 rounded-md">
              <h3 className="text-xl font-semibold mb-4 text-[#1B3D68]">Edit Job Post</h3>
              <label htmlFor="description" className="block text-sm font-medium font-[Montserrat] text-gray-700">
            Position
                </label>
              <input
                type="text"
                value={selectedJob.position}
                onChange={(e) => setSelectedJob({ ...selectedJob, position: e.target.value })}
                className="border rounded px-4 py-2 mb-4 w-full"
                placeholder="Position"
              />
               <label htmlFor="description" className="block text-sm font-medium font-[Montserrat] text-gray-700">
                 Area of Interest
                </label>
              <input
                type="text"
                value={selectedJob.area_of_interest}
                onChange={(e) => setSelectedJob({ ...selectedJob, area_of_interest: e.target.value })}
                className="border rounded px-4 py-2 mb-4 w-full"
                placeholder="Area of Interest"
              />
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium font-[Montserrat] text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  value={selectedJob.description}
                  onChange={(e) => setSelectedJob({ ...selectedJob, description: e.target.value })}
                  required
                  rows="4"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#1B3D68] focus:ring focus:ring-[#1B3D68] focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="experience" className="block text-sm font-medium font-[Montserrat] text-gray-700">
                  Experience Required
                </label>
                <input
                  type="text"
                  id="experience"
                  value={selectedJob.experience}
                  onChange={(e) => setSelectedJob({ ...selectedJob, experience: e.target.value })}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-[#1B3D68] focus:ring focus:ring-[#1B3D68] focus:ring-opacity-50"
                />
              </div>
              <button
                onClick={handleUpdate}
                className="bg-[#1B3D68] hover:bg-[#139898] text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default AllJobPost;
