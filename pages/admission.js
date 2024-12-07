import Head from 'next/head';
import Layout from '../components/Layout';

export default function Admission() {
  return (
    <Layout>
      <Head>
        <title>Admissions - Trident Group of Institutions</title>
        <meta name="description" content="Learn about the admission process, eligibility criteria, and key dates for applying to Trident Group of Institutions. Start your academic journey with us." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 text-gray-800">

        {/* Hero Section */}
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Admissions</h1>
            <p className="mt-4 text-lg">Embark on Your Academic Journey with Trident Group of Institutions</p>
          </div>
        </section>

        {/* Admission Overview */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Admission Process</h2>
          <p className="mt-4 text-center text-lg">
            Trident Group of Institutions offers a range of undergraduate and postgraduate programs across multiple disciplines. Our admission process is designed to be simple, transparent, and student-friendly. Below, you'll find the key steps to apply for the program of your choice.
          </p>
        </section>

        {/* Admission Steps */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Steps to Apply</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 1: Choose Your Program</h3>
              <p className="mt-4 text-lg">Browse through our diverse range of undergraduate and postgraduate programs. Choose the one that best aligns with your career aspirations and academic interests.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 2: Check Eligibility</h3>
              <p className="mt-4 text-lg">Ensure that you meet the eligibility criteria for the chosen program. This includes academic qualifications, entrance exam scores (if applicable), and other specific requirements.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 3: Fill the Application Form</h3>
              <p className="mt-4 text-lg">Complete the online application form with accurate details. Make sure to upload all necessary documents such as mark sheets, certificates, and photo ID.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 4: Entrance Test & Interview</h3>
              <p className="mt-4 text-lg">For some programs, there may be an entrance test or interview. Prepare accordingly and attend the test/interview as per the schedule provided.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 5: Admission Confirmation</h3>
              <p className="mt-4 text-lg">If selected, you will receive an admission letter. Confirm your admission by paying the necessary fees and completing any remaining formalities.</p>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-800">Step 6: Orientation and Classes</h3>
              <p className="mt-4 text-lg">After confirmation, attend the orientation program to get acquainted with the campus, faculty, and resources. Classes will begin according to the academic calendar.</p>
            </div>

          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="bg-gray-100 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Eligibility Criteria</h2>
          <p className="mt-4 text-center text-lg">
            To ensure a smooth admission process, please check the eligibility criteria for your desired program. Below are the general requirements for various programs:
          </p>

          {/* Undergraduate */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-indigo-800">Undergraduate Programs (B.Tech, BBA, etc.)</h3>
            <ul className="list-disc pl-6 mt-4 text-lg">
              <li>10+2 or equivalent in relevant stream (Science/Arts/Commerce)</li>
              <li>Minimum aggregate marks as per program requirements</li>
              <li>Valid entrance exam scores (JEE for B.Tech, etc.)</li>
            </ul>
          </div>

          {/* Postgraduate */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-indigo-800">Postgraduate Programs (M.Tech, MBA, etc.)</h3>
            <ul className="list-disc pl-6 mt-4 text-lg">
              <li>Bachelor's degree in the relevant discipline from a recognized university</li>
              <li>Minimum aggregate marks as per program requirements</li>
              <li>Valid GATE score (for M.Tech) or CAT/CMAT/other exam scores (for MBA)</li>
            </ul>
          </div>
        </section>

        {/* Important Dates */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-indigo-800 text-center">Important Dates</h2>
          <p className="mt-4 text-center text-lg">Stay updated with key admission dates to ensure timely submission of your application:</p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-indigo-800">Application Start Date</h3>
            <p className="mt-4 text-lg">1st March 2024</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-indigo-800">Application Deadline</h3>
            <p className="mt-4 text-lg">30th June 2024</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-indigo-800">Entrance Test Date</h3>
            <p className="mt-4 text-lg">5th July 2024</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-indigo-800">Interview Date (if applicable)</h3>
            <p className="mt-4 text-lg">10th July 2024</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-indigo-800">Admission Confirmation Date</h3>
            <p className="mt-4 text-lg">15th July 2024</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Ready to Apply?</h2>
            <p className="mt-4 text-lg">If you're excited to start your academic journey with Trident Group of Institutions, don't wait! Submit your application now and take the first step toward a successful future.</p>
            <a href="/apply" className="mt-8 inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-700">Apply Now</a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
