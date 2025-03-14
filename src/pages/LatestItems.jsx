import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const LatestItems = () => {
  const [latestItems, setLatestItems] = useState([]);

  const fetchAllItems = async () => {
    const { data } = await axios.get(`https://bring-it-back-server.vercel.app/items`);
    setLatestItems(data);
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <div className="my-14 w-11/12 mx-auto">
      <div>
        <h1 className="text-3xl text-center font-bold my-4">
          Latest Lost & Found Items
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestItems.map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
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
                <Link to={`/items/${item._id}`} className="btn bg-cyan-600 text-white">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-5">
        <Link to={'/allItems'} className="btn bg-cyan-600 text-white text-lg">See All</Link>
      </div>
    </div>
  );
};

export default LatestItems;
