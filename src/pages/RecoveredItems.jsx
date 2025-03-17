import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { TfiLayoutGrid3Alt, TfiLayoutListPost } from "react-icons/tfi";

const RecoveredItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [ loading, setLoading ] = useState(false)
  const [tableLayout, setTableLayout] = useState(true);

  const fetchRecoveredItems = async () => {
    setLoading(true);
    const {data} = await axios.get(`https://bring-it-back-server.vercel.app/recoveredItems`, {
      withCredentials: true,
    });
    setRecoveredItems(data);
  };

  useEffect(() => {
    fetchRecoveredItems();
    setLoading(false);
  }, []);

  if (recoveredItems.length === 0) {
    return <p className="pt-24 text-xl font-semibold text-center">No items to show</p>;
  }
  return (
    <div className="my-10 ">
      <div className="flex gap-2 justify-end">
        <button
          className="mb-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
          onClick={() => setTableLayout(true)}
        >
          <TfiLayoutListPost />
        </button>
        <button
          className="mb-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
          onClick={() => setTableLayout(false)}
        >
         <TfiLayoutGrid3Alt />
        </button>
      </div>

      {tableLayout ? (
        // Table Layout
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-xl text-neutral">
                <th></th>
                <th>Title</th>
                <th>Recovered Location</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {recoveredItems.map((item, idx) => (
                <tr key={item._id} className="py-0 md:py-auto hover">
                  <th>{idx + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.formData.recoveredLocation}</td>
                  <td>{item.category}</td>               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card Layout
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recoveredItems.map((item) => (
            <div
              key={item._id}
              className="p-4 border rounded shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">Recovered Location: {item.formData.recoveredLocation}</p>
              <p className="text-gray-600">Category: {item.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
