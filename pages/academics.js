import Head from 'next/head';
import Layout from '../components/Layout';

export default function Academics() {
  return (
    <Layout>
      <Head>
        <title>Academics - Trident Group of Institutions</title>
        <meta name="description" content="Explore a range of academic programs at Trident Academy including engineering, management, biotechnology, and more." />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-teal-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Academics</h1>
            <p className="mt-4 text-lg">Explore Our Courses and Programs</p>
          </div>
        </section>

        {/* Engineering Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Engineering Programs</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">UG (B.Tech) Courses</h3>
              <ul className="mt-4 space-y-2 text-lg">
                <li>Biotechnology</li>
                <li>Civil Engineering</li>
                <li>Computer Science and Engineering</li>
                <li>Computer Science and Engineering (AI and ML)</li>
                <li>Computer Science and Engineering (Data Science)</li>
                <li>Computer Science and Technology</li>
                <li>Electrical and Electronics Engineering</li>
                <li>Electronics and Telecommunication Engineering</li>
                <li>Mechanical Engineering</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">PG (M.Tech) Courses</h3>
              <ul className="mt-4 space-y-2 text-lg">
                <li>Computer Science and Engineering</li>
                <li>Electronics and Telecommunication Engineering</li>
                <li>Data Science</li>
                <li>Electric Vehicle Technology</li>
                <li>Energy and Environmental Engineering</li>
                <li>Environmental Engineering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Management Section */}
        <section className="bg-white py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Management Programs</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">MBA Program</h3>
              <p className="mt-4 text-lg">
                Specializations: HR Management, Finance Management, Marketing Management, Systems Management, International Business, Sustainability Management, Innovation, Entrepreneurship, and Venture Development (IEV), Environmental Management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">BBA Program</h3>
              <p className="mt-4 text-lg">
                The BBA program is designed to provide foundational knowledge in management and is affiliated with Utkal University.
              </p>
            </div>
          </div>
        </section>

        {/* Biotechnology Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Biotechnology Programs</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">UG Courses</h3>
              <ul className="mt-4 space-y-2 text-lg">
                <li>B.Tech. Biotechnology</li>
                <li>B.Sc. (Hons) Biotechnology</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">PG Courses</h3>
              <ul className="mt-4 space-y-2 text-lg">
                <li>M.Sc. Biotechnology</li>
                <li>M.Sc. Applied Microbiology</li>
                <li>M.Sc. Bio-Informatics</li>
                <li>M.Sc. Environmental Science in Biotechnology</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trident Academy of Creative Technology Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Trident Academy of Creative Technology</h2>
          <p className="mt-6 text-lg text-center">
            Trident Academy of Creative Technology provides education designed to develop future leaders in today’s evolving world. The institute offers MBA and MCA programs under Biju Pattnaik University of Technology, known for their quality and comprehensive curriculum.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">Management Programs</h3>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-teal-800">BBA Program</h4>
                <p className="mt-2 text-lg">
                  The 4-year BBA program is affiliated with BPUT, covering areas such as leadership, marketing, finance, and entrepreneurship. It combines theoretical learning with practical skills.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-teal-800">MBA Program</h4>
                <p className="mt-2 text-lg">
                  The 2-year MBA program is approved by AICTE, affiliated with BPUT, and focuses on nurturing future leaders in business management, preparing students for industry demands.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-800">MCA Program</h3>
              <p className="mt-4 text-lg">
                The MCA program equips students with advanced knowledge in computer applications and technology, providing a comprehensive foundation for a career in IT.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
