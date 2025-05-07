import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContinueLearning = () => {
  const courses = [
    {
      id: 1,
      title: 'UI/UX Design Fundamentals',
      image: '/images/ui-ux.jpg',
      progress: 75,
      instructor: 'Sarah Johnson',
      timeLeft: '2h 15m left',
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      image: '/images/web-developments.webp',
      progress: 45,
      instructor: 'John Smith',
      timeLeft: '4h 30m left',
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      image: '/images/Data-science.jpg',
      progress: 60,
      instructor: 'Michael Chen',
      timeLeft: '3h 45m left',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl text-black font-bold">Continue Learning</h2>
          <Link href="/my-courses" className="text-black font-medium hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md">
              <div className="relative h-48 text-black w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-lg text-black font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">Instructor: {course.instructor}</p>
                
                <div className="mb-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-black h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-600">{course.progress}% complete</span>
                    <span className="text-sm text-gray-600">{course.timeLeft}</span>
                  </div>
                </div>
                
                <Link href={`/course/${course.id}`} className="block text-center bg-black hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Continue
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinueLearning;