const features = [
    {
      title: 'Collaborative Projects',
      description: 'Work together seamlessly with team members across the globe.',
    },
    {
      title: 'Knowledge Sharing',
      description: 'Share insights and learn from the community.',
    },
    {
      title: 'Skill Development',
      description: 'Enhance your skills through real-world projects.',
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Features
          </h2>
          <div className="flex flex-wrap -mx-4">
            {features.map((feature, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  