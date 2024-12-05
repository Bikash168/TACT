import Header from '../components/Header';

export default function Admissions() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-teal-900 mb-6">Admissions</h2>
        <p className="text-lg text-gray-700">
          We welcome students from all backgrounds to join our community. Explore our admission process and how you can become a part of TACT.
        </p>
        {/* Admission Form or Process Information */}
      </section>
    </>
  );
}
