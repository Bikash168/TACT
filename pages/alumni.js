import Layout from "../components/Layout";

export default function AlumniPage() {
  return (
    <Layout title="Alumni | Trident Group of Institutions">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-600">Welcome Alumni!</h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect, share, and grow with the Trident Alumni Association.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition">
            Join the Community
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Networking</h3>
          <p className="mt-2 text-gray-600">
            Reconnect with old classmates and expand your professional network through our alumni platform.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Events</h3>
          <p className="mt-2 text-gray-600">
            Stay updated about reunions, conferences, and exclusive alumni meetups.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Mentorship</h3>
          <p className="mt-2 text-gray-600">
            Share your journey or seek guidance from experienced alumni mentors.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-12 bg-blue-600 text-white py-12 text-center">
        <h3 className="text-3xl font-bold">Become a Proud Member of the TAA!</h3>
        <p className="mt-4 text-lg">
          Be part of our global alumni network and create lasting memories.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100 transition">
          Register Now
        </button>
      </section>
    </Layout>
  );
}
