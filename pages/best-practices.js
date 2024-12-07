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
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Our Best Practices</h1>
            <p className="mt-4 text-lg">A Guideline to Success, Quality, and Excellence</p>
          </div>
        </section>

        {/* Best Practices Overview */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Why Best Practices Matter</h2>
          <p className="mt-4 text-center text-lg">
            At Trident Group of Institutions, we emphasize the importance of adhering to best practices in every aspect of our academic and administrative activities. By implementing the right practices, we ensure a high standard of quality and foster an environment of continuous learning and improvement.
          </p>
        </section>

        {/* Best Practices Sections */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Our Core Best Practices</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Best Practice 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Continuous Improvement</h3>
              <p className="mt-4 text-lg">We are committed to constantly improving our processes, ensuring that our students and staff are equipped with the latest knowledge and skills to excel in their respective fields.</p>
            </div>

            {/* Best Practice 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Student-Centered Learning</h3>
              <p className="mt-4 text-lg">We place the students at the center of our learning processes. Tailoring our approach to meet the diverse learning needs of students fosters engagement and enhances their educational experience.</p>
            </div>

            {/* Best Practice 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Collaboration and Teamwork</h3>
              <p className="mt-4 text-lg">We promote teamwork and collaboration among faculty, students, and industry partners to create a thriving ecosystem for innovation and knowledge sharing.</p>
            </div>

            {/* Best Practice 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Sustainability and Responsibility</h3>
              <p className="mt-4 text-lg">Our commitment to sustainability is reflected in our actions. We focus on creating an environmentally responsible campus and empowering students to take proactive steps for a greener future.</p>
            </div>

            {/* Best Practice 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Innovation and Research</h3>
              <p className="mt-4 text-lg">We foster an environment that encourages innovation and research, enabling students and faculty to explore new ideas and contribute to solving real-world challenges.</p>
            </div>

            {/* Best Practice 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Industry Partnerships</h3>
              <p className="mt-4 text-lg">Strong relationships with industry leaders allow us to offer students opportunities for internships, projects, and placements, helping them develop practical skills and industry-ready knowledge.</p>
            </div>
          </div>
        </section>

        {/* Implementation of Best Practices */}
        <section className="container mx-auto py-12 px-6 md:px-12 bg-indigo-100">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Implementing Best Practices Across Departments</h2>
          <p className="mt-4 text-center text-lg">Our best practices are ingrained in the operations of every department and administrative unit within the institution. These practices are consistently followed to ensure the highest standards in teaching, research, administration, and student services.</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Department 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Academic Excellence</h3>
              <p className="mt-4 text-lg">We ensure academic excellence by maintaining a robust curriculum, offering rigorous assessments, and continuously enhancing teaching methods to meet global standards.</p>
            </div>

            {/* Department 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Student Welfare and Support</h3>
              <p className="mt-4 text-lg">Our student welfare department implements best practices in mentoring, career counseling, and mental health support to ensure the well-being of all students.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Join Us in Upholding the Best Practices</h2>
            <p className="mt-4 text-lg">We believe in creating an ecosystem where everyone contributes to excellence. Together, we can make a lasting impact on education, research, and community development.</p>
            <a href="#contact" className="mt-8 inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-700">Get Involved</a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
