import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Gray Matter Guild
        </Link>
        <nav className="space-x-4">
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/signup" className="hover:underline">
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
