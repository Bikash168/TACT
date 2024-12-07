import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to Trident Academy</h1>
            <p className="text-lg mt-4">Empowering Education for a Brighter Future</p>
            <Link href="/admissions" className="mt-6 inline-block bg-teal-600 text-white font-bold py-3 px-6 rounded hover:bg-teal-700">
        Apply Now
      </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-teal-800">About Us</h2>
            <p className="mt-4 text-gray-700">
              Trident Academy of Creative Technology is a premier institute providing cutting-edge education and training in various fields, fostering innovation and creativity for students worldwide.
            </p>
            <Link href="/admissions" className="mt-6 inline-block bg-teal-600 text-white font-bold py-3 px-6 rounded hover:bg-teal-700">
        Apply Now
      </Link>
          </div>
          <Image src="/images/about-image.jpg" alt="About Us" width={500} height={400} className="rounded shadow-lg" />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800">Our Courses</h2>
          <p className="text-center text-gray-700 mt-2">Explore the wide range of courses we offer.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {['B.Tech', 'MBA', 'MCA'].map((course) => (
              <div key={course} className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-teal-800">{course}</h3>
                <p className="mt-2 text-gray-600">Comprehensive programs to help you excel in your career.</p>
                <Link href="/about" legacyBehavior>
        <a className="text-teal-600 font-bold hover:underline">Learn More</a>
      </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
