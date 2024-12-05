import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10 pt-36">
          <h1 className="text-4xl font-bold mb-4">Welcome to TACT</h1>
          <p className="text-xl mb-6">Empowering the Leaders of Tomorrow</p>
          <button className="bg-teal-700 text-white px-6 py-3 rounded-full">Learn More</button>
        </div>
      </section>
    </>
  );
}
