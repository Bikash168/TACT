import Head from 'next/head';
import Layout from '../components/Layout';

export default function Training() {
  return (
    <Layout>
      <Head>
        <title>Training Programs - Trident Group of Institutions</title>
        <meta name="description" content="Explore the various training programs and workshops offered at Trident Group of Institutions to enhance your skills and knowledge." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-teal-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Training Programs</h1>
            <p className="mt-4 text-lg">Upskill and Reshape Your Future</p>
          </div>
        </section>

        {/* Training Overview */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Our Training Programs</h2>
          <p className="mt-4 text-center text-lg">
            At Trident Group of Institutions, we offer comprehensive training programs and workshops to enhance your skills across various domains.
            Our goal is to equip students and professionals with the practical knowledge necessary to excel in their careers.
          </p>
        </section>

        {/* Training Categories Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Featured Training Categories</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Technical Training</h3>
              <p className="mt-4 text-lg">Courses in software development, data science, AI, machine learning, and other technology-related fields.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Management Training</h3>
              <p className="mt-4 text-lg">Workshops in leadership, project management, marketing, and entrepreneurship to boost your managerial skills.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Soft Skills Development</h3>
              <p className="mt-4 text-lg">Improve communication, teamwork, and problem-solving skills through interactive training sessions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Industry Certifications</h3>
              <p className="mt-4 text-lg">Gain valuable certifications from industry leaders to enhance your professional credentials.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Entrepreneurship Training</h3>
              <p className="mt-4 text-lg">Learn the essentials of starting and running a successful business with guidance from experienced entrepreneurs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Environmental Sustainability</h3>
              <p className="mt-4 text-lg">Training on environmental policies, renewable energy, waste management, and sustainability practices for a green future.</p>
            </div>
          </div>
        </section>

        {/* Upcoming Training Events */}
        <section className="bg-teal-100 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Upcoming Training Events</h2>
          <p className="mt-4 text-center text-lg">
            Don't miss our upcoming training events designed to provide hands-on learning and networking opportunities.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Advanced Data Science Workshop</h3>
              <p className="mt-4 text-lg">A hands-on workshop for professionals looking to dive deep into data science concepts, tools, and techniques.</p>
              <span className="text-gray-500 mt-4">Date: December 10, 2024</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Leadership in Action Training</h3>
              <p className="mt-4 text-lg">An immersive leadership training program designed to refine decision-making and team management skills.</p>
              <span className="text-gray-500 mt-4">Date: December 15, 2024</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Entrepreneurship Essentials</h3>
              <p className="mt-4 text-lg">Learn key principles and strategies to start and grow your business successfully with expert mentorship.</p>
              <span className="text-gray-500 mt-4">Date: December 20, 2024</span>
            </div>
          </div>
        </section>

        {/* Industry Partnerships Section */}
        <section className="bg-teal-100 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Our Industry Partnerships</h2>
          <p className="mt-4 text-center text-lg">
            We have strong collaborations with leading industry partners, enabling students to gain valuable certifications, internships, and training, bridging the gap between academia and industry.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Cisco</h3>
              <p className="mt-4 text-lg">Certifications like CCNA to enhance networking skills and IT knowledge.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">TCS</h3>
              <p className="mt-4 text-lg">Industry-specific training programs like Cloud Bite to develop technical expertise.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">HP</h3>
              <p className="mt-4 text-lg">Certifications and training programs aimed at building core industry skills in students.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">What Our Trainees Say</h2>
          <div className="mt-6 flex flex-col items-center">
            <div className="bg-teal-100 p-6 rounded-lg shadow-md max-w-3xl">
              <p className="text-lg text-gray-700 italic">"The leadership training program was incredibly insightful. The skills I gained have helped me in both my career and personal growth. Highly recommended!"</p>
              <p className="mt-4 font-semibold text-teal-800">- Priya, Alumni</p>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow-md max-w-3xl mt-8">
              <p className="text-lg text-gray-700 italic">"The data science workshop offered real-world scenarios and practical tools, making it one of the most valuable training experiences I've had."</p>
              <p className="mt-4 font-semibold text-teal-800">- Arjun, Data Science Enthusiast</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
