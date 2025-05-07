import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Skolaris
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Collaborate, Innovate, and Grow Together.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/signup"
            className="bg-black hover:bg-white hover:text-black hover:border border-black text-white  py-2 px-4 rounded"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="bg-transparent border border-black hover:bg-black hover:text-white text-black  py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
