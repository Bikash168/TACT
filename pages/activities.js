import Head from 'next/head';
import Layout from '../components/Layout';

export default function Activities() {
  return (
    <Layout>
      <Head>
        <title>Campus Activities - Trident Group of Institutions</title>
        <meta name="description" content="Discover the vibrant campus activities at Trident Group of Institutions, including workshops, sports, cultural events, and student clubs." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-teal-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Campus Activities</h1>
            <p className="mt-4 text-lg">Engage, Innovate, and Excel</p>
          </div>
        </section>

        {/* Activities Overview */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Our Campus Activities</h2>
          <p className="mt-4 text-center text-lg">
            Trident Group of Institutions offers a wide range of extracurricular activities designed to foster creativity, innovation, and leadership.
            From academic seminars to cultural events, students have endless opportunities to learn and grow.
          </p>
        </section>

        {/* Key Activities Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Featured Activities</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Workshops and Seminars</h3>
              <p className="mt-4 text-lg">Interactive sessions led by industry experts to enhance practical knowledge and skillsets in various fields.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Cultural Events</h3>
              <p className="mt-4 text-lg">Celebrate the diversity and talents of students through annual cultural festivals, music, dance, and drama performances.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Sports Activities</h3>
              <p className="mt-4 text-lg">Promote fitness and teamwork through a variety of sports events and activities, from cricket to football to athletics.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Student Clubs</h3>
              <p className="mt-4 text-lg">Students can join a variety of clubs including tech clubs, music bands, drama societies, and environmental groups.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Conferences</h3>
              <p className="mt-4 text-lg">Participate in national and international conferences focused on academic, technological, and social topics.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Entrepreneurship and Innovation</h3>
              <p className="mt-4 text-lg">A platform for aspiring entrepreneurs to learn, network, and showcase innovative ideas through competitions and mentorship programs.</p>
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="bg-teal-100 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Annual Events</h2>
          <p className="mt-4 text-center text-lg">
            Every year, our campus hosts a variety of major events that bring together students, faculty, and professionals.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">TechFest</h3>
              <p className="mt-4 text-lg">A celebration of technology and innovation, featuring hackathons, coding competitions, and tech talks.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Cultural Fest</h3>
              <p className="mt-4 text-lg">A vibrant showcase of cultural performances, traditional dance, music, and art exhibitions from around the world.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Sports Meet</h3>
              <p className="mt-4 text-lg">An exciting event where students compete in a range of athletic activities, fostering sportsmanship and team spirit.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Student Testimonials</h2>
          <div className="mt-6 flex flex-col items-center">
            <div className="bg-teal-100 p-6 rounded-lg shadow-md max-w-3xl">
              <p className="text-lg text-gray-700 italic">"The variety of activities at Trident not only helps us develop our professional skills but also lets us explore our interests and passions. From technical workshops to cultural events, there's something for everyone!"</p>
              <p className="mt-4 font-semibold text-teal-800">- Aditi, Final Year Student</p>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow-md max-w-3xl mt-8">
              <p className="text-lg text-gray-700 italic">"Participating in the annual sports meet and cultural fest gave me a chance to work with students from various disciplines. It’s an amazing experience that I look forward to every year."</p>
              <p className="mt-4 font-semibold text-teal-800">- Rohan, Second Year Student</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
