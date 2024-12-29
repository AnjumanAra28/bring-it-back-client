import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const MyItems = () => {
  const { user } = useContext(AuthContext);

  const [myItems, setMyItems] = useState([]);

  const fetchMyItems = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/allItems/${user?.email}`
    );
    setMyItems(data);
  };

  useEffect(() => {
    fetchMyItems();
  }, [user?.email]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/allItems/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to get it back!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I Am Sure, Please delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
            }
          });
        }
        const remaining = myItems.filter((item) => item._id !== _id);
        setMyItems(remaining);
      });
  };

  return (
    <div className="w-full mx-3 lg:w-10/12  lg:mx-auto">
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-neutral">
              <th></th>
              <th>Title</th>
              <th>Post Type</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}

            {myItems.map((item, idx) => (
              <tr key={item._id} className="py-0 md:py-auto hover">
                <th>{idx + 1}</th>
                <td>{item.title}</td>
                <td>{item.postType}</td>
                <td>{item.category}</td>
                <td className="flex gap-4">
                  <Link to={`/updateItem/${item._id}`}>
                    <button className="btn">
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
// to={`/updateCampaign/${item._id}`}
