import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BrowseCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Design',
      icon: '/icons/design.svg',
      courses: '25+ Courses',
      
    },
    {
      id: 2,
      title: 'Development',
      icon: '/icons/development.svg',
      courses: '40+ Courses'
    },
    {
      id: 3,
      title: 'Marketing',
      icon: '/icons/marketing.svg',
      courses: '18+ Courses'
    },
    {
      id: 4,
      title: 'Business',
      icon: '/icons/business.svg',
      courses: '30+ Courses'
    },
    {
      id: 5,
      title: 'Photography',
      icon: '/icons/photography.svg',
      courses: '15+ Courses'
    },
    {
      id: 6,
      title: 'Music',
      icon: '/icons/music.svg',
      courses: '20+ Courses',
      
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold mb-4">Browse Top Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses across different categories to find what interests you the most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.title.toLowerCase()}`} key={category.id}>
              <div className='bg-black rounded-lg p-6 text-center transition-transform hover:scale-105 cursor-pointer'>
                {/* <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div> */}
                <h3 className="font-semibold text-white text-lg mb-1">{category.title}</h3>
                <p className="text-white text-sm">{category.courses}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;