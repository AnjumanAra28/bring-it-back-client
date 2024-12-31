import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddItems = () => {
  const navigate = useNavigate();
  const { user, loading, setLoading } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const postType = form.postType.value;
    const thumbnail = form.thumbnail.value;

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
    };

    try {
      await axios.post(`http://localhost:5000/addItems`, itemData , {withCredentials:true});
      // Reset the form
      form.reset();

      Swal.fire("Item added successfully!");
    } catch (error) {
      console.error(error);
      Swal.fire("Failed to add the item.");
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-12 max-w-screen-md mx-auto">
      <Helmet>
        <title>Add Items - Bring It Back</title>
        <meta
          name="description"
          content="Welcome to the add items of My Website"
        />
        <meta name="keywords" content="React, Helmet, SEO, Example" />
      </Helmet>

      <section className="p-4 md:p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl text-center font-semibold text-gray-700 capitalize">
          Add Lost & Found Item
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option value="Pets">Pets</option>
                <option value="Documents">Documents</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="thumbnail">
                Thumbnail
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="url"
                placeholder="Thumbnail Url"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Date </label>
              <br />
              <DatePicker
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 leading-5 text-white bg-cyan-700 rounded-md"
            >
              Add Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddItems;


// https://ibb.co/MVdNT7S - puppy
// https://ibb.co/Ykm9g4V - air pod
// https://ibb.co/pPfRq8F - wallet
// https://ibb.co/z5W0nb3 - phone
// https://ibb.co/prjt9jW - keys
// https://ibb.co/Hpyk4BP - bag
// https://ibb.co/q9jsQsG - glasses
// https://ibb.co/vd3BrwN - cat