import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { BaseUrl } from '../../BaseUrl';

const CreateBlogs = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('tags', tags);
    formData.append('image', image);

    try {
      const response = await axios.post(`${BaseUrl}/postBlogs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Blog posted successfully:', response.data);
      setTitle('')
      setDescription('')
      setAuthor('')
      setTags('')
      setImage(null)
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  };

  return (
    <>
    
    <div className='flex justify-center '>
    <div className="absolute top-0 left-0 md:left-[100px] mt-40 md:mt-0 p-6 w-full flex justify-center">
          <div className='flex flex-col w-full max-w-3xl  mt-4  sm:px-10'>
          <h1 className="text-2xl font-bold text-[#1B3D68] font-[Montserrat] mb-4">Create a Blog</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full   bg-white p-6 shadow-md rounded-lg">
              <div>
                  <label htmlFor="title" className="block text-sm font-medium font-[Montserrat]  text-gray-700">
                      Title
                  </label>
                  <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required />
              </div>

              <div>
                  <label htmlFor="description" className="block text-sm font-[Montserrat]  font-medium text-gray-700">
                      Description
                  </label>
                  <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required />
              </div>

              <div>
                  <label htmlFor="author" className="block text-sm font-[Montserrat]  font-medium text-gray-700">
                      Author
                  </label>
                  <input
                      type="text"
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required />
              </div>

              <div>
                  <label htmlFor="tags" className="block text-sm font-[Montserrat]  font-medium text-gray-700">
                      Tags
                  </label>
                  <input
                      type="text"
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required />
              </div>

              <div>
                  <label htmlFor="image" className="block text-sm font-[Montserrat]  font-medium text-gray-700">
                      Image
                  </label>
                  <input
                      type="file"
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required />
              </div>

              <div>
                  <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 font-[Montserrat]  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1B3D68] hover:bg-[#0c7686] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                      Post Blog
                  </button>
              </div>
          </form>
          </div>
          </div>
      </div></>
  );
};

export default CreateBlogs;
