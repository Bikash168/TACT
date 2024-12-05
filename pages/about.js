import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-teal-900 mb-6">About TACT</h2>
        <p className="text-lg text-gray-700">
          TACT is dedicated to providing quality education and training for future leaders. With a focus on innovation and excellence, we prepare students to meet the challenges of tomorrow.
        </p>
      </section>
    </>
  );
}
