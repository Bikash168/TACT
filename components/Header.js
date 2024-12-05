import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-teal-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="Tact Logo" className="h-12" />
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {/* Add Mobile Menu Icon here */}
      </div>
    </header>
  );
}
