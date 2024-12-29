import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ItemDetails = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext)
  
  const [item, setItem] = useState(null);
  
  

  const fetchItem = async () => {
    const { data } = await axios.get(`http://localhost:5000/items/${id}`);
    setItem(data);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <div>
      <div className="hero bg-white shadow-2xl  py-16 w-10/12 mx-auto rounded-2xl my-10">
        <div className="hero-content gap-10 flex-col lg:flex-row">
          <img
            src={item?.thumbnail}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-8/12">
            <h1 className="text-4xl font-bold mb-3">{item?.title}</h1>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Category :</span>{" "}
                {item?.category}
              </p>
              <p>
                <span className="font-semibold">Post Type :</span>{" "}
                {item?.postType}
              </p>
              <p>
                <span className="font-semibold">Location :</span>{" "}
                {item?.location}
              </p>
            </div>
            <p className=" text-gray-700 my-3">
              <span className="font-semibold">Description :</span>{" "}
              {item?.description}
            </p>
            {/* conditional button */}
            <button className="btn bg-cyan-600 text-white mt-3">
              {item?.postType === "Lost" ? "Found This!" : "This is Mine!"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
