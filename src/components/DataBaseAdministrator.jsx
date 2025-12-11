import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "./BaseUrl";
import Footer from "./home/Footer";
const DataBaseAdministrator = () => {
  const { jobpost_id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/getJobPostById/${jobpost_id}`
        );
        setJobData(response.data.data);
      } catch (error) {
        console.error("Error fetching job post:", error.message);
        setError("Failed to fetch job post");
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, [jobpost_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="   ">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-6">
            <h2 className="text-2xl text-center font-semibold mb-4 text-[#1B3D68] font-[Montserrat]">
              {jobData.position}
            </h2>

            <div className="max-w-4xl mx-auto ">
              <h2 className="text-xl font-semibold mb-3 text-[#1B3D68] font-[Montserrat]">
                {" "}
                Area Of Interest :
              </h2>
              <p className="text-lg mb-4 text-[#1B3D68] font-[Montserrat]">
                {jobData.area_of_interest}
              </p>

              <h4 className="text-3xl font-semibold mb-3 text-[#1B3D68] font-[Montserrat]">
                Description
              </h4>
              <p className="text-lg mb-6 text-[#1B3D68] font-[Montserrat]">
                {jobData.description}
              </p>

              <div className="flex justify-center items-center sm:mt-10 mt-10">
                <Link to={"/jobform"} className=" ">
                  <button className="text-xl    bg-[#1B3D68] hover:bg-[#139898] text-white  px-8 py-2 rounded-xl font-[Montserrat]">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataBaseAdministrator;
