import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";
import Footer from "./Footer";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/getAllBlogs`);
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-[#1B3D68] font-[Montserrat]">
          No blogs found.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto p-4 mt-10">
        <h1 className="text-4xl font-bold text-[#1B3D68] font-[Montserrat] mb-6">
          Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.blogs_Items_id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl text-[#1B3D68] font-[Montserrat] font-semibold mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <p className="text-[#1B3D68] font-[Montserrat]">
                  {post.description}
                </p>
                <p className="text-gray-500 mt-2">Author: {post.author}</p>
                <p className="text-gray-500">Tags: {post.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
