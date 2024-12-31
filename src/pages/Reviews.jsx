import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const Reviews = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [reviewsData, setReviewsData] = useState([]);

  const fetchMyItems = async () => {
    setLoading(true);
    const { data } = await axios.get(`https://bring-it-back-server.vercel.app/reviews`);
    setReviewsData(data);
  };

  useEffect(() => {
    fetchMyItems();
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="w-10/12 mx-auto my-16 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <p className="italic text-gray-600">"{review.quote}"</p>
              <p className="mt-4 font-semibold text-gray-800">
                - {review.name}, {review.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
