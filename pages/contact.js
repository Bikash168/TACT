import Layout from "../components/Layout";

export default function ContactUs() {
  return (
    <Layout title="Contact Us | Trident Group of Institutions">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-600">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Reach out to us for any queries or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Get in Touch</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-700">Campus Address</h4>
            <p className="mt-4 text-gray-600">
              📍 Trident Group of Institutions,  
              Chandaka Industrial Estate,  
              Bhubaneswar, Odisha - 751024
            </p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-700">Contact Details</h4>
            <p className="mt-4 text-gray-600">📞 Phone: +91-12345-67890</p>
            <p className="mt-2 text-gray-600">📧 Email: contact@trident.ac.in</p>
            <p className="mt-2 text-gray-600">🌐 Website: www.trident.ac.in</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h3>
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
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here"
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

      {/* Map Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Find Us on the Map</h3>
        <div className="w-full h-96">
          <iframe
            className="w-full h-full border-0 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8388701927926!2d85.8109288153701!3d20.296059786405245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a073bb3c29%3A0xffc8ae8a9cb88b77!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1678354675724!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
