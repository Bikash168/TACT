import Head from 'next/head';
import Layout from '../components/Layout';

export default function Facilities() {
  return (
    <Layout>
      <Head>
        <title>Facilities - Trident Group of Institutions</title>
        <meta name="description" content="Explore the state-of-the-art facilities offered at Trident Group of Institutions, designed to enhance the academic, extracurricular, and overall student experience." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 text-gray-800">

        {/* Hero Section */}
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Our Facilities</h1>
            <p className="mt-4 text-lg">A Modern Campus for Holistic Development</p>
          </div>
        </section>

        {/* Introduction to Facilities */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">State-of-the-Art Infrastructure</h2>
          <p className="mt-4 text-center text-lg">
            Trident Group of Institutions offers world-class infrastructure and facilities that provide an ideal environment for learning, growth, and development. From modern classrooms to fully-equipped laboratories, our facilities are designed to support both academic and extracurricular pursuits.
          </p>
        </section>

        {/* Facilities Sections */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Key Facilities</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Classroom */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Modern Classrooms</h3>
              <p className="mt-4 text-lg">Our classrooms are designed with state-of-the-art technology to facilitate interactive and dynamic learning experiences. With multimedia projectors and comfortable seating, students can engage in an immersive academic environment.</p>
            </div>

            {/* Library */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Spacious Library</h3>
              <p className="mt-4 text-lg">The library houses an extensive collection of books, journals, and digital resources that cater to the academic needs of students. It provides a peaceful and conducive environment for studying and research.</p>
            </div>

            {/* Laboratories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Well-Equipped Laboratories</h3>
              <p className="mt-4 text-lg">Our labs are equipped with the latest tools and technologies for students to gain hands-on experience. We offer specialized labs for engineering, biotechnology, computer science, and more.</p>
            </div>

            {/* Sports Facilities */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Sports and Recreation</h3>
              <p className="mt-4 text-lg">Our campus offers a range of sports facilities, including indoor and outdoor games. We encourage students to stay active and participate in various sports and recreational activities for their overall development.</p>
            </div>

            {/* Hostel */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Comfortable Hostel</h3>
              <p className="mt-4 text-lg">We offer well-furnished hostel accommodation for both male and female students. The hostels are equipped with modern amenities, ensuring a safe and comfortable living experience for students away from home.</p>
            </div>

            {/* Cafeteria */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Cafeteria</h3>
              <p className="mt-4 text-lg">Our cafeteria provides a variety of nutritious and delicious meals catering to different tastes. The spacious and hygienic environment encourages students to relax and socialize during breaks.</p>
            </div>

          </div>
        </section>

        {/* Other Facilities */}
        <section className="container mx-auto py-12 px-6 md:px-12 bg-indigo-100">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Other Facilities</h2>
          <p className="mt-4 text-center text-lg">
            In addition to the core facilities, we also offer several other student-focused amenities to ensure a well-rounded experience. From medical facilities to transport services, our goal is to make campus life as convenient as possible.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Medical Center</h3>
              <p className="mt-4 text-lg">We have a fully equipped medical center with qualified doctors and nurses, offering first-aid services, regular health checkups, and emergency medical support to students and staff.</p>
            </div>

            {/* Transport */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Transport Services</h3>
              <p className="mt-4 text-lg">Our institution offers efficient and safe transport services for students and staff, with a fleet of buses covering key routes in the city and surrounding areas.</p>
            </div>

            {/* Wi-Fi */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">High-Speed Wi-Fi</h3>
              <p className="mt-4 text-lg">The entire campus is equipped with high-speed Wi-Fi, ensuring that students and faculty can stay connected, access digital resources, and collaborate on projects with ease.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Explore Our Campus</h2>
            <p className="mt-4 text-lg">With world-class facilities and a focus on holistic student development, Trident Group of Institutions is the perfect place for aspiring professionals to grow and excel.</p>
            <a href="#contact" className="mt-8 inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-700">Get In Touch</a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
