import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BaseUrl } from "./BaseUrl";
import Footer from "./home/Footer";
import DataBaseAdministrator from "./DataBaseAdministrator";

const JobOpenings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleReadMore = (item) => {
    setSelectedJob(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/getAllJobPosts`);
        setData(response.data.data);
        
      } catch (error) {
        console.error("There was an error fetching the job posts!", error);
        setError("Failed to fetch job posts");

        alert("data is not found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (data.length === 0) {
    return (
      <div className="flex justify-center ">
        <p className="text-xl font-semibold text-[#1B3D68] font-[Montserrat]">
          No blogs found.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-2">
            <h3 className="text-2xl  md:text-3xl  font-semibold mb-4 text-[#1B3D68] font-[Montserrat]">
              Current Openings
            </h3>
            <p className="    mb-10 text-[#1B3D68]  text-xl font-[Montserrat]">
              We believe in providing much more than just a job. We endeavor to
              give you a full-fledged growing career. If you crave to be part of
              a team that values your passion.
            </p>
            <div className="w-full mx-auto overflow-x-auto">
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr className="text-gray-600 bg-gray-200">
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">
                      Position
                    </th>
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">
                      Description
                    </th>
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">
                      Experience
                    </th>
                    <th className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">
                      Apply
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">
                        {item.position}
                      </td>
                      <td
                        className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat] cursor-pointer"
                        onClick={() => handleReadMore(item)}
                      >
                        Read More
                      </td>
                      <td className="py-2 px-4 border-b text-left text-[#1B3D68] font-[Montserrat]">
                        {item.experience}
                      </td>
                      <td className="px-4 py-2 text-left border-b">
                        <Link
                          to={`/jobform/${item.position}`}
                          className="bg-[#1B3D68] hover:bg-[#139898] text-white font-[Montserrat] py-1 px-2 rounded"
                        >
                          Apply
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-3/4 p-6 bg-white rounded shadow-lg md:w-1/2 lg:w-1/3">
              <button
                onClick={closeModal}
                className="absolute text-2xl text-gray-500 top-2 right-2 hover:text-gray-700"
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold text-[#1B3D68] mb-4">
                {selectedJob.position}
              </h2>

              <p className="mb-4 text-gray-700">
                <strong>Description:</strong> {selectedJob.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobOpenings;
