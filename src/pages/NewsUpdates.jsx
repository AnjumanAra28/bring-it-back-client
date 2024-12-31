import { Link } from "react-router-dom";

const NewsUpdates = () => {
  return (
    <div>
      <section className=" py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Latest News & Updates
        </h2>

        <div className="w-10/12 mx-auto px-4">
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="feature-image.jpg"
                alt="Feature Image"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  New Feature Alert: Lost Item Notifications
                </h3>
                <p className="text-gray-600 mb-4">
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="police-partnership.jpg"
                alt="Police Partnership"
                className="w-full h-64 object-cover"
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
                <Link
                  className="text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* See All News Button */}
          <Link
            to="/news"
            className="mt-8 inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            See All News
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;
