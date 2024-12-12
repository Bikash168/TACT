import Head from 'next/head';
import Layout from '../components/Layout';

export default function BestPractices() {
  return (
    <Layout>
      <Head>
        <title>Best Practices - Trident Group of Institutions</title>
        <meta name="description" content="Discover the best practices followed at Trident Group of Institutions to ensure success, quality, and excellence." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-teal-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Our Best Practices</h1>
            <p className="mt-4 text-lg">A Guideline to Success, Quality, and Excellence</p>
          </div>
        </section>

        {/* Best Practices Overview */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Why Best Practices Matter</h2>
          <p className="mt-4 text-center text-lg">
            At Trident Academy of Creative Technology, we emphasize the importance of adhering to best practices in every aspect of our academic and administrative activities. By implementing the right practices, we ensure a high standard of quality and foster an environment of continuous learning and improvement.
          </p>
        </section>

        {/* Key Best Practices */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Our Core Best Practices</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Key Best Practices Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Lectures Accessible on Intranet</h3>
              <p className="mt-4 text-lg">Lectures are made accessible to students on the intranet after classroom sessions, ensuring that learning is available for review and reinforcement anytime.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Multimedia Tools in Learning</h3>
              <p className="mt-4 text-lg">We integrate multimedia tools into teaching to enhance the learning experience, making lessons more engaging and accessible.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Advance Semester Schedules</h3>
              <p className="mt-4 text-lg">Students receive the semester schedule in advance, allowing them to plan their academic and extracurricular activities effectively.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Summer Training Programs</h3>
              <p className="mt-4 text-lg">We focus on skill enhancement by offering summer training programs that provide hands-on experience in various industries and technologies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Mentoring and Career Counseling</h3>
              <p className="mt-4 text-lg">Regular mentoring and career counseling sessions are conducted to support students in their personal development and career planning.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Parent-Teacher Meetings</h3>
              <p className="mt-4 text-lg">Meetings between parents and teachers are organized to discuss student progress, fostering a collaborative approach to student development.</p>
            </div>
          </div>
        </section>

        {/* Quality Practices Section */}
        <section className="container mx-auto py-12 px-6 md:px-12 bg-teal-100">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Quality Practices at TACT</h2>
          <p className="mt-4 text-center text-lg">
            Trident Academy of Creative Technology is dedicated to upholding quality education and sustainable growth through advanced infrastructure, professional training, and research contributions. We emphasize the holistic development of students.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quality Practices Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Compliance with Academic Calendar</h3>
              <p className="mt-4 text-lg">TACT strictly adheres to the academic calendar set by Biju Patnaik University of Technology (BPUT), ensuring smooth execution of all academic and extracurricular activities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Diverse Teaching Methods</h3>
              <p className="mt-4 text-lg">We use a variety of teaching methods including traditional lecturing, visual presentations, practical laboratory work, and collaborative projects to enhance learning.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Support for All Students</h3>
              <p className="mt-4 text-lg">We provide targeted support for both struggling and high-performing students through mentoring, personalized guidance, and performance enhancement plans.</p>
            </div>
          </div>
        </section>

        {/* Execution of Best Practices Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Execution of Best Practices Across Departments</h2>
          <p className="mt-4 text-center text-lg">TACT's commitment to quality extends across all departments. Peer audits, continuous feedback, and Six Sigma practices ensure sustained improvements in all areas.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Peer Audits</h3>
              <p className="mt-4 text-lg">Senior faculty from other institutions conduct peer audits to evaluate labs, workshops, and libraries, leading to constructive feedback and improvements.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Six Sigma Practices</h3>
              <p className="mt-4 text-lg">TACT has implemented Six Sigma practices since 2014 to improve processes, reduce errors, and maintain high academic and administrative standards.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-teal-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Join Us in Upholding the Best Practices</h2>
            <p className="mt-4 text-lg">We believe in creating an ecosystem where everyone contributes to excellence. Together, we can make a lasting impact on education, research, and community development.</p>
            <a href="#contact" className="mt-8 inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg hover:bg-teal-700">Get Involved</a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
