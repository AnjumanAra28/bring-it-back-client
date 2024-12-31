import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const LostAndFound = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [allItems, setAllItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5000/allItems?search=${search}`
        );
        setAllItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllItems();
  }, [search]);

  const handleReset =()=>{
    setSearch('')
  }

  return (
    <div>
      <Helmet>
        <title>All Items - Bring It Back</title>
        <meta
          name="description"
          content="Welcome to the lost and found all items page of My Website"
        />
        <meta name="keywords" content="React, Helmet, SEO, Example" />
      </Helmet>

      <div className="flex justify-center gap-4 my-4">
        {/* search input field */}
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter item Title"
            aria-label="Enter item Title"
          />

          <button className="btn ">
            Search
          </button>
        </div>

        {/* reset button */}
        <button
          onClick={handleReset}
          className="btn"
        >
          Reset
        </button>
      </div>
 
  {/* render all items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 mt-3">
        {allItems.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <div className="mt-4">
                <p>
                  <span className="font-bold">Category: {item.category}</span>
                </p>
                <p>
                  <span className="font-bold">Location:</span> {item.location}
                </p>
                <p>
                  <span className="font-bold">Date:</span>{" "}
                  {format(new Date(item.date), "P")}
                </p>
                <p>
                  <span className="font-bold">Post Type:</span> {item.postType}
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link
                  to={`/items/${item._id}`}
                  className="btn bg-cyan-600 text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;
