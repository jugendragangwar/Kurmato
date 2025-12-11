 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

const ContactFormdata = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/getallcontactform`);
        setContactData(response.data.data);
      } catch (error) {
        console.error("Error fetching contact us data:", error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <div className='flex justify-center px-10'>
    <div className="absolute top-0 left-0 md:left-[268px] mt-40 md:mt-0 p-6 w-full  ">
    <h1 className="text-2xl font-bold font-[Montserrat] text-[#1B3D68] mb-4">Contact Us Data</h1>
    <div className="overflow-x-auto " style={{maxHeight:"calc(100vh - 150px)"}}>
      <table className=" w-full sm:w-[80%] bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-[#1B3D68] uppercase text-sm leading-normal">
            <th className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">ID</th>
            <th className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">Name</th>
            <th className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">Email</th>
            <th className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">Phone</th>
            <th className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">Message</th>
            <th className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">Created At</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {contactData.map((contact) => (
            <tr key={contact.contact_us_id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">{contact.contact_us_id}</td>
              <td className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">{contact.name}</td>
              <td className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">{contact.email}</td>
              <td className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">{contact.phone}</td>
              <td className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">{contact.message}</td>
              <td className="py-3 px-6 font-[Montserrat] text-[#1B3D68] text-left">{new Date(contact.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </div>
  );
};

export default ContactFormdata;

