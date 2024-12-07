// pages/about.js
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>


      <Head>
        <title>About - Trident Group of Institutions</title>
        <meta name="description" content="Explore a range of academic programs at Trident Academy including engineering, management, biotechnology, and more." />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-teal-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-lg">Learn more about Trident Academy of Creative Technology</p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-teal-800">Our Mission</h2>
              <p className="mt-4 text-lg">
                Trident Academy of Creative Technology aims to be a leader in offering quality education in creative technologies
                while fostering innovation, leadership, and sustainability among students. We believe in providing our students with
                the knowledge and skills they need to excel in their chosen fields.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-teal-800">Our Vision</h2>
              <p className="mt-4 text-lg">
                Our vision is to create a holistic learning environment where creativity meets technology, ensuring that our students
                are empowered to meet global challenges in the ever-evolving landscape of education and technology.
              </p>
            </div>
          </div>
        </section>

        {/* About the Institution */}
        <section className="bg-white py-12 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-teal-800">About Trident Academy</h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto">
              Trident Academy of Creative Technology (TACT) is an institution of higher learning, committed to academic excellence and
              a holistic approach to education. Located in Bhubaneswar, Odisha, we offer cutting-edge education in fields such as
              engineering, management, and design, preparing students for success in the modern world.
            </p>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="container mx-auto py-12 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-800 text-center">Our Faculty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* Repeat this block for each faculty member */}
            <div className="text-center">
              <Image
                src="/faculty-image.jpg" // Replace with actual image
                alt="Faculty Member"
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl mt-4 font-semibold">Dr. John Doe</h3>
              <p className="mt-2">Professor of Engineering</p>
            </div>
            {/* More Faculty Members */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-teal-800 text-white py-12 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="mt-4 text-lg">For more information about our courses, events, and opportunities, feel free to contact us.</p>
            <Link href="/contact" className="mt-6 inline-block bg-yellow-400 text-teal-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
