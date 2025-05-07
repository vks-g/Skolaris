import React from 'react';
import Image from 'next/image';

const Feature = () => {
  const features = [
    {
      id: 1,
      icon: '/icons/male-teacher.svg',
      title: 'Expert Instructors',
      description: 'Learn from industry experts who are passionate about teaching and have years of real-world experience.',
    },
    {
      id: 2,
      icon: '/icons/certificate-icon.svg',
      title: 'Certificates',
      description: 'Earn certificates upon completion to showcase your newly acquired skills to potential employers.',
    },
    {
      id: 3,
      icon: '/icons/infinity-loop-icon.svg',
      title: 'Lifetime Access',
      description: 'Get unlimited access to course materials, updates, and community forums with a one-time payment.',
    },
    {
      id: 4,
      icon: '/icons/flexible.svg',
      title: 'Flexible Learning',
      description: 'Study at your own pace, anywhere and anytime, with our mobile-friendly platform.',
    },
  ];

  return (
    <section className="py-16 mb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold mb-4">Why Learn With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of our learning platform that makes us stand out from the rest and helps you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-68 pl-23 md:h-auto">
              <Image
                src="/images/statistics-graph.jpg"
                alt="Learning Statistics"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="p-3 flex flex-col justify-center">
              <h3 className="ml-4 pt-2 text-4xl text-black font-bold mb-4">Our Impact in Numbers</h3>
              
              <div className="p-3 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-black">500K+</div>
                  <p className="text-gray-600">Students Worldwide</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">1,000+</div>
                  <p className="text-gray-600">Expert Instructors</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">800+</div>
                  <p className="text-gray-600">High-Quality Courses</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">95%</div>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;