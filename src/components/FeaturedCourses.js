"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Design', 'Development', 'Marketing', 'Business'];
  
  const courses = [
    {
      id: 1,
      title: 'Advanced UI/UX Design Principles',
      category: 'Design',
      image: '/images/advanced-ui-ux.avif',
      instructor: 'Emma Wilson',
      rating: 4.9,
      students: 3245,
      price: 1089.99,
      originalPrice: 1129.99,
    },
    {
      id: 2,
      title: 'React.js for Beginners to Advanced',
      category: 'Development',
      image: '/images/react-js-course.png',
      instructor: 'David Lee',
      rating: 4.8,
      students: 5621,
      price: 2094.99,
      originalPrice: 2149.99,
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      category: 'Marketing',
      image: '/images/digital-marketing.jpg',
      instructor: 'Jessica Brown',
      rating: 4.7,
      students: 2870,
      price: 1279.99,
      originalPrice: 1419.99,
    },
    {
      id: 4,
      title: 'Entrepreneurship 101',
      category: 'Business',
      image: '/images/entrepreneurship.jpg',
      instructor: 'Robert Miller',
      rating: 4.8,
      students: 3750,
      price: 999.99,
      originalPrice: 759.99,
    },
    {
      id: 5,
      title: 'Python for Data Science',
      category: 'Development',
      image: '/images/python-data.jpg',
      instructor: 'Andrew Thompson',
      rating: 4.9,
      students: 6120,
      price: 1109.99,
      originalPrice: 1769.99,
    },
    {
      id: 6,
      title: 'Graphic Design Fundamentals',
      category: 'Design',
      image: '/images/graphic-design.jpg',
      instructor: 'Sophia Martinez',
      rating: 4.7,
      students: 2560,
      price: 3274.99,
      originalPrice: 3709.99,
    },
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expand your knowledge with our most popular courses. Join thousands of students who are already learning with us.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 rounded text-xs font-medium">
                  {course.category}
                </div>
              </div>
              
              <div className="p-5">
                <Link href={`/course/${course.id}`}>
                  <h3 className="text-lg text-black font-semibold mb-2 hover:text-blue-600">{course.title}</h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3">By {course.instructor}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm ml-2 text-gray-600">{course.rating} ({course.students} students)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-black">₹{course.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{course.originalPrice}</span>
                  </div>
                  <Link href={`/course/${course.id}`} className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/courses" className="inline-block bg-white border border-black text-black hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition-colors">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;