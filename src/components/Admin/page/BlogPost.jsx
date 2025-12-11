import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [blog, setBlog] = useState({
    title: '',
    description: '',
    image: '',
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/getAllBlogs`);
        console.log(response.data.data);
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BaseUrl}/deleteblogs/${id}`);
      setPosts(posts.filter((post) => post.blogs_Items_id !== id));
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  const handleUpdate = (id) => {
    const blogToEdit = posts.find((post) => post.blogs_Items_id === id);
    setBlog({
      title: blogToEdit.title,
      description: blogToEdit.description,
      image: blogToEdit.image,
      tags: blogToEdit.tags,
    });
    setEditingId(id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${BaseUrl}/updateblogs/${editingId}`, blog);
        setPosts(posts.map((post) => (post.blogs_Items_id === editingId ? { ...post, ...blog } : post)));
        setEditingId(null);
        setBlog({ title: '', description: '', image: '', tags: '' });
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className='flex justify-center px-10'>
    <div className="absolute top-0 left-0 md:left-[150px] mt-40 md:mt-0 p-6  w-full flex justify-center">
          <div className='flex flex-col w-full max-w-3xl  mt-4   '>
        <div className="overflow-x-auto mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#1B3D68] font-[Montserrat] mb-4">All Blogs</h1>
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-3 px-6 border-b font-[Montserrat] border-gray-300 text-left">Image</th>
                <th className="py-3 px-6 border-b font-[Montserrat] border-gray-300 text-left w-28">Title</th>
                <th className="py-3 px-6 border-b font-[Montserrat] border-gray-300 text-left">Date</th>
                <th className="py-3 px-6 border-b font-[Montserrat] border-gray-300 text-left">Description</th>
                <th className="py-3 px-6 border-b font-[Montserrat] border-gray-300 text-left">Tags</th>
                {isAdmin && (
                  <th className="py-3 px-28 border-b font-[Montserrat] border-gray-300 text-left">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.blogs_Items_id}>
                  <td className="py-3 px-6 border-b border-gray-300">
                    <img src={post.image} alt={post.title} className="w-60 h-28 object-cover" />
                  </td>
                  <td className="py-3 px-2 border-b font-[Montserrat] border-gray-300 w-28">
                    {post.title}
                  </td>
                  <td className="py-3 px-2 border-b font-[Montserrat] border-gray-300">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-2 border-b font-[Montserrat] border-gray-300 w-28">
                    {post.description}
                  </td>
                  <td className="py-3 px-2 border-b font-[Montserrat] border-gray-300 w-28">
                    {post.tags}
                  </td>
                  {isAdmin && (
                    <td className="py-3 px-6 border-gray-300 flex space-x-4">
                      <button
                        onClick={() => handleUpdate(post.blogs_Items_id)}
                        className="bg-[#1B3D68] hover:bg-[#139898] text-white font-[Montserrat] px-4 py-2 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(post.blogs_Items_id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-[Montserrat] px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
 
  );
};

export default BlogPost;
