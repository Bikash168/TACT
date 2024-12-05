import Header from '../components/Header';

export default function Academics() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-teal-900 mb-6">Academics</h2>
        <p className="text-lg text-gray-700">
          Explore our wide range of courses designed to shape the future of the industry. Our curriculum combines theoretical knowledge with practical application.
        </p>
        {/* Add Courses and Program Details */}
      </section>
    </>
  );
}
