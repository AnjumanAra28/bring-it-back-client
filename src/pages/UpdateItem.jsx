import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateItem = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [date, setDate] = useState(new Date());

  //   fetch item by id
  const fetchItem = async () => {
    const { data } = await axios.get(`https://bring-it-back-server.vercel.app/updateItem/${id}`,{withCredentials:true});
    setItem(data);

    if (data.date) {
      setDate(new Date(data.date));
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const postType = form.postType.value;
    const thumbnail = form.thumbnail.value;
    const status = form.status.value;

    const itemData = {
      title,
      description,
      category,
      location,
      date: date.toISOString(),
      postType,
      email: user?.email,
      displayName: user?.displayName,
      thumbnail,
      status,
    };

    try {
      await axios.put(`https://bring-it-back-server.vercel.app/updateItem/${id}`, itemData, { withCredentials: true });

      // Reset the form
      form.reset();
      Swal.fire("Item updated successfully!");
      fetchItem();
    } catch (error) {
      console.error(error);
      Swal.fire("Failed to update the item.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-12 max-w-screen-md mx-auto">
      <Helmet>
        <title>Update Item - Bring It Back</title>
        <meta
          name="description"
          content="Welcome to the update item Page of My Website"
        />
        <meta name="keywords" content="React, Helmet, SEO, Example" />
      </Helmet>

      <section className="p-4 md:p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize">
          Update The Item
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="email"
                name="email"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700" htmlFor="postType">
                Post Type
              </label>
              <select
                id="postType"
                name="postType"
                defaultValue={item.postType}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={item.category}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option value="Pets">Pets</option>
                <option value="Documents">Documents</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* title */}
            <div>
              <label className="text-gray-700" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                name="title"
                defaultValue={item.title}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* location update */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                defaultValue={item.location}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* thumbnail */}
            <div>
              <label className="text-gray-700" htmlFor="thumbnail">
                Thumbnail
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                defaultValue={item.thumbnail}
                type="url"
                placeholder="Thumbnail Url"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>

            {/* update date */}
            <div>
              <label className="text-gray-700">Date </label>
              <br />
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>

          {/* status update */}
          <div>
            <label className="text-gray-700" htmlFor="title">
              Status
            </label>
            <input
              id="status"
              name="status"
              defaultValue={item?.status}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          {/* update description */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={item.description}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 leading-5 text-white bg-cyan-700 rounded-md"
            >
              Update Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateItem;
