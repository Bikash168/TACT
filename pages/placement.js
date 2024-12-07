import Head from 'next/head';
import Layout from '../components/Layout';

export default function Placement() {
  return (
    <Layout>
      <Head>
        <title>Placement Cell - Trident Group of Institutions</title>
        <meta name="description" content="Explore the placement opportunities and statistics for students at Trident Group of Institutions." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Placement Opportunities</h1>
            <p className="mt-4 text-lg">Empowering Students for a Successful Career</p>
          </div>
        </section>

        {/* Placement Overview */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Our Placement Process</h2>
          <p className="mt-4 text-center text-lg">
            The Placement Cell at Trident Group of Institutions strives to bridge the gap between academia and industry. Our objective is to provide students with the necessary support to secure placements in reputed organizations across diverse sectors.
          </p>
        </section>

        {/* Placement Process Steps */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Placement Process</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 1: Registration</h3>
              <p className="mt-4 text-lg">Students must register with the Placement Cell to be considered for campus recruitment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 2: Skill Development</h3>
              <p className="mt-4 text-lg">We offer various pre-placement training programs focused on resume building, interview preparation, and technical skills enhancement.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 3: Campus Interviews</h3>
              <p className="mt-4 text-lg">Companies conduct interviews on campus, with a chance to meet prospective employers and discuss opportunities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 4: Offer and Placement</h3>
              <p className="mt-4 text-lg">Students who perform well in the interview process receive job offers and are placed with leading companies.</p>
            </div>
          </div>
        </section>

        {/* Placement Statistics */}
        <section className="bg-indigo-100 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Placement Statistics</h2>
          <p className="mt-4 text-center text-lg">Our placement records highlight the strong connections we have with top companies and industries. We are committed to providing our students with excellent career opportunities.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-indigo-800">90%</h3>
              <p className="mt-4 text-lg">Placement Rate</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-indigo-800">50+</h3>
              <p className="mt-4 text-lg">Top Recruiters</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-indigo-800">5 LPA</h3>
              <p className="mt-4 text-lg">Average Salary</p>
            </div>
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Top Recruiters</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex justify-center items-center">
              <img src="/images/recruiter1.png" alt="Recruiter 1" className="h-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/images/recruiter2.png" alt="Recruiter 2" className="h-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/images/recruiter3.png" alt="Recruiter 3" className="h-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/images/recruiter4.png" alt="Recruiter 4" className="h-12" />
            </div>
            {/* Add more recruiter logos here */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto py-12 px-6 md:px-12 bg-indigo-100">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">What Our Placed Students Say</h2>
          <div className="mt-6 flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl">
              <p className="text-lg text-gray-700 italic">"The placement process at Trident was seamless. The career services team helped me refine my skills and connected me with top recruiters, leading to a fantastic job offer!"</p>
              <p className="mt-4 font-semibold text-indigo-800">- Anjali Sharma, Software Engineer at XYZ Corp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mt-8">
              <p className="text-lg text-gray-700 italic">"Thanks to the placement cell, I secured a job in my dream company. The training and support during the placement process were incredibly helpful!"</p>
              <p className="mt-4 font-semibold text-indigo-800">- Rajesh Kumar, Marketing Manager at ABC Ltd.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
