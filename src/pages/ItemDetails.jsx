import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

const ItemDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [recoveredLocation, setRecoveredLocation] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchItem = async () => {
    const { data } = await axios.get(`http://localhost:5000/items/${id}`);
    setItem(data);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      recoveredDate,
      recoveredLocation,
      recoveredBy : {
         name: user.displayName,
         email:user.email,
      },
      status:'recovered'
    };
    console.log(formData);

    // Perform API call to save the data
    // axios.post('your-api-endpoint', formData).then(() => { ... })

    closeModal();
  };

  return (
    <div>
      <div className="hero bg-white shadow-2xl  py-16 w-10/12 mx-auto rounded-2xl my-10">
        <div className="hero-content gap-10 flex-col lg:flex-row">
          <img
            src={item?.thumbnail}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-8/12">
            {/* title */}
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
            <button
              onClick={openModal}
              className="btn bg-cyan-600 text-white mt-3"
            >
              {item?.postType === "Lost" ? "Found This!" : "This is Mine!"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Recovery Form Modal"
          className="rounded-lg bg-white p-6 shadow-xl w-1/2"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User Information */}
            <div className="flex items-center gap-4">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-16 h-16 rounded-full border"
              />
              <div>
                <p className="text-gray-700 font-semibold">
                  {user?.displayName}
                </p>
                <p className="text-gray-500 text-sm">{user?.email}</p>
              </div>
            </div>

            {/* Recovered Location */}
            <div>
              <label className="block text-gray-700 mb-2">
                Recovered Location
              </label>
              <input
                type="text"
                placeholder="Enter location"
                value={recoveredLocation}
                onChange={(e) => setRecoveredLocation(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            {/* Recovered Date */}
            <div>
              <label className="block text-gray-700 mb-2">Recovered Date</label>
              <DatePicker
                selected={recoveredDate}
                onChange={(date) => setRecoveredDate(date)}
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button type="submit" className="btn bg-cyan-600 text-white">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default ItemDetails;
