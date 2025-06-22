import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Star, CheckCircle } from 'lucide-react';
import { serviceData } from '../data/serviceData.js';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(serviceData.fleetCategories[0].id);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeCategory]);

  const activeFleet = serviceData.fleetCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 style={{textShadow : "0 1px 1px rgb(255 255 255 / 100%)"}} className="text-6xl font-bold mb-8  gradient-text">
              {serviceData.overview.title}
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-2xl mb-8 max-w-4xl mx-auto opacity-90 text-shadow leading-relaxed">
              {serviceData.overview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.overview.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover-3d card-3d text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 style={{lineHeight: "normal"}} className="text-5xl font-bold text-gray-900 mb-2 gradient-text">
              Our Fleet Categories
            </h2>
            <p className="text-xl text-gray-600">Choose from our comprehensive range of vehicles</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-16 gap-4 animate-on-scroll">
            {serviceData.fleetCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl animate-pulse-glow'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover-lift'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          {activeFleet && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
                <div>
                  <h3 style={{lineHeight: "normal"}} className="text-4xl font-bold text-gray-900 mb-4 gradient-text">
                    {activeFleet.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {activeFleet.description}
                  </p>
                </div>
                <div className="relative animate-on-scroll">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-lg"></div>
                  <img
                    src={activeFleet.image}
                    alt={activeFleet.title}
                    className="relative rounded-2xl shadow-2xl w-full h-80 object-cover hover-tilt transition-all duration-700"
                  />
                </div>
              </div>

              {/* Vehicle Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {activeFleet.vehicles.map((vehicle, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-2xl shadow-xl hover-3d card-3d overflow-hidden animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-bold text-gray-900">{vehicle.name}</h4>
                        <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold">
                          {vehicle.capacity}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {vehicle.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-gray-600">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <div className="text-sm text-gray-500 font-medium">Hourly</div>
                            <div className="font-bold text-blue-600 text-lg">{vehicle.hourlyRate}</div>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <div className="text-sm text-gray-500 font-medium">Daily</div>
                            <div className="font-bold text-blue-600 text-lg">{vehicle.dailyRate}</div>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <div className="text-sm text-gray-500 font-medium">Weekly</div>
                            <div className="font-bold text-blue-600 text-lg">{vehicle.weeklyRate}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 style={{lineHeight: "normal"}} className="text-5xl font-bold text-gray-900 mb-2 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {serviceData.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="font-bold text-gray-900 text-lg pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-6 w-6 text-blue-600" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;