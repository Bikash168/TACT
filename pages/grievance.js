import Layout from "../components/Layout";

export default function GrievanceRedressal() {
  return (
    <Layout title="Grievance Redressal | Trident Group of Institutions">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-600">Grievance Redressal</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to addressing your concerns and ensuring a fair resolution.
          </p>
        </div>
      </section>

      {/* Grievance Committee Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Grievance Redressal Committee</h3>
        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-700">
            The Grievance Redressal Committee (GRC) is dedicated to resolving grievances from students, faculty, and other stakeholders in a timely and effective manner. The committee aims to maintain a harmonious environment by addressing concerns with transparency and professionalism.
          </p>
          <ul className="list-disc mt-4 ml-8 text-gray-600">
            <li>Listening to and understanding grievances.</li>
            <li>Ensuring confidentiality and fair treatment.</li>
            <li>Providing prompt resolutions and feedback.</li>
          </ul>
        </div>
      </section>

      {/* Grievance Form Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Submit Your Grievance</h3>
        <form className="bg-gray-50 shadow p-6 rounded-lg space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="grievance">
              Your Grievance
            </label>
            <textarea
              id="grievance"
              rows="5"
              placeholder="Write your grievance here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="mt-12 bg-blue-50 py-8 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-600 text-center mb-6">Contact Us</h3>
        <div className="text-center text-gray-700">
          <p>📍 Trident Group of Institutions, Bhubaneswar</p>
          <p>📧 Email: grievance@trident.ac.in</p>
          <p>📞 Phone: +91-12345-67890</p>
        </div>
      </section>
    </Layout>
  );
}
