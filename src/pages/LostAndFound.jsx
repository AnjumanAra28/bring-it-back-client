import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";

const LostAndFound = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [allItems, setAllItems] = useState([]);

  const fetchAllItems = async () => {
    setLoading(true);
    const { data } = await axios.get(`http://localhost:5000/allItems`);
    setAllItems(data);
  };

  useEffect(() => {
    fetchAllItems();
    setLoading(false);
  }, []);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
        {allItems.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              {/* <p className="text-gray-600">{item.description}</p> */}
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
