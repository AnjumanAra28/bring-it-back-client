import { Link } from "react-router-dom";
import cardNews1 from "../assets/cardNews1.jpg";
import cardNews2 from "../assets/cardNews2.jpg";

const NewsUpdates = () => {
  return (
    <div>
      <section className=" text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Latest News & Updates
        </h2>

        <div className="w-10/12 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-evenly">
              <img
                src={cardNews1}
                alt="Feature Image"
                className="w-[150px] h-[150px] object-cover pt-5"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  New Feature Alert: Lost Item Notifications
                </h3>
                <p className="text-gray-600">
                  We’ve just launched a new feature that lets users set up
                  notifications for lost items in their area. Stay informed and
                  never miss an update!
                </p>
                <Link
                  to="/news/feature-alert"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-evenly">
              <img
                src={cardNews2}
                alt="Police Partnership"
                className="-[200px] h-[200px] object-cover pt-5"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Partnering with Local Police Departments
                </h3>
                <p className="text-gray-600 mb-4">
                  We are excited to announce a new partnership with local police
                  departments to help recover lost items faster and more
                  efficiently.
                </p>
                <Link className="text-cyan-600 hover:text-cyan-700 font-semibold">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;
