import axios from "axios";
import { useEffect, useState } from "react";

const RecoveredItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);

  const fetchRecoveredItems = async () => {
    const { data } = await axios.get(`http://localhost:5000/recoveredItems`);
    setRecoveredItems(data);
  };

  useEffect(() => {
    fetchRecoveredItems();
  }, []);

 if(recoveredItems.length<0){
     return <p>No items to show</p>
 }
  return (

    <div className="w-full mx-3 lg:w-8/12  lg:mx-auto">
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-neutral">
              <th></th>
              <th>Title</th>
              <th>Post Type</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}

            {recoveredItems.map((item, idx) => (
              <tr key={item._id} className="py-0 md:py-auto hover">
                <th>{idx + 1}</th>
                <td>{item.title}</td>
                <td>{item.postType}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecoveredItems;
