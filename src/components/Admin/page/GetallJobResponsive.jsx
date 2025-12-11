import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";

const GetallJobResponsive = () => {
  const [jobResponses, setJobResponses] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/getalljobresponse`);
        setJobResponses(response.data.data);
      } catch (error) {
        console.error("Error fetching job responses:", error);
      }
    };

    fetchResponse();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="absolute top-0 left-0 md:left-[280px] mt-40 md:mt-0 p-6 w-full  ">
        <h1 className="text-2xl font-bold font-[Montserrat] text-[#1B3D68] mb-4">
          Job Responses
        </h1>
        <div className="overflow-x-auto">
          <table className=" w-full sm:w-[80%] bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-[#1B3D68] uppercase text-sm leading-normal">
                <th className="py-3 px-6 font-[Montserrat] text-left">
                  Job ID
                </th>
                <th className="py-3 px-6 font-[Montserrat] text-left">
                  Position
                </th>
                <th className="py-3 px-6 font-[Montserrat] text-left">Name</th>
                <th className="py-3 px-6 font-[Montserrat] text-left">DOB</th>
                <th className="py-3 px-6 font-[Montserrat] text-left">
                  Gender
                </th>
                <th className="py-3 px-6 font-[Montserrat] text-left">
                  Experience
                </th>
                <th className="py-3 px-6 font-[Montserrat] text-left">
                  Contact
                </th>
                <th className="py-3 px-6 font-[Montserrat] text-left">
                  Resume
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {jobResponses.map((response) => (
                <tr
                  key={response.jobresponse_id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    {response.jobresponse_id}
                  </td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    {response.position_applied_for}
                  </td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">{`${response.first_name} ${response.last_name}`}</td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    {new Date(response.dob).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    {response.gender}
                  </td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    {response.experience} years
                  </td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    {response.contact_mobile}
                  </td>
                  <td className="py-3 px-6 font-[Montserrat] text-left">
                    <a
                      href={response.upload_resume}
                      className="text-[#1B3D68] hover:text-[#139898] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetallJobResponsive;
